function openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
    document.getElementById("navbar-responsive").style.left = "-100%";
    // document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);
  


  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("navbar-open");
    const navMenu = document.querySelector(".header-section__right");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
