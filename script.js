
// Assign all needed variables
const list = document.querySelector('.carousel-list');
const slides = Array.from(list.children);
const nextBtn = document.querySelector('button.right');
const prevBtn = document.querySelector('button.left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//Step 1: Set the buttons' function 

const moveSlides = (slides, currentSlide, targetSlide) => {

    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');

    if (targetSlide === slides[slides.length-1]) {

    targetSlide.classList.remove('current-slide');
    slides[1].classList.add('current-slide');

    }

    if (targetSlide === slides[0]) {

    targetSlide.classList.remove('current-slide');
    slides[slides.length-2].classList.add('current-slide');

    }
}

const moveDots = (dots, currentDot, targetDot) => {
    
    currentDot.classList.remove('current-dot');
    targetDot.classList.add('current-dot');


    if (targetDot === dots[dots.length-1]) {

    targetDot.classList.remove('current-dot');
    dots[1].classList.add('current-dot');

    }

    if (targetDot === dots[0]) {

    targetDot.classList.remove('current-dot');
    dots[dots.length-2].classList.add('current-dot');

    }
}

//step 2(a): when I click right, move slides to the next
nextBtn.addEventListener('click', e => {
    const currentSlide = list.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-dot');
    const nextDot = currentDot.nextElementSibling;
   
    moveSlides(slides, currentSlide, nextSlide);
    moveDots(dots, currentDot, nextDot);
})

//step 2(b): when I click left, move slides to the previous
prevBtn.addEventListener('click', e => {
    const currentSlide = list.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-dot');
    const prevDot = currentDot.previousElementSibling;
   
    
    moveSlides(slides, currentSlide, prevSlide);
    moveDots(dots, currentDot, prevDot);
})

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;

    const currentSlide = list.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-dot');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveSlides(slides, currentSlide, targetSlide);
    moveDots(dots, currentDot, targetDot);
})