$(document).ready(function () {
  var image_result = "";
  takeSnapShot = function () {
    Webcam.snap(function (data_uri) {
    document.getElementById('snapshot').innerHTML = 
      '<img src="'+data_uri+'"/>';
      $("#snapshot").append(`<button type="button" class="btn btn-primary save">Save</button>`);
      image_result = data_uri;
      console.log(data_uri);
    });
  };
  $(document).on("click", ".save", function () {
    var capture_image_url = "http://localhost:2000/api//webupload";
    console.log(image_result);
    var final_result = JSON.stringify({
      web_image: image_result,
    });
    console.log(final_result);
    $.ajax({
      url: capture_image_url,
      method: "POST",
      data: final_result,
      headers: {
        "Content-Type": "application/json",
      },
      success: function () {
        alert("Image Successfully Uploaded!");
      },
      error: function () {
        alert("Something Went Wrong");
      },
    });
  });
});
