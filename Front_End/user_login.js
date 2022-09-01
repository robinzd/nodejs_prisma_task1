// For Demo Purpose [Changing input group text on focus]
$(document).ready(function () {
  $("#submit").click(function (e) {
    e.preventDefault();
    var email_id = $("#email").val();
    var contact_number = $("#number").val();
    var url1 = "http://localhost:2000/api//Userlogin";
    if (email_id != "" && contact_number != "") {
      var result =JSON.stringify({
        email_id: email_id,
        contact_number: contact_number,
      });
      console.log(result);
      $.ajax({
        url: url1,
        data: result,
        method: "POST",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
        },
        success: function () {
         location.href = 'user_details.html';
        },
        error: function () {
        alert("Contact Or Email Is Not Matched");
        location.reload(true);
        },
      });
    } else {
      alert("Fill Out All The Fields");
    }
  });

  $(function () {
    $("input, select").on("focus", function () {
      $(this).parent().find(".input-group-text").css("border-color", "#80bdff");
    });
    $("input, select").on("blur", function () {
      $(this).parent().find(".input-group-text").css("border-color", "#ced4da");
    });
  });
});
