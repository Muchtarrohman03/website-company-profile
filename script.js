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

ocument.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".carousel-item");
  const buttons = document.querySelectorAll(".btn");
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

  // Optional: klik tombol manual
  buttons.forEach((btn, idx) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      currentIndex = idx;
      showSlide(currentIndex);

      // reset autoplay biar nggak konflik
      clearInterval(autoSlide);
      autoSlide = setInterval(nextSlide, intervalTime);
    });
  });

  // Mulai tampilkan slide pertama
  showSlide(currentIndex);
});
