$(document).ready(function () {
  var image_result = "";
  // var $modal = $("#modal");
  // var image = document.getElementById("sample_image");
  // var cropper;
  takeSnapShot = function () {
    Webcam.snap(function (data_uri) {
      // var image = new Image();
      // image.src = data_uri;
      // document.body.appendChild(image);
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
  // $("#upload_image").change(function (event) {
  //   var files = event.target.files;
  //   console.log(files);
  //   var done = function (url) {
  //     image.src = url;
  //     $modal.modal("show");
  //   };
  //   console.log(image);
  //   if (files && files.length > 0) {
  //     reader = new FileReader();
  //     reader.onload = function (event) {
  //       done(reader.result);
  //     };
  //     var reading = reader.readAsDataURL(data_uri);
  //     console.log(reading);
  //   }
  // });
  // $modal
  //   .on("shown.bs.modal", function () {
  //     cropper = new Cropper(image, {
  //       aspectRatio: 1,
  //       viewMode: 3,
  //       preview: ".preview",
  //     });
  //   })
  //   .on("hidden.bs.modal", function () {
  //     cropper.destroy();
  //     cropper = null;
  //   });
  });
