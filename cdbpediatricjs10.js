    var modalreservasi = document.getElementById('modalreservasi');
    var newanddone = document.getElementById('newanddone');

    var modalClosereservasi = document.getElementById('closereservasi');
    modalClosereservasi.addEventListener('click', function() { 
        modalreservasi.style.display = "none";
        $('#newanddone').show();
        $('#menutools').show();
    });

    document.addEventListener('click', function (e) { 
        if (e.target.className.indexOf('imgRcdclass') !== -1) {
            var imgreservasi = e.target;
            var modalImgreservasi = document.getElementById("contentreservasi");
            modalreservasi.style.display = "block";
            modalImgreservasi.src = imgreservasi.src;
            $('#newanddone').hide();
            $('#menutools').hide();
        }
    });

    document.addEventListener('click', function (e) { 
        if (e.target.className.indexOf('imgRcdclassDone') !== -1) {
            var imgreservasi = e.target;
            var modalImgreservasi = document.getElementById("contentreservasi");
            modalreservasi.style.display = "block";
            modalImgreservasi.src = imgreservasi.src;
            $('#newanddone').hide();
            $('#menutools').hide();
        }
    });
