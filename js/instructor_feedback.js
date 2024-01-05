$(document).ready(function () {
  // Event handler for the "Save Responses" button
  $("#save").click(function () {
    // Function to update the last column with the values from text areas
    $(".response-cell").each(function () {
      console.log("Current Cell: ", $(this));
      var textarea = $(this).find(".response-text");
      console.log("Textarea: ", textarea);
      var responseValue = textarea.val();
      console.log("Response Value: ", responseValue);
      $(this).text(responseValue);
    });

    // Success Modal
    $("#modalMessage").text("Responses saved successfully.");
    $("#modalOkBtn").click(function () {
      $("#submit-result").modal("hide");
    });
    $("#submit-result").modal("show");
  });
});
