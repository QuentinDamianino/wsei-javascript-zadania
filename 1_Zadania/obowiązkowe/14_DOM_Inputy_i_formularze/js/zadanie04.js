document.addEventListener('DOMContentLoaded', function() {

    const name = document.querySelector('#name');
    const type = document.querySelector('#type');
    console.log(name);

    name.addEventListener('input', function(e) {
        type.innerHTML = getNameOfCard(name.value);
    });

    function getNameOfCard(n) {
        if (n.startsWith('4') && (n.length >= 13 && n.length <=16)) {
            name.style.backgroundColor = 'lightgreen';
            return 'Visa';
        } else if (n.startsWith('4')) {
            name.style.backgroundColor = '';
            return 'Visa';
        } else if (n.startsWith('5') && n.length === 16) {
            name.style.backgroundColor = 'lightgreen';
            return 'Mastercard';
        } else if (n.startsWith('5')) {
            name.style.backgroundColor = '';
            return 'Mastercard';
        } else if ((n.startsWith('34') || n.startsWith('37')) && n.length === 15) {
            name.style.backgroundColor = 'lightgreen';
            return 'American express';
        } else if (n.startsWith('34') || n.startsWith('37')) {
            name.style.backgroundColor = '';
            return 'American express';
        } else {
            name.style.backgroundColor = '';
            return 'Nieznany typ karty';
        }
    }
});
