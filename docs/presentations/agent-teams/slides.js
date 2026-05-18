(function () {
    'use strict';

    const deck = document.getElementById('deck');
    const slides = Array.from(deck.querySelectorAll('.slide'));
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const dotsRoot = document.getElementById('dots');
    const counterNow = document.getElementById('counter-now');
    const counterTotal = document.getElementById('counter-total');

    if (!slides.length) return;

    counterTotal.textContent = String(slides.length);

    // Build dots
    const dots = slides.map((slide, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'dot-btn';
        btn.dataset.i = String(i + 1).padStart(2, '0');
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-label', `Go to slide ${i + 1}`);
        btn.addEventListener('click', () => goTo(i));
        dotsRoot.appendChild(btn);
        return btn;
    });

    let current = 0;

    function goTo(i) {
        const clamped = Math.max(0, Math.min(slides.length - 1, i));
        slides[clamped].scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', inline: 'start', block: 'nearest' });
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function update(i) {
        current = i;
        counterNow.textContent = String(i + 1);
        dots.forEach((d, idx) => {
            if (idx === i) d.setAttribute('aria-current', 'true');
            else d.removeAttribute('aria-current');
        });
        prevBtn.disabled = i === 0;
        nextBtn.disabled = i === slides.length - 1;
    }

    function prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    // Observe which slide is in view
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
                    const idx = slides.indexOf(entry.target);
                    if (idx !== -1 && idx !== current) update(idx);
                }
            });
        },
        { root: deck, threshold: [0.55, 0.75, 0.95] }
    );
    slides.forEach((s) => io.observe(s));

    // Controls
    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);

    // Keyboard — global. Skip when focus is inside form controls (none here, but safe).
    document.addEventListener('keydown', (e) => {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        const tag = (e.target && e.target.tagName) || '';
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;

        switch (e.key) {
            case 'ArrowRight':
            case 'PageDown':
            case ' ':
                e.preventDefault();
                next();
                break;
            case 'ArrowLeft':
            case 'PageUp':
                e.preventDefault();
                prev();
                break;
            case 'Home':
                e.preventDefault();
                goTo(0);
                break;
            case 'End':
                e.preventDefault();
                goTo(slides.length - 1);
                break;
        }
    });

    // Touch — basic swipe
    let touchStartX = 0;
    let touchDeltaX = 0;
    deck.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
        touchDeltaX = 0;
    }, { passive: true });
    deck.addEventListener('touchmove', (e) => {
        touchDeltaX = e.changedTouches[0].clientX - touchStartX;
    }, { passive: true });
    deck.addEventListener('touchend', () => {
        if (Math.abs(touchDeltaX) > 60) {
            if (touchDeltaX < 0) next(); else prev();
        }
    });

    // Initial state
    update(0);

    // Focus the deck so keyboard works without clicking
    requestAnimationFrame(() => deck.focus({ preventScroll: true }));
})();
