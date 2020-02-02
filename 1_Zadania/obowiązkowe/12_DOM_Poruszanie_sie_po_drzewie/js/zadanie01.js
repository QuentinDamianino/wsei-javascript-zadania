document.addEventListener('DOMContentLoaded', function() {

    const btns = document.querySelectorAll('.button');
    console.log(btns);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.nextElementSibling === 'null') { return; }
            this.nextElementSibling.classList.toggle('hidden');
        });
    })

});