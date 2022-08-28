// const { json } = require("stream/consumers");

// const { error } = require("console");

$(document).ready(function () {
  var url = "http://localhost:2000/api//readuser";
  var count = 1;
  $.ajax({
    dataType: "json",
    url: url,
    success: function (datas) {
      var result = "";
      datas.data.forEach((item) => {
        const {
          id,
          first_name,
          last_name,
          contact_number,
          email_id,
          address,
          status,
        } = item;
        result += `
                <tr>
                    <td>${count}</td>
                    <td>${first_name}</td>
                    <td>${last_name}</td>
                    <td>${contact_number}</td>
                    <td>${email_id}</td>
                    <td>${address}</td>
                    <td>${status}</td>
                    <td>
                    <a data-bs-toggle="modal"
                    data-bs-target="#exampleModal1" class="edit" data-myval="${id}" data-first="${first_name}" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                    </td>
                    </tr>
                    ${count++}
                  `;
        });
      if (result.length == 0) {
        $("#table").html(
          '<tr class="norecords"><td colspan="8">No Records Found</td></tr>'
        );
      }else{
        $("#table").append(result);
      }

      // <a href="#" class="delete" title="Delete" data-toggle="tooltip" onclick="return confirm('Do you really want to Delete ?');"><i class="material-icons">&#xE872;</i></a>
      // <a href="#" class="view" title="View" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
    },
  });

 
  // submit button ajax //
  $("#userform").on("submit", function (e) {
    e.preventDefault();
    let date_ob = new Date();
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var number = $("#number").val();
    var email = $("#email").val();
    var address = $("#address").val();
    var status = $("#status").val();
    var url1 = "http://localhost:2000/api//userregistration";
    if (
      firstname != "" &&
      lastname != "" &&
      number != "" &&
      email != "" &&
      address !== "" &&
      status != ""
    ) {
      var result = JSON.stringify({
        first_name: firstname,
        last_name: lastname,
        contact_number: number,
        email_id: email,
        address: address,
        created_at: date_ob,
        updated_at: date_ob,
        status: status,
      });
      $.ajax({
        url: url1,
        data: result,
        method: "POST",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
        },
        success: function (response) {
          let resultString = "";
          for (const [key, value] of Object.entries(response)){
            resultString += `${value}\n`;
          }
          alert(resultString);
          location.reload(true);
        },
        error: function () {
          alert("Contact Or Email Is Already Registered");
        },
      });
    } else {
      alert("Please Provide All The Information!");
    }
  });
  // submit form end //


// update form //
  $(document).on("click",".edit",function(){
    $("#u_firstname").val($(this).data("first"));
  });

});
