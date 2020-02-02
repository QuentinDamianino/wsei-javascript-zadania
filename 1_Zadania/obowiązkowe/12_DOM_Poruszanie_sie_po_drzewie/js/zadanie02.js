document.addEventListener('DOMContentLoaded', function() {

    const btns = document.querySelectorAll('.button');
    console.log(btns);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.parentNode.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        });
    })

});