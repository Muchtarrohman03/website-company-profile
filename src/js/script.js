//dark/ligth mode controller
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
}

// Set default theme saat load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
});

//fixed-nav
document.addEventListener("DOMContentLoaded", function (params) {
  window.onscroll = function () {
    const header = document.querySelector(".navbar");
    if (window.pageYOffset > header) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };
});

// Carousel Controller
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;
  const intervalTime = 3000; // Waktu perpindahan (ms)

  function showSlide(index) {
    items.forEach((item, idx) => {
      if (idx === index) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
  }

  // Auto play
  let autoSlide = setInterval(nextSlide, intervalTime);

  // Mulai tampilkan slide pertama
  showSlide(currentIndex);
});

// Swiper Controller
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});
