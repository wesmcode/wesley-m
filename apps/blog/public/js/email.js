'use strict';
var addr = ['contato', 'wesley-m.com'].join('@');
var mailto = 'mailto:' + addr;

function resolveLink(link) {
    link.href = mailto;
    if (!link.hasAttribute('aria-label')) {
        link.setAttribute('aria-label', 'Email ' + addr);
    }
}

function revealAddress(link) {
    var label = link.querySelector('.button-label');
    if (label) { label.textContent = addr; return; }
    var spans = link.querySelectorAll('span');
    if (spans.length) { spans[0].textContent = addr; return; }
    link.textContent = addr;
}

function init() {
    var emailLinks = document.querySelectorAll('.js-email');
    emailLinks.forEach(function (link) {
        resolveLink(link);
        link.addEventListener('click', function () {
            revealAddress(link);
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
