// Selectors
const navbarNav = document.querySelector(".navbar-nav");
const hamburgermenu = document.querySelector("#hamburgermenu");
const navbarLinks = document.querySelectorAll(".navbar-nav a");
const logo = document.querySelector(".navbar-logo");
const swiperWrapper = document.querySelector(".swiper-wrapper");
const clientCards = document.querySelectorAll(".client-card");
const questions = document.querySelectorAll(".qna-question");

// Toggle navbar navigation on hamburger menu click
hamburgermenu.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Remove navbar navigation on outside click
document.addEventListener("click", function (e) {
  if (!hamburgermenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Tambahkan kode ini pada file script.js Anda
const hero = document.querySelector(".hero-parallax");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Tambahkan kode ini pada file script.js Anda
ScrollReveal().reveal(".hero-parallax", {
  origin: "top",
  distance: "100px",
  duration: 1000,
  delay: 0,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  mobile: true,
  reset: false,
  useDelay: "always",
  viewFactor: 0.25,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
});

// Initialize Swipers
const swiperCoverflow = new Swiper(".swiper-coverflow", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centerSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    depth: 200,
    modifier: 0.5,
    scale: 0.7,
    slideShadows: false,
    stretch: -100,
  },
});

const swiperMultiSlides = new Swiper(".swiper-multi-slides", {
  grabCursor: true,
  centerSlides: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  loop: true,
});

// Function to add a new menu item
function tambahkanMenu(namaMenu, harga, urlGambar) {
  harga = harga.replace(",", "."); // Replace comma with dot
  const menuBaru = document.createElement("div");
  menuBaru.classList.add("swiper-slide");
  menuBaru.innerHTML = `
    <div class="store-card">
      <h4>${namaMenu}</h4>
      <img src="${urlGambar}" alt="store" />
      <h3>Harga - <span>Rp</span>${harga}</h3>
    </div>
  `;
  swiperWrapper.appendChild(menuBaru);
  swiperCoverflow.update(); // Update Swiper
}

// Adding menu items
tambahkanMenu("Mie Telur", "15.000", "menu6.png");
tambahkanMenu("Dodol Buah Naga", "25.000", "menu7.png");
tambahkanMenu("Kopi", "15.000", "menu8.png");

// Client card interaction
clientCards.forEach((card) => {
  let startX;

  card.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  card.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - startX;
    if (Math.abs(diffX) > 30) {
      card.classList.add("active");
      setTimeout(() => card.classList.remove("active"), 500);
    }
  });

  card.addEventListener("click", () => {
    card.classList.add("active");
    setTimeout(() => card.classList.remove("active"), 500);
  });
});

// FAQ interaction
questions.forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    const isActive = faqItem.classList.contains("active");

    document.querySelectorAll(".qna-item").forEach((item) => {
      item.classList.remove("active");
    });

    if (!isActive) {
      faqItem.classList.add("active");
    }
  });
});

// Smooth scrolling function
const scrollAnimation = (targetPosition) => {
  const currentPosition = window.scrollY;
  const distance = targetPosition - currentPosition;
  const duration = 500;

  const easing = (t) => {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  };

  const startTime = new Date().getTime();

  const animate = () => {
    const currentTime = new Date().getTime();
    const elapsed = currentTime - startTime;
    const progress = elapsed / duration;
    const position = currentPosition + distance * easing(Math.min(progress, 1));

    window.scrollTo(0, position);

    if (elapsed < duration) {
      requestAnimationFrame(animate);
    }
  };

  animate();
};

// Add event listener to logo
logo.addEventListener("click", (e) => {
  e.preventDefault();
  const href = logo.getAttribute("href");
  const target = document.querySelector(href);
  scrollAnimation(target.offsetTop);
});

// Add event listener to navbar links
navbarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    const target = document.querySelector(href);
    target.scrollIntoView({ behavior: "smooth" });
  });
});

ScrollReveal().reveal(".hero .content h1", {
  origin: "left",
  distance: "100px",
  duration: 1000,
  delay: 200,
});

ScrollReveal().reveal(".hero .content p", {
  origin: "right",
  distance: "100px",
  duration: 1000,
  delay: 400,
});

ScrollReveal().reveal(".hero .content .cta", {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  delay: 600,
});

// Untuk elemen lain di halaman
ScrollReveal().reveal(".navbar", {
  origin: "top",
  distance: "50px",
  duration: 1000,
  delay: 100,
});

ScrollReveal().reveal(".store-card", {
  origin: "right",
  distance: "50px",
  duration: 1500,
  interval: 250,
});

ScrollReveal().reveal(".about-header-line", {
  origin: "top",
  distance: "50px",
  duration: 1000,
  interval: 200,
});

ScrollReveal().reveal(".about-img", {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  interval: 200,
});

ScrollReveal().reveal(".content", {
  origin: "right",
  distance: "60px",
  duration: 2000,
  interval: 200,
});

ScrollReveal().reveal(".text-with-line", {
  origin: "left",
  distance: "60px",
  duration: 1000,
  interval: 200,
});

ScrollReveal().reveal(".p-menu", {
  origin: "right",
  distance: "60px",
  duration: 1000,
  interval: 200,
});

ScrollReveal().reveal(".qna", {
  origin: "top",
  distance: "80px",
  duration: 1000,
  interval: 200,
});

ScrollReveal().reveal(".qna-item", {
  origin: "right",
  distance: "60px",
  duration: 1000,
  interval: 200,
});

ScrollReveal().reveal(".testi-header-line", {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  interval: 200,
});

ScrollReveal().reveal(".section-subheader", {
  origin: "bottom",
  distance: "60px",
  duration: 1200,
  interval: 200,
});

ScrollReveal().reveal(".swiper-wrapper", {
  origin: "right",
  distance: "70px",
  duration: 1000,
  interval: 200,
});

ScrollReveal().reveal(".kontak-info", {
  origin: "top",
  distance: "50px",
  duration: 1000,
  interval: 200,
});

ScrollReveal().reveal(".fa-phone, .fa-envelope, .fa-map-marker", {
  origin: "left",
  distance: "50px",
  duration: 1000,
  interval: 200,
});

ScrollReveal().reveal(".map-wrapper", {
  origin: "bottom",
  distance: "70px",
  duration: 1000,
  interval: 200,
});

ScrollReveal().reveal(".footer", {
  origin: "bottom",
  distance: "70px",
  duration: 1500,
  interval: 200,
});

ScrollReveal().reveal(".footer-container", {
  origin: "top",
  distance: "60px",
  duration: 1000,
  interval: 200,
});
