$(document).ready(function () {
  // Adding New Question
  $(".question-set").on("click", ".add-question-btn", function () {
    // Details of current question count in the enclosing fieldset
    var fieldset = $(this).closest("fieldset");
    console.log("Add question of", fieldset, "is clicked");
    var questionGroup = $(`<div class="mb-3 question-item">
        <label for="iques1" class="text-label form-label">
          Enter Question <span class="mandate">*</span>
        </label>
        <input
          type="text"
          class="form-control mb-0"
          name="iques1"
          id="iques1"
          required
        />
        <div class="emptyInputWarning validation"></div>
        <button type="button" class="btn nav-item remove-question-btn">Remove Question</button>
      </div>`);
    fieldset.find(".question-container").append(questionGroup);
  });

  // Removeing Existing Question
  $(".question-container").on("click", ".remove-question-btn", function () {
    // Remove the parent question-item when the remove button is clicked
    var closestParent = $(this).closest(".question-item");
    console.log("Remove Question of ", closestParent);
    // Remove Confirm
    $("#remove-question-modalOkBtn").on("click", function () {
      console.log("Confirm Remove");
      closestParent.remove();
      $("#remove-question-modal").modal("hide");
    });
    $("#remove-question-modalCancelBtn").on("click", function () {
      console.log("Cancel Remove");
      $("#remove-question-modal").modal("hide");
    });
    $("#remove-question-modal").modal("show");
  });

  // Handling form submission
  $("#questionsSubmit").on("click", function () {
    // Reseting Validation Errors
    $(".validation").text("");
    console.log("Question From: ", $("#questionsForm"));
    console.log("Question From [0]: ", $("#questionsForm")[0]);
    var isValid = true;
    var ratingRange = $("input[name='rating-range']:checked").val();
    console.log("Rating Range: ", ratingRange);
    if (!ratingRange) {
      console.log("Rating Range not selected");
      $("#ratingWarning").text("Choice of rating range is required");
      window.location.href = "admin_createfeedback.html#ratingWarning";
      isValid = false;
    } else {
      // Check if atleast 2 questions in each fieldset are answered
      var fieldsets = $(".question-fieldset");
      var fieldsetCount = 0;
      fieldsets.each(function () {
        fieldsetCount++;
        console.log("Fieldset Count: ", fieldsetCount);
        var answeredQuestions = $(this)
          .find("input[type='text']")
          .filter(function () {
            return $(this).val().trim() !== "";
          }).length;
        console.log("No. of Answered Questions: ", answeredQuestions);
        if (answeredQuestions < 2) {
          isValid = false;
          console.log("No. of Anwered questions is less than 2");
          $("#modalMessage").text("Enter atleast 2 questions in each section");
          $("#modalOkBtn").text("Ok");
          $("#modalOkBtn").on("click", function () {
            $("#submit-result").modal("hide");
          });
          $("#submit-result").modal("show");
        }
        // Check for empty input fields
        else {
          var questions = $(this).find("input[type='text']");
          console.log("Questions: ", questions);
          questions.each(function () {
            console.log("Current Question: ", $(this));
            console.log("Current Question Value: ", $(this).val().trim());
            if ($(this).val().trim() === "") {
              var nextWarning = $(this).next(".emptyInputWarning");
              console.log("Next Warning ", nextWarning);
              nextWarning.text("Enter question in the empty input field");
              isValid = false;
            }
          });
        }
        var emptyQuestions = $(this)
          .find("input[type='text']")
          .filter(function () {
            return $(this).val().trim() === "";
          }).length;
        if (emptyQuestions !== 0) {
          isValid = false;
        }
      });
    }
    console.log("Is Valid? ", isValid);
    if (isValid === true) {
      // Show success modal
      console.log("Success");
      $("#modalMessage").text("Feedback form is created successfully!");
      $("#modalOkBtn").text("View Form Preview");
      $("#modalOkBtn").on("click", function () {
        window.location.href = "admin_feedbackformpreview.html";
        $("#questionsForm")[0].reset();
        $("#submit-result").modal("hide");
      });
      $("#submit-result").modal("show");
    }
  });
});
