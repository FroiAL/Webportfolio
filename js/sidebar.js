const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.fa');

Let currentSection = 'home';
window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        if (window.scrollY >= sections.offsetTop) {
            currentSection = sections.id;
        }
    });

    navLinks.forEach(navLink => {
        if (navLinks.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active');
            navLinks.classList.add('active');
        }
    });
});