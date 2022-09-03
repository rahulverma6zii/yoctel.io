let solutions = document.getElementById("solutions");
let solutions_para = document.getElementById("solutions-para");
let nav_link = document.getElementsByClassName("nav-link");
showpara();
function showpara() {

    solutions.addEventListener("mouseover", () => {
        solutions_para.style.zIndex = "+1";
    })

    solutions.addEventListener("mouseleave", () => {


        solutions_para.style.zIndex = "";
        solutions_para.style.zIndex = "-2";
    })

};











let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}