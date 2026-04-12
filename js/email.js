'use strict';
var addr = ['contato', 'wesley-m.com'].join('@');

var heroEmail = document.getElementById('email-link');
if (heroEmail) {
    heroEmail.addEventListener('click', function(e) {
        e.preventDefault();
        var label = heroEmail.querySelector('.button-label');
        if (label) {
            label.textContent = addr;
        } else {
            heroEmail.textContent = addr;
        }
    });
}

var footerEmail = document.getElementById('footer-email-link');
if (footerEmail) {
    footerEmail.addEventListener('click', function(e) {
        e.preventDefault();
        footerEmail.textContent = addr;
    });
}
