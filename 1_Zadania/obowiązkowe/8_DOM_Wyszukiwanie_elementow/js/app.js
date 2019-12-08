document.addEventListener("DOMContentLoaded", function () {
    //zadnie 1

    const title = document.getElementsByClassName("title");

    function getDataAnimation(element) {
        let dataAnimation = element.getAttribute("data-animation");
        return dataAnimation;
    }

    getDataAnimation(title[0]);

});
