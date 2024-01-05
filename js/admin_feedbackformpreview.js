$(document).ready(function () {
  // Save Draft Feedback
  $("#questionSaveDraft").on("click", function () {
    $("#modalMessage").text(
      "Feedback form is saved as draft, and can be edited until uploaded"
    );
    $("#modalOkBtn").on("click", function () {
      window.location.href = "admin_course.html";
      $("#submit-result").modal("hide");
    });
    $("#submit-result").modal("show");
  });
  // Upload Feedback
  $("#questionUpload").on("click", function () {
    $("#upload-modalOkBtn").on("click", function () {
      console.log("Confirm Upload");
      window.location.href = "admin_course.html";
      $("#upload-modal").modal("hide");
    });
    $("#upload-modalCancelBtn").on("click", function () {
      console.log("Cancel Upload");
      $("#upload-modal").modal("hide");
    });
    $("#upload-modal").modal("show");
  });
});
