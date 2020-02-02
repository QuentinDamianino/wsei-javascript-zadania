/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dziala');

    const tooltips = document.querySelectorAll('.tooltip');
    console.log(tooltips);

    tooltips.forEach(el => {
        el.addEventListener('mouseover', function() {
            console.log(this.dataset.text);
            const span = document.createElement('span');
            span.classList.add('tooltipText');
            span.innerText = this.dataset.text;
            this.appendChild(span);
        });

        el.addEventListener('mouseout', function() {
            this.removeChild(this.children[0]);
        });
    });
 });