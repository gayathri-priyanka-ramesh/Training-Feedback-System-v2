$(document).ready(function () {
  $("#approvalSubmit").on("click", function () {
    // Reseting Validation Errors
    $(".validation").text("");
    var approvalStatus = $("input[name='application-statement']:checked").val();
    var comment = $("#application-comment").val().trim();
    console.log("Approval Status: ", approvalStatus);
    console.log("Comment: ", comment);
    // Check if course approved or disapproved
    if (!approvalStatus) {
      $("#approvalWarning").text("Choose to either approve or disapprove");
    }
    // Check if comment is given for approval
    else if (approvalStatus === "approved" && comment === "") {
      $("#commentWarning").text("Give comment on your approval of the course");
    }
    // Check if comment is given for disapproval
    else if (approvalStatus === "disapproved" && comment === "") {
      $("#commentWarning").text(
        "Give comment on your disapproval of the course"
      );
    }
    // Success Modal
    else {
      $("#modalMessage").text(
        "Application status has been successfully updated! Participant will be notified!"
      );
      $("#modalOkBtn").text("View Other Applications");
      $("#modalOkBtn").on("click", function () {
        window.location.href = "admin_instructor.html#upcoming-courses";
        $("#approvalForm")[0].reset();
        $("#submit-result").modal("hide");
      });
      $("#submit-result").modal("show");
    }
  });
});
