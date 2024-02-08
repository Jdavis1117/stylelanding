document.addEventListener('DOMContentLoaded', function() {
    const indicator = document.getElementById('scrollIndicator');

    function checkScroll() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
            indicator.style.opacity = '0';
        } else {
            indicator.style.opacity = '1';
        }
    }

    window.addEventListener('scroll', checkScroll);

    indicator.addEventListener('click', function() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });

    checkScroll();
});
