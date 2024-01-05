$(document).ready(function () {
  // Perform validation for Admin Login
  $("#loginAdmin").submit(function (e) {
    e.preventDefault();
    // Reseting Validation Errors
    $(".validation").text("");
    var username = $("#username").val();
    var password = $("#password").val();
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
      // Admin Login
      if (username === "admin_edureview360" && password === "edureview360") {
        console.log("Admin Login");
        window.location.href = "admin_home.html";
      }
      // Invalid Login
      else {
        $("#submitWarning").text("Invalid username, password, or user type");
      }
    }
  });
});
