const slides = document.querySelectorAll(".slide");
const next = document.getElementById("nextBtn");
const prev = document.getElementById("prevBtn");

const nextSlide = () => {
    const activeSlide = document.querySelector(".active");
    activeSlide.classList.remove("active");

    if (activeSlide.nextElementSibling) {
        activeSlide.nextElementSibling.classList.add("active");
    } else {
        slides[0].classList.add("active");
    }
}

const prevSlide = () => {
    const activeSlide = document.querySelector(".active");
    activeSlide.classList.remove("active");

    if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add("active");
    } else {
        slides[slides.length - 1].classList.add("active");
    }
}

next.addEventListener("click", () => {
    nextSlide();
});
prev.addEventListener("click", () => {
    prevSlide();
});