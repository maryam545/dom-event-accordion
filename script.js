const accordion = document.querySelector(".accordion");
accordion.addEventListener("click", function (e) {
  if (e.target.tagName === "H3") {
    const content = e.target.parentNode.querySelector(".accordion-content");
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }
});
