$(document).ready(function () {
  $("#feedbackSubmit").on("click", function () {
    if (validateForm()) {
      // Show Success modal
      $("#modalMessage").text(
        "Your feedback has been successfully submitted! Please wait for your Instructor's response!"
      );
      $("#modalOkBtn").text("View Course");
      $("#modalOkBtn").on("click", function () {
        window.location.href = "participant_ongoingcoursecontinue.html";
        $("#feedbackForm")[0].reset();
        $("#submit-result").modal("hide");
      });
      $("#submit-result").modal("show");
    } else {
      // Show Error modal
      $("#modalMessage").text(
        "Answer at least 2 questions in first 2 sections to submit your feedback"
      );
      $("#modalOkBtn").text("Answer Questions");
      $("#modalOkBtn").on("click", function () {
        $("#submit-result").modal("hide");
      });
      $("#submit-result").modal("show");
    }
  });

  // Function to check if at least 2 questions are answered in first 2 fieldsets
  function validateForm() {
    var fieldsets = $("fieldset");
    console.log("Fieldsets: ", fieldsets);
    for (var i = 0; i < fieldsets.length - 1; i++) {
      console.log("Fieldset", i, " ---> ", fieldsets[i]);
      var answeredQuestions = $(fieldsets[i]).find(
        "input[type='radio']:checked"
      ).length;
      console.log("No. of questions answered: ", answeredQuestions);
      if (answeredQuestions < 2) {
        console.log("Submission Rejected");
        return false;
      }
    }
    console.log("Submission Successful");
    return true;
  }
});
