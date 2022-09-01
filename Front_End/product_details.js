$(document).ready(function () {
    var url = "http://localhost:2000/api//viewdetails";
    var count = 1;
    $.ajax({
      dataType: "json",
      url: url,
      success: function (datas) {
        var result = "";
        datas.data.forEach((item) => {
          const {
            customer_first_name,
            customer_last_name,
            Email_id ,
            product_name,
            customer_id,
            status,
            customer_age,
          } = item;
          result += `
                  <tr>
                      <td>${count}</td>
                      <td>${customer_first_name}</td>
                      <td>${customer_last_name}</td>
                      <td>${Email_id}</td>
                    <td>
                      <a data-bs-toggle="modal"
                      data-bs-target="#exampleModal2" class="view" 
                      data-name="${product_name}" data-customerid="${customer_id}" data-status="${status}"
                      data-age="${customer_age}" title="View" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                      
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
        $("#v_customer").val($(this).data("customerid"));
        $("#v_product").val($(this).data("product_name"));
        $("#v_status").val($(this).data("status"));
        $("#v_age").val($(this).data("customer_age"));
    });
})