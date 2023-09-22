    var modal = document.getElementById('modal');

    var modalClose = document.getElementById('close');
        modalClose.addEventListener('click', function() { 
        modal.style.display = "none";
        $('#newanddone').hide();
    });

    document.addEventListener('click', function (e) { 
        if (e.target.className.indexOf('borderlistz') !== -1) {
            var img = e.target;
            var modalImg = document.getElementById("content");
            modal.style.display = "block";
            modalImg.src = img.src;
            $('#newanddone').hide();
        }
    });
