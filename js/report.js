document.addEventListener("DOMContentLoaded", function () {
  // Function to make a color lighter by a specified percentage
  var originalColor = "#102c57";
  function lightenColor(color, percent) {
    // Convert hex to RGB
    var r = parseInt(color.slice(1, 3), 16);
    var g = parseInt(color.slice(3, 5), 16);
    var b = parseInt(color.slice(5, 7), 16);
    // Calculate lighter values
    r = Math.round(r + (255 - r) * (percent / 100));
    g = Math.round(g + (255 - g) * (percent / 100));
    b = Math.round(b + (255 - b) * (percent / 100));
    // Convert back to hex
    var resultColor =
      "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
    return resultColor;
  }
  var lighterColor5Percent = lightenColor(originalColor, 5);
  var lighterColor15Percent = lightenColor(originalColor, 15);
  var lighterColor25Percent = lightenColor(originalColor, 25);
  var lighterColor45Percent = lightenColor(originalColor, 45);
  var lighterColor65Percent = lightenColor(originalColor, 65);
  var lighterColor85Percent = lightenColor(originalColor, 85);

  // Training Evaluation
  var trainingEvaluation = document
    .getElementById("training-evaluation")
    .getContext("2d");
  var trainingChart = new Chart(trainingEvaluation, {
    type: "doughnut",
    data: {
      labels: [
        "Excellent",
        "Above Average",
        "Average",
        "Below Average",
        "Poor",
      ],
      datasets: [
        {
          data: [35, 45, 55, 25, 15],
          backgroundColor: [
            lighterColor5Percent,
            lighterColor25Percent,
            lighterColor45Percent,
            lighterColor65Percent,
            lighterColor85Percent,
          ],
          hoverOffset: 6,
        },
      ],
    },
  });

  // Instructor Evaluation
  var instructorEvaluation = document
    .getElementById("instructor-evaluation")
    .getContext("2d");
  var instructorChart = new Chart(instructorEvaluation, {
    type: "pie",
    data: {
      labels: [
        "Excellent",
        "Above Average",
        "Average",
        "Below Average",
        "Poor",
      ],
      datasets: [
        {
          data: [25, 50, 50, 15, 25],
          backgroundColor: [
            lighterColor5Percent,
            lighterColor25Percent,
            lighterColor45Percent,
            lighterColor65Percent,
            lighterColor85Percent,
          ],
          hoverOffset: 6,
        },
      ],
    },
  });

  // Overall Evaluation
  var feedbackData = {
    labels: [
      "Maria White",
      "Jonathan Turner",
      "Rachel Walker",
      "John Baker",
      "Samuel Thomas",
      "David Foster",
      "Emily Carter",
      "Lisa Smith",
      "Kevin Young",
      "Jessica Evans",
    ],
    trainingRating: [
      "Average",
      "Excellent",
      "Above Average",
      "Below Average",
      "Poor",
      "Above Average",
      "Excellent",
      "Below Average",
      "Average",
      "Poor",
    ],
    instructorRating: [
      "Above Average",
      "Below Average",
      "Poor",
      "Average",
      "Above Average",
      "Excellent",
      "Below Average",
      "Excellent",
      "Average",
      "Poor",
    ],
  };
  // Function to convert rating string to a numerical value
  function getRatingValue(rating) {
    switch (rating) {
      case "Poor":
        return 1;
      case "Below Average":
        return 2;
      case "Average":
        return 3;
      case "Above Average":
        return 4;
      case "Excellent":
        return 5;
      default:
        return 0;
    }
  }
  // Bar Chart
  var overallEvaluation = document
    .getElementById("overall-evaluation")
    .getContext("2d");
  var overallChart = new Chart(overallEvaluation, {
    type: "bar",
    data: {
      labels: feedbackData.labels,
      datasets: [
        {
          label: "Training Rating",
          data: feedbackData.trainingRating.map(getRatingValue),
          backgroundColor: lighterColor15Percent,
        },
        {
          label: "Instructor Rating",
          data: feedbackData.instructorRating.map(getRatingValue),
          backgroundColor: lighterColor65Percent,
        },
      ],
    },
    options: {
      scales: {
        x: {
          stacked: true,
          beginAtZero: true,
        },
        y: {
          stacked: true,
          beginAtZero: true,
        },
      },
    },
  });
});
