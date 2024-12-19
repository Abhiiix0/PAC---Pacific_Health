// notification banner close logic
const closeButton = document?.getElementById("notification-banner-close-btn");
const notificationBanner = document?.getElementById("notification-banner");

closeButton?.addEventListener("click", function () {
  notificationBanner.style.display = "none";
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 8, // 5 slides visible at a time
  spaceBetween: 30, // Space between slides

  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

let images = document.querySelectorAll(".slider-img");
let currentIndex = 0;

function changeImage() {
  // Remove the active class from the current image
  images[currentIndex].classList.remove("active");

  // Update the index for the next image
  currentIndex = (currentIndex + 1) % images.length;

  // Add the active class to the new image
  images[currentIndex].classList.add("active");
}

// Start the automatic image change every 3 seconds
setInterval(changeImage, 3000);

// Initially show the first image
images[currentIndex].classList.add("active");
