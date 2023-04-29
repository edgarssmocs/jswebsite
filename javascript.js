const images = document.querySelectorAll('.js-image')
const left = document.querySelector('.js-left')
const right = document.querySelector('.js-right')
const sliderdots = document.querySelectorAll('.js-dot')
let activeIndex = 0
let sliderdotIndex = 0

const removeActiveImage = () => {
    images.forEach((image) => {
    image.classList.remove('active')
})
}

const removesliderdot = () => {
    sliderdots.forEach((dot) => {
    dot.classList.remove('active')
})
}


right.addEventListener('click', () => {
    removeActiveImage()
    removesliderdot()


    if (activeIndex === images.length - 1) {
        activeIndex = 0
    }
    else {
        activeIndex = activeIndex + 1
        }
    
        sliderdotsIndex = activeIndex

    images[activeIndex].classList.add('active')
    sliderdots[sliderdotsIndex].classList.add('active')


})


left.addEventListener('click', () => {
removeActiveImage()
removesliderdot()


if (activeIndex === 0) {
    activeIndex = images.length - 1
}
else {
activeIndex = activeIndex - 1
}
sliderdotsIndex = activeIndex
images[activeIndex].classList.add('active')
sliderdots[sliderdotsIndex].classList.add('active')

})
