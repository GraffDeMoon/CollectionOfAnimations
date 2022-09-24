console.log('animation-16');

let animation16 = document.querySelector(".body-16_btm");
let position = 110;

animation16.addEventListener("mouseover", function(){
    position === 110 ? (position = 240) : (position = 110);
    animation16.style.left = `${position}px`;
});