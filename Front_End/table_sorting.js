$(document).ready(function () {
  var url = "http://localhost:2000/api//gettablesorting";
  var count = 1;
  $.ajax({
    dataType: "json",
    url: url,
    success: function (datas) {
      var row_counts = datas.data.length;
      var result = "";
      datas.data.forEach((item) => {
        const { ID, user_name, contact_number, Address, profile_pic } = item;
        result += `
         <tr>
        <td>${ID}</td>
        <td>${user_name}</td>
        <td>${contact_number}</td>
        <td>${Address}</td>
        <td><img src="${profile_pic}" class="rounded-circle" style="width: 50px;"
        alt="Avatar" /></td>
       <td>
        <a href="upload.html?id=${btoa(
          ID
        )}" class="upload" title="Upload Picture" data-toggle="tooltip"><i class="fa-solid fa-upload"></i></a></td>
        </form>
        </form>
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
        $("#para").html(`Records Shown:${row_counts} Rows`);
      }
    },
    complete: function () {
      $("#loader").hide();
    },
  });

  // Ascending Order Logic For Id Starts//
  $(document).on("click", ".sortingup", function () {
    var id_up = $(this).data("up");
    var url1 = "http://localhost:2000/api//getsortbyasceanddesc";
    var table_result_0 = JSON.stringify({
      ascen: id_up,
    });
    $.ajax({
      url: url1,
      data: table_result_0,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      beforeSend: function () {
        $("#tablesorting").hide();
        $("#loader").show();
        $("#para").hide();
      },
      success: function (datas2) {
        var id_row_count = datas2.data.length;
        var asec_result = "";
        datas2.data.forEach((items) => {
          const { ID, user_name, contact_number, Address, profile_pic } = items;
          asec_result += `
           <tr>
          <td>${ID}</td>
          <td>${user_name}</td>
          <td>${contact_number}</td>
          <td>${Address}</td>
          <td><img src="${profile_pic}" class="rounded-circle" style="width: 50px;"
          alt="Avatar" /></td>
          <td>
          <a href="upload.html?id=${btoa(
            ID
          )}" class="upload" title="Upload Picture" data-toggle="tooltip"><i class="fa-solid fa-upload"></i></a></td>
        </tr>
        ${count++}
          `;
        });
        $("#tablesorting").html(asec_result);
        $("#tablesorting").show();
        $("#para").html(`Records Shown:${id_row_count} Rows`);
        $("#para").show();
      },
      complete: function () {
        $("#loader").hide();
      },
    });
  });
  // Ascending Order Logic For Id Ends //

  //Desending Order Logic For Id Starts//
  $(document).on("click", ".sortingdown", function () {
    var id_down = $(this).data("down");
    var url1 = "http://localhost:2000/api//getsortbyasceanddesc";
    var table_result_1 = JSON.stringify({
      descn: id_down,
    });
    console.log(table_result_1);
    $.ajax({
      url: url1,
      data: table_result_1,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      beforeSend: function () {
        $("#tablesorting").hide();
        $("#loader").show();
        $("#para").hide();
      },
      success: function (datas2) {
        var id_row_counts = datas2.data.length;
        var desc_result = "";
        datas2.data.forEach((items) => {
          const { ID, user_name, contact_number, Address, profile_pic } = items;
          desc_result += `
           <tr>
          <td>${ID}</td>
          <td>${user_name}</td>
          <td>${contact_number}</td>
          <td>${Address}</td>
          <td><img src="${profile_pic}" class="rounded-circle" style="width:50px;"
          alt="Avatar" /></td>
          <td>
          <a href="upload.html?id=${btoa(
            ID
          )}" class="upload" title="Upload Picture" data-toggle="tooltip"><i class="fa-solid fa-upload"></i></a></td>
          </tr>
          ${count++}
          `;
        });
        $("#tablesorting").html(desc_result);
        $("#tablesorting").show();
        $("#para").html(`Records Shown:${id_row_counts} Rows`);
        $("#para").show();
      },
      complete: function () {
        $("#loader").hide();
      },
    });
  });
  //Desending Order Logic For Id Ends//

  //Ascending Order Logic For Name Starts//
  $(document).on("click", ".sortingnameup", function () {
    var name_up = $(this).data("nameup");
    var url1 = "http://localhost:2000/api//getsortbynameasceanddesc";
    var table_nameup = JSON.stringify({
      ascen: name_up,
    });
    $.ajax({
      url: url1,
      data: table_nameup,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      beforeSend: function () {
        $("#tablesorting").hide();
        $("#loader").show();
        $("#para").hide();
      },
      success: function (datas2) {
        var name_row_count = datas2.data.length;
        var aesc_name_result = "";
        datas2.data.forEach((items) => {
          const { ID, user_name, contact_number, Address, profile_pic } = items;
          aesc_name_result += `
           <tr>
          <td>${ID}</td>
          <td>${user_name}</td>
          <td>${contact_number}</td>
          <td>${Address}</td>
          <td><img src="${profile_pic}" class="rounded-circle" style="width: 50px;"
        alt="Avatar" /></td>
        <td>
          <a href="upload.html?id=${btoa(
            ID
          )}" class="upload" title="Upload Picture" data-toggle="tooltip"><i class="fa-solid fa-upload"></i></a></td>
          </tr>
          ${count++}
          `;
        });
        $("#tablesorting").html(aesc_name_result);
        $("#tablesorting").show();
        $("#para").html(`Records Shown:${name_row_count} Rows`);
        $("#para").show();
      },
      complete: function () {
        $("#loader").hide();
      },
    });
  });
  //Ascending Order Logic For Name Ends//

  //descending Order Logic For Name Starts//
  $(document).on("click", ".sortingnamedown", function () {
    var name_down = $(this).data("namedown");
    var url1 = "http://localhost:2000/api//getsortbynameasceanddesc";
    var table_namedown = JSON.stringify({
      descn: name_down,
    });
    $.ajax({
      url: url1,
      data: table_namedown,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      beforeSend: function () {
        $("#tablesorting").hide();
        $("#loader").show();
        $("#para").hide();
      },
      success: function (datas2) {
        var name_row_counts = datas2.data.length;
        var aesc_name_result = "";
        datas2.data.forEach((items) => {
          const { ID, user_name, contact_number, Address, profile_pic } = items;
          aesc_name_result += `
           <tr>
          <td>${ID}</td>
          <td>${user_name}</td>
          <td>${contact_number}</td>
          <td>${Address}</td>
          <td><img src="${profile_pic}" class="rounded-circle" style="width: 50px;"
          alt="Avatar" /></td>
          <td>
        <a href="upload.html?id=${btoa(
          ID
        )}" class="upload" title="Upload Picture" data-toggle="tooltip"><i class="fa-solid fa-upload"></i></a></td>
          </tr>
          ${count++}
          `;
        });
        $("#tablesorting").html(aesc_name_result);
        $("#tablesorting").show();
        $("#para").html(`Records Shown:${name_row_counts} Rows`);
        $("#para").show();
      },
      complete: function () {
        $("#loader").hide();
      },
    });
  });
  //descending Order Logic For Name Ends//

  //Ascending Order Logic For Number Starts//
  $(document).on("click", ".sortingcontactup", function () {
    var contact_up = $(this).data("contactup");
    var url1 = "http://localhost:2000/api//getsortbynumberasceanddesc";
    var table_contactup = JSON.stringify({
      ascen: contact_up,
    });
    $.ajax({
      url: url1,
      data: table_contactup,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      beforeSend: function () {
        $("#tablesorting").hide();
        $("#loader").show();
        $("#para").hide();
      },
      success: function (datas2) {
        var number_row_count = datas2.data.length;
        var aesc_contact_result = "";
        datas2.data.forEach((items) => {
          const { ID, user_name, contact_number, Address, profile_pic } = items;
          aesc_contact_result += `
           <tr>
          <td>${ID}</td>
          <td>${user_name}</td>
          <td>${contact_number}</td>
          <td>${Address}</td>
          <td><img src="${profile_pic}" class="rounded-circle" style="width: 50px;"
          alt="Avatar" /></td>
          <td>
          <a href="upload.html?id=${btoa(
            ID
          )}" class="upload" title="Upload Picture" data-toggle="tooltip"><i class="fa-solid fa-upload"></i></a></td>
          </tr>
          ${count++}
          `;
        });
        $("#tablesorting").html(aesc_contact_result);
        $("#tablesorting").show();
        $("#para").html(`Records Shown:${number_row_count} Rows`);
        $("#para").show();
      },
      complete: function () {
        $("#loader").hide();
      },
    });
  });
  //Ascending Order Logic For Number Ends//

  //Descending Order Logic For Number Starts//
  $(document).on("click", ".sortingcontactdown", function () {
    var contact_down = $(this).data("contactdown");
    var url1 = "http://localhost:2000/api//getsortbynumberasceanddesc";
    var table_contactdown = JSON.stringify({
      descn: contact_down,
    });
    $.ajax({
      url: url1,
      data: table_contactdown,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      beforeSend: function () {
        $("#tablesorting").hide();
        $("#loader").show();
        $("#para").hide();
      },
      success: function (datas2) {
        var nmuber_row_counts = datas2.data.length;
        var desc_contact_result = "";
        datas2.data.forEach((items) => {
          const { ID, user_name, contact_number, Address, profile_pic } = items;
          desc_contact_result += `
           <tr>
          <td>${ID}</td>
          <td>${user_name}</td>
          <td>${contact_number}</td>
          <td>${Address}</td>
          <td><img src="${profile_pic}" class="rounded-circle" style="width: 50px;"
          alt="Avatar" /></td>
          <td>
          <a href="upload.html?id=${btoa(
            ID
          )}" class="upload" title="Upload Picture" data-toggle="tooltip"><i class="fa-solid fa-upload"></i></a></td>
          </tr>
          ${count++}
          `;
        });
        $("#tablesorting").html(desc_contact_result);
        $("#tablesorting").show();
        $("#para").html(`Records Shown:${nmuber_row_counts} Rows`);
        $("#para").show();
      },
      complete: function () {
        $("#loader").hide();
      },
    });
  });
  //Descending Order Logic For Number Ends//

  //Ascending Order Logic For Address Starts//
  $(document).on("click", ".sortingaddressup", function () {
    var address_up = $(this).data("addressup");
    var url1 = "http://localhost:2000/api//getsortbyaddressasceanddesc";
    var table_addressup = JSON.stringify({
      ascen: address_up,
    });
    $.ajax({
      url: url1,
      data: table_addressup,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      beforeSend: function () {
        $("#tablesorting").hide();
        $("#loader").show();
        $("#para").hide();
      },
      success: function (datas2) {
        var address_row_count = datas2.data.length;
        var aesc_address_result = "";
        datas2.data.forEach((items) => {
          const { ID, user_name, contact_number, Address, profile_pic } = items;
          aesc_address_result += `
           <tr>
          <td>${ID}</td>
          <td>${user_name}</td>
          <td>${contact_number}</td>
          <td>${Address}</td>
          <td><img src="${profile_pic}" class="rounded-circle" style="width: 50px;"
          alt="Avatar" /></td>
          <td>
          <a href="upload.html?id=${btoa(
            ID
          )}" class="upload" title="Upload Picture" data-toggle="tooltip"><i class="fa-solid fa-upload"></i></a></td>
          </tr>
          ${count++}
          `;
        });
        $("#tablesorting").html(aesc_address_result);
        $("#tablesorting").show();
        $("#para").html(`Records Shown:${address_row_count} Rows`);
        $("#para").show();
      },
      complete: function () {
        $("#loader").hide();
      },
    });
  });
  //Ascending Order Logic For Address Ends//

  //Descending Order Logic For Address Starts//
  $(document).on("click", ".sortingaddressdown", function () {
    var address_down = $(this).data("addressdown");
    var url1 = "http://localhost:2000/api//getsortbyaddressasceanddesc";
    var table_addressdown = JSON.stringify({
      descn: address_down,
    });
    $.ajax({
      url: url1,
      data: table_addressdown,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      beforeSend: function () {
        $("#tablesorting").hide();
        $("#loader").show();
        $("#para").hide();
      },
      success: function (datas2) {
        var address_row_counts = datas2.data.length;
        var desc_address_result = "";
        datas2.data.forEach((items) => {
          const { ID, user_name, contact_number, Address, profile_pic } = items;
          desc_address_result += `
        <tr>
        <td>${ID}</td>
        <td>${user_name}</td>
        <td>${contact_number}</td>
        <td>${Address}</td>
        <td><img src="${profile_pic}" class="rounded-circle" style="width: 50px;"
        alt="Avatar" /></td>
        <td>
        <a href="upload.html?id=${btoa(
          ID
        )}" class="upload" title="Upload Picture" data-toggle="tooltip"><i class="fa-solid fa-upload"></i></a></td>
        </tr>
        ${count++}
        `;
        });
        $("#tablesorting").html(desc_address_result);
        $("#tablesorting").show();
        $("#para").html(`Records Shown:${address_row_counts} Rows`);
        $("#para").show();
      },
      complete: function () {
        $("#loader").hide();
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
        const { filter_column } = item;
        result += `
        <div class="form-check">
        <input class="form-check-input radiobuttons" type="radio" name="checkingradio" value="${filter_column}" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
        ${filter_column}
        </label>
      </div>
      `;
      });
      $("#radiobuttons").append(result);
      $("#insert").append(
        `<div class="input-group-text searchbutton" id="btnGroupAddon"><i class="fa-solid fa-magnifying-glass"></i></div>`
      );
    },
  });
  //Get Search By Filter Column Logic Ends//

  // Get The Selected Radio Button Logic starts //
  $(document).on("click", ".radiobuttons", function () {
    var select_tag = $("input:radio[name=checkingradio]:checked").val();
    $("#dropdownMenuButton2").html(select_tag);
  });
  // Get The Selected Radio Button Logic Ends //

  // Search By Filter And Getting The Result Logic Starts //
  $(document).on("click", ".searchbutton", function () {
    var searchtag = $("#searchtag").val();
    var resulted = searchtag.split("");
    var final_result = resulted.length;
    if (final_result == 0) {
      var url = "http://localhost:2000/api//gettablesorting";
      var count = 1;
      $.ajax({
        dataType: "json",
        url: url,
        beforeSend: function () {
          $("#tablesorting").hide();
          $("#loader").show();
          $("#para").hide();
        },
        success: function (datas) {
          var row_counts = datas.data.length;
          var result = "";
          datas.data.forEach((item) => {
            const { ID, user_name, contact_number, Address, profile_pic } =
              item;
            result += `
         <tr>
        <td>${ID}</td>
        <td>${user_name}</td>
        <td>${contact_number}</td>
        <td>${Address}</td>
        <td><img src="${profile_pic}" class="rounded-circle" style="width: 50px;"
        alt="Avatar" /></td>
        <td>
        <a href="upload.html?id=${btoa(
          ID
        )}" class="upload" title="Upload Picture" data-toggle="tooltip"><i class="fa-solid fa-upload"></i></a></td>
        </tr>
        ${count++}
        `;
          });
          if (result.length == 0) {
            $("#tablesorting").html(
              '<tr class="norecords"><td colspan="8">No Records Found</td></tr>'
            );
          } else {
            $("#tablesorting").html(result);
            $("#tablesorting").show();
            $("#para").html(`Records Shown:${row_counts} Rows`);
            $("#para").show();
          }
        },
        complete: function () {
          $("#loader").hide();
        },
      });
    } else {
      var selected_tag = $("input:radio[name=checkingradio]:checked").val();
      var searchtag = $("#searchtag").val();
      var search_url = "http://localhost:2000/api//getsearchtag";
      var search_tag_table = JSON.stringify({
        sortingcolumn: selected_tag,
        inputvalue: searchtag,
      });
      $.ajax({
        url: search_url,
        data: search_tag_table,
        method: "POST",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
        },
        beforeSend: function () {
          $("#tablesorting").hide();
          $("#loader").show();
          $("#para").hide();
        },
        success: function (datas) {
          var count = datas.data.length;
          var search_result = "";
          datas.data.forEach((items) => {
            const { ID, user_name, contact_number, Address, profile_pic } =
              items;
            search_result += `
      <tr>
      <td>${ID}</td>
      <td>${user_name}</td>
      <td>${contact_number}</td>
      <td>${Address}</td>
      <td><img src="${profile_pic}" class="rounded-circle" style="width: 50px;"
      alt="Avatar" /></td>
      <td>
      <a href="upload.html?id=${btoa(
        ID
      )}" class="upload" title="Upload Picture" data-toggle="tooltip"><i class="fa-solid fa-upload"></i></a></td>
      </tr>
    `;
          });
          $("#tablesorting").html(search_result);
          $("#tablesorting").show();
          if (count > 1) {
            $("#para").html(`Result:${count}Rows`);
            $("#para").show();
          } else {
            $("#para").html(`Result:${count}Row`);
            $("#para").show();
          }
        },
        complete: function () {
          $("#loader").hide();
        },
        error: function () {
          alert("Result Not Found");
        },
      });
    }
  });
  //Search By Filter And Getting The Result Logic Ends//
});
