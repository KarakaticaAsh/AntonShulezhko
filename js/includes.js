function loadHTML(selector, file) {
  fetch(file)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.text();
    })
    .then((data) => {
      document.querySelector(selector).innerHTML = data;
    })
    .catch((error) => console.error("Error loading HTML file:", error));
}

document.addEventListener("DOMContentLoaded", function () {
  loadHTML("#header", "header.html");
  loadHTML("#footer", "footer.html");
  loadHTML("#reviews", "reviews.html");
});
