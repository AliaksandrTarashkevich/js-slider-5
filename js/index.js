const slider = document.querySelector('.slider'),
    btns = document.querySelectorAll('.btn'),
    slides = document.querySelectorAll('.img'),
    backgrounds = document.querySelectorAll('.bg'),
    options = document.querySelectorAll('.option');

let index = 1;
let op_index = 0;
let size = slides[index].clientWidth;

update();

function update() {
    slider.style.transform = 'translateX(' + (-size * index) + 'px';

    backgrounds.forEach(img => img.classList.remove('show'));
    backgrounds[op_index].classList.add('show')

    options.forEach(option => option.classList.remove('colored'));
    options[op_index].classList.add('colored');
}

function slide() {
    slider.style.transition = 'transform .5s ease-in-out';
    update();
}

function btnCheck() {
    if (this.id === 'prev') {
        index--;
        if(op_index === 0) {
            op_index = 4
        } else {
            op_index--;
        }
    } else {
        index++;
        if (op_index === 4) {
            op_index = 0;
        } else {
            op_index++;
        }
    }

    slide();
}

function optionFunc() {
    let i = Number(this.getAttribute('op-index'));
    index = i + 1;
    op_index = i;

    slide();
}

slider.addEventListener('transitionend', () => {
    if(slides[index].id === 'first') {
        slider.style.transition = 'none';
        index = slides.length - 2;
        slider.style.transform = "translateX("+ (-size * index) +"px)";
    } else if (slides[index].id === 'last') {
        slider.style.transition = 'none';
        index = 1;
        slider.style.transform = "translateX("+ (-size * index) +"px)";
    }
})

btns.forEach(btn => btn.addEventListener('click', btnCheck));
options.forEach(option => option.addEventListener('click', optionFunc));

