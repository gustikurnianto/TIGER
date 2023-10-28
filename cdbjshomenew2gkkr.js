import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";
import { getDatabase, set, remove, update, ref, push, child, get, onValue, onChildAdded, onChildRemoved } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

  fetch('caredible-home-signup.php?getFirebaseConfig=true')
    .then(response => response.json())
    .then(data => {
        
        const encryptionKey = data.encryptionKey;
        const firebaseConfig = data.firebaseConfig;
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);

  //-----------------------------------------------------------------------------------//
  
        $(document).on('input click', '#emailz', function(e){
            var searchValuez = $(this).val();
            var cdbDtbsEmlzz = "'caredibledatabaseEml";
            var dbRefzz = ref(database, cdbDtbsEmlzz);
            var dataDitemukanzz = "false";
            get(dbRefzz).then((snapshot) => {
                if (snapshot.exists()) {
                    snapshot.forEach((childSnapshot) => {
                        var SgnuPemgmDecrypt = childSnapshot.val().AccountPlan;
                        var decryptedSgnuPemgm = CryptoJS.AES.decrypt(SgnuPemgmDecrypt, encryptionKey);
                        var jawabanSgnuPemgm = decryptedSgnuPemgm.toString(CryptoJS.enc.Utf8);
                        if (searchValuez == jawabanSgnuPemgm) {
                            dataDitemukanzz = "true";
                        }
                    });
                    if (dataDitemukanzz == "true") {
                        $('#loadingEml').hide();
                        $('#maafterdaftar').fadeIn(300);
                        setTimeout(function(){
                            $('#maafterdaftar').fadeOut(300); 
                        }, 2000); 
                        $('#emailz').remove();
                    } 
                    if (dataDitemukanzz == "false") {
                        var googleEmailz = $(this).val();
                        $('#email').val(googleEmailz);
                        $('#loadingEml').hide();
                        $('#qstzemail').hide();
                        $('#qstznmbrHndpPwA').show();
                        $('#emailz').remove();
                    } 
                } else {
                    var googleEmailz = $(this).val();
                    $('#email').val(googleEmailz);
                    $('#loadingEml').hide();
                    $('#qstzemail').hide();
                    $('#qstznmbrHndpPwA').show();
                    $('#emailz').remove();
                }
            });
        });
 
        $("#username").on("change",function(){
            $('#tungguada').show();
            var username = document.getElementById('username');
            var cdbDtbs = "'caredibledatabase";
            get(child(ref(database), "'caredibledatabase/"+ username.value)).then((snapshot)=>{
                if(snapshot.exists()){
                    $('#username').css('border-top', '2px solid red'); 
                    $('#username').css('border-bottom', '2px solid red'); 
                    $('#username').css('border-left', 'none'); 
                    $('#username').css('border-right', '2px solid red'); 
                    $('#linktools').css('border-top', '2px solid red'); 
                    $('#linktools').css('border-bottom', '2px solid red'); 
                    $('#linktools').css('border-right', 'none'); 
                    $('#linktools').css('border-left', '2px solid red'); 
                    $('#sudahada').show(); 
                    $('#tungguada').hide();
                    $('#linkpilihan').remove(); 
                } else {
                    $('#username').css('border-top', '2px solid green'); 
                    $('#username').css('border-bottom', '2px solid green'); 
                    $('#username').css('border-left', 'none'); 
                    $('#username').css('border-right', '2px solid green'); 
                    $('#linktools').css('border-top', '2px solid green'); 
                    $('#linktools').css('border-bottom', '2px solid green'); 
                    $('#linktools').css('border-right', 'none'); 
                    $('#linktools').css('border-left', '2px solid green'); 
                    $('#sudahada').hide(); 
                    $('#tungguada').hide();
                    $("#qstzlink").append('<center><button class="buttonnext" id="linkpilihan">next →</button></center>').each(function() {
                        $('#linkpilihan').click(function(){      
                            $('#qstzlink').hide();    
                            $('#qstzcapcha').fadeIn(300);    
                            var charsNumber   = "0123456789";
                            var charsLower    = "abcdefghijklmnopqrstuvwxyz";
                            var charsUpper    = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
                            var charsAll      = [charsLower, charsNumber];  
                            var chars         = charsAll.join('');
                            var stringLength  = 6;
                            var randomString  = '';
                            for (var i=0; i<stringLength; i++) {                               
                                var randNum    = Math.floor(Math.random() * chars.length);     
                                randomString  += chars.substring(randNum,randNum+1);           
                            }
                            document.getElementById('capchacdb').size  = stringLength* 1.4;  
                            document.getElementById('capchacdb').innerText = randomString;
                        });
                    });  
                }
                if (username.value == "") {
                    $('#username').css('border-top', 'none'); 
                    $('#username').css('border-bottom', 'none'); 
                    $('#username').css('border-left', 'none'); 
                    $('#username').css('border-right', 'none'); 
                    $('#linktools').css('border-top', 'none'); 
                    $('#linktools').css('border-bottom', 'none'); 
                    $('#linktools').css('border-right', 'none'); 
                    $('#linktools').css('border-left', 'none'); 
                    $('#sudahada').hide(); 
                    $('#tungguada').hide();
                    $('#linkpilihan').remove();
                }
            });
        });

        $(document).on('change', '#email', function(e){
            var regExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
            var email = document.getElementById("email").value;
            if (regExp.test(email)) { 
                var searchValue = document.getElementById("email").value;
                var cdbDtbsEml = "'caredibledatabaseEml";
                var dbRef = ref(database, cdbDtbsEml);
                var dataDitemukan = false;
                get(dbRef).then((snapshot) => {
                    if (snapshot.exists()) {
                        snapshot.forEach((childSnapshot) => {
                            var SgnuPemgmDecrypt = childSnapshot.val().AccountPlan;
                            var decryptedSgnuPemgm = CryptoJS.AES.decrypt(SgnuPemgmDecrypt, encryptionKey);
                            var jawabanSgnuPemgm = decryptedSgnuPemgm.toString(CryptoJS.enc.Utf8);
                            if (jawabanSgnuPemgm === searchValue) {
                                dataDitemukan = true;
                            }
                        });
                        if (dataDitemukan) {
                            $('#email').css('border', '2px solid red'); 
                            $('#emailpilihan').remove();    
                        } else {
                            $('#email').css('border', '2px solid green'); 
                            $("#qstzemail").append('<center><button class="buttonnext" id="emailpilihan">next →</button></center>').each(function() {
                                $('#emailpilihan').click(function(){
                                    $('#emailpilihan').css('background-image', 'url("https://lh3.googleusercontent.com/pw/ADCreHfYgmRXNM8KQnYOsNuTQG86eemaPxfE7zj_6_VDM7nzsQ8AofJaMzl78PNivIUBP4l68fGh-1f2d1n15FXTTXtmXwR9aso5j5kZWp94jZ_KiWdaOuw=w2400")');
                                    $('#emailpilihan').css('background-size', '25%');
                                    $('#emailpilihan').css('background-repeat', 'no-repeat');
                                    $('#emailpilihan').css('background-position', 'center');
                                    $('#emailpilihan').css('color', 'transparent');
                                    const emailverify = document.getElementById('email');
                                    let code_val = Math.floor(Math.random()*1000000);
                                    $.ajax({
                                        type: "POST",
                                        url: "caredible-home-signup.php",
                                        data: {
                                            email: $('#email').val(),
                                            verificationCode: code_val
                                        },
                                        success: (data) => {  
                                            $('#qstzemail').hide();    
                                            $('#qstzverify').fadeIn(300);     
                                            $("#qstzverify").append('<center><button class="buttonnext" id="verifypilihan">next →</button><div id="hitungMundur">05:00</div></center>').each(function() {
                                                var waktuAwal = 300;
                                                var hitungMundurInterval;
                                            
                                                function updateHitungMundur() {
                                                  var menit = Math.floor(waktuAwal / 60);
                                                  var detik = waktuAwal % 60;
                                                  var formatMenit = menit < 10 ? "0" + menit : menit;
                                                  var formatDetik = detik < 10 ? "0" + detik : detik;
                                            
                                                  $('#hitungMundur').text(formatMenit + ":" + formatDetik);
                                            
                                                  waktuAwal--;
                                            
                                                  if (waktuAwal < 0) {
                                                    clearInterval(hitungMundurInterval);
                                                    $('#hitungMundur').text("Waktu Habis!");
                                                    window.location.reload();
                                                  }
                                                }
                                                if (!hitungMundurInterval) {
                                                    hitungMundurInterval = setInterval(updateHitungMundur, 1000);
                                                }
                                                var i = 1;  
                                                const verify = document.getElementById('verify');
                                                $('#verifypilihan').click(function(){
                                                    if (i >= 4) {
                                                        window.location.reload();
                                                    }
                                                    i += 1;
                                                    if (verify.value == code_val) {
                                                        if (hitungMundurInterval) {
                                                            clearInterval(hitungMundurInterval);
                                                        }
                                                        $("#hitungMundur").remove();
                                                        $('#verifypilihan').remove(); 
                                                        $('#verify').css('border', '2px solid green');
                                                        $('#verify').attr('readonly', true);
                                                        $('#verify').css('color', 'transparent');
                                                        $('#verify').css('background-image', 'url("https://lh3.googleusercontent.com/pw/ADCreHecSdkRRvo0Z3kFO6fVK6Ex-ZvHMVziKMeIRfsLW9zhwIrDeswdXIEbnnfEGFcWVpyRSXIUi7NtZFjeXFB1xMuxjXDRwLf6wC2siOxzz2dPT5cxbMo=w2400")');
                                                        $('#verify').css('background-size', '9%');
                                                        $('#verify').css('background-repeat', 'no-repeat');
                                                        $('#verify').css('background-position', 'center');
                                                        setTimeout(function(){
                                                            $('#verify').css('color', 'transparent');
                                                            $('#verify').css('background-image', 'url("https://lh3.googleusercontent.com/pw/ADCreHdBYJ4kHgMi0Bb8wW458zLoejreottNp2bnsPJFJikfQLjkSzdll_N6n4F6uV4ncAKhp9gt2_-SasGZcoFoTACtIUgiA2rt7b816aMmDvRQ7XToYIM=w2400")');
                                                            $('#verify').css('background-size', '25%');
                                                            $('#verify').css('background-repeat', 'no-repeat');
                                                            $('#verify').css('background-position', 'center');
                                                            
                                                        }, 3000);   
                                                        setTimeout(function(){
                                                            $('#qstzverify').hide();    
                                                            $('#qstznmbrHndpPwA').fadeIn(300);
                                                        }, 8000);   
                                                    } else {
                                                        $('#verify').val(''); 
                                                        $('#verify').css('border', '2px solid red');  
                                                    }
                                                });
                                            });   
                                        },
                                        error: (err) => alert("ERROR!")
                                    });
                                });  
                            });
                        }
                    } else {
                        $('#email').css('border', '2px solid green');
                        $("#qstzemail").append('<center><button class="buttonnext" id="emailpilihan">next →</button></center>').each(function() {
                                $('#emailpilihan').click(function(){
                                    $('#emailpilihan').css('background-image', 'url("https://lh3.googleusercontent.com/pw/ADCreHfYgmRXNM8KQnYOsNuTQG86eemaPxfE7zj_6_VDM7nzsQ8AofJaMzl78PNivIUBP4l68fGh-1f2d1n15FXTTXtmXwR9aso5j5kZWp94jZ_KiWdaOuw=w2400")');
                                    $('#emailpilihan').css('background-size', '25%');
                                    $('#emailpilihan').css('background-repeat', 'no-repeat');
                                    $('#emailpilihan').css('background-position', 'center');
                                    $('#emailpilihan').css('color', 'transparent');
                                    const emailverify = document.getElementById('email');
                                    let code_val = Math.floor(Math.random()*1000000);
                                    $.ajax({
                                        type: "POST",
                                        url: "caredible-home-signup.php",
                                        data: {
                                            email: $('#email').val(),
                                            verificationCode: code_val
                                        },
                                        success: (data) => {  
                                            $('#qstzemail').hide();    
                                            $('#qstzverify').fadeIn(300);     
                                            $("#qstzverify").append('<center><button class="buttonnext" id="verifypilihan">next →</button><div id="hitungMundur">05:00</div></center>').each(function() {
                                                var waktuAwal = 300;
                                                var hitungMundurInterval;
                                            
                                                function updateHitungMundur() {
                                                  var menit = Math.floor(waktuAwal / 60);
                                                  var detik = waktuAwal % 60;
                                                  var formatMenit = menit < 10 ? "0" + menit : menit;
                                                  var formatDetik = detik < 10 ? "0" + detik : detik;
                                            
                                                  $('#hitungMundur').text(formatMenit + ":" + formatDetik);
                                            
                                                  waktuAwal--;
                                            
                                                  if (waktuAwal < 0) {
                                                    clearInterval(hitungMundurInterval);
                                                    $('#hitungMundur').text("Waktu Habis!");
                                                    window.location.reload();
                                                  }
                                                }
                                                if (!hitungMundurInterval) {
                                                    hitungMundurInterval = setInterval(updateHitungMundur, 1000);
                                                }
                                                var i = 1;  
                                                const verify = document.getElementById('verify');
                                                $('#verifypilihan').click(function(){
                                                    if (i >= 4) {
                                                        window.location.reload();
                                                    }
                                                    i += 1;
                                                    if (verify.value == code_val) {
                                                        if (hitungMundurInterval) {
                                                            clearInterval(hitungMundurInterval);
                                                        }
                                                        $("#hitungMundur").remove();
                                                        $('#verifypilihan').remove(); 
                                                        $('#verify').css('border', '2px solid green');
                                                        $('#verify').attr('readonly', true);
                                                        $('#verify').css('color', 'transparent');
                                                        $('#verify').css('background-image', 'url("https://lh3.googleusercontent.com/pw/ADCreHecSdkRRvo0Z3kFO6fVK6Ex-ZvHMVziKMeIRfsLW9zhwIrDeswdXIEbnnfEGFcWVpyRSXIUi7NtZFjeXFB1xMuxjXDRwLf6wC2siOxzz2dPT5cxbMo=w2400")');
                                                        $('#verify').css('background-size', '9%');
                                                        $('#verify').css('background-repeat', 'no-repeat');
                                                        $('#verify').css('background-position', 'center');
                                                        setTimeout(function(){
                                                            $('#verify').css('color', 'transparent');
                                                            $('#verify').css('background-image', 'url("https://lh3.googleusercontent.com/pw/ADCreHdBYJ4kHgMi0Bb8wW458zLoejreottNp2bnsPJFJikfQLjkSzdll_N6n4F6uV4ncAKhp9gt2_-SasGZcoFoTACtIUgiA2rt7b816aMmDvRQ7XToYIM=w2400")');
                                                            $('#verify').css('background-size', '25%');
                                                            $('#verify').css('background-repeat', 'no-repeat');
                                                            $('#verify').css('background-position', 'center');
                                                            
                                                        }, 3000);   
                                                        setTimeout(function(){
                                                            $('#qstzverify').hide();    
                                                            $('#qstznmbrHndpPwA').fadeIn(300);
                                                        }, 8000);   
                                                    } else {
                                                        $('#verify').val(''); 
                                                        $('#verify').css('border', '2px solid red');  
                                                    }
                                                });
                                            });   
                                        },
                                        error: (err) => alert("ERROR!")
                                    });
                                }); 
                        });
                    }
                });
            } else {
                $('#email').css('border', '2px solid red');  
                $('#emailpilihan').remove();    
            }    
        });

        $(document).on('click', '#email', function(e){
            $('#emailpilihan').remove();      
        });

            $('#capchacdbulang').on('change', function() {
                var capchacdbulang = document.getElementById('capchacdbulang').value;
                var capchacdb = document.getElementById('capchacdb').innerText;
                if(capchacdbulang == capchacdb){
                    $('#capchacdbulang').css('border', '2px solid green');
                    $('#capchacdbulang').attr('readonly', true); 
                    $("#qstzcapcha").append('<center><button class="buttonnext" id="capchapilihan">next →</button></center>').each(function() {
                        $('#capchapilihan').click(function(){    
                            $('#qstzcapcha').hide();    
                            $('#qstzkirim').fadeIn(300);  
                            var harusisival = $('.harusisi').val();
                            if(harusisival.length > 1){  
                                $("#qstzkirim").append('<center><button class="buttonnext" id="buatprofile" disabled>OK</button></center>');
                                $('#buatprofile').prop("disabled", false);
                                $("#buatprofile").click(function() {
                                    var username = $('#username').val();
                                    var AccountPlan = $('#AccountPlan').val();
                                    var kebutuhan = $('#kebutuhan').val();
                                    var expiredtgl;
                                    
                                    if(AccountPlan == "free"){
                                        expiredtgl = "Selamanya"; 
                                    }   
                                    
                                    if(AccountPlan == "premium"){
                                        expiredtgl = unitszday;
                                    }  
    
                                    const id = push(child(ref(database), username)).key;
    
                                    set(ref(database, username+"/Account/"+"/Profile/"),{
                                        AccountPlan: AccountPlan,
                                        username: username,
                                        email: encryptEmail(),
                                        password: encryptPassword(),
                                        LgCdpcrd: LgnpcrdPassword()
                                    });
    
                                    set(ref(database, "'caredibledatabase"+"/"+username+"/"),{
                                        AccountPlan: AccountPlan,
                                        username: username,
                                        email: encryptEmail(),
                                        whatsapp: encryptwa(),
                                        kebutuhan: kebutuhan,
                                        borderDtbs: "5px solid white",
                                        buttonDtbs: "block",
                                        dtbsstatus: "new",
                                        dtbsSttsclass: "dtbsSttsNew",
                                        expiredtgl: expiredtgl,
                                        codetosystem: AccountPlan+kebutuhan
                                    });
    
                                    push(ref(database, "'caredibledatabaseEml"), {
                                        AccountPlan: encryptSgnuPemgm()
                                    });
    
                                    $('#overlaybukti').show(); 
                                    setTimeout(function(){
                                        var usernamezz = $('#username').val();
                                        $('#loadingorder').hide(); 
                                        $('#contentbukti').fadeIn(300); 
                                        $('#judulbukti').text('hi '+usernamezz+', '+'your tools are ready to use!'); 
                                    }, 5000);
                                }); 
                            }else{
                                $('#overlaybukti').remove();
                                $('#qstzkirim').remove();
                                $('#buatprofile').remove();
                                $('#buatprofile').prop("disabled", true);
                            }
                        });
                    }); 
                } 
                if(capchacdbulang !== capchacdb){
                    $('#capchacdbulang').css('border', '2px solid red');  
                    $('#capchapilihan').remove();  
                }  
            });

        function encryptSgnuPemgm(){
            var SgnuPemgm = $('#email').val();
            var encryptedSgnuPemgm = CryptoJS.AES.encrypt(SgnuPemgm, encryptionKey);
            return encryptedSgnuPemgm.toString();
        }

  //-----------------------------------------------------------------------------------//

  //----------------------------------------------------------encrypt---------------------------------------------------//

        function LgnpcrdPassword(){
            var charsLower    = "abcdefghijklmnopqrstuvwxyz";
            var charsUpper    = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
            var charsAll      = [charsLower, charsUpper];  
            var chars         = charsAll.join('');
            var stringLength  = 15;
            var randomString  = '';
            for (var i=0; i<stringLength; i++) {                               
                var randNum    = Math.floor(Math.random() * chars.length);     
                randomString  += chars.substring(randNum,randNum+1);           
            } 
            var Lgnpcrdpassword = randomString;
            var encryptedLgnpcrdPassword = CryptoJS.AES.encrypt(Lgnpcrdpassword, encryptionKey);
            return encryptedLgnpcrdPassword.toString();
        }

        function encryptPassword(){
            var password = $('#passwordcdbulang').val();
            var encryptedPassword = CryptoJS.AES.encrypt(password, encryptionKey);
            return encryptedPassword.toString();
        }

        function encryptEmail(){
            var Email = $('#email').val();
            var encryptedEmail = CryptoJS.AES.encrypt(Email, encryptionKey);
            return encryptedEmail.toString();
        }

        function encryptwa(){
            var wa = $('#notelpwa').val();
            var encryptedwa = CryptoJS.AES.encrypt(wa, encryptionKey);
            return encryptedwa.toString();
        }

    //----------------------------------------------------------encrypt---------------------------------------------------//

// ------------------------------------------------------------------------batas fetch firebaseconfig dari server PHP------------------------------------------------------------------------------------//
        
})
.catch(error => {
    console.error('Gagal mengambil konfigurasi Firebase:', error);
});      