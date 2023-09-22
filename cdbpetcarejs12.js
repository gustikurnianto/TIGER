let inputkeluhan = document.getElementById('jawabanfotokeluhan');

    WIDTH = 800;

    inputkeluhan.addEventListener("change", (eventkeluhan) => {
        let image_keluhan = eventkeluhan.target.files[0];

        console.log("Original File", image_keluhan)

        let readerkeluhan = new FileReader();

        readerkeluhan.readAsDataURL(image_keluhan);

        readerkeluhan.onload = (eventkeluhan) => {

            image_url_keluhan = eventkeluhan.target.result;
            let imagekeluhan = document.createElement('img');
            imagekeluhan.src = image_url_keluhan;

            imagekeluhan.onload = (e) => {

                let canvas = document.createElement('canvas');
                let ratio = WIDTH / imagekeluhan.width;
                canvas.width = WIDTH;
                canvas.height = imagekeluhan.height * ratio;
                canvas.id = 'canvaskeluhan';
                canvas.style.display = "none";

                let context = canvas.getContext('2d');
                context.drawImage(imagekeluhan, 0, 0, canvas.width, canvas.height);

                let new_image_url_keluhan = canvas.toDataURL('image/jpeg', 98);

                // console.log("Image URL: ", new_image_url_keluhan)

                let image_keluhan = urlToFileKeluhan(new_image_url_keluhan);

                var wrapperkeluhan = document.getElementById('wrapperkeluhan');

                document.getElementById('wrapperkeluhan').style.display = "block";

                wrapperkeluhan.append(canvas);

            } 
        }
    })

    let urlToFileKeluhan = (url) => {

        let arr = url.split(",");
        // console.log(arr)
        let mime = arr[0].match(/:(.*?);/)[1];
        let data = arr[1];

        let dataStr = atob(data);
        let n = dataStr.length;
        let dataArr = new Uint8Array(n);

        while(n--)
        {
            dataArr[n] = dataStr.charCodeAt(n)
        };

        let filekeluhan  = new File([dataArr], 'FotoKeluhan.jpg', {type: mime});

        var dataTransfer = new DataTransfer();
        dataTransfer.items.add(filekeluhan);

        var fileInput = document.querySelector('#jawabanfotonya');
        fileInput.files = dataTransfer.files;

        var databaseuname =  document.getElementById('databaseuname').value;
        var nomorreservasi =  document.getElementById('nomorreservasi').value;
        var jawabanfotokeluhan = document.querySelector('#jawabanfotonya');
        var filessskeluhan = jawabanfotokeluhan.files[0];
        var nameboxkeluhan = document.querySelector('#nameboxxkeluhan');
        nameboxkeluhan.value = databaseuname+"Keluhan"+nomorreservasi;

        let readerkeluhanz = new FileReader();

        readerkeluhanz.readAsDataURL(filessskeluhan);

        readerkeluhanz.onload = (eventkeluhanz) => {

            var highimgkeluhan = document.querySelector('.highimgkeluhan');
            highimgkeluhan.src = eventkeluhanz.target.result;

            $('#jawabanfotokeluhanz').text('ubah foto');
                
        } 

        return filekeluhan;

    }
