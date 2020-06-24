
const container = document.querySelector('.container');

document.querySelector('.open-navbar-icon').addEventListener('click', () => {
    container.classList.add('change');
});


document.querySelector('.close-navbar-icon').addEventListener('click', () => {
    container.classList.remove('change');
});


const colors = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee'];
let i = 0;
Array.from(document.querySelectorAll('.nav-link')).forEach((item) => {
    item.style.cssText = `background-color:${colors[i++]}`
});

Array.from(document.querySelectorAll('.navigation-button')).forEach((item) => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle('change');
    };
});



var index = 0;
show();
function show() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByTagName("span");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = " none";
    }
    index = index + 1;
    if (index > slides.length) {
        index = 1;
    }
    for(i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace(" active", "")
    }
    slides[index - 1].style.display = "block";
    dots[index-1].className += " active";
    setTimeout(show, 3000);
}