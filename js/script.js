$(document).ready(function () {
  // Perform validation and redirection based on user input
  $("#loginForm").submit(function (e) {
    e.preventDefault();
    // Reseting Validation Errors
    $(".validation").text("");
    var username = $("#username").val().trim();
    var password = $("#password").val().trim();
    var userType = $("button.btn.nav-item:focus").data("type");
    // Both Fields Empty
    if (username === "" && password === "") {
      $("#usernameWarning").text("Username is required");
      $("#passwordWarning").text("Password is required");
    }
    // Username Empty
    else if (username === "") {
      $("#usernameWarning").text("Username is required");
    }
    // Password Empty
    else if (password === "") {
      $("#passwordWarning").text("Password is required");
    }
    // Both Fields contain value
    else if (username !== "" && password !== "") {
      // Participant Login
      if (
        username === "samuelroberts_edureview360" &&
        password === "samuelroberts" &&
        userType === "participant"
      ) {
        console.log("Participant Login");
        window.location.href = "participant/index.html";
      }
      // Instructor Login
      else if (
        username === "mariacampbell_edureview360" &&
        password === "mariacampbell" &&
        userType === "instructor"
      ) {
        console.log("Instructor Login");
        window.location.href = "instructor/index.html";
      }
      // Invalid Login
      else {
        $("#submitWarning").text("Invalid username, password, or user type");
      }
    }
  });
});
