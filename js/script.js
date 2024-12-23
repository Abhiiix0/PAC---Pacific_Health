// Async function to load HTML content into a div
async function loadHTML(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    const data = await response.text();
    document.getElementById(elementId).innerHTML = data;

    // If you're loading the footer, initialize the form validation after loading
    if (elementId === "footer") {
      initializeFormValidation(); // Call the function to initialize form validation
    }
  } catch (error) {
    console.error("Error loading HTML:", error);
  }
}

// Separate function for initializing the form validation
function initializeFormValidation() {
  const validationLoginForm = new JustValidate("#newsletter-form");
  const loginform = document.getElementById("newsletter-form");

  if (!loginform) {
    console.error("Newsletter form not found!");
    return; // Exit if form is not found
  }

  validationLoginForm
    .addField('input[name="email"]', [
      { rule: "required", errorMessage: " " },
      { rule: "email", errorMessage: " " },
    ])
    .onSuccess((event) => {
      // Collect form data
      const formData = new FormData(event.target);
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });

      console.log(formObject);
      alert("Form submitted successfully");
      loginform.reset();
    })
    .onFail((event) => {
      console.log("Form validation failed");
    });
}

// Load header and footer
loadHTML("header", "/components/header.html");
loadHTML("footer", "/components/footer.html");

// swiper slider initialization
if (typeof Swiper !== "undefined") {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 8,
    spaceBetween: 30,
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}
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
