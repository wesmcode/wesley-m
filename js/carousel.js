'use strict';
(function () {
    var cardsRow = document.getElementById('about-cards');
    if (!cardsRow) return;
    var cards = cardsRow.querySelectorAll('.about-card');
    if (!cards.length) return;

    var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var timer = null;
    var current = 0;
    var paused = false;
    var inView = true;
    var suppressScrollSync = false;

    function setActive(index) {
        current = index;
        cards.forEach(function (card, i) {
            card.classList.toggle('is-active', i === index);
        });
        cards.forEach(function (card, i) {
            if (i === index) {
                card.setAttribute('data-active', 'true');
            } else {
                card.removeAttribute('data-active');
            }
        });
    }

    function scrollCardIntoView(i) {
        var card = cards[i];
        if (!card) return;
        var containerRect = cardsRow.getBoundingClientRect();
        var cardRect = card.getBoundingClientRect();
        var delta = (cardRect.left + cardRect.width / 2) - (containerRect.left + containerRect.width / 2);
        suppressScrollSync = true;
        cardsRow.scrollBy({
            left: delta,
            behavior: prefersReduced ? 'auto' : 'smooth'
        });
        setTimeout(function () { suppressScrollSync = false; }, 600);
    }

    function goTo(i) {
        if (!cards[i]) return;
        scrollCardIntoView(i);
        setActive(i);
    }

    function advance() {
        if (paused || !inView) return;
        goTo((current + 1) % cards.length);
    }

    function start() {
        if (prefersReduced) return;
        stop();
        timer = setInterval(advance, 5000);
    }

    function stop() {
        if (timer) { clearInterval(timer); timer = null; }
    }

    cardsRow.addEventListener('mouseenter', function () { paused = true; });
    cardsRow.addEventListener('mouseleave', function () { paused = false; });
    cardsRow.addEventListener('focusin',    function () { paused = true; });
    cardsRow.addEventListener('focusout',   function () { paused = false; });

    cardsRow.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            goTo((current + 1) % cards.length);
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            goTo((current - 1 + cards.length) % cards.length);
        }
    });

    var rafPending = false;
    function syncFromScroll() {
        if (suppressScrollSync || rafPending) return;
        rafPending = true;
        requestAnimationFrame(function () {
            rafPending = false;
            var containerRect = cardsRow.getBoundingClientRect();
            var center = containerRect.left + containerRect.width / 2;
            var closest = 0;
            var closestDist = Infinity;
            cards.forEach(function (card, i) {
                var r = card.getBoundingClientRect();
                var cardCenter = r.left + r.width / 2;
                var d = Math.abs(cardCenter - center);
                if (d < closestDist) {
                    closestDist = d;
                    closest = i;
                }
            });
            if (closest !== current) setActive(closest);
        });
    }
    cardsRow.addEventListener('scroll', syncFromScroll, { passive: true });

    if ('IntersectionObserver' in window) {
        var visObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                inView = entry.isIntersecting;
            });
        }, { threshold: 0.2 });
        visObserver.observe(cardsRow);
    }

    setActive(0);
    start();
})();
