$(document).ready(function () {
  // Apply Trending Course Button
  $("#applyBtn").on("click", function () {
    $("#modalOkBtn").on("click", function () {
      $("#submit-result").modal("hide");
    });
    $("#submit-result").modal("show");
  });
});
