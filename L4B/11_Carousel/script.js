document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const leftButton = document.querySelector('.carousel-button.left');
    const rightButton = document.querySelector('.carousel-button.right');
    const cards = Array.from(track.children);
    const cardWidth = cards[0].getBoundingClientRect().width;

    let currentIndex = 0;

    rightButton.addEventListener('click', () => {
        if (currentIndex < cards.length - 3) {
            currentIndex++;
            updateCarousel();
        }
    });

    leftButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    function updateCarousel() {
        const amountToMove = cardWidth * currentIndex;
        track.style.transform = `translateX(-${amountToMove}px)`;
    }
});
