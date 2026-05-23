'use strict';
var addr = ['contato', 'wesley-m.com'].join('@');

var emailLinks = document.querySelectorAll('.js-email');
emailLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        link.href = 'mailto:' + addr;
        var label = link.querySelector('.button-label');
        if (label) {
            label.textContent = addr;
            return;
        }
        var spans = link.querySelectorAll('span');
        if (spans.length) {
            spans[0].textContent = addr;
            return;
        }
        link.textContent = addr;
    });
});
