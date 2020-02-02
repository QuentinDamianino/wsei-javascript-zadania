document.addEventListener('DOMContentLoaded', function() {

    const btns = document.querySelectorAll('.deleteBtn');
    console.log(btns);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            let tr = this.parentElement.parentElement;
            let tbody = tr.parentElement;
            tbody.removeChild(tr);
        });
    });

});