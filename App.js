document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const slides = carousel.querySelectorAll(".swiper-slide");
  const pagination = document.querySelector(".swiper-pagination");

  function initializeSwiper() {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 4, // Adjust the number of slides per view
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  initializeSwiper();
});

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

document.getElementById("btn1").addEventListener("click", function () {
  document.getElementById("page1").style.display = "block";
  btn1.classList.add("Selected");
  btn2.classList.remove("Selected");
  document.getElementById("page2").style.display = "none";
});

document.getElementById("btn2").addEventListener("click", function () {
  document.getElementById("page1").style.display = "none";
  btn2.classList.add("Selected");
  btn1.classList.remove("Selected");
  document.getElementById("page2").style.display = "block";
});
