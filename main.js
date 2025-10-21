const closePrivacyPolicy = document.getElementById('close-privacy-policy');
const privacyPolicy = document.getElementById('privacy-policy');
const privacyPolicyLink = document.getElementById('privacy-policy-link');
const main = document.getElementById('main');
const topArrow = document.getElementById('scroll-top');
const leftArrow = document.getElementById('reviews--left-arrow');
const rightArrow = document.getElementById('reviews--right-arrow');
const reviews = document.getElementsByClassName('review-box');

window.onload = handleScroll();
leftArrow.addEventListener('click', scrollReviewsLeft);
rightArrow.addEventListener('click', scrollReviewsRight);

closePrivacyPolicy.addEventListener("click", () => {
    privacyPolicy.classList.remove('block');
    privacyPolicy.classList.add('fade-closed');
    setTimeout(()=>{
        privacyPolicy.classList.add('hidden');
        privacyPolicy.classList.remove('fade-closed');
    }, 1000);
})
const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend);
};
const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};
const handleTopArrow = () => {
    if (elementInView(main, 3)){
        topArrow.classList.remove('hidden');
    } else {
        topArrow.classList.add('hidden');
    }
}
function handleScroll(){
    window.addEventListener("scroll", () => {
        handleTopArrow();
    });
};
function scrollReviewsRight() {
    const currentSelected = document.getElementsByClassName('selected-review')[0];
    const currentIndex = parseInt(currentSelected.getAttribute('data-review'));
    const newSelected = document.querySelector('[data-review="' + (currentIndex + 1) + '"]');
    leftArrow.classList.add('hidden');
    rightArrow.classList.add('hidden');
    currentSelected.classList.add('fadeOut');
    setTimeout(()=>{        
        newSelected.classList.add('fadeIn');
    }, 10);
    setTimeout(()=>{
        currentSelected.classList.add('hidden');
        newSelected.classList.remove('hidden');
        currentSelected.classList.remove('fadeOut');
        newSelected.classList.remove('fadeIn');
        currentSelected.classList.remove('selected-review');
        newSelected.classList.add('selected-review');
        if (parseInt(currentIndex) < (reviews.length - 2)){
            rightArrow.classList.remove('hidden');
        }
        leftArrow.classList.remove('hidden');
    }, 2200);
}
function scrollReviewsLeft() {
    const currentSelected = document.getElementsByClassName('selected-review')[0];
    const currentIndex = parseInt(currentSelected.getAttribute('data-review'));
    const newSelected = document.querySelector('[data-review="' + (currentIndex - 1) + '"]');
    leftArrow.classList.add('hidden');
    rightArrow.classList.add('hidden');
    setTimeout(()=>{        
        currentSelected.classList.add('fadeOut');
        newSelected.classList.add('fadeIn');
    }, 10);
    setTimeout(()=>{
        currentSelected.classList.add('hidden');
        newSelected.classList.remove('hidden');
        currentSelected.classList.remove('fadeOut');
        newSelected.classList.remove('fadeIn');
        currentSelected.classList.remove('selected-review');
        newSelected.classList.add('selected-review');
        if (parseInt(currentIndex) > 1){
        leftArrow.classList.remove('hidden');
    }
    rightArrow.classList.remove('hidden');
    }, 2200);
}