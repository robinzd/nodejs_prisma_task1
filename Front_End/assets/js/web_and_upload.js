$(document).ready(function () {
  const fileChooser = $("input[type=file]#fileChooser");
  const cropModal = $("#cropModal");
  const cropArea = $("#cropimage");
  cropModal.on("hide.bs.modal", () => {
    cropArea.html('<img id="imageprev" src=""/>');
  });
  fileChooser.on("change", (e) => {
    cropModal.modal("show");
    var image = document.querySelector("#imageprev");
    var files = e.target.files;
    var done = function (url) {
      e.target.value = "";
      image.src = url;
      cropModal.modal({
        backdrop: "static",
      });
      cropImage();
    };
    var reader;
    var file;
    var url;
    if (files && files.length > 0) {
      file = files[0];
      if (URL) {
        done(URL.createObjectURL(file));
      } else if (FileReader) {
        reader = new FileReader();
        reader.onload = function (e) {
          done(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  });
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
    $(document).on("click", ".snap", function () {
      cropModal.modal("show");
    });
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
  // crop modal close logic when close button clicked//

  //crop upload and crop web pic logic starts//
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
            cropModal.modal("hide");
          },
          error: function () {
            alert("Something Went Wrong");
          },
        });
      };
    });
  });
  //crop upload and crop web pic logic ends //
  // get Image Logic Starts //
  console.log("hai");
  var url = "http://localhost:2000/api//getprofilepic";
  $.ajax({
    dataType: "json",
    url: url,
    success: function (datas) {
      var final_imageresult = datas.data;
      console.log(final_imageresult);
      var datajpg = final_imageresult;
      $("#proficepic").html(`<h3 align="center">Profile Picture</h3>
      <img src="${datajpg}" id="proficepic" class="rounded-3" style="width: 300px;"
      alt="Avatar" />
      `);
    },
  });
  // get Image Logic Ends //
});
