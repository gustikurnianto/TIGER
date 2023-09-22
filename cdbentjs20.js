        const mouseWheeljadwal = document.querySelector('.scrolljadwal');

        mouseWheeljadwal.addEventListener('wheel', function(e) {
            const racejadwal = 50;

            if (e.deltaY > 0)
                mouseWheeljadwal.scrollLeft += racejadwal;
            else
                mouseWheeljadwal.scrollLeft -= racejadwal;
                e.preventDefault();
        });
