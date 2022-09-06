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
        const {
          ID,
          customer_first_name,
          customer_last_name,
          Email_id,
          product_name,
          product_price,
          product_quantity,
          deliver_status,
        } = item;
        result += `
                  <tr>
                      <td>${count}</td>
                      <td>${customer_first_name} ${customer_last_name}</td>
                      <td>${Email_id}</td>
                    <td>
                      <a data-bs-toggle="modal"
                      data-bs-target="#exampleModal2" class="view" data-id="${ID}" 
                      title="View" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                      <a data-bs-toggle="modal"
                    data-bs-target="#exampleModal1" class="edit" data-id="${ID}" data-name="${product_name}"
                    data-price="${product_price}" data-deliver="${deliver_status}" data-quantity="${product_quantity}"
                    title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
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


// dropdown for each // 
 var url4 = "http://localhost:2000/api//productstatus";
  $.ajax({
    dataType: "json",
    url: url4,
    success: function (datas) {
      var results = "";
      datas.data.forEach((item) => {
        const {
          current_status,
        } = item;
        results += `
                  <option value="${current_status}">${current_status}</option>
                  `;
      });
     
      $("#select").append(results);
      
    },
  });
// dropdown for each // 


  $(document).on("click", ".edit", function () {
    $("#u_customerid").val($(this).data("id"));
    $("#u_name").val($(this).data("name"));
    $("#u_price").val($(this).data("price"));
    $("#select").val($(this).data("deliver"));
  });

  //User Update Submit Button Ajax Call Starts//
  $("#updateform").on("submit", function (e) {
    e.preventDefault();
    var update_customer_id = $("#u_customerid").val();
    var update_product_name = $("#u_name").val();
    var update_productprice = $("#u_price").val();
    var update_deliverstatus = $("#select").val();
    var url2 = "http://localhost:2000/api//updateproductdetails";
    if (
      update_customer_id != "" &&
      update_product_name != "" &&
      update_productprice != "" &&
      update_deliverstatus != ""
    ) {
      var update_result = JSON.stringify({
        ID: update_customer_id,
        product_name: update_product_name,
        Product_price: update_productprice,
        status: update_deliverstatus,
      });
      console.log(update_result);
      $.ajax({
        url: url2,
        data: update_result,
        method: "PUT",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
        },
        success: function (response) {
          let string = "";
          for (const [key, value] of Object.entries(response)) {
            string += `${value}\n`;
          }
          alert(string);
          location.reload(true);
        },
        error: function () {
          alert("Something Went Wrong");
        },
      });
    } else {
      alert("Please Provide All The Information!");
    }
  });
  // user edit ajax call ends //

  // search user starts//
  $("#search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#table tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
  // search user ends //
});
