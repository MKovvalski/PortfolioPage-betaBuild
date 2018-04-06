document.addEventListener("DOMContentLoaded", function () {

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