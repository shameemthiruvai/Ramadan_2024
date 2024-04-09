// Kindly view in full screen mode for better experience

let sun = document.querySelector("#sun");
let sunContainer = document.querySelector("#sunContainer");
let starsContainer = document.querySelector("#starsContainer");
let body = document.querySelector("body");
let wishes = document.querySelector("#wishes");
let mosqueImg = document.querySelector("#mosqueImage");
let moonContainer = document.querySelector("#moonContainer");

sun.addEventListener("click", () => {
  console.log("clicked on sun");
  body.classList.add("bg-dark");
  sunContainer.classList.add("slideOutLeft");
  moonContainer.classList.add("slideInDown");
  wishes.style.display = "block";
  wishes.classList.add("slideInDown");
  mosqueImg.style.opacity = 1;

  setTimeout(function () {
    sunContainer.style.display = "none";

    moonContainer.classList.remove("slideOutUp");
    moonContainer.style.display = "flex";
  }, 3000);

  setTimeout(function () {
    starsContainer.style.display = "block";
  }, 7000);
});

moonContainer.addEventListener("click", () => {
  console.log("clicked on moon");

  moonContainer.classList.add("slideOutUp");
  sunContainer.classList.remove("slideOutLeft");

  wishes.style.display = "none";
  setTimeout(function () {
    sunContainer.classList.add("slideInDown");
    body.classList.remove("bg-dark");
    body.classList.add("bg-white");
    sunContainer.style.display = "flex";
    starsContainer.style.display = "none";
    mosqueImg.style.opacity = 0.1;
    moonContainer.style.display = "none";
  }, 3000);
});

// Kindly view in full screen mode for better experience
