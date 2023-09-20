    setTimeout(function(){
        $('.loadingawal').hide();
        $('.ktkldng').hide();
        $('#brandawal').hide();
        $('.themehome').show();
        $('#brand').show();
        $('.appearhome').addClass('animatedzx').show();
    }, 2000);

    $('#brand').dblclick(function(){
        $('#overlay').show();
        $('#kotakeditprofil').show();
    });

    $('.cancelmenu').click(function(){
        $('#overlay').hide();
        $('#kotakeditprofil').hide();
    });

    $('.cancelmenuz').click(function(){
        $('.groupusername').hide();
        $('.cancelmenuz').hide();
        $('#brand').show();
        $('#brandz').hide();
        $('#menutools').hide();
        $('.themehome').addClass('animatedzss').show();
    });

    $('#healthtools').click(function(){
        $('#healthtools').hide();
        $('#healthtoolsblack').show();
        $('#editthetools').show();
        $('#editthetoolsblack').hide();
        $('#groomingtools').show();
        $('#groomingtoolsblack').hide();
        $('#hoteltools').show();
        $('#hoteltoolsblack').hide();
        $('#pacaktools').show();
        $('#pacaktoolsblack').hide();
    });

    $('#editthetools').click(function(){
        $('#editthetools').hide();
        $('#editthetoolsblack').show();
        $('#healthtools').show();
        $('#healthtoolsblack').hide();
        $('#groomingtools').show();
        $('#groomingtoolsblack').hide();
        $('#hoteltools').show();
        $('#hoteltoolsblack').hide();
        $('#pacaktools').show();
        $('#pacaktoolsblack').hide();
    });

    $('#groomingtools').click(function(){
        $('#groomingtools').hide();
        $('#groomingtoolsblack').show();
        $('#healthtools').show();
        $('#healthtoolsblack').hide();
        $('#editthetools').show();
        $('#editthetoolsblack').hide();
        $('#hoteltools').show();
        $('#hoteltoolsblack').hide();
        $('#pacaktools').show();
        $('#pacaktoolsblack').hide();
    });

    $('#hoteltools').click(function(){
        $('#hoteltools').hide();
        $('#hoteltoolsblack').show();
        $('#healthtools').show();
        $('#healthtoolsblack').hide();
        $('#editthetools').show();
        $('#editthetoolsblack').hide();
        $('#groomingtools').show();
        $('#groomingtoolsblack').hide();
        $('#pacaktools').show();
        $('#pacaktoolsblack').hide();
    });

    $('#pacaktools').click(function(){
        $('#pacaktools').hide();
        $('#pacaktoolsblack').show();
        $('#healthtools').show();
        $('#healthtoolsblack').hide();
        $('#editthetools').show();
        $('#editthetoolsblack').hide();
        $('#groomingtools').show();
        $('#groomingtoolsblack').hide();
        $('#hoteltools').show();
        $('#hoteltoolsblack').hide();
    });

$("#healthbutton").on("click",function(){
    $("#tabel1").hide();
    $(".cancelgroom").hide();
    $(".cancelhotel").hide();
    $(".cancelpacak").hide();
    $(".cancelhealth").show();
    $(".judulmenu").addClass('animatedzz').show();
    $(".pagemenu").addClass('animatedzz').show();
});

$("#groombutton").on("click",function(){
    $("#tabel1").hide();
    $(".cancelhealth").hide();
    $(".cancelhotel").hide();
    $(".cancelpacak").hide();
    $(".cancelgroom").show();
    $(".judulmenu").addClass('animatedzz').show();
    $(".pagemenu2").addClass('animatedzz').show();
});

$("#hotelbutton").on("click",function(){
    $("#tabel1").hide();
    $(".cancelgroom").hide();
    $(".cancelhealth").hide();
    $(".cancelpacak").hide();
    $(".cancelhotel").show();
    $(".judulmenu").addClass('animatedzz').show();
    $(".pagemenu").addClass('animatedzz').show();
});

$("#pacakbutton").on("click",function(){
    $("#tabel1").hide();
    $(".cancelgroom").hide();
    $(".cancelhotel").hide();
    $(".cancelhealth").hide();
    $(".cancelpacak").show();
    $(".judulmenu").addClass('animatedzz').show();
    $(".pagemenu").addClass('animatedzz').show();
});

$(".cancelhealth").on("click",function(){
    $(".judulmenu").hide();
    $(".cancelgroom").hide();
    $(".cancelhotel").hide();
    $(".cancelhealth").hide();
    $(".cancelpacak").hide();
    $(".pagemenu").hide();
    $(".pagemenu2").hide();
    $("#tabel1").addClass('animatedzz').show();
});

$(".cancelgroom").on("click",function(){
    $(".judulmenu").hide();
    $(".cancelgroom").hide();
    $(".cancelhotel").hide();
    $(".cancelhealth").hide();
    $(".cancelpacak").hide();
    $(".pagemenu").hide();
    $(".pagemenu2").hide();
    $("#tabel1").addClass('animatedzz').show();
});

$(".cancelhotel").on("click",function(){
    $(".judulmenu").hide();
    $(".cancelgroom").hide();
    $(".cancelhotel").hide();
    $(".cancelhealth").hide();
    $(".cancelpacak").hide();
    $(".pagemenu").hide();
    $(".pagemenu2").hide();
    $("#tabel1").addClass('animatedzz').show();
});

$(".cancelpacak").on("click",function(){
    $(".judulmenu").hide();
    $(".cancelgroom").hide();
    $(".cancelhotel").hide();
    $(".cancelhealth").hide();
    $(".cancelpacak").hide();
    $(".pagemenu").hide();
    $(".pagemenu2").hide();
    $("#tabel1").addClass('animatedzz').show();
});

    $("#ubahusername").on("input", function() {
        var z = document.getElementById("ubahusername").value; 
        document.getElementById("usernametools").innerHTML = "@"+z; 
    });

    $("#colorPicker").on("input", function() {
        var z = document.getElementById("colorPicker").value; 
        document.getElementById("inputcolor").value = z; 
        $("#inputcolor").css('background-color', z );
        $(".themehome").css('background-color', z );
        $(".themehome").css('outline-color', z );
    });

    $("#colorPickerz").on("input", function() {
        var z = document.getElementById("colorPickerz").value; 
        document.getElementById("inputcolorz").value = z; 
        $("#inputcolorz").css('background-color', z );
        $("#usernametools").css('color', z );
    });

    $("#bioprofile").on("input", function() {
        var z = document.getElementById("bioprofile").value; 
        document.querySelector(".kalimatsilahkan").innerHTML = z; 
    });

    $("#checkboxmetode1").on("click", function() {

        document.getElementById('bentukbutton').value = "10px";
        $("#healthbutton").css('border-radius','10px');
        $("#groombutton").css('border-radius','10px');
        $("#hotelbutton").css('border-radius','10px');
        $("#pacakbutton").css('border-radius','10px');
        $("#logoprofile").css('border-radius','10px');

    });

    $("#checkboxmetode2").on("click", function() {

        document.getElementById('bentukbutton').value = "100%";
        $("#healthbutton").css('border-radius','100%');
        $("#groombutton").css('border-radius','100%');
        $("#hotelbutton").css('border-radius','100%');
        $("#pacakbutton").css('border-radius','100%');
        $("#logoprofile").css('border-radius','100%');

    });

    $("#checkboxmetode1s").on("click", function() {

        document.getElementById('healthbutton').className = "healthbutton1";
        document.getElementById('groombutton').className = "groombutton1";
        document.getElementById('hotelbutton').className = "hotelbutton1";
        document.getElementById('pacakbutton').className = "pacakbutton1";

        document.getElementById('gambarbutton1').value = "healthbutton1";
        document.getElementById('gambarbutton2').value = "groombutton1";
        document.getElementById('gambarbutton3').value = "hotelbutton1";
        document.getElementById('gambarbutton4').value = "pacakbutton1";

        document.getElementById('gambarbutton').value = "type 1";

    });

    $("#checkboxmetode2s").on("click", function() {

        document.getElementById('healthbutton').className = "healthbutton2";
        document.getElementById('groombutton').className = "groombutton2";
        document.getElementById('hotelbutton').className = "hotelbutton2";
        document.getElementById('pacakbutton').className = "pacakbutton2";

        document.getElementById('gambarbutton1').value = "healthbutton2";
        document.getElementById('gambarbutton2').value = "groombutton2";
        document.getElementById('gambarbutton3').value = "hotelbutton2";
        document.getElementById('gambarbutton4').value = "pacakbutton2";

        document.getElementById('gambarbutton').value = "type 2";

    });

    $("#checkboxmetode3s").on("click", function() {

        document.getElementById('healthbutton').className = "healthbutton3";
        document.getElementById('groombutton').className = "groombutton3";
        document.getElementById('hotelbutton').className = "hotelbutton3";
        document.getElementById('pacakbutton').className = "pacakbutton3";

        document.getElementById('gambarbutton1').value = "healthbutton3";
        document.getElementById('gambarbutton2').value = "groombutton3";
        document.getElementById('gambarbutton3').value = "hotelbutton3";
        document.getElementById('gambarbutton4').value = "pacakbutton3";

        document.getElementById('gambarbutton').value = "type 3";

    });

    $("#checkboxmetode1ss").change(function() {

        if(this.checked) {
            $('#FB').show();
            $('#userfacebook').slideDown(300);
            $(".switchmetodess").css({
                'border-bottom-left-radius':'0px',
                'border-bottom-right-radius':'0px'
            });
            document.getElementById('fbresult').value = "true";
        } else {
            $('#FB').hide();
            $('#userfacebook').slideUp(300);
            $(".switchmetodess").css({
                'border-bottom-left-radius':'7px',
                'border-bottom-right-radius':'7px'
            });
            document.getElementById('fbresult').value = "";
        }

    });

    $("#checkboxmetode2ss").change(function() {

        if(this.checked) {
            $('#IG').show();
            $('#userinstagram').slideDown(300);
            $(".switchmetode2ss").css({
                'border-bottom-left-radius':'0px',
                'border-bottom-right-radius':'0px'
            });
            document.getElementById('igresult').value = "true";
        } else {
            $('#IG').hide();
            $('#userinstagram').slideUp(300);
            $(".switchmetode2ss").css({
                'border-bottom-left-radius':'7px',
                'border-bottom-right-radius':'7px'
            });
            document.getElementById('igresult').value = "";
        }

    });

    $("#checkboxmetode3ss").change(function() {

        if(this.checked) {
            $('#googlemaps').show();
            $(".switchmetode3ss").css({
                'border-bottom-left-radius':'0px',
                'border-bottom-right-radius':'0px'
            });
            $('#map').fadeIn(300);
            $('#usergooglemaps').fadeIn(300);
            $('#searchfield').fadeIn(300);
            $('#okgmaps').fadeIn(300);
            $('#kotakqq').slideDown(300);
            document.getElementById('gmapsresult').value = "true";
        } else {
            $('#googlemaps').hide();
            $(".switchmetode3ss").css({
                'border-bottom-left-radius':'7px',
                'border-bottom-right-radius':'7px'
            });
            $('#map').hide();
            $('#usergooglemaps').hide();
            $('#searchfield').hide();
            $('#okgmaps').hide();
            $('#kotakqq').slideUp(300);
            document.getElementById('gmapsresult').value = "";
        }

    });

    $("#checkboxmetode4ss").change(function() {

        if(this.checked) {
            $('#twitter').show();
            $('#usertwitter').slideDown(300);
            $(".switchmetode4ss").css({
                'border-bottom-left-radius':'0px',
                'border-bottom-right-radius':'0px'
            });
            document.getElementById('twitterresult').value = "true";
        } else {
            $('#twitter').hide();
            $('#usertwitter').slideUp(300);
            $(".switchmetode4ss").css({
                'border-bottom-left-radius':'7px',
                'border-bottom-right-radius':'7px'
            });
            document.getElementById('twitterresult').value = "";
        }

    });

    $("#checkboxmetode5ss").change(function() {

        if(this.checked) {
            $('#tiktok').show();
            $('#usertiktok').slideDown(300);
            $(".switchmetode5ss").css({
                'border-bottom-left-radius':'0px',
                'border-bottom-right-radius':'0px'
            });
            document.getElementById('tiktokresult').value = "true";
        } else {
            $('#tiktok').hide();
            $('#usertiktok').slideUp(300);
            $(".switchmetode5ss").css({
                'border-bottom-left-radius':'7px',
                'border-bottom-right-radius':'7px'
            });
            document.getElementById('tiktokresult').value = "";
        }

    });

    $("#checkboxmetode6ss").change(function() {

        if(this.checked) {
            $('#WA').show();
            $('#userwhatsapp').slideDown(300);
            $(".switchmetode6ss").css({
                'border-bottom-left-radius':'0px',
                'border-bottom-right-radius':'0px'
            });
            document.getElementById('waresult').value = "true";
        } else {
            $('#WA').hide();
            $('#userwhatsapp').slideUp(300);
            $(".switchmetode6ss").css({
                'border-bottom-left-radius':'7px',
                'border-bottom-right-radius':'7px'
            });
            document.getElementById('waresult').value = "";
        }

    });

    $("#userfacebook").on("input", function() {
        var z = document.getElementById("userfacebook").value; 
        document.querySelector("#userfb").value = "https://www.facebook.com/"+z; 
        document.querySelector("#buttonz5").href = "https://www.facebook.com/"+z ; 
    });

    $("#userinstagram").on("input", function() {
        var z = document.getElementById("userinstagram").value; 
        document.querySelector("#userig").value = "https://www.instagram.com/"+z; 
        document.querySelector("#buttonz6").href = "https://www.instagram.com/"+z ; 
    });

    $("#usertwitter").on("input", function() {
        var z = document.getElementById("usertwitter").value; 
        document.querySelector("#usertwt").value = "https://www.twitter.com/"+z; 
        document.querySelector("#buttonz8").href = "https://www.twitter.com/"+z ; 
    });

    $("#usertiktok").on("input", function() {
        var z = document.getElementById("usertiktok").value; 
        document.querySelector("#usertt").value = "https://www.tiktok.com/@"+z; 
        document.querySelector("#buttonz9").href = "https://www.tiktok.com/@"+z ; 
    });

    $("#userwhatsapp").on("input", function() {
        var z = document.getElementById("userwhatsapp").value; 
        document.querySelector("#userwht").value = "https://wa.me/"+z; 
        document.querySelector("#buttonz10").href = "https://wa.me/"+z ; 
    });

    $("#checkboxmetode1sz").on("click", function() {

        document.getElementById('FB').className = "fbdark";
        document.getElementById('IG').className = "igdark";
        document.getElementById('googlemaps').className = "gmapsdark";
        document.getElementById('twitter').className = "twitterdark";
        document.getElementById('tiktok').className = "tiktokdark";
        document.getElementById('WA').className = "wadark";

        document.getElementById('gambarbuttonzz').value = "dark";

    });

    $("#checkboxmetode2sz").on("click", function() {

        document.getElementById('FB').className = "fblight";
        document.getElementById('IG').className = "iglight";
        document.getElementById('googlemaps').className = "gmapslight";
        document.getElementById('twitter').className = "twitterlight";
        document.getElementById('tiktok').className = "tiktoklight";
        document.getElementById('WA').className = "walight";

        document.getElementById('gambarbuttonzz').value = "light";

    });

    $("#checkboxmetode1ssx").change(function() {

        if(this.checked) {
            document.getElementById('hide1result').value = "hide";
            document.getElementById('buttonz1').style.display = "none";
        } else {
            document.getElementById('hide1result').value = "";
            document.getElementById('buttonz1').style.display = "";
        }

    });

    $("#checkboxmetode2ssx").change(function() {

        if(this.checked) {
            document.getElementById('hide2result').value = "hide";
            document.getElementById('buttonz2').style.display = "none";
        } else {
            document.getElementById('hide2result').value = "";
            document.getElementById('buttonz2').style.display = "";
        }

    });

    $("#checkboxmetode3ssx").change(function() {

        if(this.checked) {
            document.getElementById('hide3result').value = "hide";
            document.getElementById('buttonz3').style.display = "none";
        } else {
            document.getElementById('hide3result').value = "";
            document.getElementById('buttonz3').style.display = "";
        }

    });

    $("#checkboxmetode4ssx").change(function() {

        if(this.checked) {
            document.getElementById('hide4result').value = "hide";
            document.getElementById('buttonz4').style.display = "none";
        } else {
            document.getElementById('hide4result').value = "";
            document.getElementById('buttonz4').style.display = "";
        }

    });

    $("#checkboxmetode1ssv").change(function() {

        if(this.checked) {
            document.getElementById('concern1result').value = "concern";
            document.getElementById('kucing').style.display = "";
        } else {
            document.getElementById('concern1result').value = "";
            document.getElementById('kucing').style.display = "none";
        }

    });

    $("#checkboxmetode2ssv").change(function() {

        if(this.checked) {
            document.getElementById('concern2result').value = "concern";
            document.getElementById('anjing').style.display = "";
        } else {
            document.getElementById('concern2result').value = "";
            document.getElementById('anjing').style.display = "none";
        }

    });

    $("#checkboxmetode3ssv").change(function() {

        if(this.checked) {
            document.getElementById('concern3result').value = "concern";
            document.getElementById('burung').style.display = "";
        } else {
            document.getElementById('concern3result').value = "";
            document.getElementById('burung').style.display = "none";
        }

    });

    $("#checkboxmetode4ssv").change(function() {

        if(this.checked) {
            document.getElementById('concern4result').value = "concern";
            document.getElementById('ikan').style.display = "";
        } else {
            document.getElementById('concern4result').value = "";
            document.getElementById('ikan').style.display = "none";
        }

    });

    $("#checkboxmetode5ssv").change(function() {

        if(this.checked) {
            document.getElementById('concern5result').value = "concern";
            document.getElementById('ternak').style.display = "";
        } else {
            document.getElementById('concern5result').value = "";
            document.getElementById('ternak').style.display = "none";
        }

    });

    $("#checkboxmetode6ssv").change(function() {

        if(this.checked) {
            document.getElementById('concern6result').value = "concern";
            document.getElementById('reptil').style.display = "";
        } else {
            document.getElementById('concern6result').value = "";
            document.getElementById('reptil').style.display = "none";
        }

    });

    $("#checkboxmetode7ssv").change(function() {

        if(this.checked) {
            document.getElementById('concern7result').value = "concern";
            document.getElementById('hewankecil').style.display = "";
        } else {
            document.getElementById('concern7result').value = "";
            document.getElementById('hewankecil').style.display = "none";
        }

    });

    $("#checkboxmetode8ssv").change(function() {

        if(this.checked) {
            document.getElementById('concern8result').value = "concern";
            document.getElementById('kelinci').style.display = "";
        } else {
            document.getElementById('concern8result').value = "";
            document.getElementById('kelinci').style.display = "none";
        }

    });
