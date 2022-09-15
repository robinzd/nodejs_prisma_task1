$(document).ready(function () {
  // get products //
  var url = "http://localhost:2000/api//getcart";
  var pro1;
  $.ajax({
    dataType: "json",
    url: url,
    success: function (datas) {
    var cartproducts = "";
   datas.data.forEach((item) => {
        const {
          id,
          product_id,
          product_name,
          product_price,
          product_quantity,
          product_image,
          product_original_price,
        } = item;

        cartproducts += `
         <div class="card rounded-3 mb-4">
          <div class="card-body p-4">
            <div
              class="row d-flex justify-content-between align-items-center"
            >
              <div class="col-md-2 col-lg-2 col-xl-2">
                <img
                  src="../images/${product_image}"
                  class="img-fluid rounded-3"
                  alt=""
                />
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3">
                <p class="lead fw-normal mb-2">${product_name}</p>
               </div>
              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button
                  class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                >
                  <i class="fa fa-minus"></i>
                </button>
                <input
                  id="form_${product_id}"
                  min="0"
                  name="quantity"
                  value="${product_quantity}"
                  type="number"
                  class="form-control form-control-sm" 
                />
                <button
                  class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                >
                <i class="fa fa-plus"></i>
                </button>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 class="mb-0">₹${product_price}</h5>
              </div>
              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
              <a data-id="${product_id}" data-price="${product_original_price}" data-cartprice="${product_price}" class="text-success edit" 
                ><i class="fa fa-edit fa-lg"></i
              ></a>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a  data-id1="${id}" class="text-danger delete"
                  ><i class="fa fa-trash fa-lg"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      `;
    //  var prices=product_price
    //   pro1=prices;
    //   console.log(pro1);
    });
     $("#cart").append(cartproducts);
    },
  });
 
console.log(pro1);

// Update Cart
  $(document).on("click", ".edit", function () {
    var product_id = $(this).data("id");
    var product_price = $(this).data("price");
    var quantity=$("#form_"+product_id).val();
    var final_price = quantity * product_price;
    var url1 = "http://localhost:2000/api//updatecart";
    var update_cart = JSON.stringify({
      product_id: product_id,
      product_price_cart: final_price,
      product_quantity_cart: quantity,
    });
  $.ajax({
      url: url1,
      data: update_cart,
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
      error:function(response){
        alert(response);
      }
    });
  });
  //  Update Cart //


  //  delete products //
  $(document).on("click", ".delete", function () {
    var deleteid = $(this).data("id1");
    var url3 = "http://localhost:2000/api//deleteproducts";
    var delete_result = JSON.stringify({
      id: deleteid,
    });
  $.ajax({
      url: url3,
      data: delete_result,
      method: "DELETE",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      success: function (response) {
        let deleterow = "";
        for (const [key, value] of Object.entries(response)) {
          deleterow += `${value}\n`;
        }
        confirm("Sure You Want To Delete This Product");
        alert(deleterow);
        location.reload(true);
      },
      error: function () {
      alert("Something Went Wrong");
      },
    });
  });
  // delete products//
});



