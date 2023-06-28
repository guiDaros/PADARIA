const header = document.querySelector('header')
const scrollPosition = this.scrollY;
const button = document.querySelector('.see-more')

/*const func = () =>{
    header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
}
*/

/*const func2 = () =>{
    if(scrollPosition < 1){
        header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }else{
        header.style.backgroundColor = '#f3e5c6';
    }
}*/

const funct = () => {
    if (scrollPosition !== 0) {
        header.style.backgroundColor = 'rgba(243, 229, 198)';
    }

    document.addEventListener('scroll', funct)
}




/*hidden manu config*/

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