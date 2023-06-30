const header = document.querySelector('header')
const button = document.querySelector('.see-more')
let prevScrollPos = window.scrollY

/*window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const logoBox = document.querySelector('.logo-box')

    if(scrollPosition > 0){
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.269)'
    }else{
        header.style.backgroundColor = 'transparent'
    }
})*/

/*scroll position*/

window.addEventListener("scroll", function () {
    const currentScrollPos = window.scrollY;
    const headerHeight = header.offsetHeight

    if (prevScrollPos > currentScrollPos) {
        header.style.marginTop = 0
    } else {
        header.style.marginTop = `-${headerHeight}px`
    }

    console.log(headerHeight)
    prevScrollPos = currentScrollPos;
});

/*hiden menu*/

const menuBtn = document.querySelector('.hidden-menu-btn');

menuBtn.addEventListener('click', () => {
    document.body.classList.toggle('open')
})



/*carousel*/

document.addEventListener('DOMContentLoaded', function () {
    var carouselContainer = document.querySelector('.carousel-container');
    var prevButton = document.querySelector('.carousel-prev');
    var nextButton = document.querySelector('.carousel-next');
    var currentIndex = 0;
    var totalItems = document.querySelectorAll('.carousel-item').length;

    prevButton.addEventListener('click', function (event) {
        event.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            carouselContainer.style.transform = 'translateX(-' + (currentIndex * 100 / totalItems) + '%)';
        }
    });

    nextButton.addEventListener('click', function (event) {
        event.preventDefault();
        if (currentIndex < totalItems - 1) {
            currentIndex++;
            carouselContainer.style.transform = 'translateX(-' + (currentIndex * 100 / totalItems) + '%)';
        }
    });
});