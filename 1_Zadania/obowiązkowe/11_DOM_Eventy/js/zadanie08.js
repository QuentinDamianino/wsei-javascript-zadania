document.addEventListener("DOMContentLoaded", function () {
    const winW = document.getElementById('windowWidth')
    const winH = document.getElementById('windowHeight')

    winW.innerHTML = window.innerWidth
    winH.innerHTML = window.innerHeight

    window.addEventListener("resize", function () {
        winW.innerHTML = window.innerWidth
        winH.innerHTML = window.innerHeight
    })
})