const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("navigation");
menuButton.addEventListener("click", () => {
        menuButton.classList.toggle("active");
        menu.classList.toggle("active");
    }
);