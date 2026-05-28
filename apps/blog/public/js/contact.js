'use strict';

(function () {
    var addr = ['work', 'wesley-m.com'].join('@');

    function revealEmails() {
        var links = document.querySelectorAll('.js-email-reveal');
        links.forEach(function (el) {
            el.href = 'mailto:' + addr;
            el.textContent = addr;
        });
    }

    function initForms() {
        var forms = document.querySelectorAll('.contact-form');
        forms.forEach(function (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();

                var nameEl = form.querySelector('[name="name"]');
                var emailEl = form.querySelector('[name="email"]');
                var interestEl = form.querySelector('[name="interest"]');
                var messageEl = form.querySelector('[name="message"]');

                var name = (nameEl.value || '').trim();
                var email = (emailEl.value || '').trim();
                var interest = interestEl ? (interestEl.value || 'Something else') : 'Something else';
                var message = (messageEl.value || '').trim();

                if (!name || !email || !message) return;

                var subject = interest
                    ? interest + ' inquiry from ' + name
                    : 'Inquiry from ' + name;

                var body = 'Name: ' + name + '\nEmail: ' + email;
                if (interest) body += '\nInterested in: ' + interest;
                if (message) body += '\n\n' + message;

                var mailto = 'mailto:' + addr
                    + '?subject=' + encodeURIComponent(subject)
                    + '&body=' + encodeURIComponent(body);

                window.location.href = mailto;

                var content = form.querySelector('.contact-form-content');
                var thanks = form.querySelector('.contact-thanks');
                if (content && thanks) {
                    content.style.display = 'none';
                    thanks.style.display = 'flex';
                }
            });
        });
    }

    function init() {
        revealEmails();
        initForms();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
