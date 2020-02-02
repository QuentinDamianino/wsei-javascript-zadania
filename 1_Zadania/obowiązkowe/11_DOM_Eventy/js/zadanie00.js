//zadanie 0a

const parent = document.querySelectorAll('.parent')
console.log(parent)

for (let i = 0; i < parent.length; i++) {
    parent[i].addEventListener("mouseover", function () {
        this.querySelector('.children').style.display = "block"
    })
}

//zadanie 0b

for (let j = 0; j < parent.length; j++) {
    parent[j].addEventListener("mouseout", function () {
        var parent = this

        function hideChildrenElement(parent) {
            parent.querySelector('.children').style.display = "none"
        }
        hideChildrenElement(parent)
    })
}