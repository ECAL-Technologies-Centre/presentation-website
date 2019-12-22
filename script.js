let elBurger = document.querySelector('.hamburger');
elBurger.addEventListener('click', () => {
    elBurger.classList.toggle('is-active');
    elBurger.parentElement.classList.toggle('is-active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// window.scrollTo({
//     top: 100,
//     left: 100,
//     behavior: 'smooth'
//   });