document.addEventListener('DOMContentLoaded', function() {

    const btn = document.querySelector('.button');
    const menu = document.querySelector('.menu');
    let counter = 0;

    btn.addEventListener('click', function() {
        let li = document.createElement('li');
        li.innerText = 'Element '+ ++counter;
        menu.appendChild(li);
    });
});