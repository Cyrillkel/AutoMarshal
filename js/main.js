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
