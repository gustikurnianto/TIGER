const mouseWheel = document.querySelector('.scroll');

        mouseWheel.addEventListener('wheel', function(e) {
            const race = 50;

            if (e.deltaY > 0)
                mouseWheel.scrollLeft += race;
            else
                mouseWheel.scrollLeft -= race;
                e.preventDefault();
        });
