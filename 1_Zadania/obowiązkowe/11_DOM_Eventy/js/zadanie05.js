document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll('.box')

    boxes.forEach(element => {
        element.addEventListener("click", function () {
            var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            this.style.backgroundColor = randomColor
        })
    })
})