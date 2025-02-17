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

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')





const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    reset: false,
    
})


/*SCROLL HOME*/
sr.reveal('.home__title', { origin: 'bottom' })


sr.reveal('.l-header', { origin: 'top' })
sr.reveal('.logo', { origin: 'top', delay:200 })

sr.reveal('.masonry', { origin: 'bottom' })

masonry



/*SCROLL ABOUT*/
sr.reveal('.about__img', { delay: 500 })
sr.reveal('.about__subtitle', { delay: 300 })
sr.reveal('.about__profession', { delay: 400 })
sr.reveal('.about__text', { delay: 500 })
sr.reveal('.about__social-icon', { delay: 600, interval: 200 })

sr.reveal('.kategorija', { delay: 50, interval:50 })




//// Carousel Desktop


const trackDesktop = document.getElementById('carousel__track__desktop');
const slidesDesktop = Array.from(trackDesktop.children);
const slideWidthDesktop = slidesDesktop[0].getBoundingClientRect().width;

const trackMobile = document.getElementById('carousel__track__mobile');
const slidesMobile = Array.from(trackMobile.children);
const slideWidthMobile = slidesMobile[0].getBoundingClientRect().width;



slidesDesktop.forEach((slide, index) => {
    slide.style.left = slideWidthDesktop * index + 'px'
})

slidesMobile.forEach((slide, index) => {
    slide.style.left = slideWidthMobile * index + 'px'
})

const autoplayInterval = setInterval(function () {
    const currentSlideDesktop = trackDesktop.querySelector('.current-slide-desktop')
    const nextSlideDesktop = currentSlideDesktop.nextElementSibling;
    
    const currentSlideMobile = trackMobile.querySelector('.current-slide-mobile')
    const nextSlideMobile = currentSlideMobile.nextElementSibling;
    

    moveToSlide(slidesDesktop, trackDesktop, currentSlideDesktop, nextSlideDesktop, 'desktop')
    moveToSlide(slidesMobile, trackMobile, currentSlideMobile, nextSlideMobile, 'mobile')
}, 5000);


const moveToSlide = (slides, track, currentSlide, targetSlide, screen) => {
    if (screen === "desktop") {
        if (slides[slides.length - 1] == currentSlide) {
            track.style.transform = 'translateX(' + 0 + ')'
            currentSlide.classList.remove('current-slide-desktop')
            slides[0].classList.add('current-slide-desktop')
            return
        }

        track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
        currentSlide.classList.remove('current-slide-desktop')
        targetSlide.classList.add('current-slide-desktop')
    }
    if (screen === "mobile") {
        if (slides[slides.length - 1] == currentSlide) {
            track.style.transform = 'translateX(' + 0 + ')'
            currentSlide.classList.remove('current-slide-mobile')
            slides[0].classList.add('current-slide-mobile')
            return
        }

        track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
        currentSlide.classList.remove('current-slide-mobile')
        targetSlide.classList.add('current-slide-mobile')
    }
    
}


    
