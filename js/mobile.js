document.addEventListener("DOMContentLoaded", function () {

    const first = document.querySelector(".first");
    const second = document.querySelector(".second");
    const third = document.querySelector(".third");
    const hamburgerMenu = document.querySelector(".menu-hamburger");

    hamburgerMenu.addEventListener("click", function () {
        switch (third.id) {
            case "move-up":
              first.id = "rotate-counter-left";
              third.id = "move-down";
              break;
            default:
                first.id = "rotate-left";
                third.id = "move-up";
        }
    })


});