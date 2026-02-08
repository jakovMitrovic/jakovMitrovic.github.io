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


const sr = ScrollReveal({
    origin: 'top',
    distance: '150px',
    duration: 1500,
    reset: false,

})


sr.reveal('.l-header', { origin: 'top' })
sr.reveal('.logo', { origin: 'left', delay:200 })

sr.reveal('.category__title', { origin: 'top', delay:500})
sr.reveal('.slogan', { origin: 'bottom', delay:1200, distance:'100px'})
sr.reveal('.masonry', { origin: 'bottom', delay:1200 })


sr.reveal('.about__image-box', { origin: 'bottom', delay:100 })
sr.reveal('.about__wrapper', { origin: 'bottom', delay:100 })



