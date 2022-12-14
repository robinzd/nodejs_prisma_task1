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
          product_id,
          product_name,
          product_price,
          product_quantity,
          product_image,
          product_original_price,
        } = item;

        cartproducts += `
         <div class="card rounded-3 mb-4" id="products1">
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
                <h5 class="mb-0" id="price_${product_id}">???${product_price}</h5>
              </div>
              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
              <a   data-saveimage=${product_image}  data-savename="${product_name}" data-saveid="${product_id}" data-savequantity="${product_quantity}" data-saveprice="${product_original_price}" data-savecartprice="${product_price}" id="heart" class="save"
                ><i class="fa fa-heart fa-lg"></i
              ></a>
            </div>
             <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a  data-id1="${product_id}" class="text-danger delete"
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
  // get products in the cart //
  //**********************************************************************************************************//
  // heart click change into red //
  clicked = true;
  $(document).on("click", ".save", function () {
    if (clicked) {
      $(this).css("color", "red");
      clicked = true;
      console.log("hai");
    }
  });
  // heart click change into red //
  //**********************************************************************************************************//
  // Update Cart
  $(document).on("click", ".edit", function () {
    var product_id = $(this).data("id");
    var product_price = $(this).data("price");
    var quantity = $("#form_" + product_id).val();
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
      success: function (datas) {
        let results = "";
        for (const [key, value] of Object.entries(datas)) {
          results += `${value}\n`;
        }
        $("#price_" + product_id).text(`???${results}`);
      },
      error: function () {
        $("#products1").remove();
      },
    });
  });
  //  Update Cart //
  //**********************************************************************************************************//
  //  delete products //
  $(document).on("click", ".delete", function () {
    var confirmation = confirm("Do You Want To Really Delete This Product?");
    if (confirmation == true) {
      var deleteid = $(this).data("id1");
      var url3 = "http://localhost:2000/api//deleteproducts";
      var delete_result = JSON.stringify({
        product_id: deleteid,
      });
      $.ajax({
        url: url3,
        data: delete_result,
        method: "DELETE",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
        },
        success: function () {
          $("#products1").remove();
        },
      });
    }
  });
  // delete products//
  //**********************************************************************************************************//
  //save for later logic//
  $(document).on("click", ".save", function () {
    var product_save_id = $(this).data("saveid");
    console.log(product_save_id);
    var product_save_name = $(this).data("savename");
    console.log(product_save_name);
    var product_saveprice = $(this).data("saveprice");
    console.log(product_saveprice);
    var product_savequantity = $("#form_" + product_save_id).val();
    console.log(product_savequantity);
    var product_saveimage = $(this).data("saveimage");
    console.log(product_saveimage);
    var product_savecartprice = product_saveprice * product_savequantity;
    console.log(product_savecartprice);
    var save_url = "http://localhost:2000/api//savelater";
    var save_for_later = JSON.stringify({
      product_id: product_save_id,
      product_name: product_save_name,
      product_price: product_saveprice,
      product_image: product_saveimage,
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
        let results1 = "";
        for (const [key, value] of Object.entries(response)) {
          results1 += `${value}\n`;
        }
        alert(results1);
        var append_data = "";
        append_data = `<div class="card rounded-3 mb-4" id="products2">
        <div class="card-body p-4">
          <div
            class="row d-flex justify-content-between align-items-center"
          >
            <div class="col-md-2 col-lg-2 col-xl-2"  id="images">

              <img
                src="../images/${product_saveimage}"
                class="img-fluid rounded-3"
                alt=""
            />
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
              <p class="lead fw-normal mb-2" id="names">${product_save_name}</p>
             </div>
            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
              <button data-ids="${product_save_id}" data-prices="${product_saveprice}" data-cartprices="${product_savecartprice}"
                class="btn btn-link px-2 edits"
                onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
              >
              <i class="fa fa-minus"></i>
              </button>
              <input
                id="form1_${product_save_id}"
                min="0"
                name="quantity"
                value="${product_savequantity}"
                type="number"
                class="form-control form-control-sm" 
              />
              <button data-ids="${product_save_id}" data-prices="${product_saveprice}" data-cartprices="${product_savecartprice}"
                class="btn btn-link px-2 edits"
                onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
              >
              <i class="fa fa-plus"></i>
              </button>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h5 class="mb-0" id="prices_${product_save_id}">???${product_savecartprice}</h5>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
            <a data-savetoimage=${product_saveimage}  data-prices1="${product_saveprice}"  data-savetoname="${product_save_name}" data-savetoid="${product_save_id}" data-savetoquantity="${product_savequantity}" data-savetocartprice="${product_savecartprice}" id="hearts" class="saves"
              ><i class="fa fa-heart fa-lg"></i
            ></a>
          </div>
           <div class="col-md-1 col-lg-1 col-xl-1 text-end">
              <a  data-deleteid1="${product_save_id}" class="text-danger deletes"
                ><i class="fa fa-trash fa-lg"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    `;
        $("#save").append(append_data);
      },
      error: function (response) {
        alert(response);
      },
    });
  });
  //save for later logic//
  //**********************************************************************************************************//
  // delete in the cart table and save into the save later table//
  $(document).on("click", ".save", function () {
    var deleteid = $(this).data("saveid");
    console.log(deleteid);
    var url3 = "http://localhost:2000/api//deleteproducts";
    var delete_result = JSON.stringify({
      product_id: deleteid,
    });
    $.ajax({
      url: url3,
      data: delete_result,
      method: "DELETE",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      success: function () {
        $("#products1").remove();
      },
    });
  });
  //delete in the cart table and save into the save later table//
  //**********************************************************************************************************//
  //get save later//
  var saveurl1 = "http://localhost:2000/api//getsavelater";
  $.ajax({
    dataType: "json",
    url: saveurl1,
    success: function (datas) {
      savelaterproducts = "";
      datas.data.forEach((items) => {
        const {
          product_id,
          product_name,
          product_price_cart,
          product_quantity_cart,
          product_image,
          product_price,
        } = items;
        savelaterproducts += `
       <div class="card rounded-3 mb-4" id="products2">
        <div class="card-body p-4">
          <div
            class="row d-flex justify-content-between align-items-center"
          >
            <div class="col-md-2 col-lg-2 col-xl-2"  id="images">
              <img
                src="../images/${product_image}"
                class="img-fluid rounded-3"
                alt=""
            />
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
              <p class="lead fw-normal mb-2" id="names">${product_name}</p>
             </div>
            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
              <button data-ids="${product_id}" data-prices="${product_price}" data-cartprices="${product_price_cart}"
                class="btn btn-link px-2 edits"
                onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
              >
              <i class="fa fa-minus"></i>
              </button>
              <input
                id="form1_${product_id}"
                min="0"
                name="quantity"
                value="${product_quantity_cart}"
                type="number"
                class="form-control form-control-sm" 
              />
              <button data-ids="${product_id}" data-prices="${product_price}" data-cartprices="${product_price_cart}"
                class="btn btn-link px-2 edits"
                onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
              >
              <i class="fa fa-plus"></i>
              </button>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h5 class="mb-0" id="prices_${product_id}">???${product_price_cart}</h5>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
            <a data-savetoimage=${product_image}  data-prices1="${product_price}" data-savetoname="${product_name}" data-savetoid="${product_id}" data-savetoquantity="${product_quantity_cart}" data-savetocartprice="${product_price_cart}" id="hearts" class="saves"
              ><i class="fa fa-heart fa-lg"></i
            ></a>
          </div>
           <div class="col-md-1 col-lg-1 col-xl-1 text-end">
              <a  data-deleteid1="${product_id}" class="text-danger deletes"
                ><i class="fa fa-trash fa-lg"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    `;
      });
      $("#save").append(savelaterproducts);
    },
  });
  //get save later//
  //**********************************************************************************************************//
  //heart click change into black//
  click = true;
  $(document).on("click", ".saves", function () {
    if (click) {
      $(this).css("color", "black");
      click = true;
    }
  });
  //heart click change into black//
  //**********************************************************************************************************//
  // Update Save Later//
  $(document).on("click", ".edits", function () {
    var product_editid = $(this).data("ids");
    console.log(product_editid);
    var product_editprice = $(this).data("prices");
    console.log(product_editprice);
    var product_editquantity = $("#form1_" + product_editid).val();
    console.log(product_editquantity);
    var final_editprice = product_editquantity * product_editprice;
    console.log(final_editprice);
    var updateurl1 = "http://localhost:2000/api//updatesavelater";
    var update_savelater = JSON.stringify({
      product_id: product_editid,
      product_price_cart: final_editprice,
      product_quantity_cart: product_editquantity,
    });
    console.log(update_savelater);
    $.ajax({
      url: updateurl1,
      data: update_savelater,
      method: "PUT",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      success: function (updatedata) {
        let save_result = "";
        for (const [key, value] of Object.entries(updatedata)) {
          save_result += `${value}\n`;
        }
        $("#prices_" + product_editid).text(`???${save_result}`);
      },
      error: function () {
        $("#products2").remove();
      },
    });
  });
  //Update Save Later//
  //**********************************************************************************************************//
  //save to cart logic//
  $(document).on("click", ".saves", function () {
    var product_to_id = $(this).data("savetoid");
    var product_to_price1 = $(this).data("prices1");
    console.log(product_to_price1);
    var product_to_name = $(this).data("savetoname");
    var product_to_quantity = $("#form1_" + product_to_id).val();
    var product_to_image = $(this).data("savetoimage");
    var product_to_cartprice = product_to_price1 * product_to_quantity;
    console.log(product_to_cartprice);
    var save_to_url = "http://localhost:2000/api//savelatertocart";
    var save_to_cart = JSON.stringify({
      product_id: product_to_id,
      product_name: product_to_name,
      product_image: product_to_image,
      product_price_cart: product_to_cartprice,
      product_quantity_cart: product_to_quantity,
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
        var append_data2 = `
        <div class="card rounded-3 mb-4" id="products1">
         <div class="card-body p-4">
           <div
             class="row d-flex justify-content-between align-items-center"
           >
             <div class="col-md-2 col-lg-2 col-xl-2">
               <img
                 src="../images/${product_to_image}"
                 class="img-fluid rounded-3"
                 alt=""
               />
             </div>
             <div class="col-md-3 col-lg-3 col-xl-3">
               <p class="lead fw-normal mb-2">${product_to_name}</p>
            </div>
             <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
               <button data-id="${product_to_id}" data-price="${product_to_price1}" data-cartprice="${product_to_cartprice}"
                 class="btn btn-link px-2 edit"
                 onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
               >
                 <i class="fa fa-minus"></i>
               </button>
               <input
                 id="form_${product_to_id}"
                 min="0"
                 name="quantity"
                 value="${product_to_quantity}"
                 type="number"
                 class="form-control form-control-sm" 
               />
               <button data-id="${product_to_id}" data-price="${product_to_price1}" data-cartprice="${product_to_cartprice}"
                 class="btn btn-link px-2 edit" 
                 onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
               >
               <i class="fa fa-plus"></i>
               </button>
             </div>
             <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
               <h5 class="mb-0" id="price_${product_to_id}">???${product_to_cartprice}</h5>
             </div>
             <div class="col-md-1 col-lg-1 col-xl-1 text-end">
             <a   data-saveimage=${product_to_image}  data-savename="${product_to_name}" data-saveid="${product_to_id}" data-savequantity="${product_to_quantity}" data-saveprice="${product_to_price1}" data-savecartprice="${product_to_cartprice}" id="heart" class="save"
               ><i class="fa fa-heart fa-lg"></i
             ></a>
           </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
               <a  data-id1="${product_to_id}" class="text-danger delete"
                 ><i class="fa fa-trash fa-lg"></i
               ></a>
             </div>
           </div>
         </div>
       </div>
     `;
        $("#cart").append(append_data2);
      },
      error: function (response) {
        alert(response);
      },
    });
  });
  //save to cart logic//
  //**********************************************************************************************************//
  //delete from savelater logic//
  $(document).on("click", ".saves", function () {
    var deleteid = $(this).data("savetoid");
    var delete_url3 = "http://localhost:2000/api//deletesavelater";
    var delete_save_result = JSON.stringify({
      product_id: deleteid,
    });
    $.ajax({
      url: delete_url3,
      data: delete_save_result,
      method: "DELETE",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      success: function () {
        $("#products2").remove();
      },
      error: function () {
        alert("Something Went Wrong");
      },
    });
  });
  //delete from savelater logic//
  //**********************************************************************************************************//
  //delete from savelater  table logic//
  $(document).on("click", ".deletes", function () {
    var confirmation1 = confirm("Do You Want To Really Delete This Product?");
    if (confirmation1 == true) {
      var deleteid1 = $(this).data("deleteid1");
      console.log(deleteid1);
      var delete1_url3 = "http://localhost:2000/api//deletesavelater";
      var delete1_save_result = JSON.stringify({
        product_id: deleteid1,
      });
      $.ajax({
        url: delete1_url3,
        data: delete1_save_result,
        method: "DELETE",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
        },
        success: function () {
          $("#products2").remove();
        },
      });
    }
  });
  //delete from savelater table logic//
  //**********************************************************************************************************//
  // get items count //
  $(document).on("click", ".save", function () {
    var count_url = "http://localhost:2000/api//cartcount";
    $.ajax({
      dataType: "json",
      url: count_url,
      success: function (datas4) {
        let count = "";
        for (const [key, value] of Object.entries(datas4)) {
          count += `${value}\n`;
        }
        $("#headings").text(`Items:${count}`);
      },
    });
  });

  $(document).on("click", ".saves", function () {
    var count_url = "http://localhost:2000/api//cartcount";
    $.ajax({
      dataType: "json",
      url: count_url,
      success: function (datas4) {
        let count = "";
        for (const [key, value] of Object.entries(datas4)) {
          count += `${value}\n`;
        }
        $("#headings").text(`Items:${count}`);
      },
    });
  });
  var count_url = "http://localhost:2000/api//cartcount";
  $.ajax({
    dataType: "json",
    url: count_url,
    success: function (datas4) {
      let count = "";
      for (const [key, value] of Object.entries(datas4)) {
        count += `${value}\n`;
      }
      $("#headings").text(`Items:${count}`);
    },
  });
  // get items count //
  //**********************************************************************************************************//
  //adding the total number//
  $(document).on("click", ".save", function () {
    var total_url = "http://localhost:2000/api//getcartprice";
    $.ajax({
      dataType: "json",
      url: total_url,
      success: function (datas) {
        let total_count = "";
        for (const [key, value] of Object.entries(datas)) {
          total_count += `${value}\n`;
        }
        $("#total").html(`Total:???${total_count}`);
      },
    });
  });

  $(document).on("click", ".saves", function () {
    var total_url = "http://localhost:2000/api//getcartprice";
    $.ajax({
      dataType: "json",
      url: total_url,
      success: function (datas) {
        let total_count = "";
        for (const [key, value] of Object.entries(datas)) {
          total_count += `${value}\n`;
        }
        $("#total").html(`Total:???${total_count}`);
      },
    });
  });

  $(document).on("click", ".delete", function () {
    var total_url = "http://localhost:2000/api//getcartprice";
    $.ajax({
      dataType: "json",
      url: total_url,
      success: function (datas) {
        let total_count = "";
        for (const [key, value] of Object.entries(datas)) {
          total_count += `${value}\n`;
        }
        $("#total").html(`Total:???${total_count}`);
      },
    });
  });
  $(document).on("click", ".edit", function () {
    var search_product_id = $(this).data("id");
    console.log(search_product_id);
    var total_url = "http://localhost:2000/api//getcartprice";
    var get_total_price = JSON.stringify({
      product_id: search_product_id,
    });
    console.log(get_total_price);
    $.ajax({
      dataType: "json",
      url: total_url,
      data: get_total_price,
      method: "GET",
      success: function (datas) {
        let total_count = "";
        for (const [key, value] of Object.entries(datas)) {
          total_count += `${value}\n`;
        }
        $("#total").html(`Total:???${total_count}`);
      },
    });
  });
  var total_url = "http://localhost:2000/api//getcartprice";
  $.ajax({
    dataType: "json",
    url: total_url,
    success: function (datas) {
      let total_count = "";
      for (const [key, value] of Object.entries(datas)) {
        total_count += `${value}\n`;
      }
      $("#total").html(`Total:???${total_count}`);
    },
  });

  //adding the total number//
  //**********************************************************************************************************//
  //adding address in the cart starting//
  $(document).on("click", ".add", function (e) {
    e.preventDefault();
    var user_address = $("#address").val();
    var user_street = $("#street").val();
    var user_pincode = $("#pincode").val();
    var address_url = "http://localhost:2000/api//addaddress";
    if (user_address != "") {
      var address_result = JSON.stringify({
        user_address: user_address,
        user_street: user_street,
        user_pincode: user_pincode,
      });
      $.ajax({
        url: address_url,
        data: address_result,
        method: "POST",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
        },
        success: function (response) {
          let AddressString = "";
          for (const [key, value] of Object.entries(response)) {
            AddressString += `${value}\n`;
          }
          alert("Address Added");
          var append = `<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
       <label class="form-check-label" for="flexRadioDefault2">
       ${user_address},<br>${user_street},<br>pincode-${user_pincode}.`;
          $("#check").append(append);
          location.reload(true);
        },
        error: function () {
          alert("Something Went Wrong");
        },
      });
    } else {
      alert("Please Fill The Field");
    }
  });
  //adding address in the cart ending//
  //*******************************************************************//
  // get address //
  var address_url1 = "http://localhost:2000/api//getaddress";
  $.ajax({
    dataType: "json",
    url: address_url1,
    success: function (datas) {
      var useraddress = "";
      datas.data.forEach((item) => {
        const { user_address, user_street, user_pincode } = item;
        useraddress += `
      <input data-address="${user_address}" data-street="${user_street}" data-pincode="${user_pincode}" class="form-check-input checks" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
      <label class="form-check-label" for="flexRadioDefault2">
      ${user_address},<br>${user_street},<br>Pincode-${user_pincode}.<hr>
      </label><br>
      `;
      });
      $("#check").append(useraddress);
    },
  });
  //get address//
  //******************************************************************//
  // Append Address starting //
  $(document).on("click", ".checks", function () {
    var save_user_address = $(this).data("address");
    var save_user_street = $(this).data("street");
    var save_user_pincode = $(this).data("pincode");
    var address_url1 = "http://localhost:2000/api//appendaddress";
    var address_result1 = JSON.stringify({
      user_address: save_user_address,
      user_street: save_user_street,
      user_pincode: save_user_pincode,
    });
    $.ajax({
      url: address_url1,
      data: address_result1,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      success: function (response) {
        let AddressString1 = "";
        for (const [key, value] of Object.entries(response)) {
          AddressString1 += `${value}\n`;
        }
        alert(AddressString1);
        var append_address = `${save_user_address},`;
        var append_address1 = `${save_user_street},`;
        var append_address2 = `${save_user_pincode}.`;
        $("#para").text(append_address);
        $("#para1").text(append_address1);
        $("#para2").text(`pincode-${append_address2}`);
      },
      error: function () {
        alert("Something Went Wrong");
      },
    });
  });
});
// Append address Ending //
//***********************************************************************************************************//
// Add Clicked Div Wannt To Close and also name wants to change Starts//
$(document).on("click", ".add1", function () {
  $("#modals").show();
  $("#updated").hide();
  $("#check").hide();
  if ($(this).hasClass("add1")) {
    $(this).html("Show Address").toggleClass("add2");
  }
});
// Add Clicked Div Wannt To Close and also name wants to change ends//
//*********************************************************************************************************//
// Show Address Clicked want To Show The Div Starts//
$(document).on("click", ".add2", function () {
  $("#updated").show();
  $("#check").show();
  $("#modals").hide();
  $(this).html("Add Address").toggleClass("#add2");
});
// Show Address Clicked want To Show The Div ends//
// **********************************************************************************************************//
$(document).on("click", ".open", function () {
  $("#modals").hide();
  $("#check").show();
});
//**************************************************************************************************************//
//get the address from the save address table//
var address_url1 = "http://localhost:2000/api//getsaveaddress";
$.ajax({
  dataType: "json",
  url: address_url1,
  success: function (datas) {
    var savedaddress = "";
    datas.data.forEach((item) => {
      const { user_address, user_street, user_pincode } = item;
      savedaddress += `
          <p id="para">${user_address},</p>
          <p id="para1">${user_street},</p>
          <p id="para2">pincode-${user_pincode}.</p>
      `;
    });
    $("#model").append(savedaddress);
  },
});
//get the address from the save address table//
// ***************************************************************************************************//
// To Stop The Refreshing The Update Button starts//
$(document).on("click", ".update", function (e) {
  e.preventDefault();
});
// To Stop The Refreshing The Update Button ends//
//*****************************************************************************************************//
//To calculate the credit balance Starts//
$(document).on("click", ".edit", function () {
  var credit_url = "http://localhost:2000/api//creditbalance";
  $.ajax({
    dataType: "json",
    url: credit_url,
    success: function (response) {
      var result_credit = response.data1[0].credit_balance;
      var result_price = response.price[0].save_cart_totalprice;
      var final_result = result_credit - result_price;
      $("#credit").text(`Balance Amount:???${final_result}`);
    },
  });
});
$(document).on("click", ".delete", function () {
  var credit_url = "http://localhost:2000/api//creditbalance";
  $.ajax({
    dataType: "json",
    url: credit_url,
    success: function (response) {
      var result_credit = response.data1[0].credit_balance;
      var result_price = response.price[0].save_cart_totalprice;
      var final_result = result_credit - result_price;
      $("#credit").text(`Balance Amount:???${final_result}`);
    },
  });
});
var credit_url = "http://localhost:2000/api//creditbalance";
$.ajax({
  dataType: "json",
  url: credit_url,
  success: function (response) {
    var result_credit = response.data1[0].credit_balance;
    var result_price = response.price[0].save_cart_totalprice;
    var final_result = result_credit - result_price;
    $("#credit").text(`Balance Amount:???${final_result}`);
  },
});
//To calculate the credit balance Ends//
// ****************************************************************************************************//
// Get Full Amount starts //
var credit_url = "http://localhost:2000/api//creditamount";
$.ajax({
  dataType: "json",
  url: credit_url,
  success: function (response) {
    var result_creditamount = response.data[0].credit_balance;
    $("#amount").text(`Credited amount:???${result_creditamount}`);
  },
});
// Get Full Amount Ends //
