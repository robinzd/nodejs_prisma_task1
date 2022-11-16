$(document).ready(function () {
  var url = "http://localhost:2000/api//gettablesorting";
  var count = 1;
  $.ajax({
    dataType: "json",
    url: url,
    success: function (datas) {
      var result = "";
      datas.data.forEach((item) => {
        const { ID, user_name, contact_number, Address } = item;
        result += `
         <tr>
        <td>${ID}</td>
        <td>${user_name}</td>
        <td>${contact_number}</td>
        <td>${Address}</td>
        </tr>
        ${count++}
        `;
      });
      if (result.length == 0) {
        $("#tablesorting").html(
          '<tr class="norecords"><td colspan="8">No Records Found</td></tr>'
        );
      } else {
        $("#tablesorting").append(result);
      }
    },
  });
  // Ascending Order Logic For Id Starts//
  $(document).on("click", ".sortingup", function () {
    var id_up=$(this).data("up");
   console.log(id_up)
    var url1 = "http://localhost:2000/api//getsortbyasceanddesc";
    var table_result_0 = JSON.stringify({
      ascen:id_up
    });
    console.log(table_result_0)
    $.ajax({
      url: url1,
      data: table_result_0,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      success: function (datas2) {
        console.log(datas2)
        var asec_result = "";
        datas2.data.forEach((items) => {
          const {ID, user_name, contact_number, Address} = items;
          asec_result += `
           <tr>
          <td>${ID}</td>
          <td>${user_name}</td>
          <td>${contact_number}</td>
          <td>${Address}</td>
          </tr>
          ${count++}
          `;
        });
       $("#tablesorting").html(asec_result);
      },
    });
  });
  // Ascending Order Logic For Id Ends //

  //Desending Order Logic For Id Starts//
  $(document).on("click", ".sortingdown", function () {
    var id_down=$(this).data("down");
   console.log(id_down)
    var url1 = "http://localhost:2000/api//getsortbyasceanddesc";
    var table_result_1 = JSON.stringify({
      descn:id_down
    });
    console.log(table_result_1)
    $.ajax({
      url: url1,
      data: table_result_1,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      success: function (datas2) {
        console.log(datas2)
        var desc_result = "";
        datas2.data.forEach((items) => {
          const {ID, user_name, contact_number, Address} = items;
          desc_result += `
           <tr>
          <td>${ID}</td>
          <td>${user_name}</td>
          <td>${contact_number}</td>
          <td>${Address}</td>
          </tr>
          ${count++}
          `;
        });
       $("#tablesorting").html(desc_result);
      },
    });
  });
  //Desending Order Logic For Id Ends// 

   //Ascending Order Logic For Name Starts// 
   $(document).on("click", ".sortingnameup", function () {
    var name_up=$(this).data("nameup");
   console.log(name_up)
    var url1 = "http://localhost:2000/api//getsortbynameasceanddesc";
    var table_nameup = JSON.stringify({
      ascen:name_up
    });
    console.log(table_nameup)
    $.ajax({
      url: url1,
      data: table_nameup,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      success: function (datas2) {
        console.log(datas2)
        var aesc_name_result = "";
        datas2.data.forEach((items) => {
          const {ID, user_name, contact_number, Address} = items;
          aesc_name_result += `
           <tr>
          <td>${ID}</td>
          <td>${user_name}</td>
          <td>${contact_number}</td>
          <td>${Address}</td>
          </tr>
          ${count++}
          `;
        });
       $("#tablesorting").html(aesc_name_result);
      },
    });
  });
  //Ascending Order Logic For Name Ends// 

  //descending Order Logic For Name Starts// 
  $(document).on("click", ".sortingnamedown", function () {
    var name_down=$(this).data("namedown");
   console.log(name_down)
    var url1 = "http://localhost:2000/api//getsortbynameasceanddesc";
    var table_namedown = JSON.stringify({
      descn:name_down
    });
    console.log(table_namedown)
    $.ajax({
      url: url1,
      data: table_namedown,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      success: function (datas2) {
        console.log(datas2)
        var aesc_name_result = "";
        datas2.data.forEach((items) => {
          const {ID, user_name, contact_number, Address} = items;
          aesc_name_result += `
           <tr>
          <td>${ID}</td>
          <td>${user_name}</td>
          <td>${contact_number}</td>
          <td>${Address}</td>
          </tr>
          ${count++}
          `;
        });
       $("#tablesorting").html(aesc_name_result);
      },
    });
  });
  //descending Order Logic For Name Ends// 

  //Ascending Order Logic For Number Starts// 
   $(document).on("click", ".sortingcontactup", function () {
    var contact_up=$(this).data("contactup");
   console.log(contact_up)
    var url1 = "http://localhost:2000/api//getsortbynumberasceanddesc";
    var table_contactup = JSON.stringify({
      ascen:contact_up
    });
    console.log(table_contactup)
    $.ajax({
      url: url1,
      data: table_contactup,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      success: function (datas2) {
        console.log(datas2)
        var aesc_contact_result = "";
        datas2.data.forEach((items) => {
          const {ID, user_name, contact_number, Address} = items;
          aesc_contact_result += `
           <tr>
          <td>${ID}</td>
          <td>${user_name}</td>
          <td>${contact_number}</td>
          <td>${Address}</td>
          </tr>
          ${count++}
          `;
        });
       $("#tablesorting").html(aesc_contact_result);
      },
    });
  });
  //Ascending Order Logic For Number Ends// 

  //Descending Order Logic For Number Starts// 
  $(document).on("click", ".sortingcontactdown", function () {
    var contact_down=$(this).data("contactdown");
   console.log(contact_down)
    var url1 = "http://localhost:2000/api//getsortbynumberasceanddesc";
    var table_contactdown = JSON.stringify({
      descn:contact_down
    });
    console.log(table_contactdown)
    $.ajax({
      url: url1,
      data: table_contactdown,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      success: function (datas2) {
        console.log(datas2)
        var desc_contact_result = "";
        datas2.data.forEach((items) => {
          const {ID, user_name, contact_number, Address} = items;
          desc_contact_result += `
           <tr>
          <td>${ID}</td>
          <td>${user_name}</td>
          <td>${contact_number}</td>
          <td>${Address}</td>
          </tr>
          ${count++}
          `;
        });
       $("#tablesorting").html(desc_contact_result);
      },
    });
  });
  //Descending Order Logic For Number Ends// 

  //Ascending Order Logic For Address Starts// 
  $(document).on("click", ".sortingaddressup", function () {
    var address_up=$(this).data("addressup");
   console.log(address_up)
    var url1 = "http://localhost:2000/api//getsortbyaddressasceanddesc";
    var table_addressup = JSON.stringify({
      ascen:address_up
    });
    console.log(table_addressup)
    $.ajax({
      url: url1,
      data: table_addressup,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      success: function (datas2) {
        console.log(datas2)
        var aesc_address_result = "";
        datas2.data.forEach((items) => {
          const {ID, user_name, contact_number, Address} = items;
          aesc_address_result += `
           <tr>
          <td>${ID}</td>
          <td>${user_name}</td>
          <td>${contact_number}</td>
          <td>${Address}</td>
          </tr>
          ${count++}
          `;
        });
       $("#tablesorting").html(aesc_address_result);
      },
    });
  });
 //Ascending Order Logic For Address Ends// 

//Descending Order Logic For Address Starts// 
$(document).on("click", ".sortingaddressdown", function () {
  var address_down=$(this).data("addressdown");
 console.log(address_down)
  var url1 = "http://localhost:2000/api//getsortbyaddressasceanddesc";
  var table_addressdown = JSON.stringify({
    descn:address_down
  });
  console.log(table_addressdown)
  $.ajax({
    url: url1,
    data: table_addressdown,
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (datas2) {
      console.log(datas2)
      var desc_address_result = "";
      datas2.data.forEach((items) => {
        const {ID, user_name, contact_number, Address} = items;
        desc_address_result += `
        <tr>
        <td>${ID}</td>
        <td>${user_name}</td>
        <td>${contact_number}</td>
        <td>${Address}</td>
        </tr>
        ${count++}
        `;
      });
     $("#tablesorting").html(desc_address_result);
    },
  });
});
//Descending Order Logic For Address Ends// 

//Get Search By Filter Column Logic Started//
var url = "http://localhost:2000/api//getsortingcolumn";
$.ajax({
    dataType: "json",
    url: url,
    success: function (datas) {
      var result = "";
      datas.data.forEach((item) => {
        const {filter_column} = item;
        result += `
        <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" value="${filter_column}" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
        ${filter_column}
        </label>
      </div>
      `;
      });
      $("#radiobuttons").append(result)
    },
  });
//Get Search By Filter Column Logic Ends//
});
