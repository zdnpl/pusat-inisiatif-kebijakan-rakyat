document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("main-navbar");
    const spacer = document.getElementById("navbar-spacer");
            
    window.addEventListener("scroll", function() {
            // page discroll > 50px
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scrolled");
            spacer.style.height = navbar.offsetHeight + "px";
        } else {
            // balik scroll ke atas
            navbar.classList.remove("navbar-scrolled");
            spacer.style.height = "0px";
        }
    });
});