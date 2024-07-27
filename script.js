// script.js

document.addEventListener('DOMContentLoaded', () =>
    document.addEventListener("DOMContentLoaded", function() {
        const elements = document.querySelectorAll('.animate__animated');
    
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.remove('animate__animated');
            }, (index + 1) * 2000);
        });
    });
    