/*===== MENU SHOW =====*/


const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    const blur = document.querySelector(".overlay_bg")

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
            blur.classList.toggle('bg-blur')
     
        })
    }
}
showMenu('nav-toggle', 'nav-menu')


/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    const blur = document.querySelector(".overlay_bg")
    navMenu.classList.remove('show')
    blur.classList.remove('bg-blur')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')





const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    reset: false,
    
})


/*SCROLL HOME*/


sr.reveal('.home__title', { origin: 'bottom', delay:400 })
sr.reveal('.topTop', { origin: 'bottom', delay:400 })


sr.reveal('.l-header', { origin: 'top' , delay:600 })
sr.reveal('.logo', { origin: 'left', delay:600, distance: '100px', })








sr.reveal('.kategorija', { delay: 50, interval:50 })

sr.reveal('.slogan', { origin: 'bottom', delay:100, distance:'100px'})


