document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form');
    const email = document.querySelector('#email');
    const name = document.querySelector('#name');
    const surname = document.querySelector('#surname');
    const pass1 = document.querySelector('#pass1');
    const pass2 = document.querySelector('#pass2');
    const agree = document.querySelector('#agree');

    const errorMessage = document.querySelector('.error-message');
    const successMessage = document.querySelector('.success-message');

    form.addEventListener('submit', function(e) {
        errorMessage.innerHTML = '';

        if (!checkEmail(email.value)) {
            errorMessage.innerHTML += 'Email musi posiadać znak @';
        }

        if (!checkName(name.value)) {
            errorMessage.innerHTML += 'Twoje imię jest za krótkie';
        }

        if (!checkName(surname.value)) {
            errorMessage.innerHTML += 'Twoje nazwisko jest za krótkie';
        }

        if (!checkPasswords(pass1.value, pass2.value)) {
            errorMessage.innerHTML += 'Hasła nie są takie same lub puste';
        }

        if (!agree.checked) {
            errorMessage.innerHTML += 'Musisz zaakceptować warunki';
        }

        if (errorMessage.innerHTML !== '') {
            e.preventDefault();
        }
        
    });

    function checkEmail(email) {
        if (email.includes("@")) {
            return true;
        } else {
            return false;
        }
    }

    function checkName(name) {
        if (name.length <= 6) {
            return false;
        } else {
            return true;
        }
    }

    function checkPasswords(pass1, pass2) {
        if (pass1.length > 0 && pass2.length > 0 && (pass1 === pass2)) {
            return true;
        } else {
            return false;
        }
    }
});