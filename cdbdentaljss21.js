        const mouseWheelpin = document.querySelector('.scrollpin');

        mouseWheelpin.addEventListener('wheel', function(e) {
            const racepin = 50;

            if (e.deltaY > 0)
                mouseWheelpin.scrollLeft += racepin;
            else
                mouseWheelpin.scrollLeft -= racepin;
                e.preventDefault();
        });
