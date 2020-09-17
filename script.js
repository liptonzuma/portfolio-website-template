let icon = document.querySelector('.humburger');
let nav = document.querySelector('.nav-item');
let about = document.querySelector('.about');
let aboutPos = about.getBoundingClientRect().top;
let screenPosition = window.innerHeight / 1.8;


window.addEventListener('scroll', () => {
    if (aboutPos > screenPosition) {
        about.classList.add('appear')
    }
})

icon.addEventListener('click', () => {
    nav.classList.toggle('show')
})