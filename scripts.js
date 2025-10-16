document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const fadeOverlay = nav.querySelector('.fade-overlay');

    function checkHorizontalOverflow(el) {
        return el.scrollWidth > el.clientWidth;
    }

    if (checkHorizontalOverflow(nav)) {
        fadeOverlay.classList.add('show');
    }

    window.addEventListener('resize', () => {
    if (checkHorizontalOverflow(nav)) {
        fadeOverlay.classList.add('show');
    } else {
        fadeOverlay.classList.remove('show');
    }
    });
});
