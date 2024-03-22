// Slider scripts 

const sliderContent = document.querySelector('.slider-content')
const sliderImgs = document.querySelectorAll('.slider-content img')

let counter = 0;

function slider() {
    counter++

    if (counter > sliderImgs.length - 1) {
        counter = 0
    }

    sliderContent.style.transform = `translateX(${-counter * 1400}px)`;
}

setInterval(slider, 12000);



// Cards scripts


const productBtns = document.querySelectorAll('.product-btn')
const productContent = document.querySelectorAll('.product-content-item')

productBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {

        productBtns.forEach(btn => btn.classList.remove('active'))
        btn.classList.add('active')

        productContent.forEach(c => c.classList.remove('show'))
        productContent[index].classList.add('show')
    })
})