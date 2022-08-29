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
                    data-bs-target="#exampleModal1" class="edit" data-id="${id}" data-first="${first_name}" data-last="${last_name}"
                    data-contact="${contact_number}" data-email="${email_id}" data-address="${address}" data-status="${status}" 
                    title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                    <a data-bs-toggle="modal"
                    data-bs-target="#exampleModal2" class="view" data-viewfirst="${first_name}"
                    data-viewlast="${last_name}" data-viewcontact="${contact_number}" data-viewemail="${email_id}"
                    data-viewaddress="${address}" data-viewstatus="${status}" title="View" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                    <a  class="delete" title="Delete" data-deleteid="${id}" data-toggle="tooltip" onclick="return confirm('Do you really want to Delete ?');"><i class="material-icons">&#xE872;</i></a>
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
    },
  });

 
  // submit button ajax  start//
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
  // submit button ajax  start//


//Get User In The Input Box For Update Start //
  $(document).on("click",".edit",function(){
    $("#u_id").val($(this).data("id"))
    $("#u_firstname").val($(this).data("first"));
    $("#u_lastname").val($(this).data("last"));
    $("#u_number").val($(this).data("contact"));
    $("#u_email").val($(this).data("email"));
    $("#u_address").val($(this).data("address"));
    $("#u_status").val($(this).data("status"));
  });
  //Get User In The Input Box Ends//

  //User Update Submit Button Ajax Call Starts//
  $("#updateform").on("submit", function (e) {
  e.preventDefault();
  let date_ob = new Date();
  var update_id= $("#u_id").val();
  var update_firstname = $("#u_firstname").val();
  var update_lastname=$("#u_lastname").val();
  var update_contact=$("#u_number").val();
  var update_email=$("#u_email").val();
  var update_address=$("#u_address").val();
  var update_status=$("#u_status").val();
  var url2="http://localhost:2000/api//UserUpdate";
  if(update_firstname!="" && update_lastname!="" && update_contact!="" && update_email!="" && update_address!="" && update_status!=""){
    var update_result=JSON.stringify({
        id:update_id,
        first_name: update_firstname,
        last_name: update_lastname,
        contact_number:update_contact,
        email_id:update_email,
        address: update_address,
        updated_at: date_ob,
        status:update_status,
    });
    console.log(update_result);
    $.ajax({
      url: url2,
      data: update_result,
      method: "PUT",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      success: function (response){
        let string = "";
        for (const [key, value] of Object.entries(response)){
          string += `${value}\n`;
        }
        alert(string);
        location.reload(true);
      },
    });
  }
  else{
    alert("Please Provide All The Information!");
  }
  })
 // user edit ajax call ends //

 // user view jquery starts //
  $(document).on("click",".view",function(){
    $("#v_firstname").val($(this).data("viewfirst"))
    $("#v_lastname").val($(this).data("viewlast"))
    $("#v_number").val($(this).data("viewcontact"))
    $("#v_email").val($(this).data("viewemail"))
    $("#v_address").val($(this).data("viewaddress"))
    $("#v_status").val($(this).data("viewstatus"))
  })
 // user view jquery ends //

//  delete user //
$(document).on("click",".delete",function(){
  var deleteid=$(this).data("deleteid")
  var url3="http://localhost:2000/api//deleteuser"
  var delete_result=JSON.stringify({
    id:deleteid,
  })
   $.ajax({
    url: url3,
    data:delete_result,
    method: "DELETE",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
    success: function (response){
      let deleterow = "";
      for (const [key, value] of Object.entries(response)){
        deleterow += `${value}\n`;
      }
      alert(deleterow);
      location.reload(true);
    },
    error: function () {
      alert("Something Went Wrong");
    },
  })
})
// delete user //
  
});
