// Brands' Carousel

$(".carousel .carousel-item").each(function () {
  var minPerSlide = 3;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});

// Advertisements' Carousel

const carouselSlide = document.querySelector(".carousel-slide");
const carouselDivs = document.querySelectorAll(".carousel-slide>div");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = carouselDivs[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", moveForward);
prevBtn.addEventListener("click", moveBackward);

function moveForward() {
  if (counter >= carouselDivs.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
}

function moveBackward() {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
}

carouselSlide.addEventListener("transitionend", checkDivId);

function checkDivId() {
  if (carouselDivs[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselDivs.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }

  if (carouselDivs[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselDivs.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
}
