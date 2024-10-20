const accordion = document.querySelector(".accordion");
accordion.addEventListener("click", function (e) {
  if (e.target.tagName === "H3") {
    const contents = document.querySelectorAll(".accordion-content");
    contents.forEach((contents) => {
      contents.style.display = "none";
    });
    const content = e.target.nextElementSibling;
    content.style.display = "block";
  }
});
