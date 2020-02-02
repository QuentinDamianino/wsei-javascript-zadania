document.addEventListener('DOMContentLoaded', function() {
    
    const list = document.querySelector('.list');

    document.querySelector('#remove').addEventListener('click', function() {
        while(list.firstChild) {
            list.removeChild(list.firstChild);
        }
    });

});