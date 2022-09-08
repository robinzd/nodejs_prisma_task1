$(document).ready(function () {
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
            <a><li class="icon mx-3"><span class="fa fa-plus"></span></li></a>
          </ul>
        </div>
        <div class="tag bg-red">sale</div>
        <div class="title pt-4 pb-1">${product_name}</div>
        <div class="price"><s>₹${strikeout_price}</s>₹${product_price}</div>
      </div>
                     `;
      });

      $("#products").append(result);
    },
  });
});
