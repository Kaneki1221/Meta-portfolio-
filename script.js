document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.animate__animated');

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('animate__fadeInUp');
        }, (index + 1) * 1000);
    });

    // Form validation
    (function () {
        'use strict'
        var forms = document.querySelectorAll('.needs-validation')
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    form.classList.add('was-validated')
                }, false)
            })
    })()
});
