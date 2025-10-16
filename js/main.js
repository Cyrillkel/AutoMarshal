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

  // Initialize Swiper for reviews
  const reviewsSwiper = new Swiper(".reviews__swiper", {
    // Optional parameters
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 500,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews__button-next",
      prevEl: ".reviews__button-prev",
    },

    // Pagination
    pagination: {
      el: ".reviews__pagination",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
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
      prevSlideMessage: "Предыдущий отзыв",
      nextSlideMessage: "Следующий отзыв",
      firstSlideMessage: "Это первый отзыв",
      lastSlideMessage: "Это последний отзыв",
    },
  });
});

// Calculator functionality
function calculateCost() {
  const brand = document.getElementById("calcBrand");
  const year = document.getElementById("calcYear");
  const mileage = document.getElementById("calcMileage");
  const condition = document.getElementById("calcCondition");
  const resultDiv = document.getElementById("calcResult");

  // Check if all fields are filled
  if (!brand.value || !year.value || !mileage.value || !condition.value) {
    resultDiv.innerHTML = `
      <div class="calculator__result-icon">⚠️</div>
      <p class="calculator__result-text">Пожалуйста, заполните все поля</p>
    `;
    return;
  }

  // Get coefficients
  const brandCoeff = parseFloat(brand.selectedOptions[0].dataset.coeff);
  const conditionCoeff = parseFloat(condition.selectedOptions[0].dataset.coeff);

  // Base calculation
  const currentYear = new Date().getFullYear();
  const carAge = currentYear - parseInt(year.value);
  const mileageValue = parseInt(mileage.value);

  // Base price calculation (simplified formula)
  let basePrice = 500000; // Base price in rubles

  // Adjust for age (newer cars are more expensive)
  const ageMultiplier = Math.max(0.3, 1 - carAge * 0.05);

  // Adjust for mileage (lower mileage = higher price)
  const mileageMultiplier = Math.max(0.4, 1 - mileageValue / 200000);

  // Calculate final price
  const finalPrice = Math.round(
    basePrice * brandCoeff * conditionCoeff * ageMultiplier * mileageMultiplier
  );

  // Format price
  const formattedPrice = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(finalPrice);

  // Show result
  resultDiv.innerHTML = `
    <div class="calculator__result-icon">💰</div>
    <h4 style="font-size: 1.5rem; font-weight: bold; color: #10b981; margin: 0 0 0.5rem;">${formattedPrice}</h4>
    <p class="calculator__result-text">Примерная стоимость вашего автомобиля</p>
    <div style="margin-top: 1rem; padding: 0.75rem; background: #f0fdf4; border-radius: 0.375rem; font-size: 0.875rem; color: #166534;">
      <strong>Обратите внимание:</strong> Это предварительная оценка. Точную стоимость можно узнать после осмотра автомобиля нашим специалистом.
    </div>
  `;
}

// Quiz functionality
document.addEventListener("DOMContentLoaded", function() {
  const quizContainer = document.getElementById("quiz");
  const progressFill = document.getElementById("quizProgress");
  const quizForm = document.getElementById("quizForm");
  const recommendationDiv = document.getElementById("quizRecommendation");

  if (!quizContainer || !progressFill) return;

  let currentStep = 1;
  const totalSteps = 3;
  const answers = {};

  // Initialize quiz
  function initQuiz() {
    showStep(1);
    updateProgress();
  }

  // Show specific step
  function showStep(step) {
    const steps = quizContainer.querySelectorAll(".quiz__step");
    steps.forEach((stepEl, index) => {
      if (index + 1 === step) {
        stepEl.classList.add("quiz__step--active");
      } else {
        stepEl.classList.remove("quiz__step--active");
      }
    });
  }

  // Update progress bar
  function updateProgress() {
    const progress = (currentStep / totalSteps) * 100;
    progressFill.style.width = `${progress}%`;
  }

  // Handle option selection
  function selectOption(step, value) {
    answers[`step${step}`] = value;

    if (currentStep < totalSteps) {
      currentStep++;
      showStep(currentStep);
      updateProgress();
    } else {
      showResult();
    }
  }

  // Show result
  function showResult() {
    currentStep = 4; // result step
    showStep(4);
    updateProgress();
    generateRecommendation();
  }

  // Generate recommendation based on answers
  function generateRecommendation() {
    const brand = answers.step1;
    const condition = answers.step2;
    const urgency = answers.step3;

    let recommendation = "";

    // Brand-based recommendations
    if (brand === "japanese") {
      recommendation +=
        "🇯🇵 <strong>Японские автомобили</strong> - отличный выбор! Toyota, Honda, Nissan пользуются высоким спросом на рынке.<br><br>";
    } else if (brand === "german") {
      recommendation +=
        "🇩🇪 <strong>Немецкие автомобили</strong> - премиум сегмент с хорошей ликвидностью. BMW, Mercedes, Audi всегда востребованы.<br><br>";
    } else if (brand === "korean") {
      recommendation +=
        "🇰🇷 <strong>Корейские автомобили</strong> - отличное соотношение цена/качество. Kia и Hyundai быстро продаются.<br><br>";
    } else if (brand === "chinese") {
      recommendation +=
        "🇨🇳 <strong>Китайские автомобили</strong> - растущий сегмент с хорошим соотношением цена/качество. Geely, Chery, Haval набирают популярность.<br><br>";
    } else if (brand === "french") {
      recommendation +=
        "🇫🇷 <strong>Французские автомобили</strong> - комфортные и экономичные. Renault, Peugeot, Citroën имеют своих поклонников.<br><br>";
    } else if (brand === "italian") {
      recommendation +=
        "🇮🇹 <strong>Итальянские автомобили</strong> - стильные и надежные. Fiat, Alfa Romeo, Lancia ценятся за дизайн и характер.<br><br>";
    } else if (brand === "american") {
      recommendation +=
        "🇺🇸 <strong>Американские автомобили</strong> - мощные и комфортные. Ford, Chevrolet популярны среди любителей больших авто.<br><br>";
    } else if (brand === "russian") {
      recommendation +=
        "🇷🇺 <strong>Отечественные автомобили</strong> - доступная цена и простота обслуживания привлекают покупателей.<br><br>";
    } else if (brand === "other") {
      recommendation +=
        "🌍 <strong>Другие марки</strong> - мы работаем с автомобилями любых марок и моделей. Каждый автомобиль уникален!<br><br>";
    }

    // Condition-based recommendations
    if (condition === "excellent") {
      recommendation +=
        "✨ <strong>Отличное состояние</strong> - ваш автомобиль в идеальном состоянии! Это значительно повышает его стоимость.<br><br>";
    } else if (condition === "good") {
      recommendation +=
        "👍 <strong>Хорошее состояние</strong> - мелкие дефекты не критичны, автомобиль легко продать.<br><br>";
    } else if (condition === "repair") {
      recommendation +=
        "🔧 <strong>Требует ремонта</strong> - мы выкупаем автомобили в любом состоянии, включая требующие ремонта.<br><br>";
    } else if (condition === "damaged") {
      recommendation +=
        "💥 <strong>После ДТП</strong> - даже битые автомобили имеют ценность. Мы оценим и предложим справедливую цену.<br><br>";
    }

    // Urgency-based recommendations
    if (urgency === "urgent") {
      recommendation +=
        "🚨 <strong>Срочная продажа</strong> - мы готовы выехать сегодня! Быстрая оценка и моментальная выплата.<br><br>";
    } else if (urgency === "week") {
      recommendation +=
        "📅 <strong>Продажа в течение недели</strong> - у нас есть время для детальной оценки и подготовки документов.<br><br>";
    } else if (urgency === "considering") {
      recommendation +=
        "🤔 <strong>Изучение вариантов</strong> - отличное решение! Сравните наши условия с другими предложениями.<br><br>";
    }

    recommendation +=
      "💡 <strong>Наше предложение:</strong> Бесплатная оценка, выезд специалиста, честная цена до 98% рыночной стоимости, моментальная выплата наличными или на карту.";

    recommendationDiv.innerHTML = recommendation;
  }

  // Handle form submission
  if (quizForm) {
    quizForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const formData = new FormData(quizForm);
      const name =
        formData.get("name") ||
        quizForm.querySelector('input[type="text"]').value;
      const phone =
        formData.get("phone") ||
        quizForm.querySelector('input[type="tel"]').value;

      if (name && phone) {
        // Here you would typically send the data to your server
        alert(
          `Спасибо, ${name}! Мы свяжемся с вами по телефону ${phone} в ближайшее время.`
        );

        // Reset quiz
        currentStep = 1;
        answers = {};
        initQuiz();
        quizForm.reset();
      }
    });
  }

  // Add event listeners to quiz options
  const quizOptions = quizContainer.querySelectorAll(".quiz__option");
  quizOptions.forEach((option) => {
    option.addEventListener("click", function() {
      const step = this.closest(".quiz__step").dataset.step;
      const value = this.dataset.value;

      if (step && value) {
        selectOption(parseInt(step), value);
      }
    });
  });

  // Initialize quiz on page load
  initQuiz();
});

// Special Offer Countdown
document.addEventListener("DOMContentLoaded", function() {
  const countdownElement = document.getElementById("countdown");

  if (!countdownElement) return;

  // Set the end date (end of current month)
  const now = new Date();
  const endOfMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
    23,
    59,
    59
  );

  function updateCountdown() {
    const now = new Date();
    const timeLeft = endOfMonth - now;

    if (timeLeft <= 0) {
      countdownElement.innerHTML = "Акция завершена";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  // Update countdown every second
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
