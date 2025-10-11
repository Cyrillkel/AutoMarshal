/* ==========================================================================
   MAIN JAVASCRIPT
   ========================================================================== */

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const burger = document.querySelector(".burger");

  if (mobileMenuBtn && mobileNav && burger) {
    mobileMenuBtn.addEventListener("click", function() {
      // Toggle menu visibility
      mobileNav.classList.toggle("header__nav--active");

      // Toggle burger animation
      burger.classList.toggle("burger--active");
    });

    // Close mobile menu when clicking on links
    const mobileLinks = mobileNav.querySelectorAll(
      ".header__mobile-link, .header__mobile-btn"
    );
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function() {
        mobileNav.classList.remove("header__nav--active");
        burger.classList.remove("burger--active");
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function(event) {
      const isClickInsideMenu = mobileNav.contains(event.target);
      const isClickOnMenuBtn = mobileMenuBtn.contains(event.target);

      if (
        !isClickInsideMenu &&
        !isClickOnMenuBtn &&
        mobileNav.classList.contains("header__nav--active")
      ) {
        mobileNav.classList.remove("header__nav--active");
        burger.classList.remove("burger--active");
      }
    });

    // Close mobile menu on escape key
    document.addEventListener("keydown", function(event) {
      if (
        event.key === "Escape" &&
        mobileNav.classList.contains("header__nav--active")
      ) {
        mobileNav.classList.remove("header__nav--active");
        burger.classList.remove("burger--active");
      }
    });
  }
});

// Desktop dropdown menu functionality
document.addEventListener("DOMContentLoaded", function() {
  const dropdown = document.querySelector(".header__dropdown");
  const dropdownMenu = document.querySelector(".header__dropdown-menu");
  const dropdownTrigger = document.querySelector(".header__nav-link--dropdown");

  // Toggle dropdown menu on click/touch for tablets
  if (dropdownTrigger && dropdownMenu) {
    dropdownTrigger.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();

      // Close other dropdowns first
      document.querySelectorAll(".header__dropdown-menu").forEach((menu) => {
        if (menu !== dropdownMenu) {
          menu.classList.remove("header__dropdown-menu--active");
        }
      });

      // Toggle current dropdown
      dropdownMenu.classList.toggle("header__dropdown-menu--active");
    });

    // Prevent dropdown from closing when clicking inside it
    dropdownMenu.addEventListener("click", function(e) {
      e.stopPropagation();
    });
  }

  // Toggle submenu visibility
  const dropdownItems = document.querySelectorAll(
    ".header__dropdown-item--parent"
  );
  const subitems = document.querySelectorAll(".header__dropdown-subitem");

  dropdownItems.forEach((item) => {
    item.addEventListener("click", function(e) {
      e.stopPropagation(); // Prevent closing dropdown
      const submenu = this.nextElementSibling;
      const arrow = this.querySelector(".header__dropdown-arrow");

      if (submenu) {
        submenu.classList.toggle("header__dropdown-submenu--active");
        arrow.classList.toggle("header__dropdown-arrow--active");
      }
    });
  });

  subitems.forEach((item) => {
    item.addEventListener("click", function(e) {
      e.stopPropagation(); // Prevent closing dropdown
      const subsubmenu = this.nextElementSibling;
      const arrow = this.querySelector(".header__dropdown-arrow");

      if (subsubmenu) {
        subsubmenu.classList.toggle("header__dropdown-subsubmenu--active");
        arrow.classList.toggle("header__dropdown-arrow--active");
      }
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function(e) {
    // Add small delay to prevent immediate closing
    setTimeout(() => {
      // Check if click is outside dropdown AND not on dropdown items
      const isClickOnDropdownItem = e.target.closest(
        ".header__dropdown-item, .header__dropdown-subitem, .header__dropdown-link"
      );

      if (dropdown && !dropdown.contains(e.target) && !isClickOnDropdownItem) {
        dropdownMenu.classList.remove("header__dropdown-menu--active");
      }
    }, 10);
  });
});

// Функция для скачивания всех документов
function downloadAllDocuments() {
  // Список документов для скачивания
  const documents = [
    {
      url: "assets/documents/dogovor-kupli-prodazhi.pdf",
      filename: "Договор купли-продажи.pdf",
    },
    {
      url: "assets/documents/dogovor-komissii.pdf",
      filename: "Договор комиссии.pdf",
    },
    {
      url: "assets/documents/dogovor-obmena.pdf",
      filename: "Договор обмена.pdf",
    },
  ];

  // Скачиваем каждый документ
  documents.forEach((doc, index) => {
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = doc.url;
      link.download = doc.filename;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, index * 500); // Задержка между скачиваниями
  });
}

// Mobile dropdown menu functionality
document.addEventListener("DOMContentLoaded", function() {
  // Mobile dropdown trigger
  const mobileDropdownTrigger = document.querySelector(
    ".header__mobile-dropdown-trigger"
  );
  const mobileDropdownContent = document.querySelector(
    ".header__mobile-dropdown-content"
  );
  const mobileDropdownArrow = document.querySelector(
    ".header__mobile-dropdown-arrow"
  );

  if (mobileDropdownTrigger && mobileDropdownContent && mobileDropdownArrow) {
    mobileDropdownTrigger.addEventListener("click", function() {
      mobileDropdownContent.classList.toggle(
        "header__mobile-dropdown-content--active"
      );
      mobileDropdownArrow.classList.toggle(
        "header__mobile-dropdown-arrow--active"
      );
    });
  }

  // Mobile dropdown items
  const mobileDropdownItems = document.querySelectorAll(
    ".header__mobile-dropdown-item"
  );
  const mobileSubitems = document.querySelectorAll(
    ".header__mobile-dropdown-subitem"
  );

  mobileDropdownItems.forEach((item) => {
    item.addEventListener("click", function() {
      const submenu = this.nextElementSibling;
      const arrow = this.querySelector(".header__mobile-dropdown-arrow");

      if (submenu) {
        submenu.classList.toggle("header__mobile-dropdown-submenu--active");
        arrow.classList.toggle("header__mobile-dropdown-arrow--active");
      }
    });
  });

  mobileSubitems.forEach((item) => {
    item.addEventListener("click", function() {
      const subsubmenu = this.nextElementSibling;
      const arrow = this.querySelector(".header__mobile-dropdown-arrow");

      if (subsubmenu) {
        subsubmenu.classList.toggle(
          "header__mobile-dropdown-subsubmenu--active"
        );
        arrow.classList.toggle("header__mobile-dropdown-arrow--active");
      }
    });
  });
});

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// FAQ toggle functionality
function toggleFAQ(index) {
  const faqItems = document.querySelectorAll(".faq__item");
  const item = faqItems[index];
  if (!item) return;

  const answer = item.querySelector(".faq__answer");
  const icon = item.querySelector(".faq__icon");

  if (answer && icon) {
    // Check if current item is already active
    const isActive = item.classList.contains("active");

    // Close all other FAQ items first
    document.querySelectorAll(".faq__item").forEach((faqItem) => {
      faqItem.classList.remove("active");
      const faqAnswer = faqItem.querySelector(".faq__answer");
      if (faqAnswer) {
        faqAnswer.classList.remove("faq__answer--active");
      }
    });

    // If current item was not active, open it
    if (!isActive) {
      item.classList.add("active");
      answer.classList.add("faq__answer--active");
    }
  }
}

// Animated counters
function animateCounters() {
  const counters = document.querySelectorAll("[data-count]");
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-count"));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current);
      }
    }, 16);
  });
}

// Fade in animation on scroll
document.addEventListener("DOMContentLoaded", function() {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          // Animate counters when statistics section comes into view
          if (entry.target.closest(".statistics")) {
            animateCounters();
          }
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  fadeElements.forEach((element) => {
    observer.observe(element);
  });
});

// Initialize Swiper for fresh arrivals
document.addEventListener("DOMContentLoaded", function() {
  const freshSwiper = new Swiper(".fresh__swiper", {
    // Optional parameters
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 600,

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.3,
        spaceBetween: 15,
        centeredSlides: false,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2.5,
        spaceBetween: 15,
        centeredSlides: false,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3.4,
        spaceBetween: 15,
        centeredSlides: false,
      },
      // when window width is >= 1280px
      1280: {
        slidesPerView: 4.5,
        spaceBetween: 15,
        centeredSlides: false,
      },
    },

    // Effects
    effect: "slide",
    grabCursor: true,

    // Keyboard control
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    // Accessibility
    a11y: {
      enabled: true,
      prevSlideMessage: "Предыдущий слайд",
      nextSlideMessage: "Следующий слайд",
      firstSlideMessage: "Это первый слайд",
      lastSlideMessage: "Это последний слайд",
    },
  });
});
