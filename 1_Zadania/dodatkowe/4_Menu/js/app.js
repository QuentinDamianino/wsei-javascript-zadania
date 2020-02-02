document.addEventListener('DOMContentLoaded', function() {
    console.log('Dziala');

    const ul = document.querySelectorAll('.nav > ul > li');
    console.log(ul);

    ul.forEach(el => {
        el.addEventListener('mouseover', function() {
            if (typeof(this.children[0]) !== 'undefined') {
                this.children[0].style.display = 'block';
            }
        });
        el.addEventListener('mouseout', function() {
            if (typeof(this.children[0]) !== 'undefined') {
                this.children[0].style.display = 'none';
            }
        });
    });
});