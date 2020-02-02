document.addEventListener('DOMContentLoaded', function() {
    const next = document.querySelector('#nextPicture');
    const prev = document.querySelector('#prevPicture');
    const list = document.querySelectorAll('.slider li');

    console.log(next);
    console.log(prev);
    console.log(list);
    let i = 0;
    list[i].classList.add('visible');

    next.addEventListener('click', function() {
        list[i].classList.remove('visible');
        i++;
        if(i >= list.length) {
            i = 0;
        }
        list[i].classList.add('visible');
    });

    prev.addEventListener('click', function() {
        list[i].classList.remove('visible');
        i--;
        if(i < 0) {
            i = list.length-1;
        }
        list[i].classList.add('visible'); 
    });
});
