'use strict';
(function () {
    var cardsRow = document.getElementById('about-cards');
    if (!cardsRow) return;
    var cards = cardsRow.querySelectorAll('.about-card');
    if (!cards.length) return;

    var liveRegion = document.getElementById('about-cards-live');

    var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var current = 0;
    var suppressScrollSync = false;

    function cardTitle(i) {
        var h = cards[i] && cards[i].querySelector('h3');
        return h ? h.textContent.trim() : '';
    }

    function setActive(index) {
        current = index;
        cards.forEach(function (card, i) {
            card.classList.toggle('is-active', i === index);
            if (i === index) {
                card.setAttribute('data-active', 'true');
            } else {
                card.removeAttribute('data-active');
            }
        });
        if (liveRegion) {
            liveRegion.textContent = 'Card ' + (index + 1) + ' of ' + cards.length + ': ' + cardTitle(index);
        }
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

    setActive(0);
})();
