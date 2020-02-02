document.addEventListener('DOMContentLoaded', function() {
    const list = document.querySelectorAll('.gallery li');
    const body = document.getElementsByTagName('body')[0];

    console.log(list);
    console.log(body);

    function show() {
        let div = document.createElement('div');
        div.classList.add('fullScreen');
        let img = document.createElement('img');
        img.setAttribute('src', this.children[0].getAttribute('src'));
        div.appendChild(img);
        let button = document.createElement('button');
        button.classList.add('close');
        button.innerHTML = 'Close';
        div.appendChild(button);
        body.appendChild(div);

        const closeBtn = document.querySelector('.close');
        closeBtn.addEventListener('click', close);
        console.log(closeBtn);
    }

    function close() {
        const toRemove = document.querySelector('.fullScreen');
        toRemove.parentNode.removeChild(toRemove);
    }

    list.forEach(el => {
        el.addEventListener('click', show);
    });
});