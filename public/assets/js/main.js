  fetch("components/header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;

      /* ================= MOBILE MENU ================= */

      const menuBtn = document.getElementById("menuBtn");
      const mobileMenu = document.getElementById("mobileMenu");

      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
          mobileMenu.classList.toggle("hidden");
        });
      }

      /* ================= ACTIVE LINK ================= */

      const currentPage = window.location.pathname.split("/").pop();
      const navLinks = document.querySelectorAll(".nav-link");

      navLinks.forEach((link) => {
        const linkPage = link.getAttribute("href")?.split("/").pop();
        if (linkPage === currentPage) {
          link.classList.add("text-primary", "font-semibold");
        }
      });

      /* ================= DROPDOWNS (DESKTOP) ================= */

      const aboutBtn = document.getElementById("aboutBtn");
      const aboutMenu = document.getElementById("aboutMenu");
      const aboutArrow = document.getElementById("aboutArrow");

      const cfpBtn = document.getElementById("cfpBtn");
      const cfpMenu = document.getElementById("cfpMenu");
      const cfpArrow = document.getElementById("cfpArrow");

      const registerBtn = document.getElementById("registerBtn");
      const registerMenu = document.getElementById("registerMenu");
      const registerArrow = document.getElementById("registerArrow");
      const mobileRegisterToggle = document.getElementById(
        "mobileRegisterToggle",
      );
      const mobileRegisterMenu = document.getElementById("mobileRegisterMenu");
      const mobileRegisterArrow = document.getElementById("mobileRegisterArrow");

      

      function closeAllDropdowns() {
        if (aboutMenu) aboutMenu.classList.add("hidden");
        if (cfpMenu) cfpMenu.classList.add("hidden");
        if (registerMenu) registerMenu.classList.add("hidden");

        if (aboutArrow) aboutArrow.classList.remove("rotate-180");
        if (cfpArrow) cfpArrow.classList.remove("rotate-180");
        if (registerArrow) registerArrow.classList.remove("rotate-180");

        
      }

      /* ===== ABOUT ===== */

      if (aboutBtn && aboutMenu) {
        aboutBtn.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();

          const isOpen = !aboutMenu.classList.contains("hidden");
          closeAllDropdowns();

          if (!isOpen) {
            aboutMenu.classList.remove("hidden");
            aboutArrow?.classList.add("rotate-180");
          }
        });
      }

      /* ===== CALL FOR PAPERS ===== */

      if (cfpBtn && cfpMenu) {
        cfpBtn.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();

          const isOpen = !cfpMenu.classList.contains("hidden");
          closeAllDropdowns();

          if (!isOpen) {
            cfpMenu.classList.remove("hidden");
            cfpArrow?.classList.add("rotate-180");
          }
        });
      }

      /* ===== REGISTER ===== */

      if (registerBtn && registerMenu) {
        registerBtn.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();

          const isOpen = !registerMenu.classList.contains("hidden");
          closeAllDropdowns();

          if (!isOpen) {
            registerMenu.classList.remove("hidden");
            registerArrow?.classList.add("rotate-180");
          }
        });
      }


      /* ===== OUTSIDE CLICK CLOSE (DESKTOP) ===== */

      document.addEventListener("click", function () {
        closeAllDropdowns();
      });

      /* ===== MOBILE CALL FOR PAPERS ===== */

      const mobileCfpToggle = document.getElementById("mobileCfpToggle");
      const mobileCfpMenu = document.getElementById("mobileCfpMenu");
      const mobileCfpArrow = document.getElementById("mobileCfpArrow");

      if (mobileCfpToggle && mobileCfpMenu) {
        mobileCfpToggle.addEventListener("click", function (e) {
          e.stopPropagation();

          mobileCfpMenu.classList.toggle("hidden");
          mobileCfpArrow?.classList.toggle("rotate-180");
        });
      }

      /* ===== MOBILE REGISTER ===== */

      if (mobileRegisterToggle && mobileRegisterMenu) {
        mobileRegisterToggle.addEventListener("click", function (e) {
          e.stopPropagation();

          mobileRegisterMenu.classList.toggle("hidden");
          mobileRegisterArrow?.classList.toggle("rotate-180");
        });
      }

      /* ===== MOBILE ABOUT ===== */

      const mobileAboutToggle = document.getElementById("mobileAboutToggle");
      const mobileAboutMenu = document.getElementById("mobileAboutMenu");
      const mobileAboutArrow = document.getElementById("mobileAboutArrow");

      if (mobileAboutToggle && mobileAboutMenu) {
        mobileAboutToggle.addEventListener("click", function (e) {
          e.stopPropagation();

          mobileAboutMenu.classList.toggle("hidden");
          mobileAboutArrow?.classList.toggle("rotate-180");
        });
      }

      
    })
