$(document).ready(function () {
  var url = "http://localhost:2000/api//viewdetails";
  var count = 1;
  var received;
  $.ajax({
    dataType: "json",
    url: url,
    success: function (datas) {
      var result = "";
      received = datas;
      datas.data.forEach((item) => {
        const { ID, customer_first_name, customer_last_name, Email_id } = item;
        result += `
                  <tr>
                      <td>${count}</td>
                      <td>${customer_first_name} ${customer_last_name}</td>
                      <td>${Email_id}</td>
                    <td>
                      <a data-bs-toggle="modal"
                      data-bs-target="#exampleModal2" class="view" data-id="${ID}"
                      title="View" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                    </td>
                      </tr>
                      ${count++}
                    `;
      });
      if (result.length == 0) {
        $("#table").html(
          '<tr class="norecords"><td colspan="8">No Records Found</td></tr>'
        );
      } else {
        $("#table").append(result);
      }
    },
  });

  $(document).on("click", ".view", function () {
    var customer_id = $(this).data("id");
    var customer_data = received.data.filter(
      (object) => object.ID == customer_id
    );
    $("#v_customer").text(customer_data[0].ID);
    $("#v_product").text(customer_data[0].product_name);
    $("#v_status").text(customer_data[0].deliver_status);
    $("#v_price").text(customer_data[0].product_price);
    
  });

   // search user starts//
   $("#search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#table tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
  // search user ends //
});
