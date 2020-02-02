document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("#button1, #button2, #button3")

    buttons.forEach(element => {
        element.addEventListener("click", function () {
            this.nextElementSibling.querySelector('.counter').innerHTML = parseInt(
                this.nextElementSibling.querySelector('.counter').innerHTML) + 1
        })
    })
})