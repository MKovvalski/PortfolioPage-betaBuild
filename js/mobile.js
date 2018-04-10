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
    });

    // mobile header smooth scrolling ------ //

    const mobileHeaderAbout = document.querySelector(".header-mobile-about");
    const mobileHeaderSkills = document.querySelector(".header-mobile-skills");
    const mobileHeaderProjects = document.querySelector(".header-mobile-projects");
    const mobileHeaderContacts = document.querySelector(".header-mobile-contact");

    // disclaimer - I did not write the smoothscroll - got it form stackoverflow

    window.smoothScroll = function(target) {
        var scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop === 0);

        var targetY = 0;
        do { //find the top of target relatively to the container
            if (target === scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);

        scroll = function(c, a, b, i) {
            i++; if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function(){ scroll(c, a, b, i); }, 20);
        };
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
    };

    function mobileScrolling (element, scrollElement) {
        element.addEventListener("click", function () {
            smoothScroll(document.getElementById(scrollElement));
        })
    }

    mobileScrolling(mobileHeaderAbout, 'about');
    mobileScrolling(mobileHeaderSkills, 'skills');
    mobileScrolling(mobileHeaderProjects, 'projects');
    mobileScrolling(mobileHeaderContacts, 'contact');
    
});