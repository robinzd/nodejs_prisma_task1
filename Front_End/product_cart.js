$(document).ready(function () {
  // get products //
  var url = "http://localhost:2000/api//getcart";
  $.ajax({
    dataType: "json",
    url: url,
    success: function (datas) {
      console.log(datas);
      var cartproducts = "";
      datas.data.forEach((item) => {
        const {
          product_id,
          product_name,
          product_price_cart,
          product_quantity_cart,
          product_image,
          product_price,
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
                  id="form1"
                  min="0"
                  name="quantity"
                  value="${product_quantity_cart}"
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
                <h5 class="mb-0">₹${product_price_cart}</h5>
              </div>
              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
              <a data-id="${product_id}" data-price="${product_price}" data-quantity="${product_quantity_cart}" data-cartprice="${product_price_cart}" class="text-success edit" 
                ><i class="fa fa-edit fa-lg"></i
              ></a>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" class="text-danger"
                  ><i class="fa fa-trash fa-lg"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
    `;
      });
      $("#cart").append(cartproducts);
    },
  });


  // Update Cart
  $(document).on("click", ".edit", function () {
    var product_id = $(this).data("id");
    var product_price = $(this).data("price");
    var quantity =$("#form1").val();
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
      errro:function(response){
        alert(response);
      }
    });
  });
});
//  Update Cart
