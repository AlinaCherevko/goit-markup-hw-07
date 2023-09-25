const ulEl = document.querySelector(".portfolio-list");
// console.log(ulEl);

const picturesEl = document.querySelectorAll(".portfolio-picture-item");
// console.log(picturesEl);

ulEl.addEventListener("click", onFilterButtonClick);

function onFilterButtonClick(event) {
  if (event.target.tagName !== "BUTTON") return;
  let attributeName = event.target.dataset.f;

  console.log(attributeName);
  picturesEl.forEach((el) => {
    el.classList.remove("hide");
    if (!el.classList.contains(attributeName) & (attributeName !== "all"))
      el.classList.add("hide");
  });
}
