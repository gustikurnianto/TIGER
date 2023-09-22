    const mouseWheelz = document.querySelector('.scrolldrg');

        mouseWheelz.addEventListener('wheel', function(e) {
            const racez = 50;

            if (e.deltaY > 0)
                mouseWheelz.scrollLeft += racez;
            else
                mouseWheelz.scrollLeft -= racez;
                e.preventDefault();
        });
