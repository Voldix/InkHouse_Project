// Mobile navigation

const openMobileNavBtn = document.querySelector("#openMobileNav");
const closeMobileNavBtn = document.querySelector("#closeMobileNav");
const mobNavBody = document.querySelector("#mobNavBody");

openMobileNavBtn.addEventListener("click", () => {
    mobNavBody.classList.toggle("mobile-nav__body--open");
    openMobileNavBtn.classList.toggle("none");
    closeMobileNavBtn.classList.toggle("none");
    document.body.classList.toggle("no-scroll");
});

closeMobileNavBtn.addEventListener("click", () => {
    mobNavBody.classList.toggle("mobile-nav__body--open");
    openMobileNavBtn.classList.toggle("none");
    closeMobileNavBtn.classList.toggle("none");
    document.body.classList.toggle("no-scroll");
});

// Links

const productionsMobLink = document.querySelector("#productsMobile");
const newsMobLink = document.querySelector("#newsMobile");
const aboutMobLink = document.querySelector("#aboutMobile");

productionsMobLink.addEventListener("click", () => {
    mobNavBody.classList.toggle("mobile-nav__body--open");
    openMobileNavBtn.classList.toggle("none");
    closeMobileNavBtn.classList.toggle("none");
    document.body.classList.toggle("no-scroll");
});
newsMobLink.addEventListener("click", () => {
    mobNavBody.classList.toggle("mobile-nav__body--open");
    openMobileNavBtn.classList.toggle("none");
    closeMobileNavBtn.classList.toggle("none");
    document.body.classList.toggle("no-scroll");
});
aboutMobLink.addEventListener("click", () => {
    mobNavBody.classList.toggle("mobile-nav__body--open");
    openMobileNavBtn.classList.toggle("none");
    closeMobileNavBtn.classList.toggle("none");
    document.body.classList.toggle("no-scroll");
});
