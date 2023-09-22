let input = document.getElementById('inputnich');

    WIDTH = 800;

    input.addEventListener("change", (event) => {
        let image_file = event.target.files[0];

        console.log("Original File", image_file)

        let reader = new FileReader();

        reader.readAsDataURL(image_file);

        reader.onload = (event) => {

            highimg = document.querySelector('.highimg');
            highimg.src = event.target.result;

            image_url = event.target.result;
            let image = document.createElement('img');
            image.src = image_url;

            image.onload = (e) => {

                let canvas = document.createElement('canvas');
                let ratio = WIDTH / image.width;
                canvas.width = WIDTH;
                canvas.height = image.height * ratio;
                canvas.id = 'canvas';
                canvas.style.display = "none";

                let context = canvas.getContext('2d');
                context.drawImage(image, 0, 0, canvas.width, canvas.height);

                let new_image_url = canvas.toDataURL('image/jpeg', 98);

                // console.log("Image URL: ", new_image_url)

                let image_file = urlToFile(new_image_url);

                var wrapper = document.getElementById('wrapper');

                wrapper.append(canvas);

                document.getElementById('containerhighlightz').style.display = "block";

                document.getElementById('modalhighlight').style.display = "block";

                document.getElementById('upbtnzzhighlightz').style.display = "block";

                document.getElementById('wrapper').style.marginTop = "10px";

                document.querySelector('#emptyiconhighlightz').style.display = "none";

            } 
        }
    })

    let urlToFile = (url) => {

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

        let file  = new File([dataArr], 'File.jpg', {type: mime});

        var dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);

        var fileInput = document.querySelector('#inputnyah');
        fileInput.files = dataTransfer.files;

        var databaseuname =  document.getElementById('databaseuname').value;
        var nomorhlgt =  document.getElementById('nomorhlgt').value;
        var inputnich = document.querySelector('#inputnyah');
        var filesss = inputnich.files[0];
        var namebox = document.querySelector('#nameboxxhighlightz');
        namebox.value = databaseuname+"Highlight"+nomorhlgt;

        return file;

    }

    $('#closehighlight').click(function(){
        $("#modalhighlight").hide();
        $("#containerhighlightz").hide();
        var highimgdelete = document.querySelector('.highimg');
        highimgdelete.src = "";
        var inputnichz = document.querySelector('#inputnich');
        var inputnyahz = document.querySelector('#inputnyah');
        inputnichz.value = "";
        inputnyahz.value = "";
    });
