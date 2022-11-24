$(document).ready(function () {
  var $modal = $("#modal");
  var image = document.getElementById("sample_image");
  var cropper;
  var url_string = window.location.href;
  console.log(url_string);
  var url = new URL(url_string);
  var id = url.searchParams.get("id");
  var decode_id = atob(id);
  console.log(decode_id);
  $("#upload_image").change(function (event) {
    var files = event.target.files;
    console.log(files);
    var done = function (url) {
      image.src = url;
      $modal.modal("show");
    };
    console.log(image);
    if (files && files.length > 0) {
      reader = new FileReader();
      console.log(reader);
      reader.onload = function (event) {
        done(reader.result);
      };
      reader.readAsDataURL(files[0]);
      Promise.all([reader]).then(() => {
        console.log(reader);
      });
    }
  });
  $modal
    .on("shown.bs.modal", function () {
      cropper = new Cropper(image, {
        aspectRatio: 1,
        viewMode: 3,
        preview: ".preview",
      });
    })
    .on("hidden.bs.modal", function () {
      cropper.destroy();
      cropper = null;
    });
  $("#crop").click(function () {
    canvas = cropper.getCroppedCanvas({
      width: 400,
      height: 400,
    });
    canvas.toBlob(function (blob) {
      url = URL.createObjectURL(blob);
      var upload_url = "http://localhost:2000/api//updatedetails";
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function () {
        var base64data = reader.result;
        console.log(base64data);
        $.ajax({
          url: upload_url,
          method: "POST",
          data: JSON.stringify({
            ID: decode_id,
            profile_pic: base64data,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          success: function () {
            alert("Picture Changed Successfully");
            location.reload(true);
            $modal.modal("hide");
          },
          error: function () {
            alert("Something Went Wrong");
          },
        });
      };
    });
  });
  // get Image Logic Starts //
  console.log("hai");
  var url = "http://localhost:2000/api//getuploadimage";
  $.ajax({
    dataType: "json",
    url: url,
    method: "POST",
    data: JSON.stringify({
      ID: decode_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    success: function (datas) {
      var final_imageresult = datas.data;
      console.log(final_imageresult);
      var datajpg = final_imageresult;
      $("#photo").append(
        `<img src=${datajpg} id="uploaded_image" class="img-responsive img-circle"/>`
      );
      $("#takesnapbutton").html(
        `<a href="webcam.html?id="${btoa(decode_id )}" class="btn btn-primary" type="button" id="takesnap"><i class="fa-solid fa-camera"></i>Take A Snap</a>`
      );
    },
  });
  // get Image Logic Ends //
});
