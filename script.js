document.addEventListener("DOMContentLoaded", function () {
  function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "flex";
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "none";
  }

  window.showLogin = () => {
    closeModal("signupModal");
    openModal("loginModal");
  };

  window.showSignup = () => {
    closeModal("loginModal");
    openModal("signupModal");
  };
  document.getElementById("joinUsBtn")?.addEventListener("click", showLogin);
  document.getElementById("signInBtn")?.addEventListener("click", showSignup);
  document
    .getElementById("loginForm")
    ?.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Login attempted");
      closeModal("loginModal");
      this.reset();
    });

  document
    .getElementById("signupForm")
    ?.addEventListener("submit", function (e) {
      e.preventDefault();
      const pass = document.getElementById("signupPassword").value;
      const confirm = document.getElementById("confirmPassword").value;
      if (pass !== confirm) {
        alert("Passwords do not match!");
        return;
      }
      alert("Sign up attempted");
      closeModal("signupModal");
      this.reset();
    });

  window.addEventListener("click", function (e) {
    if (e.target.id === "loginModal") closeModal("loginModal");
    if (e.target.id === "signupModal") closeModal("signupModal");
  });

  const scrollBtn = document.getElementById("scrollToTopBtn");
  window.onscroll = function () {
    scrollBtn.style.display =
      document.documentElement.scrollTop > 300 ? "block" : "none";
  };
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document
    .getElementById("newsletter-form")
    ?.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("newsletter-email").value;
      alert(`Thanks for subscribing: ${email}`);
      e.target.reset();
    });

  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");

  searchInput.addEventListener("input", performSearch);
  searchButton?.addEventListener("click", performSearch);
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") performSearch();
  });

  function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    const allSlides = document.querySelectorAll(".swiper-slide");

    let found = false;

    allSlides.forEach((slide) => {
      const keywords = slide.dataset.title?.toLowerCase() || "";
      if (keywords.includes(query)) {
        slide.style.display = "flex";
        found = true;
      } else {
        slide.style.display = "none";
      }
    });
    window.latestTrendingSwiper?.update();
    window.mensSwiper?.update();
    window.womensSwiper?.update();
    window.gearSwiper?.update();

    document.getElementById("noResultsMessage").style.display = found
      ? "none"
      : "block";
  }
  
  initializeSwipers();
  initializeThemeToggle();
});

function initializeThemeToggle() {
  console.log('Initializing theme toggle...');
  
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const html = document.documentElement;

  console.log('Theme toggle button:', themeToggle);
  console.log('Theme icon:', themeIcon);

  if (!themeToggle || !themeIcon) {
    console.error('Theme toggle elements not found!');
    return;
  }

  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  console.log('Current theme:', currentTheme);
  
  // Apply the saved theme
  if (currentTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    themeIcon.className = 'ri-sun-line';
    console.log('Applied dark theme to HTML element');
  } else {
    html.removeAttribute('data-theme');
    themeIcon.className = 'ri-moon-line';
    console.log('Applied light theme to HTML element');
  }

  // Theme toggle event listener
  themeToggle.addEventListener('click', () => {
    console.log('Theme toggle clicked!');
    const isDark = html.getAttribute('data-theme') === 'dark';
    console.log('Is currently dark:', isDark);
    
    if (isDark) {
      // Switch to light mode
      html.removeAttribute('data-theme');
      themeIcon.className = 'ri-moon-line';
      localStorage.setItem('theme', 'light');
      console.log('Switched to light mode');
    } else {
      // Switch to dark mode
      html.setAttribute('data-theme', 'dark');
      themeIcon.className = 'ri-sun-line';
      localStorage.setItem('theme', 'dark');
      console.log('Switched to dark mode');
    }
  });

  console.log('Theme toggle initialized successfully');
}

function initializeSwipers() {
  // Simple, direct Swiper configuration focused on touch
  const swiperConfig = (id) => ({
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
    
    // Essential touch settings
    simulateTouch: true,
    allowTouchMove: true,
    touchRatio: 1,
    grabCursor: true,
    
    // Very low threshold for immediate response
    threshold: 0,
    
    // Enable free mode for smooth swiping
    freeMode: true,
    
    // Pagination
    pagination: {
      el: `${id} .swiper-pagination`,
      clickable: true
    },
    
    // Responsive breakpoints
    breakpoints: {
      480: { slidesPerView: 1.5 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 2.5 },
      1024: { slidesPerView: 3 }
    }
  });


  if (window.latestTrendingSwiper)
    window.latestTrendingSwiper.destroy(true, true);
  if (window.mensSwiper) window.mensSwiper.destroy(true, true);
  if (window.womensSwiper) window.womensSwiper.destroy(true, true);
  if (window.gearSwiper) window.gearSwiper.destroy(true, true);

  window.latestTrendingSwiper = new Swiper(
    "#latest-trending-swiper",
    swiperConfig("#latest-trending-swiper")
  );
  window.mensSwiper = new Swiper("#mens-swiper", swiperConfig("#mens-swiper"));
  window.womensSwiper = new Swiper(
    "#womens-swiper",
    swiperConfig("#womens-swiper")
  );
  window.gearSwiper = new Swiper("#gear-swiper", swiperConfig("#gear-swiper"));
}
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "none";
}
window.closeModal = closeModal;

document.getElementById("card1")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/air-jordan-1-retro-high-og-shoes-Pz6fZ9/DZ5485-008",
    "_blank"
  );
});
document.getElementById("card2")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/air-jordan-1-high-og-older-shoes-2xBRSk/FD1437-008",
    "_blank"
  );
});
document.getElementById("Card1")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/jordan-1-retro-high-og-younger-shoes-KnJFC8/FD1412-008",
    "_blank"
  );
});
document.getElementById("Card2")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/air-jordan-3-retro-starfish-shoes-YZg0F0jV/IH7694-200",
    "_blank"
  );
});
document.getElementById("Card3")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/air-jordan-40-pf-classic-basketball-shoes-jJIHTmH6/HM9932-100",
    "_blank"
  );
});
document.getElementById("Card4")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/air-jordan-1-low-easyon-shoes-SsT4HK/DM1206-081",
    "_blank"
  );
});
document.getElementById("card3")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/luka-4-pf-navidor-basketball-shoes-M6yhndIJ/HF0824-400",
    "_blank"
  );
});
document.getElementById("card4")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/luka-77-pf-navidor-basketball-shoes-MlPLwJ/HF0819-006",
    "_blank"
  );
});
document.getElementById("card5")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/jordan-bloyal-shoes-MmK5sN/315317-026",
    "_blank"
  );
});
document.getElementById("card6")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/air-jordan-4-retro-white-cement-shoes-jG6CSt/FV5029-100",
    "_blank"
  );
});
document.getElementById("card7")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/jordan-stay-loyal-shoes-PBnr0N/DB2884-101",
    "_blank"
  );
});
document.getElementById("card8")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/jordan-max-aura-7-shoes-p0cy7ZmC/HQ2091-100",
    "_blank"
  );
});

document.getElementById("CARD1")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/jordan-trunner-lx-shoes-Xwg6vKYH/IM6531-001",
    "_blank"
  );
});
document.getElementById("CARD2")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/air-jordan-1-low-method-of-make-shoes-hRcJVSQO/HQ2186-002",
    "_blank"
  );
});
document.getElementById("CARD3")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/air-jordan-1-low-method-of-make-shoes-hRcJVSQO/HQ2186-180",
    "_blank"
  );
});
document.getElementById("CARD4")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/jordan-cmft-era-shoes-0wIhoFyp/HJ6778-002",
    "_blank"
  );
});
document.getElementById("CARD5")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/air-jordan-1-low-shoes-THijFqKo/IH7323-100",
    "_blank"
  );
});
document.getElementById("CARD6")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/air-jordan-4-rm-shoes-R5w3LP/IB7408-133",
    "_blank"
  );
});

document.getElementById("CARD-1")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/heritage-winterized-eugene-backpack-j3gMBX/DN3592-010",
    "_blank"
  );
});
document.getElementById("CARD-2")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/utility-2-gymsack-XCz5fl/FN4207-010",
    "_blank"
  );
});
document.getElementById("CARD-3")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/dri-fit-club-unstructured-metal-swoosh-cap-tBjXv8/FB5372-010",
    "_blank"
  );
});
document.getElementById("CARD-4")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/everyday-lightweight-training-crew-socks-Gvl3WS/SX7676-100",
    "_blank"
  );
});
document.getElementById("CARD-5")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/tech-windrunner-hoodie-5CxKH2/HV0950-063",
    "_blank"
  );
});
document.getElementById("CARD-6")?.addEventListener("click", () => {
  window.open(
    "https://www.nike.com/in/t/wnba-fleece-pullover-hoodie-HOYMj8wG/DR9596-820",
    "_blank"
  );
});
document.getElementById("shop-button")?.addEventListener("click", () => {
  window.open("https://www.nike.com/in/jordan", "_blank");
});
