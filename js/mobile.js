document.addEventListener("DOMContentLoaded", function () {

    const first = document.querySelector(".first");
    const second = document.querySelector(".menu-burger-line-wrapper");
    const smallFirst = document.querySelector(".small-first");
    const smallSecond = document.querySelector(".small-second");
    const third = document.querySelector(".third");
    const hamburgerMenu = document.querySelector(".menu-hamburger");
    const mainNavMobile =document.querySelector(".main-nav-mobile");

    hamburgerMenu.addEventListener("click", function () {
        switch (third.id) {
            case "rotate-right":
              first.id = "rotate-counter-left";
              second.id = "move-down";
              smallFirst.id = "rotate-counter-downward-right";
              smallSecond.id = "rotate-counter-downward-left";
              third.id = "rotate-counter-right";
              mainNavMobile.id = "display-none";
              break;
            default:
                first.id = "rotate-left";
                second.id = "move-up";
                smallFirst.id = "rotate-downward-right";
                smallSecond.id = "rotate-downward-left";
                third.id = "rotate-right";
                mainNavMobile.id = "display-block"
        }
    })


});