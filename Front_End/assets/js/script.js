$(document).ready(function () {
  var url_string = window.location.href;
  console.log(url_string);
  var url = new URL(url_string);
  var id = url.searchParams.get("id");
  var decode_id = atob(id);
  console.log(decode_id);
  const cropModal = $("#cropModal");
  const cropArea = $("#cropimage");
  // Webcamera
  const webCamModal = $("#webCamModal");

  $("#openWebCamModal").on("click", function (event) {
    event.preventDefault();
    webCamModal.modal("show");
  });

  $("#spanshot").on("click", function (event) {
    event.preventDefault();
    take_snapshot();
    webCamModal.modal("hide");
  });

  function configure() {
    Webcam.set({
      width: 640,
      height: 480,
      image_format: "jpeg",
      jpeg_quality: 100,
    });
    Webcam.attach("#webCameraArea");
  }

  function take_snapshot() {
    Webcam.snap(function (data_uri) {
      webCamModal.modal("hide");
      cropModal.modal({
        backdrop: "static",
      });
      cropArea.html('<img id="imageprev" src="' + data_uri + '"/>');
      cropImage();
    });
    Webcam.reset();
  }

  webCamModal.on("show.bs.modal", function () {
    configure();
  });

  //
  webCamModal.on("hide.bs.modal", function () {
    Webcam.reset();
    cropModal.modal("show");
    cropArea.html('<img id="imageprev" src=""/>');
  });

  // CROP IMAGE AFTER UPLOAD
  var cropper;

  function cropImage() {
    var image = document.querySelector("#imageprev");
    // $(image).on("load", () => {
    setTimeout(() => {
      var minAspectRatio = 1;
      var maxAspectRatio = 1;
      cropper = new Cropper(image, {
        aspectRatio: 1,
        autoCropArea: 1,
        minCropBoxWidth: 150,
        minCropBoxHeight: 150,
        ready: function () {
          var cropper = this.cropper;
          var containerData = cropper.getContainerData();
          var cropBoxData = cropper.getCropBoxData();
          var aspectRatio = cropBoxData.width / cropBoxData.height;
          var newCropBoxWidth;
          cropper.setDragMode("move");
          if (aspectRatio < minAspectRatio || aspectRatio > maxAspectRatio) {
            newCropBoxWidth =
              cropBoxData.height * ((minAspectRatio + maxAspectRatio) / 2);
            console.log(newCropBoxWidth);
            cropper.setCropBoxData({
              left: (containerData.width - newCropBoxWidth) / 2,
              width: newCropBoxWidth,
            });
          }
        },
      });
    }, 500);

    $("#scaleY").click(function () {
      var Yscale = cropper.imageData.scaleY;
      if (Yscale == 1) {
        cropper.scaleY(-1);
      } else {
        cropper.scaleY(1);
      }
    });
    $("#scaleX").click(function () {
      var Xscale = cropper.imageData.scaleX;
      if (Xscale == 1) {
        cropper.scaleX(-1);
      } else {
        cropper.scaleX(1);
      }
    });
    $("#rotateR").click(function () {
      cropper.rotate(45);
    });
    $("#rotateL").click(function () {
      cropper.rotate(-45);
    });
    $("#reset").click(function () {
      cropper.reset();
    });
  }

  $(document).on("click", "#saveAvatar", function (event) {
    // const t = $(this);
    event.preventDefault();
    const progress = $(".progress");
    const progressBar = $(".progress-bar");
    canvas = cropper.getCroppedCanvas({
      width: 400,
      height: 400,
    });
    progress.show();
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
          xhr: function () {
            const xhr = new XMLHttpRequest();
            xhr.upload.onprogress = function (e) {
              let percent = "0";
              let percentage = "0%";
              if (e.lengthComputable) {
                percent = Math.round((e.loaded / e.total) * 100);
                percentage = percent + "%";
                progressBar
                  .width(percentage)
                  .attr("aria-valuenow", percent)
                  .text(percentage);
              }
            };
            return xhr;
          },
          success: function () {
            alert("Picture Uploaded Successfully!");
            location.reload(true);
            webCamModal.modal("hide");
          },
          error: function () {
            alert("Something Went Wrong");
          },
        });
      };
    });
  });
});
