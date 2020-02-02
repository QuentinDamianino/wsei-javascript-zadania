document.addEventListener('DOMContentLoaded', function() {

    const first1 = document.querySelector('.first').children[0].children[2];
    console.log(first1);

    const second = document.querySelector('#second').parentNode.children[3];
    console.log(second);

    const dataExGrandParent = document.querySelector('[data-ex="third"]')
        .parentElement.parentElement;

    const lastChild = dataExGrandParent
        .children[dataExGrandParent.children.length - 1];

    const firstChild = lastChild.children[0];

    const answer = firstChild.children[Math.floor(firstChild.children.length / 2)];
    console.log(answer);

    
});