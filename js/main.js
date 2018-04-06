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

gmail.addEventListener("click", function () {
    switch (this.id) {
        case "none":
            this.id = "move-left";
            mailExpander.style.display = "block";
            mailExpander.id = "expand";
            console.log(mailExpander.id);
            break;
        case "move-left":
            this.id = "move-right";
            break;
        case "move-right":
            this.id = "move-left";
            break;
    }
});

});