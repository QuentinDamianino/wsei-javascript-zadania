document.addEventListener("DOMContentLoaded", function () {
    const buttonsToClick = document.querySelectorAll('#button1, #button2, #button3')

    buttonsToClick.forEach(element => {
        element.addEventListener("click", function () {
            document.querySelector(".counter").innerHTML = parseInt(
                document.querySelector('.counter').innerHTML) + 1
        })
    })
})