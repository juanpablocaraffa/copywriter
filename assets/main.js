var tl = gsap.timeline();

tl.from('.navitem', {
    stagger: .3,
    duration: 2,
    y: 20,
    delay: 7,
    ease: 'Expo.easeInOut',
    opacity: 0
})
.from('#smline', {
    width: 0,
    duration: 1,
    ease: 'Expo.easeInOut',
}, '-=2')
.from('.leftitem', {
    stagger: .3,
    duration: 2,
    y: 20,
    ease: 'Expo.easeInOut',
    opacity: 0
}, '-=2')
.from('#right img', {
    duration: 2,
    scale: 1.05,
    ease: 'Expo.easeInOut',
    opacity: 0
}, '-=2')


/* función scroll */

let sec1 = document.querySelector('.sec1');
let sec2 = document.querySelector('.sec2');

window.addEventListener('scroll', function () {
    var value = window.scrollY;
    sec1.style.clipPath = "circle(" + value * 2 + "px at 0 0)"
    sec2.style.clipPath = "circle("+value *2+"px at 100% 100%)"
    
}

)
