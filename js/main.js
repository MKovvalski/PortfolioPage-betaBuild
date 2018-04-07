document.addEventListener("DOMContentLoaded", function () {

// ------ header underlining ------ //

const arrayOfLinks = document.querySelectorAll(".menu-list li");

function sizing (array, action, width) {
    for (var i = 0; i < array.length; i++) {
        arrayOfLinks[i].addEventListener(action, function () {
            this.lastElementChild.style.width = width;
        })
    }
}

sizing(arrayOfLinks, "mouseover", "100%");
sizing(arrayOfLinks, "mouseout", "0%");

// ------ header smooth scrolling ------ //

    const headerAbout = document.querySelector(".header-about");
    const headerSkills = document.querySelector(".header-skills");
    const headerProjects = document.querySelector(".header-projects");
    const headerContacts = document.querySelector(".header-contact");

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

    function scrolling (element, scrollElement) {
        element.addEventListener("click", function () {
            smoothScroll(document.getElementById(scrollElement));
        })
    }

    scrolling(headerAbout, 'about');
    scrolling(headerSkills, 'skills');
    scrolling(headerProjects, 'projects');
    scrolling(headerContacts, 'contact');

// ------ footer contact ------ //

const gmail = document.querySelector(".gmail");
const mailExpander = document.querySelector(".mail-expander");
const mailText = document.querySelector(".mail");

gmail.addEventListener("click", function () {
    switch (this.id) {
        case "move-left":
            this.id = "move-right";
            mailExpander.style.display = "none";
            mailExpander.id = "expand";
            mailText.id = "none";
            break;
        default:
            this.id = "move-left";
            mailExpander.style.display = "block";
            mailExpander.id = "expand";
            setTimeout(function () {
                mailText.id = "appear";
            },700);
    }
});

});