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

});