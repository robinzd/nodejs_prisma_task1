$(document).ready(function () {
  // get products //
  var url = "http://localhost:2000/api//getcart";
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
                <button data-id="${product_id}" data-price="${product_original_price}" data-cartprice="${product_price}"
                  class="btn btn-link px-2 edit"
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
                <button data-id="${product_id}" data-price="${product_original_price}" data-cartprice="${product_price}"
                  class="btn btn-link px-2 edit"
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                >
                <i class="fa fa-plus"></i>
                </button>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 class="mb-0">₹${product_price}</h5>
              </div>
              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
              <a  data-id2="${id}" data-saveimage=${product_image}  data-savename="${product_name}" data-saveid="${product_id}" data-savequantity="${product_quantity}" data-saveprice="${product_original_price}" data-savecartprice="${product_price}" id="heart" class="save"
                ><i class="fa fa-heart fa-lg"></i
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
  // get products in the cart //
 
// console.log(pro1);


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
  console.log(update_cart);
$.ajax({
    url: url1,
    data: update_cart,
    method: "PUT",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
    success: function () {
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


// delete in the cart table and save into the save later table //
$(document).on("click", ".save", function () {
  var deleteid = $(this).data("id2");
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
  });
});
// delete in the cart table and save into the save later table //


//get save later//
var saveurl1 = "http://localhost:2000/api//getsavelater";
$.ajax({
  dataType: "json",
  url: saveurl1,
  success: function (datas) {
  var saveproducts = "";
 datas.data.forEach((items) => {
      const {
        id,
        product_id,
        product_name,
        product_price_cart,
        product_quantity_cart,
        product_image,
        product_price,
      } = items;
      saveproducts += `
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
              <button data-ids="${id}" data-prices="${product_price}" data-cartprices="${product_price_cart}"
                class="btn btn-link px-2 edits"
                onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
              >
                <i class="fa fa-minus"></i>
              </button>
              <input
                id="form1_${id}"
                min="0"
                name="quantity"
                value="${product_quantity_cart}"
                type="number"
                class="form-control form-control-sm" 
              />
              <button data-ids="${id}" data-prices="${product_price}" data-cartprices="${product_price_cart}"
                class="btn btn-link px-2 edits"
                onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
              >
              <i class="fa fa-plus"></i>
              </button>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h5 class="mb-0">₹${product_price_cart}</h5>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
            <a data-deleteid="${id}" data-savetoimage=${product_image}  data-savetoname="${product_name}" data-savetoid="${product_id}" data-savetoquantity="${product_quantity_cart}" data-savetocartprice="${product_price_cart}" id="heart" class="saves"
              ><i class="fa fa-heart fa-lg"></i
            ></a>
          </div>
           <div class="col-md-1 col-lg-1 col-xl-1 text-end">
              <a  data-deleteid1="${id}" class="text-danger deletes"
                ><i class="fa fa-trash fa-lg"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    `;
 });
   $("#save").append(saveproducts);
  },
});
//get save later//


// Update Save Later//
$(document).on("click", ".edits", function () {
  var product_editid = $(this).data("ids");
  console.log(product_editid)
  var product_editprice = $(this).data("prices");
  console.log(product_editprice);
  var product_editquantity=$("#form1_"+product_editid).val();
  console.log(product_editquantity);
  var final_editprice = product_editquantity * product_editprice;
  console.log(final_editprice);
  var updateurl1 = "http://localhost:2000/api//updatesavelater";
  var update_savelater = JSON.stringify({
    id: product_editid,
    product_price_cart:final_editprice ,
    product_quantity_cart:product_editquantity,
  });
  console.log(update_savelater);
$.ajax({
    url:updateurl1 ,
    data: update_savelater,
    method: "PUT",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
    success: function () {
     location.reload(true);
    },
    error:function(response){
      alert(response);
    }
  });
});
//Update Save Later//


 //save for later logic//
  $(document).on("click", ".save", function () {
    var product_save_id = $(this).data("saveid");
    var product_save_name=$(this).data("savename");
    var product_saveprice = $(this).data("saveprice");
    var product_savequantity=$(this).data("savequantity");
    var product_saveimage=$(this).data("saveimage");
    var product_savecartprice=$(this).data("savecartprice");
    var save_url = "http://localhost:2000/api//savelater";
    var save_for_later = JSON.stringify({
      product_id:product_save_id,
      product_name:product_save_name,
      product_price:product_saveprice,
      product_image:product_saveimage,
      product_price_cart: product_savecartprice,
      product_quantity_cart: product_savequantity,
    });
    console.log(save_for_later);
  $.ajax({
      url: save_url,
      data: save_for_later,
      method: "POST",
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
 //save for later logic//
 

  //save to cart logic//
  $(document).on("click", ".saves", function () {
    var product_to_id = $(this).data("savetoid");
    var product_to_name=$(this).data("savetoname");
    var product_to_quantity=$(this).data("savetoquantity");
    var product_to_image=$(this).data("savetoimage");
    var product_to_cartprice=$(this).data("savetocartprice");
    var save_to_url = "http://localhost:2000/api//savelatertocart";
    var save_to_cart = JSON.stringify({
      product_id:product_to_id,
      product_name:product_to_name,
      product_image:product_to_image,
      product_price_cart: product_to_cartprice,
      product_quantity_cart:product_to_quantity,
    });
    console.log(save_to_cart);
  $.ajax({
      url: save_to_url,
      data: save_to_cart,
      method: "POST",
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
 //save to cart logic//


 //delete from savelater logic//
 $(document).on("click", ".saves", function () {
  var deleteid = $(this).data("deleteid");
  var delete_url3 = "http://localhost:2000/api//deletesavelater";
  var delete_save_result = JSON.stringify({
    id: deleteid,
  });
$.ajax({
    url: delete_url3,
    data: delete_save_result,
    method: "DELETE",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (response) {
      // let deleterow = "";
      // for (const [key, value] of Object.entries(response)) {
      //   deleterow += `${value}\n`;
      // }
      // confirm("Sure You Want To Delete This Product");
      // alert(deleterow);
      location.reload(true);
    },
    error: function () {
    alert("Something Went Wrong");
    },
  });
});
 //delete from savelater logic//


  //delete from savelater  table logic//
 $(document).on("click", ".deletes", function () {
  var deleteid1 = $(this).data("deleteid1");
  console.log(deleteid1);
  var delete1_url3 = "http://localhost:2000/api//deletesavelater";
  var delete1_save_result = JSON.stringify({
    id: deleteid1,
  });
$.ajax({
    url: delete1_url3,
    data: delete1_save_result,
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
//delete from savelater  table logic//
});



