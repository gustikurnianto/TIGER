var gmbrbtn1 = document.querySelector('.checkbox1s');
        var gmbrbtn1list = document.querySelector('.checkbox1slist');
        var checkboxfont1 = document.querySelector('.checkboxfont1');
        var checkboxfont2 = document.querySelector('.checkboxfont2');
        var checkboxfont3 = document.querySelector('.checkboxfont3');
        var checkboxfont4 = document.querySelector('.checkboxfont4');

        function bloknamadentist(){
            var text = $('.bloknamadentist');

            text.each(function(){
                $(this).attr('rows',1);
                resize($(this));
            });

            text.on('click', function(){
                resize($(this));
            });
                    
            function resize ($text) {
                $text.css('height', 'auto');
                $text.css('height', $text[0].scrollHeight+'px');
            }
        }

        function teswindow(){ 
            if(gmbrbtn1list.checked & window.orientation !== 0 & checkboxfont1.checked) {
                document.querySelector(".ktksilahkan").style.width = "420px";
                document.querySelector("#kotakconcern").style.width = "420px";
                document.querySelector("#tabels").style.maxWidth = "418px"; 

                $('.blokdentist').css('width', "333px");
                $('.bloknamadentist').css('width', "273px");
                $('.bloknamaMenu').css('width', "293px");
                $('.infos').css('width', "333px");
                $('.reservasi1').css('width', "333px"); 
                $('.reservasis').css('width', "333px"); 
                $('#jawabannamapasien').css('width', "333px"); 
                $('#jawabanalamat').css('width', "333px"); 
                $('#jawabantanggallahir').css('width', "333px"); 
                $('#jawabanumurangka').css('width', "248px"); 
                $('#jawabanjeniskelamin').css('width', "333px"); 
                $('#jawabankeluhan').css('width', "333px"); 
                $('#jawabanalergi').css('width', "333px"); 
                $('#jawabanfotokeluhanz').css('width', "333px"); 
                $('#jawabanjadwal').css('width', "333px"); 
                $('.jawabanjams').css('width', "333px"); 
                $('.jawabanjamsdokter').css('width', "333px"); 
                $('#jawabanhp').css('width', "333px"); 

                $('.titlebuttondrg').css('margin-left', "auto");
                $('.titlebuttondrg').css('margin-right', "13px");
                $('.titlebuttondrg').css('margin-top', "13px");
                $('.titlebuttondrg').css('margin-bottom', "auto");
                $('.titlebuttonscaling').css('margin-left', "auto");
                $('.titlebuttonscaling').css('margin-right', "13px");
                $('.titlebuttonscaling').css('margin-top', "13px");
                $('.titlebuttonscaling').css('margin-bottom', "auto");
                $('.titlebuttontambal').css('margin-left', "auto");
                $('.titlebuttontambal').css('margin-right', "13px");
                $('.titlebuttontambal').css('margin-top', "13px");
                $('.titlebuttontambal').css('margin-bottom', "auto");
                $('.titlebuttonbedah').css('margin-left', "auto");
                $('.titlebuttonbedah').css('margin-right', "13px");
                $('.titlebuttonbedah').css('margin-top', "13px");
                $('.titlebuttonbedah').css('margin-bottom', "auto");
                $('.titlebuttonbehel').css('margin-left', "auto");
                $('.titlebuttonbehel').css('margin-right', "13px");
                $('.titlebuttonbehel').css('margin-top', "13px");
                $('.titlebuttonbehel').css('margin-bottom', "auto");
                $('.titlebuttongigitiruan').css('margin-left', "auto");
                $('.titlebuttongigitiruan').css('margin-right', "13px");
                $('.titlebuttongigitiruan').css('margin-top', "13px");
                $('.titlebuttongigitiruan').css('margin-bottom', "auto");
                $('.titlebuttonbleaching').css('margin-left', "auto");
                $('.titlebuttonbleaching').css('margin-right', "13px");
                $('.titlebuttonbleaching').css('margin-top', "13px");
                $('.titlebuttonbleaching').css('margin-bottom', "auto");
                $('.titlebuttonveneer').css('margin-left', "auto");
                $('.titlebuttonveneer').css('margin-right', "13px");
                $('.titlebuttonveneer').css('margin-top', "13px");
                $('.titlebuttonveneer').css('margin-bottom', "auto");
                $('.titlebuttonlainnya').css('margin-left', "auto");
                $('.titlebuttonlainnya').css('margin-right', "13px");
                $('.titlebuttonlainnya').css('margin-top', "13px");
                $('.titlebuttonlainnya').css('margin-bottom', "auto");

                $('.pages').css('width', "418px");
                $('.judulmenu').css('width', "418px");  
                $('.cancelmenuss').css('width', "418px"); 
                $('.cancelmenuss').css('background-size', "3%"); 
                $('.kotakcancel').css('width', "418px"); 
                $('.kotakcancel').css('background-size', "3%"); 
                $('.drgbutton1').css('width', "180px");
                $('.drgbutton1list').css('width', "400px");
                $('.healthbutton1').css('width', "180px");
                $('.healthbutton1list').css('width', "400px");
                $('.groombutton1').css('width', "180px");
                $('.groombutton1list').css('width', "400px");
                $('.hotelbutton1').css('width', "180px");
                $('.hotelbutton1list').css('width', "400px");
                $('.pacakbutton1').css('width', "180px");
                $('.pacakbutton1list').css('width', "400px");
                $('.adoptionbutton1').css('width', "180px");
                $('.adoptionbutton1list').css('width', "400px");
                $('.bleachbutton1').css('width', "180px");
                $('.bleachbutton1list').css('width', "400px");
                $('.veneerbutton1').css('width', "180px");
                $('.veneerbutton1list').css('width', "400px");
                $('.lainnyabutton1').css('width', "180px");
                $('.lainnyabutton1list').css('width', "400px");
                bloknamadentist();
            }     

            if(gmbrbtn1list.checked & window.orientation == 0 & checkboxfont1.checked) {
                document.querySelector(".ktksilahkan").style.width = "315px";
                document.querySelector("#kotakconcern").style.width = "315px";
                document.querySelector("#tabels").style.maxWidth = "315px";

                $('.blokdentist').css('width', "260px");
                $('.bloknamadentist').css('width', "200px");
                $('.bloknamaMenu').css('width', "220px");
                $('.infos').css('width', "260px");
                $('.reservasi1').css('width', "260px"); 
                $('.reservasis').css('width', "260px"); 
                $('#jawabannamapasien').css('width', "260px"); 
                $('#jawabanalamat').css('width', "260px"); 
                $('#jawabantanggallahir').css('width', "260px"); 
                $('#jawabanumurangka').css('width', "175px"); 
                $('#jawabanjeniskelamin').css('width', "260px"); 
                $('#jawabankeluhan').css('width', "260px"); 
                $('#jawabanalergi').css('width', "260px"); 
                $('#jawabanfotokeluhanz').css('width', "260px"); 
                $('#jawabanjadwal').css('width', "260px"); 
                $('.jawabanjams').css('width', "260px"); 
                $('.jawabanjamsdokter').css('width', "260px"); 
                $('#jawabanhp').css('width', "260px");

                $('.titlebuttondrg').css('margin-left', "auto");
                $('.titlebuttondrg').css('margin-right', "13px");
                $('.titlebuttondrg').css('margin-top', "13px");
                $('.titlebuttondrg').css('margin-bottom', "auto");
                $('.titlebuttonscaling').css('margin-left', "auto");
                $('.titlebuttonscaling').css('margin-right', "13px");
                $('.titlebuttonscaling').css('margin-top', "13px");
                $('.titlebuttonscaling').css('margin-bottom', "auto");
                $('.titlebuttontambal').css('margin-left', "auto");
                $('.titlebuttontambal').css('margin-right', "13px");
                $('.titlebuttontambal').css('margin-top', "13px");
                $('.titlebuttontambal').css('margin-bottom', "auto");
                $('.titlebuttonbedah').css('margin-left', "auto");
                $('.titlebuttonbedah').css('margin-right', "13px");
                $('.titlebuttonbedah').css('margin-top', "13px");
                $('.titlebuttonbedah').css('margin-bottom', "auto");
                $('.titlebuttonbehel').css('margin-left', "auto");
                $('.titlebuttonbehel').css('margin-right', "13px");
                $('.titlebuttonbehel').css('margin-top', "13px");
                $('.titlebuttonbehel').css('margin-bottom', "auto");
                $('.titlebuttongigitiruan').css('margin-left', "auto");
                $('.titlebuttongigitiruan').css('margin-right', "13px");
                $('.titlebuttongigitiruan').css('margin-top', "13px");
                $('.titlebuttongigitiruan').css('margin-bottom', "auto");
                $('.titlebuttonbleaching').css('margin-left', "auto");
                $('.titlebuttonbleaching').css('margin-right', "13px");
                $('.titlebuttonbleaching').css('margin-top', "13px");
                $('.titlebuttonbleaching').css('margin-bottom', "auto");
                $('.titlebuttonveneer').css('margin-left', "auto");
                $('.titlebuttonveneer').css('margin-right', "13px");
                $('.titlebuttonveneer').css('margin-top', "13px");
                $('.titlebuttonveneer').css('margin-bottom', "auto");
                $('.titlebuttonlainnya').css('margin-left', "auto");
                $('.titlebuttonlainnya').css('margin-right', "13px");
                $('.titlebuttonlainnya').css('margin-top', "13px");
                $('.titlebuttonlainnya').css('margin-bottom', "auto");

                $('.pages').css('width', "315px");
                $('.judulmenu').css('width', "315px"); 
                $('.cancelmenuss').css('width', "315px"); 
                $('.cancelmenuss').css('background-size', "5%"); 
                $('.kotakcancel').css('width', "315px"); 
                $('.kotakcancel').css('background-size', "5%"); 
                $('.drgbutton1').css('width', "135px");
                $('.drgbutton1list').css('width', "295px");
                $('.healthbutton1').css('width', "135px");
                $('.healthbutton1list').css('width', "295px");
                $('.groombutton1').css('width', "135px");
                $('.groombutton1list').css('width', "295px");
                $('.hotelbutton1').css('width', "135px");
                $('.hotelbutton1list').css('width', "295px");
                $('.pacakbutton1').css('width', "135px");
                $('.pacakbutton1list').css('width', "295px");
                $('.adoptionbutton1').css('width', "135px");
                $('.adoptionbutton1list').css('width', "295px");
                $('.bleachbutton1').css('width', "135px");
                $('.bleachbutton1list').css('width', "295px");
                $('.veneerbutton1').css('width', "135px");
                $('.veneerbutton1list').css('width', "295px");
                $('.lainnyabutton1').css('width', "135px");
                $('.lainnyabutton1list').css('width', "295px");
                bloknamadentist();
            }    

            if(gmbrbtn1list.checked & window.orientation !== 0 & checkboxfont2.checked ) {
                document.querySelector(".ktksilahkan").style.width = "420px";
                document.querySelector("#kotakconcern").style.width = "420px";
                document.querySelector("#tabels").style.maxWidth = "418px"; 

                $('.blokdentist').css('width', "333px");
                $('.bloknamadentist').css('width', "273px");
                $('.bloknamaMenu').css('width', "293px");
                $('.infos').css('width', "333px");
                $('.reservasi1').css('width', "333px"); 
                $('.reservasis').css('width', "333px"); 
                $('#jawabannamapasien').css('width', "333px"); 
                $('#jawabanalamat').css('width', "333px"); 
                $('#jawabantanggallahir').css('width', "333px"); 
                $('#jawabanumurangka').css('width', "248px"); 
                $('#jawabanjeniskelamin').css('width', "333px"); 
                $('#jawabankeluhan').css('width', "333px"); 
                $('#jawabanalergi').css('width', "333px"); 
                $('#jawabanfotokeluhanz').css('width', "333px"); 
                $('#jawabanjadwal').css('width', "333px"); 
                $('.jawabanjams').css('width', "333px"); 
                $('.jawabanjamsdokter').css('width', "333px"); 
                $('#jawabanhp').css('width', "333px"); 

                $('.titlebuttondrg').css('margin-left', "auto");
                $('.titlebuttondrg').css('margin-right', "13px");
                $('.titlebuttondrg').css('margin-top', "13px");
                $('.titlebuttondrg').css('margin-bottom', "auto");
                $('.titlebuttonscaling').css('margin-left', "auto");
                $('.titlebuttonscaling').css('margin-right', "13px");
                $('.titlebuttonscaling').css('margin-top', "13px");
                $('.titlebuttonscaling').css('margin-bottom', "auto");
                $('.titlebuttontambal').css('margin-left', "auto");
                $('.titlebuttontambal').css('margin-right', "13px");
                $('.titlebuttontambal').css('margin-top', "13px");
                $('.titlebuttontambal').css('margin-bottom', "auto");
                $('.titlebuttonbedah').css('margin-left', "auto");
                $('.titlebuttonbedah').css('margin-right', "13px");
                $('.titlebuttonbedah').css('margin-top', "13px");
                $('.titlebuttonbedah').css('margin-bottom', "auto");
                $('.titlebuttonbehel').css('margin-left', "auto");
                $('.titlebuttonbehel').css('margin-right', "13px");
                $('.titlebuttonbehel').css('margin-top', "13px");
                $('.titlebuttonbehel').css('margin-bottom', "auto");
                $('.titlebuttongigitiruan').css('margin-left', "auto");
                $('.titlebuttongigitiruan').css('margin-right', "13px");
                $('.titlebuttongigitiruan').css('margin-top', "13px");
                $('.titlebuttongigitiruan').css('margin-bottom', "auto");
                $('.titlebuttonbleaching').css('margin-left', "auto");
                $('.titlebuttonbleaching').css('margin-right', "13px");
                $('.titlebuttonbleaching').css('margin-top', "13px");
                $('.titlebuttonbleaching').css('margin-bottom', "auto");
                $('.titlebuttonveneer').css('margin-left', "auto");
                $('.titlebuttonveneer').css('margin-right', "13px");
                $('.titlebuttonveneer').css('margin-top', "13px");
                $('.titlebuttonveneer').css('margin-bottom', "auto");
                $('.titlebuttonlainnya').css('margin-left', "auto");
                $('.titlebuttonlainnya').css('margin-right', "13px");
                $('.titlebuttonlainnya').css('margin-top', "13px");
                $('.titlebuttonlainnya').css('margin-bottom', "auto");

                $('.pages').css('width', "418px");
                $('.judulmenu').css('width', "418px"); 
                $('.cancelmenuss').css('width', "418px"); 
                $('.cancelmenuss').css('background-size', "3%"); 
                $('.kotakcancel').css('width', "418px"); 
                $('.kotakcancel').css('background-size', "3%"); 
                $('.drgbutton1').css('width', "180px");
                $('.drgbutton1list').css('width', "400px");
                $('.healthbutton1').css('width', "180px");
                $('.healthbutton1list').css('width', "400px");
                $('.groombutton1').css('width', "180px");
                $('.groombutton1list').css('width', "400px");
                $('.hotelbutton1').css('width', "180px");
                $('.hotelbutton1list').css('width', "400px");
                $('.pacakbutton1').css('width', "180px");
                $('.pacakbutton1list').css('width', "400px");
                $('.adoptionbutton1').css('width', "180px");
                $('.adoptionbutton1list').css('width', "400px");
                $('.bleachbutton1').css('width', "180px");
                $('.bleachbutton1list').css('width', "400px");
                $('.veneerbutton1').css('width', "180px");
                $('.veneerbutton1list').css('width', "400px");
                $('.lainnyabutton1').css('width', "180px");
                $('.lainnyabutton1list').css('width', "400px");
                bloknamadentist();
            }     

            if(gmbrbtn1list.checked & window.orientation == 0 & checkboxfont2.checked) {
                document.querySelector(".ktksilahkan").style.width = "315px";
                document.querySelector("#kotakconcern").style.width = "315px";
                document.querySelector("#tabels").style.maxWidth = "315px";

                $('.blokdentist').css('width', "260px");
                $('.bloknamadentist').css('width', "200px");
                $('.bloknamaMenu').css('width', "220px");
                $('.infos').css('width', "260px");
                $('.reservasi1').css('width', "260px"); 
                $('.reservasis').css('width', "260px"); 
                $('#jawabannamapasien').css('width', "260px"); 
                $('#jawabanalamat').css('width', "260px"); 
                $('#jawabantanggallahir').css('width', "260px"); 
                $('#jawabanumurangka').css('width', "175px"); 
                $('#jawabanjeniskelamin').css('width', "260px"); 
                $('#jawabankeluhan').css('width', "260px"); 
                $('#jawabanalergi').css('width', "260px"); 
                $('#jawabanfotokeluhanz').css('width', "260px"); 
                $('#jawabanjadwal').css('width', "260px"); 
                $('.jawabanjams').css('width', "260px"); 
                $('.jawabanjamsdokter').css('width', "260px"); 
                $('#jawabanhp').css('width', "260px"); 

                $('.titlebuttondrg').css('margin-left', "auto");
                $('.titlebuttondrg').css('margin-right', "13px");
                $('.titlebuttondrg').css('margin-top', "13px");
                $('.titlebuttondrg').css('margin-bottom', "auto");
                $('.titlebuttonscaling').css('margin-left', "auto");
                $('.titlebuttonscaling').css('margin-right', "13px");
                $('.titlebuttonscaling').css('margin-top', "13px");
                $('.titlebuttonscaling').css('margin-bottom', "auto");
                $('.titlebuttontambal').css('margin-left', "auto");
                $('.titlebuttontambal').css('margin-right', "13px");
                $('.titlebuttontambal').css('margin-top', "13px");
                $('.titlebuttontambal').css('margin-bottom', "auto");
                $('.titlebuttonbedah').css('margin-left', "auto");
                $('.titlebuttonbedah').css('margin-right', "13px");
                $('.titlebuttonbedah').css('margin-top', "13px");
                $('.titlebuttonbedah').css('margin-bottom', "auto");
                $('.titlebuttonbehel').css('margin-left', "auto");
                $('.titlebuttonbehel').css('margin-right', "13px");
                $('.titlebuttonbehel').css('margin-top', "13px");
                $('.titlebuttonbehel').css('margin-bottom', "auto");
                $('.titlebuttongigitiruan').css('margin-left', "auto");
                $('.titlebuttongigitiruan').css('margin-right', "13px");
                $('.titlebuttongigitiruan').css('margin-top', "13px");
                $('.titlebuttongigitiruan').css('margin-bottom', "auto");
                $('.titlebuttonbleaching').css('margin-left', "auto");
                $('.titlebuttonbleaching').css('margin-right', "13px");
                $('.titlebuttonbleaching').css('margin-top', "13px");
                $('.titlebuttonbleaching').css('margin-bottom', "auto");
                $('.titlebuttonveneer').css('margin-left', "auto");
                $('.titlebuttonveneer').css('margin-right', "13px");
                $('.titlebuttonveneer').css('margin-top', "13px");
                $('.titlebuttonveneer').css('margin-bottom', "auto");
                $('.titlebuttonlainnya').css('margin-left', "auto");
                $('.titlebuttonlainnya').css('margin-right', "13px");
                $('.titlebuttonlainnya').css('margin-top', "13px");
                $('.titlebuttonlainnya').css('margin-bottom', "auto");

                $('.pages').css('width', "315px");
                $('.judulmenu').css('width', "315px"); 
                $('.cancelmenuss').css('width', "315px"); 
                $('.cancelmenuss').css('background-size', "5%"); 
                $('.kotakcancel').css('width', "315px"); 
                $('.kotakcancel').css('background-size', "5%"); 
                $('.drgbutton1').css('width', "135px");
                $('.drgbutton1list').css('width', "295px");
                $('.healthbutton1').css('width', "135px");
                $('.healthbutton1list').css('width', "295px");
                $('.groombutton1').css('width', "135px");
                $('.groombutton1list').css('width', "295px");
                $('.hotelbutton1').css('width', "135px");
                $('.hotelbutton1list').css('width', "295px");
                $('.pacakbutton1').css('width', "135px");
                $('.pacakbutton1list').css('width', "295px");
                $('.adoptionbutton1').css('width', "135px");
                $('.adoptionbutton1list').css('width', "295px");
                $('.bleachbutton1').css('width', "135px");
                $('.bleachbutton1list').css('width', "295px");
                $('.veneerbutton1').css('width', "135px");
                $('.veneerbutton1list').css('width', "295px");
                $('.lainnyabutton1').css('width', "135px");
                $('.lainnyabutton1list').css('width', "295px");
                bloknamadentist();
            }      

            if(gmbrbtn1list.checked & window.orientation !== 0 & checkboxfont3.checked ) {
                document.querySelector(".ktksilahkan").style.width = "420px";
                document.querySelector("#kotakconcern").style.width = "420px";
                document.querySelector("#tabels").style.maxWidth = "418px"; 

                $('.blokdentist').css('width', "333px");
                $('.bloknamadentist').css('width', "273px");
                $('.bloknamaMenu').css('width', "293px");
                $('.infos').css('width', "333px");
                $('.reservasi1').css('width', "333px"); 
                $('.reservasis').css('width', "333px"); 
                $('#jawabannamapasien').css('width', "333px"); 
                $('#jawabanalamat').css('width', "333px"); 
                $('#jawabantanggallahir').css('width', "333px"); 
                $('#jawabanumurangka').css('width', "248px"); 
                $('#jawabanjeniskelamin').css('width', "333px"); 
                $('#jawabankeluhan').css('width', "333px"); 
                $('#jawabanalergi').css('width', "333px"); 
                $('#jawabanfotokeluhanz').css('width', "333px"); 
                $('#jawabanjadwal').css('width', "333px"); 
                $('.jawabanjams').css('width', "333px"); 
                $('.jawabanjamsdokter').css('width', "333px"); 
                $('#jawabanhp').css('width', "333px"); 

                $('.titlebuttondrg').css('margin-left', "auto");
                $('.titlebuttondrg').css('margin-right', "13px");
                $('.titlebuttondrg').css('margin-top', "13px");
                $('.titlebuttondrg').css('margin-bottom', "auto");
                $('.titlebuttonscaling').css('margin-left', "auto");
                $('.titlebuttonscaling').css('margin-right', "13px");
                $('.titlebuttonscaling').css('margin-top', "13px");
                $('.titlebuttonscaling').css('margin-bottom', "auto");
                $('.titlebuttontambal').css('margin-left', "auto");
                $('.titlebuttontambal').css('margin-right', "13px");
                $('.titlebuttontambal').css('margin-top', "13px");
                $('.titlebuttontambal').css('margin-bottom', "auto");
                $('.titlebuttonbedah').css('margin-left', "auto");
                $('.titlebuttonbedah').css('margin-right', "13px");
                $('.titlebuttonbedah').css('margin-top', "13px");
                $('.titlebuttonbedah').css('margin-bottom', "auto");
                $('.titlebuttonbehel').css('margin-left', "auto");
                $('.titlebuttonbehel').css('margin-right', "13px");
                $('.titlebuttonbehel').css('margin-top', "13px");
                $('.titlebuttonbehel').css('margin-bottom', "auto");
                $('.titlebuttongigitiruan').css('margin-left', "auto");
                $('.titlebuttongigitiruan').css('margin-right', "13px");
                $('.titlebuttongigitiruan').css('margin-top', "13px");
                $('.titlebuttongigitiruan').css('margin-bottom', "auto");
                $('.titlebuttonbleaching').css('margin-left', "auto");
                $('.titlebuttonbleaching').css('margin-right', "13px");
                $('.titlebuttonbleaching').css('margin-top', "13px");
                $('.titlebuttonbleaching').css('margin-bottom', "auto");
                $('.titlebuttonveneer').css('margin-left', "auto");
                $('.titlebuttonveneer').css('margin-right', "13px");
                $('.titlebuttonveneer').css('margin-top', "13px");
                $('.titlebuttonveneer').css('margin-bottom', "auto");
                $('.titlebuttonlainnya').css('margin-left', "auto");
                $('.titlebuttonlainnya').css('margin-right', "13px");
                $('.titlebuttonlainnya').css('margin-top', "13px");
                $('.titlebuttonlainnya').css('margin-bottom', "auto");

                $('.pages').css('width', "418px");
                $('.judulmenu').css('width', "418px"); 
                $('.cancelmenuss').css('width', "418px"); 
                $('.cancelmenuss').css('background-size', "3%"); 
                $('.kotakcancel').css('width', "418px"); 
                $('.kotakcancel').css('background-size', "3%"); 
                $('.drgbutton1').css('width', "180px");
                $('.drgbutton1list').css('width', "400px");
                $('.healthbutton1').css('width', "180px");
                $('.healthbutton1list').css('width', "400px");
                $('.groombutton1').css('width', "180px");
                $('.groombutton1list').css('width', "400px");
                $('.hotelbutton1').css('width', "180px");
                $('.hotelbutton1list').css('width', "400px");
                $('.pacakbutton1').css('width', "180px");
                $('.pacakbutton1list').css('width', "400px");
                $('.adoptionbutton1').css('width', "180px");
                $('.adoptionbutton1list').css('width', "400px");
                $('.bleachbutton1').css('width', "180px");
                $('.bleachbutton1list').css('width', "400px");
                $('.veneerbutton1').css('width', "180px");
                $('.veneerbutton1list').css('width', "400px");
                $('.lainnyabutton1').css('width', "180px");
                $('.lainnyabutton1list').css('width', "400px");
                bloknamadentist();
            }     

            if(gmbrbtn1list.checked & window.orientation == 0 & checkboxfont3.checked) {
                document.querySelector(".ktksilahkan").style.width = "315px";
                document.querySelector("#kotakconcern").style.width = "315px";
                document.querySelector("#tabels").style.maxWidth = "315px";

                $('.blokdentist').css('width', "260px");
                $('.bloknamadentist').css('width', "200px");
                $('.bloknamaMenu').css('width', "220px");
                $('.infos').css('width', "260px");
                $('.reservasi1').css('width', "260px"); 
                $('.reservasis').css('width', "260px"); 
                $('#jawabannamapasien').css('width', "260px"); 
                $('#jawabanalamat').css('width', "260px"); 
                $('#jawabantanggallahir').css('width', "260px"); 
                $('#jawabanumurangka').css('width', "175px"); 
                $('#jawabanjeniskelamin').css('width', "260px"); 
                $('#jawabankeluhan').css('width', "260px"); 
                $('#jawabanalergi').css('width', "260px"); 
                $('#jawabanfotokeluhanz').css('width', "260px"); 
                $('#jawabanjadwal').css('width', "260px"); 
                $('.jawabanjams').css('width', "260px"); 
                $('.jawabanjamsdokter').css('width', "260px"); 
                $('#jawabanhp').css('width', "260px"); 

                $('.titlebuttondrg').css('margin-left', "auto");
                $('.titlebuttondrg').css('margin-right', "13px");
                $('.titlebuttondrg').css('margin-top', "13px");
                $('.titlebuttondrg').css('margin-bottom', "auto");
                $('.titlebuttonscaling').css('margin-left', "auto");
                $('.titlebuttonscaling').css('margin-right', "13px");
                $('.titlebuttonscaling').css('margin-top', "13px");
                $('.titlebuttonscaling').css('margin-bottom', "auto");
                $('.titlebuttontambal').css('margin-left', "auto");
                $('.titlebuttontambal').css('margin-right', "13px");
                $('.titlebuttontambal').css('margin-top', "13px");
                $('.titlebuttontambal').css('margin-bottom', "auto");
                $('.titlebuttonbedah').css('margin-left', "auto");
                $('.titlebuttonbedah').css('margin-right', "13px");
                $('.titlebuttonbedah').css('margin-top', "13px");
                $('.titlebuttonbedah').css('margin-bottom', "auto");
                $('.titlebuttonbehel').css('margin-left', "auto");
                $('.titlebuttonbehel').css('margin-right', "13px");
                $('.titlebuttonbehel').css('margin-top', "13px");
                $('.titlebuttonbehel').css('margin-bottom', "auto");
                $('.titlebuttongigitiruan').css('margin-left', "auto");
                $('.titlebuttongigitiruan').css('margin-right', "13px");
                $('.titlebuttongigitiruan').css('margin-top', "13px");
                $('.titlebuttongigitiruan').css('margin-bottom', "auto");
                $('.titlebuttonbleaching').css('margin-left', "auto");
                $('.titlebuttonbleaching').css('margin-right', "13px");
                $('.titlebuttonbleaching').css('margin-top', "13px");
                $('.titlebuttonbleaching').css('margin-bottom', "auto");
                $('.titlebuttonveneer').css('margin-left', "auto");
                $('.titlebuttonveneer').css('margin-right', "13px");
                $('.titlebuttonveneer').css('margin-top', "13px");
                $('.titlebuttonveneer').css('margin-bottom', "auto");
                $('.titlebuttonlainnya').css('margin-left', "auto");
                $('.titlebuttonlainnya').css('margin-right', "13px");
                $('.titlebuttonlainnya').css('margin-top', "13px");
                $('.titlebuttonlainnya').css('margin-bottom', "auto");

                $('.pages').css('width', "315px");
                $('.judulmenu').css('width', "315px"); 
                $('.cancelmenuss').css('width', "315px"); 
                $('.cancelmenuss').css('background-size', "5%"); 
                $('.kotakcancel').css('width', "315px"); 
                $('.kotakcancel').css('background-size', "5%"); 
                $('.drgbutton1').css('width', "135px");
                $('.drgbutton1list').css('width', "295px");
                $('.healthbutton1').css('width', "135px");
                $('.healthbutton1list').css('width', "295px");
                $('.groombutton1').css('width', "135px");
                $('.groombutton1list').css('width', "295px");
                $('.hotelbutton1').css('width', "135px");
                $('.hotelbutton1list').css('width', "295px");
                $('.pacakbutton1').css('width', "135px");
                $('.pacakbutton1list').css('width', "295px");
                $('.adoptionbutton1').css('width', "135px");
                $('.adoptionbutton1list').css('width', "295px");
                $('.bleachbutton1').css('width', "135px");
                $('.bleachbutton1list').css('width', "295px");
                $('.veneerbutton1').css('width', "135px");
                $('.veneerbutton1list').css('width', "295px");
                $('.lainnyabutton1').css('width', "135px");
                $('.lainnyabutton1list').css('width', "295px");
                bloknamadentist();
            }     

            if(gmbrbtn1list.checked & window.orientation !== 0 & checkboxfont4.checked ) {
                document.querySelector(".ktksilahkan").style.width = "420px";
                document.querySelector("#kotakconcern").style.width = "420px";
                document.querySelector("#tabels").style.maxWidth = "418px"; 

                $('.blokdentist').css('width', "333px");
                $('.bloknamadentist').css('width', "273px");
                $('.bloknamaMenu').css('width', "293px");
                $('.infos').css('width', "333px");
                $('.reservasi1').css('width', "333px"); 
                $('.reservasis').css('width', "333px"); 
                $('#jawabannamapasien').css('width', "333px"); 
                $('#jawabanalamat').css('width', "333px"); 
                $('#jawabantanggallahir').css('width', "333px"); 
                $('#jawabanumurangka').css('width', "248px"); 
                $('#jawabanjeniskelamin').css('width', "333px"); 
                $('#jawabankeluhan').css('width', "333px"); 
                $('#jawabanalergi').css('width', "333px"); 
                $('#jawabanfotokeluhanz').css('width', "333px"); 
                $('#jawabanjadwal').css('width', "333px"); 
                $('.jawabanjams').css('width', "333px"); 
                $('.jawabanjamsdokter').css('width', "333px"); 
                $('#jawabanhp').css('width', "333px"); 

                $('.titlebuttondrg').css('margin-left', "auto");
                $('.titlebuttondrg').css('margin-right', "13px");
                $('.titlebuttondrg').css('margin-top', "13px");
                $('.titlebuttondrg').css('margin-bottom', "auto");
                $('.titlebuttonscaling').css('margin-left', "auto");
                $('.titlebuttonscaling').css('margin-right', "13px");
                $('.titlebuttonscaling').css('margin-top', "13px");
                $('.titlebuttonscaling').css('margin-bottom', "auto");
                $('.titlebuttontambal').css('margin-left', "auto");
                $('.titlebuttontambal').css('margin-right', "13px");
                $('.titlebuttontambal').css('margin-top', "13px");
                $('.titlebuttontambal').css('margin-bottom', "auto");
                $('.titlebuttonbedah').css('margin-left', "auto");
                $('.titlebuttonbedah').css('margin-right', "13px");
                $('.titlebuttonbedah').css('margin-top', "13px");
                $('.titlebuttonbedah').css('margin-bottom', "auto");
                $('.titlebuttonbehel').css('margin-left', "auto");
                $('.titlebuttonbehel').css('margin-right', "13px");
                $('.titlebuttonbehel').css('margin-top', "13px");
                $('.titlebuttonbehel').css('margin-bottom', "auto");
                $('.titlebuttongigitiruan').css('margin-left', "auto");
                $('.titlebuttongigitiruan').css('margin-right', "13px");
                $('.titlebuttongigitiruan').css('margin-top', "13px");
                $('.titlebuttongigitiruan').css('margin-bottom', "auto");
                $('.titlebuttonbleaching').css('margin-left', "auto");
                $('.titlebuttonbleaching').css('margin-right', "13px");
                $('.titlebuttonbleaching').css('margin-top', "13px");
                $('.titlebuttonbleaching').css('margin-bottom', "auto");
                $('.titlebuttonveneer').css('margin-left', "auto");
                $('.titlebuttonveneer').css('margin-right', "13px");
                $('.titlebuttonveneer').css('margin-top', "13px");
                $('.titlebuttonveneer').css('margin-bottom', "auto");
                $('.titlebuttonlainnya').css('margin-left', "auto");
                $('.titlebuttonlainnya').css('margin-right', "13px");
                $('.titlebuttonlainnya').css('margin-top', "13px");
                $('.titlebuttonlainnya').css('margin-bottom', "auto");

                $('.pages').css('width', "418px");
                $('.judulmenu').css('width', "418px"); 
                $('.cancelmenuss').css('width', "418px"); 
                $('.cancelmenuss').css('background-size', "3%"); 
                $('.kotakcancel').css('width', "418px"); 
                $('.kotakcancel').css('background-size', "3%"); 
                $('.drgbutton1').css('width', "180px");
                $('.drgbutton1list').css('width', "400px");
                $('.healthbutton1').css('width', "180px");
                $('.healthbutton1list').css('width', "400px");
                $('.groombutton1').css('width', "180px");
                $('.groombutton1list').css('width', "400px");
                $('.hotelbutton1').css('width', "180px");
                $('.hotelbutton1list').css('width', "400px");
                $('.pacakbutton1').css('width', "180px");
                $('.pacakbutton1list').css('width', "400px");
                $('.adoptionbutton1').css('width', "180px");
                $('.adoptionbutton1list').css('width', "400px");
                $('.bleachbutton1').css('width', "180px");
                $('.bleachbutton1list').css('width', "400px");
                $('.veneerbutton1').css('width', "180px");
                $('.veneerbutton1list').css('width', "400px");
                $('.lainnyabutton1').css('width', "180px");
                $('.lainnyabutton1list').css('width', "400px");
                bloknamadentist();
            }     

            if(gmbrbtn1list.checked & window.orientation == 0 & checkboxfont4.checked) {
                document.querySelector(".ktksilahkan").style.width = "315px";
                document.querySelector("#kotakconcern").style.width = "315px";
                document.querySelector("#tabels").style.maxWidth = "315px";

                $('.blokdentist').css('width', "260px");
                $('.bloknamadentist').css('width', "200px");
                $('.bloknamaMenu').css('width', "220px");
                $('.infos').css('width', "260px");
                $('.reservasi1').css('width', "260px"); 
                $('.reservasis').css('width', "260px"); 
                $('#jawabannamapasien').css('width', "260px"); 
                $('#jawabanalamat').css('width', "260px"); 
                $('#jawabantanggallahir').css('width', "260px"); 
                $('#jawabanumurangka').css('width', "175px"); 
                $('#jawabanjeniskelamin').css('width', "260px"); 
                $('#jawabankeluhan').css('width', "260px"); 
                $('#jawabanalergi').css('width', "260px"); 
                $('#jawabanfotokeluhanz').css('width', "260px"); 
                $('#jawabanjadwal').css('width', "260px"); 
                $('.jawabanjams').css('width', "260px"); 
                $('.jawabanjamsdokter').css('width', "260px"); 
                $('#jawabanhp').css('width', "260px"); 

                $('.titlebuttondrg').css('margin-left', "auto");
                $('.titlebuttondrg').css('margin-right', "13px");
                $('.titlebuttondrg').css('margin-top', "13px");
                $('.titlebuttondrg').css('margin-bottom', "auto");
                $('.titlebuttonscaling').css('margin-left', "auto");
                $('.titlebuttonscaling').css('margin-right', "13px");
                $('.titlebuttonscaling').css('margin-top', "13px");
                $('.titlebuttonscaling').css('margin-bottom', "auto");
                $('.titlebuttontambal').css('margin-left', "auto");
                $('.titlebuttontambal').css('margin-right', "13px");
                $('.titlebuttontambal').css('margin-top', "13px");
                $('.titlebuttontambal').css('margin-bottom', "auto");
                $('.titlebuttonbedah').css('margin-left', "auto");
                $('.titlebuttonbedah').css('margin-right', "13px");
                $('.titlebuttonbedah').css('margin-top', "13px");
                $('.titlebuttonbedah').css('margin-bottom', "auto");
                $('.titlebuttonbehel').css('margin-left', "auto");
                $('.titlebuttonbehel').css('margin-right', "13px");
                $('.titlebuttonbehel').css('margin-top', "13px");
                $('.titlebuttonbehel').css('margin-bottom', "auto");
                $('.titlebuttongigitiruan').css('margin-left', "auto");
                $('.titlebuttongigitiruan').css('margin-right', "13px");
                $('.titlebuttongigitiruan').css('margin-top', "13px");
                $('.titlebuttongigitiruan').css('margin-bottom', "auto");
                $('.titlebuttonbleaching').css('margin-left', "auto");
                $('.titlebuttonbleaching').css('margin-right', "13px");
                $('.titlebuttonbleaching').css('margin-top', "13px");
                $('.titlebuttonbleaching').css('margin-bottom', "auto");
                $('.titlebuttonveneer').css('margin-left', "auto");
                $('.titlebuttonveneer').css('margin-right', "13px");
                $('.titlebuttonveneer').css('margin-top', "13px");
                $('.titlebuttonveneer').css('margin-bottom', "auto");
                $('.titlebuttonlainnya').css('margin-left', "auto");
                $('.titlebuttonlainnya').css('margin-right', "13px");
                $('.titlebuttonlainnya').css('margin-top', "13px");
                $('.titlebuttonlainnya').css('margin-bottom', "auto");

                $('.pages').css('width', "315px");
                $('.judulmenu').css('width', "315px"); 
                $('.cancelmenuss').css('width', "315px"); 
                $('.cancelmenuss').css('background-size', "5%"); 
                $('.kotakcancel').css('width', "315px"); 
                $('.kotakcancel').css('background-size', "5%"); 
                $('.drgbutton1').css('width', "135px");
                $('.drgbutton1list').css('width', "295px");
                $('.healthbutton1').css('width', "135px");
                $('.healthbutton1list').css('width', "295px");
                $('.groombutton1').css('width', "135px");
                $('.groombutton1list').css('width', "295px");
                $('.hotelbutton1').css('width', "135px");
                $('.hotelbutton1list').css('width', "295px");
                $('.pacakbutton1').css('width', "135px");
                $('.pacakbutton1list').css('width', "295px");
                $('.adoptionbutton1').css('width', "135px");
                $('.adoptionbutton1list').css('width', "295px");
                $('.bleachbutton1').css('width', "135px");
                $('.bleachbutton1list').css('width', "295px");
                $('.veneerbutton1').css('width', "135px");
                $('.veneerbutton1list').css('width', "295px");
                $('.lainnyabutton1').css('width', "135px");
                $('.lainnyabutton1list').css('width', "295px");
                bloknamadentist();
            }      

            if(gmbrbtn1.checked & window.orientation !== 0) {
                document.querySelector(".ktksilahkan").style.width = "420px";
                document.querySelector("#kotakconcern").style.width = "420px";
                document.querySelector("#tabels").style.maxWidth = "418px";

                $('.blokdentist').css('width', "333px");
                $('.bloknamadentist').css('width', "273px");
                $('.bloknamaMenu').css('width', "293px");
                $('.infos').css('width', "333px");
                $('.reservasi1').css('width', "333px"); 
                $('.reservasis').css('width', "333px"); 
                $('#jawabannamapasien').css('width', "333px"); 
                $('#jawabanalamat').css('width', "333px"); 
                $('#jawabantanggallahir').css('width', "333px"); 
                $('#jawabanumurangka').css('width', "248px"); 
                $('#jawabanjeniskelamin').css('width', "333px"); 
                $('#jawabankeluhan').css('width', "333px"); 
                $('#jawabanalergi').css('width', "333px"); 
                $('#jawabanfotokeluhanz').css('width', "333px"); 
                $('#jawabanjadwal').css('width', "333px"); 
                $('.jawabanjams').css('width', "333px"); 
                $('.jawabanjamsdokter').css('width', "333px"); 
                $('#jawabanhp').css('width', "333px"); 

                $('.pages').css('width', "418px");
                $('.judulmenu').css('width', "418px"); 
                $('.cancelmenuss').css('width', "418px"); 
                $('.cancelmenuss').css('background-size', "3%"); 
                $('.kotakcancel').css('width', "418px"); 
                $('.kotakcancel').css('background-size', "3%"); 
                $('.drgbutton1').css('width', "180px");
                $('.drgbutton1list').css('width', "400px");
                $('.healthbutton1').css('width', "180px");
                $('.healthbutton1list').css('width', "400px");
                $('.groombutton1').css('width', "180px");
                $('.groombutton1list').css('width', "400px");
                $('.hotelbutton1').css('width', "180px");
                $('.hotelbutton1list').css('width', "400px");
                $('.pacakbutton1').css('width', "180px");
                $('.pacakbutton1list').css('width', "400px");
                $('.adoptionbutton1').css('width', "180px");
                $('.adoptionbutton1list').css('width', "400px");
                $('.bleachbutton1').css('width', "180px");
                $('.bleachbutton1list').css('width', "400px");
                $('.veneerbutton1').css('width', "180px");
                $('.veneerbutton1list').css('width', "400px");
                $('.lainnyabutton1').css('width', "180px");
                $('.lainnyabutton1list').css('width', "400px");
                bloknamadentist();
            }     

            if(gmbrbtn1.checked & window.orientation == 0) {
                document.querySelector(".ktksilahkan").style.width = "315px";
                document.querySelector("#kotakconcern").style.width = "315px";
                document.querySelector("#tabels").style.maxWidth = "315px";

                $('.blokdentist').css('width', "260px");
                $('.bloknamadentist').css('width', "200px");
                $('.bloknamaMenu').css('width', "220px");
                $('.infos').css('width', "260px");
                $('.reservasi1').css('width', "260px"); 
                $('.reservasis').css('width', "260px"); 
                $('#jawabannamapasien').css('width', "260px"); 
                $('#jawabanalamat').css('width', "260px"); 
                $('#jawabantanggallahir').css('width', "260px"); 
                $('#jawabanumurangka').css('width', "175px"); 
                $('#jawabanjeniskelamin').css('width', "260px"); 
                $('#jawabankeluhan').css('width', "260px"); 
                $('#jawabanalergi').css('width', "260px"); 
                $('#jawabanfotokeluhanz').css('width', "260px"); 
                $('#jawabanjadwal').css('width', "260px"); 
                $('.jawabanjams').css('width', "260px"); 
                $('.jawabanjamsdokter').css('width', "260px"); 
                $('#jawabanhp').css('width', "260px");

                $('.pages').css('width', "315px");
                $('.judulmenu').css('width', "315px"); 
                $('.cancelmenuss').css('width', "315px"); 
                $('.cancelmenuss').css('background-size', "5%"); 
                $('.kotakcancel').css('width', "315px"); 
                $('.kotakcancel').css('background-size', "5%"); 
                $('.drgbutton1').css('width', "135px");
                $('.drgbutton1list').css('width', "295px");
                $('.healthbutton1').css('width', "135px");
                $('.healthbutton1list').css('width', "295px");
                $('.groombutton1').css('width', "135px");
                $('.groombutton1list').css('width', "295px");
                $('.hotelbutton1').css('width', "135px");
                $('.hotelbutton1list').css('width', "295px");
                $('.pacakbutton1').css('width', "135px");
                $('.pacakbutton1list').css('width', "295px");
                $('.adoptionbutton1').css('width', "135px");
                $('.adoptionbutton1list').css('width', "295px");
                $('.bleachbutton1').css('width', "135px");
                $('.bleachbutton1list').css('width', "295px");
                $('.veneerbutton1').css('width', "135px");
                $('.veneerbutton1list').css('width', "295px");
                $('.lainnyabutton1').css('width', "135px");
                $('.lainnyabutton1list').css('width', "295px");
                bloknamadentist();
            }     

            if(window.orientation !== 0) {
                $('#reservasipernah').css('background-size', '3%');
                $('#reservasisnama').css('background-size', '6%');
                $('#reservasistanggal').css('background-size', '6%');
                $('#reservasisumur').css('background-size', '6%');
                $('#reservasikeluhan').css('background-size', '6%');
                $('#reservasisjenis').css('background-size', '6%');
                $('#reservasisjadwal').css('background-size', '6%');
                $('#reservasiswa').css('background-size', '6%');
                $('#reservasialamat').css('background-size', '6%');
                $('.infos').css('background-size', '6%');
                $('#jawabanfotokeluhanz').css('background-size', '6%');
                $('.jawabanjams').css('background-size', '4.2%');
                $('.jawabanjamsdokter').css('background-size', '4.2%');
            } 

            if(window.orientation == 0) {
                $('#reservasipernah').css('background-size', '4%');
                $('#reservasisnama').css('background-size', '8%');
                $('#reservasisnama').css('background-size', '8%');
                $('#reservasistanggal').css('background-size', '8%');
                $('#reservasisumur').css('background-size', '8%');
                $('#reservasikeluhan').css('background-size', '8%');
                $('#reservasisjenis').css('background-size', '8%');
                $('#reservasisjadwal').css('background-size', '8%');
                $('#reservasiswa').css('background-size', '8%');
                $('#reservasialamat').css('background-size', '8%');
                $('.infos').css('background-size', '8%');
                $('#jawabanfotokeluhanz').css('background-size', '8%');
                $('.jawabanjams').css('background-size', '6%');
                $('.jawabanjamsdokter').css('background-size', '6%');
            } 
        };

        $(window).on('orientationchange', function (e) {
            if(window.orientation == 0) {
                teswindow();
            } else {
                teswindow();
            }         
        });

        function createPDF() {

            var datePdf = new Date();
            var dayListPdf = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            var monthNamesPdf = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
            ];
            var dayNamePdf = dayListPdf[datePdf.getDay()];
            var monthNamePdf = monthNamesPdf[datePdf.getMonth()];
            var todayPDf = `${datePdf.getDate()}${monthNamePdf}${datePdf.getFullYear()}`;
            var timePdf = `${todayPDf}`;

            $('#loadingorder').show();
            $('.ktkimgRcdDone').hide();
            $('.ktkhubungiDone').hide();
            $('.tmblDeletesDone').hide();
            $('.wktDone').css('margin-top', '10px');
            $('.pinreservasiDone').css('margin-top', '0px');
            $('.pinreservasiDone').css('margin-bottom', '20px');
            setTimeout(function(){
                var element = document.getElementById('kotakInfoDone');
                html2pdf(element, {
                margin: [0.52, 0.7, 0.52, 0],
                filename: 'filedone'+timePdf+'.pdf',
                image: { type: 'jpeg', quality: 1 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' },
                class: createPDF
                });
            }, 2000);   
            setTimeout(function(){
                $('#loadingorder').hide();
                $('.ktkimgRcdDone').show();
                $('.ktkhubungiDone').show();
                $('.tmblDeletesDone').show();
                $('.wktDone').css('margin-top', '37px');
                $('.pinreservasiDone').css('margin-top', '8px');
                $('.pinreservasiDone').css('margin-bottom', '0px');
            }, 10000);         
        };

            if($('#kotakInfo').children(':visible').length == 0) {
                document.getElementById('emptyiconkotakInfo').style.display = "block";
            } else {
                document.getElementById('emptyiconkotakInfo').style.display = "none"; 
            } 

            if($('#kotakInfoDone').children(':visible').length == 0) {
                document.getElementById('emptyiconkotakInfoDone').style.display = "block";
            } else {
                document.getElementById('emptyiconkotakInfoDone').style.display = "none";
            } 