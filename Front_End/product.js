$(document).ready(function () {
  // get products //
  var url = "http://localhost:2000/api//getproducts";
  $.ajax({
    dataType: "json",
    url: url,
    success: function (data) {
      var result = "";
      data.datas.forEach((items) => {
        const {
          product_id,
          product_image,
          product_name,
          product_price,
          strikeout_price,
        } = items;
        result += `
        <div
        class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3"
      >
        <div class="product">
          <img
            src="../images/${product_image}"
            alt=""
          />
          <ul
            class="d-flex align-items-center justify-content-center list-unstyled icons"
          >
            <a class="add" data-id="${product_id}" data-name="${product_name}" data-price="${product_price}" 
            data-quantity="1" data-strikeoutprice="${strikeout_price}" data-image="${product_image}"><li class="icon mx-3"><span class="fa fa-plus"></span></li></a>
          </ul>
        </div>
        <div class="tag bg-red">sale</div>
        <div class="title pt-4 pb-1">${product_name}</div>
        <div class="price"><s>₹${strikeout_price}</s>₹${product_price}</div>
      </div>
      `;});

      $("#products").append(result);
    },
  });
  //get products //

  // add to the cart //
  $(document).on("click", ".add", function () {
    var productid = $(this).data("id");
    var productimage = $(this).data("image");
    var productname = $(this).data("name");
    var productprice = $(this).data("price");
    var productquantity = $(this).data("quantity");
    var strikeoutprice = $(this).data("strikeoutprice");
    var url1 = "http://localhost:2000/api//addtocart";
    var cart_result = JSON.stringify({
      product_id: productid,
      product_name: productname,
      product_price_cart: productprice,
      product_quantity_cart: productquantity,
      product_image: productimage,
    });
    $.ajax({
      url: url1,
      data: cart_result,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      success: function (response) {
        let string = "";
        for (const [key, value] of Object.entries(response)){
          string += `${value}\n`;
        }
        alert(string);
        window.location.href = "./product_cart.html";
      },
      error:function(){
        alert("Already This Item Added To The Cart");
      }
    });
    
  });
  // add to the cart //


  var url4 = "http://localhost:2000/api//cartcount";
  $.ajax({
    dataType: "json",
    url: url4,
    success: function (datas4) {
      console.log(datas4._count.product_id);
     var result_count=datas4;
     console.log(result_count);
     $("#bagde").text(result_count);
    },
})
  // get badge count //
});
