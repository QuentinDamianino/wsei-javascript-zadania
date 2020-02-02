document.addEventListener('DOMContentLoaded', function() {

    const divs = document.querySelectorAll('.listContainer');
    console.log(divs);

    divs.forEach(div => {
        div.addEventListener('mouseenter', function() {
            let ul = this.children[0];
            ul.children[0].style.color ='red';
            ul.children[ul.children.length -1].style.color = 'blue';
            for (let i = 1; i < ul.children.length -1; i++) {
                ul.children[i].style.color = 'green';
            }
        });
    })

});