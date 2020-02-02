document.addEventListener("DOMContentLoaded", function () {
    const box = document.querySelector('#box')

    box.addEventListener("mousemove", function () {
        let boxRect = box.getBoundingClientRect()

        let globalX = document.getElementById('globalX')
        let globalY = document.getElementById('globalY')
        let localX = document.getElementById('localX')
        let localY = document.getElementById('localY')

        globalX.innerHTML = event.clientX
        globalY.innerHTML = event.clientY

        localX.innerHTML = parseInt(event.clientX - boxRect.left)
        localY.innerHTML = parseInt(event.clientY - boxRect.top)
    })
})