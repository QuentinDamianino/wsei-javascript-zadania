document.addEventListener('DOMContentLoaded', function() {

    const checkbox = document.querySelector('#invoice');
    const invoiceData = document.querySelector('#invoiceData');
    invoiceData.style.display = 'none';

    checkbox.addEventListener('change', function(e) {
        if (e.target.checked) {
            invoiceData.style.display = 'block';
        } else {
            invoiceData.style.display = 'none';
        }
    });
});