/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

// window.addEventListener('scroll', scrollActive)

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
//         }
//     })
// }

/*===== SCROLL REVEAL ANIMATION =====*/


const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 1000,
    reset: true
})


/*SCROLL HOME*/
sr.reveal('.home__title', {delay:1})
sr.reveal('.home__scroll', {delay: 50})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})



// /*SCROLL PORTFOLIO*/
// /////
// sr.reveal('.right', {origin:'bottom', distance: '10px', interval: 50})
// sr.reveal('.left', {origin:'bottom', distance: '10px', interval: 50})
// ////



/*SCROLL CONTACT*/
// sr.reveal('.contact__subtitle', {})
// sr.reveal('.contact__text', {interval: 200})
// sr.reveal('.contact__input', {delay: 400})
// sr.reveal('.contact__button', {delay: 600})









const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left'); 
const dotsNav = document.querySelector('.carousel__nav');
// const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px'
})


const autoplayInterval = setInterval(function() {

    // Get element via id and click next
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide =  currentSlide.nextElementSibling;
    
    moveToSlide(track, currentSlide, nextSlide, 'next')
    
   
  }, 10000);

const moveToSlide = (track, currentSlide, targetSlide, direction) =>{
    if(slides[slides.length - 1] == currentSlide && direction === 'next'){
        track.style.transform = 'translateX(' + 0 + ')'
        currentSlide.classList.remove('current-slide')
        slides[0].classList.add('current-slide')
        return
    }
    if(slides[0] == currentSlide && direction === 'prev'){
        track.style.transform = 'translateX(-' + slides[slides.length - 1].style.left + ')'
        currentSlide.classList.remove('current-slide')
        slides[slides.length - 1].classList.add('current-slide')
        return
    }
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')

}
