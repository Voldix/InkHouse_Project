const franceBtn = document.querySelector("#franceBtn");
const germanyBtn = document.querySelector("#germanyBtn");
const englandBtn = document.querySelector("#englandBtn");

const franceContent = document.querySelector("#france");
const germanyContent = document.querySelector("#germany");
const englandContent = document.querySelector("#england");

franceBtn.addEventListener("click", () => {
    franceBtn.classList.add("active");
    germanyBtn.classList.remove("active");
    englandBtn.classList.remove("active");

    franceContent.classList.remove("none");
    germanyContent.classList.add("none");
    englandContent.classList.add("none");
});

germanyBtn.addEventListener("click", () => {
    franceBtn.classList.remove("active");
    germanyBtn.classList.add("active");
    englandBtn.classList.remove("active");

    franceContent.classList.add("none");
    germanyContent.classList.remove("none");
    englandContent.classList.add("none");
});

englandBtn.addEventListener("click", () => {
    franceBtn.classList.remove("active");
    germanyBtn.classList.remove("active");
    englandBtn.classList.add("active");

    franceContent.classList.add("none");
    germanyContent.classList.add("none");
    englandContent.classList.remove("none");
});

// Активность для кнопки в разделе NEWS

const newsBtn = document.querySelector("#newsBtn");

newsBtn.addEventListener("click", () => {
    document.querySelector("#products").scrollIntoView({ behavior: "smooth" });

    franceBtn.classList.add("active");
    germanyBtn.classList.remove("active");
    englandBtn.classList.remove("active");

    franceContent.classList.remove("none");
    germanyContent.classList.add("none");
    englandContent.classList.add("none");
});

// Навигационное меню подвала для стран

const franceLink = document.querySelector("#franceLink");
const germanyLink = document.querySelector("#germanyLink");
const englandLink = document.querySelector("#englandLink");

franceLink.addEventListener("click", () => {
    franceBtn.classList.add("active");
    germanyBtn.classList.remove("active");
    englandBtn.classList.remove("active");

    franceContent.classList.remove("none");
    germanyContent.classList.add("none");
    englandContent.classList.add("none");
});

germanyLink.addEventListener("click", () => {
    franceBtn.classList.remove("active");
    germanyBtn.classList.add("active");
    englandBtn.classList.remove("active");

    franceContent.classList.add("none");
    germanyContent.classList.remove("none");
    englandContent.classList.add("none");
});

englandLink.addEventListener("click", () => {
    franceBtn.classList.remove("active");
    germanyBtn.classList.remove("active");
    englandBtn.classList.add("active");

    franceContent.classList.add("none");
    germanyContent.classList.add("none");
    englandContent.classList.remove("none");
});

