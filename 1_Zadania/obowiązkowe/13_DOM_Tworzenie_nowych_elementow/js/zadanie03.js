document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector('#remove').addEventListener('click', function() {
        this.parentNode.removeChild(this);
    });

});