const closePrivacyPolicy = document.getElementById('close-privacy-policy');
const privacyPolicy = document.getElementById('privacy-policy');
const privacyPolicyLink = document.getElementById('privacy-policy-link');
const main = document.getElementById('main');
const topArrow = document.getElementById('scroll-top');
const leftArrow = document.getElementById('reviews--left-arrow');
const rightArrow = document.getElementById('reviews--right-arrow');

window.onload = handleScroll();

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