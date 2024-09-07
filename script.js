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
  loop: false,
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
