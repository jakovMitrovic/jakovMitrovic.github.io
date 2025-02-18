/*===== MENU SHOW =====*/


const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const sr = ScrollReveal({
    origin: 'top',
    distance: '150px',
    duration: 1500,
    reset: false,

})


sr.reveal('.l-header', { origin: 'top' })
sr.reveal('.logo', { origin: 'top', delay:200 })


sr.reveal('.category__title', { origin: 'top' })
sr.reveal('.masonry', { origin: 'bottom' })

