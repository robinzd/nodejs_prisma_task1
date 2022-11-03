$(document).ready(function () {
  var $modal = $("#modal");

  var image = document.getElementById("sample_image");

  var cropper;

  $("#upload_image").change(function (event) {
    var files = event.target.files;

    var done = function (url) {
      image.src = url;
      $modal.modal("show");
    };

    if (files && files.length > 0) {
      reader = new FileReader();
      reader.onload = function (event) {
        done(reader.result);
      };
      reader.readAsDataURL(files[0]);
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
      var upload_url = "http://localhost:2000/api//uploadimage";
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function () {
        var base64data = reader.result;
        console.log(base64data);
        $.ajax({
          url: upload_url,
          method: "POST",
          data: JSON.stringify({
            cropped_image: base64data,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          success: function () {
            $modal.modal("hide");
          },
          error: function () {
            alert("Something Went Wrong");
          },
        });
      };
    });
  });

  // get products //
    console.log("hai");
    var url = "http://localhost:2000/api//getuploadimage";
    $.ajax({
      dataType: "json",
      url: url,
      success: function (datas) {
        var final_imageresult = datas.data;
        console.log(final_imageresult);
        var datajpg = final_imageresult;
        $("#photo").append(
          `<img src=${datajpg} id="uploaded_image" class="img-responsive img-circle"/>`
        );
      },
    });
  });
