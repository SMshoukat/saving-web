let index = 0;
        const visibleItems = 4;
        const itemWidth = document.querySelector('.slider-item').offsetWidth + 18; // Item width + gap
        const slider = document.getElementById('slider');
        const totalItems = slider.children.length;

        function moveSlide(direction) {
            if (direction === 1 && index < totalItems - visibleItems) {
                index++;
            } else if (direction === -1 && index > 0) {
                index--;
            }
            slider.style.transform = `translateX(-${index * itemWidth}px )`;
        }