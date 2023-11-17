let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slide .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lenghtItems = items.length -1;

next.onclick = function(){
    if(active + 1 > lenghtItems){
        active = 0;
    }else{
        active =  active + 1;
    }
    reloadSlider();

}
prev.onclick = function(){
    if(active - 1 <0){
        active = lenghtItems;

    }else{
        active = active - 1;
    }
    reloadSlider();
}
let refresfSlider = setInterval(() => {next.click()}, 3000);
function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style . left = - checkLeft + 'px';

    let lastActiveDot = IMAGESLIDER.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList('active');
    clearInterval(refresfSlider);
    refresfSlider = setInterval(() => {next.click}, 3000);
}
dots.forEach ((li,  key) => {
    li.addEventListerner('click',function(){
        active = key;
        reloadSlider();
    })
})