const menu = document.querySelector(".navbar-menu");
const burger = document.querySelector(".burger");
const texts = ['Frontend Developer', 'Blogger','Web Designer'];
let index = 0;
let count = 0;
let letter = '';
let currentText = '';



(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0,++index);
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index=0;
    }
    setTimeout(type,400);


}());
burger.addEventListener("click", toggle1);

function toggle1() {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
}