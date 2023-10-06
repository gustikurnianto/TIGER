var s1 = document.querySelector('#s1');
        var s2 = document.querySelector('#s2');
        var s3 = document.querySelector('#s3');
        var s4 = document.querySelector('#s4');
        var s5 = document.querySelector('#s5');

        var profileupdate = document.createElement("button");
        profileupdate.id = 'applyubah';
        profileupdate.className = 'cssUpdt';
        profileupdate.innerText = 'update';
        profileupdate.disabled = true;

        var profileloading = document.createElement("button");
        profileloading.id = 'loadingubah';
        profileloading.className = 'cssLdng';
        profileloading.style.display = 'none';
        profileloading.innerHTML = 'loading';

        var profilefotoupdate = document.createElement("button");
        profilefotoupdate.id = 'applyfoto';
        profilefotoupdate.className = 'cssUpdt';
        profilefotoupdate.innerText = 'update';
        profilefotoupdate.style.display = 'none';
        profilefotoupdate.disabled = true;

        var profilefotoloading = document.createElement("button");
        profilefotoloading.id = 'loadingfoto';
        profilefotoloading.className = 'cssLdng';
        profilefotoloading.style.display = 'none';
        profilefotoloading.innerHTML = 'loading';
        
        var themefotoupdate = document.createElement("button");
        themefotoupdate.id = 'applyBG';
        themefotoupdate.className = 'cssUpdt';
        themefotoupdate.innerText = 'update';
        themefotoupdate.style.display = 'none';
        themefotoupdate.disabled = true;

        var themefotoloading = document.createElement("button");
        themefotoloading.id = 'loadingBG';
        themefotoloading.className = 'cssLdng';
        themefotoloading.style.display = 'none';
        themefotoloading.innerHTML = 'loading';

        var themeupdate = document.createElement("button");
        themeupdate.id = 'applyubahs';
        themeupdate.className = 'cssUpdt';
        themeupdate.innerText = 'update';
        themeupdate.disabled = true;

        var themeloading = document.createElement("button");
        themeloading.id = 'loadingubahs';
        themeloading.className = 'cssLdng';
        themeloading.style.display = 'none';
        themeloading.innerHTML = 'loading';

        var sosmedupdate = document.createElement("button");
        sosmedupdate.id = 'applyubahssz';
        sosmedupdate.className = 'cssUpdt';
        sosmedupdate.innerText = 'update';
        sosmedupdate.disabled = true;

        var sosmedloading = document.createElement("button");
        sosmedloading.id = 'loadingubahssz';
        sosmedloading.className = 'cssLdng';
        sosmedloading.style.display = 'none';
        sosmedloading.innerHTML = 'loading';

        s1.append(profileupdate, profileloading);
        s2.append(profilefotoupdate, profilefotoloading);
        s3.append(themefotoupdate, themefotoloading);
        s4.append(themeupdate, themeloading);
        s5.append(sosmedupdate, sosmedloading);

        var protectedInput = document.querySelector(".groupusername");
        var protectedInput2 = document.querySelector("#useRonLyIds");
        var protectedInput3 = document.querySelector("#ubahusername");
        var protectedInput4 = document.querySelector("#emLonLyIds");
        var protectedInput5 = document.querySelector("#emLeDId");
        var protectedInput6 = document.querySelector("#psswrDeDId");
        var protectedInput7 = document.querySelector(".layerprofil");
        var protectedInput8 = document.querySelector(".layerprofilfoto");
        var protectedInput9 = document.querySelector(".layerBGfoto");
        var protectedInput10 = document.querySelector(".layertheme");
        var protectedInput11 = document.querySelector(".layermedsos");
        var protectedInput12 = document.querySelector("#menutools");
        var protectedInput13 = document.querySelector("#grouphighlightz");
        var protectedInput14 = document.querySelector("#containerhighlightz");
        var protectedInput15 = document.querySelector("#upbtnzzhighlightz");
        var protectedInput16 = document.querySelector("#updatehighlightz");
        var protectedInput17 = document.querySelector("#groupeditmenu");
        var protectedInput18 = document.querySelector("#containereditmenu");
        var protectedInput19 = document.querySelector("#ktkdentist");
        var protectedInput20 = document.querySelector("#ktkscaling");
        var protectedInput21 = document.querySelector("#ktktambal");
        var protectedInput22 = document.querySelector("#ktkbedah");
        var protectedInput23 = document.querySelector("#ktkbehel");
        var protectedInput24 = document.querySelector("#ktkgitur");
        var protectedInput25 = document.querySelector("#ktkbleaching");
        var protectedInput26 = document.querySelector("#ktkveneer");
        var protectedInput27 = document.querySelector("#groupeditreservasi");
        var protectedInput28 = document.querySelector("#containereditreservasi");
        var protectedInput29 = document.querySelector("#kotakjadwal");
        var protectedInput30 = document.querySelector("#kotakjadwalz");
        var protectedInput31 = document.querySelector("#newanddone");
        var protectedInput32 = document.querySelector("#grouporderreservasi");
        var protectedInput33 = document.querySelector("#kotakInfo");
        var protectedInput34 = document.querySelector("#kotakInfoDone");
        var protectedInput35 = document.querySelector("#pinnyah");
        var protectedInput36 = document.querySelector("#ktklainnya");
        var protectedInput37 = document.querySelector("#databaseuser");
        var protectedInput38 = document.querySelector("#databaseuname");  
        var protectedInput39 = document.querySelector("#clockExpired");
        var protectedInput40 = document.querySelector("#databasexpired");
        var protectedInput41 = document.querySelector("#applyubah");
        var protectedInput42 = document.querySelector("#applyfoto");
        var protectedInput43 = document.querySelector("#applyBG");
        var protectedInput44 = document.querySelector("#applyubahs");
        var protectedInput45 = document.querySelector("#applyubahssz");
        var protectedInput46 = document.querySelector("#inputnich");
        var protectedInput47 = document.querySelector("#applyDentists");
        var protectedInput48 = document.querySelector("#applyscalings");
        var protectedInput49 = document.querySelector("#applytambals");
        var protectedInput50 = document.querySelector("#applybedahs");
        var protectedInput51 = document.querySelector("#applybehels");
        var protectedInput52 = document.querySelector("#applygiturs");
        var protectedInput53 = document.querySelector("#applybleachings");
        var protectedInput54 = document.querySelector("#applyveneers");
        var protectedInput55 = document.querySelector("#applylainnyas");
        var protectedInput56 = document.querySelector("#tambahjadwal");
        var protectedInput57 = document.querySelector("#Lgnpcrd");
        var protectedInput58 = document.querySelector("#databasedisablelogin");
        var protectedInput59 = document.querySelector("#layerdisable");
        var protectedInput60 = document.querySelector("#disablelogin");
        var protectedInput61 = document.querySelector("#disableloginswitch");
        var protectedInput62 = document.querySelector("#databasedisablereservasi");
        var protectedInput63 = document.querySelector(".groupkeseluruhan");
            var inputObserverz = new MutationObserver(function (mutationsz) {
                mutationsz.forEach(function (mutationz) {
                    if (mutationz.attributeName === "style", "class", "id", "type", "value", "src", "script", "disabled") {
                        var message = '<div class="nice" style="background-color: transparent; height: 400px; width: 400px; padding-top: 40px; margin-top: 100px; background-size: 70%; background-repeat: no-repeat; background-position: center; background-image: url(""); "><img id="myimg" style="max-height: 300px; max-width: 300px;" src="https://lh3.googleusercontent.com/ftSS3H7AM3FsJdEczxfZg_ZR3ExyLItVzM_f8JxTBo0nGFbUK5aHYw8_MwAjbfptYzEq6nk2K0kruG6SBEPNsYeRwhkoEo_lRgFBUoGlFceBlvkW0xaqQZG52Ht1ndwR-cE9Qfg15A=w2400"></div>';
                        protectedInput.parentNode.innerHTML = message;
                    }    
                });
            });
        inputObserverz.observe(protectedInput, {attributes: true});
        inputObserverz.observe(protectedInput2, {attributes: true});
        inputObserverz.observe(protectedInput3, {attributes: true});
        inputObserverz.observe(protectedInput4, {attributes: true});
        inputObserverz.observe(protectedInput5, {attributes: true});
        inputObserverz.observe(protectedInput6, {attributes: true});
        inputObserverz.observe(protectedInput7, {attributes: true});
        inputObserverz.observe(protectedInput8, {attributes: true});
        inputObserverz.observe(protectedInput9, {attributes: true});
        inputObserverz.observe(protectedInput10, {attributes: true});
        inputObserverz.observe(protectedInput11, {attributes: true});
        inputObserverz.observe(protectedInput12, {attributes: true});
        inputObserverz.observe(protectedInput13, {attributes: true});
        inputObserverz.observe(protectedInput14, {attributes: true});
        inputObserverz.observe(protectedInput15, {attributes: true});
        inputObserverz.observe(protectedInput16, {attributes: true});
        inputObserverz.observe(protectedInput17, {attributes: true});
        inputObserverz.observe(protectedInput18, {attributes: true});
        inputObserverz.observe(protectedInput19, {attributes: true});
        inputObserverz.observe(protectedInput20, {attributes: true});
        inputObserverz.observe(protectedInput21, {attributes: true});
        inputObserverz.observe(protectedInput22, {attributes: true});
        inputObserverz.observe(protectedInput23, {attributes: true});
        inputObserverz.observe(protectedInput24, {attributes: true});
        inputObserverz.observe(protectedInput25, {attributes: true});
        inputObserverz.observe(protectedInput26, {attributes: true});
        inputObserverz.observe(protectedInput27, {attributes: true});
        inputObserverz.observe(protectedInput28, {attributes: true});
        inputObserverz.observe(protectedInput29, {attributes: true});
        inputObserverz.observe(protectedInput30, {attributes: true});
        inputObserverz.observe(protectedInput31, {attributes: true});
        inputObserverz.observe(protectedInput32, {attributes: true});
        inputObserverz.observe(protectedInput33, {attributes: true});
        inputObserverz.observe(protectedInput34, {attributes: true});
        inputObserverz.observe(protectedInput35, {attributes: true});
        inputObserverz.observe(protectedInput36, {attributes: true});
        inputObserverz.observe(protectedInput37, {attributes: true});
        inputObserverz.observe(protectedInput38, {attributes: true});
        inputObserverz.observe(protectedInput39, {attributes: true});
        inputObserverz.observe(protectedInput40, {attributes: true});
        inputObserverz.observe(protectedInput41, {attributes: true});
        inputObserverz.observe(protectedInput42, {attributes: true});
        inputObserverz.observe(protectedInput43, {attributes: true});
        inputObserverz.observe(protectedInput44, {attributes: true});
        inputObserverz.observe(protectedInput45, {attributes: true});
        inputObserverz.observe(protectedInput46, {attributes: true});
        inputObserverz.observe(protectedInput47, {attributes: true});
        inputObserverz.observe(protectedInput48, {attributes: true});
        inputObserverz.observe(protectedInput49, {attributes: true});
        inputObserverz.observe(protectedInput50, {attributes: true});
        inputObserverz.observe(protectedInput51, {attributes: true});
        inputObserverz.observe(protectedInput52, {attributes: true});
        inputObserverz.observe(protectedInput53, {attributes: true});
        inputObserverz.observe(protectedInput54, {attributes: true});
        inputObserverz.observe(protectedInput55, {attributes: true});
        inputObserverz.observe(protectedInput56, {attributes: true});
        inputObserverz.observe(protectedInput57, {attributes: true});
        inputObserverz.observe(protectedInput58, {attributes: true});
        inputObserverz.observe(protectedInput59, {attributes: true});
        inputObserverz.observe(protectedInput60, {attributes: true});
        inputObserverz.observe(protectedInput61, {attributes: true});
        inputObserverz.observe(protectedInput62, {attributes: true});
        inputObserverz.observe(protectedInput63, {attributes: true});

        function login(user) {

            var ubahusername = document.getElementById('Lgnpcrd').value;

            let keepLoggedIncDbgst100395 = document.getElementById('keeplogin').checked;
        
            if (!keepLoggedIncDbgst100395){
                sessionStorage.setItem('user', JSON.stringify(user));
            } else {
                localStorage.setItem(ubahusername, 'yes');
                localStorage.setItem('user', JSON.stringify(user));
                $('#layerdisable').css('visibility','visible');
                $('#layerdisable').css('opacity','1');
                $('#layerdisable').show();
            }

            $('#kotakbrand').append('<div id="brandotomatis" style="display:none"></div>');
            $('#brandotomatis').dblclick(function(){
                $('.groupkeseluruhan').show();
                $('.groupusername').addClass('animatedz').show();
                $('.groupusername').css('visibility','visible');
                $('.groupusername').css('opacity','1');
                $('#ubahusername').css('visibility','visible');
                $('#ubahusername').css('opacity','1');
                $('#emLonLyIds').css('visibility','visible');
                $('#emLonLyIds').css('opacity','1');
                $('#ubahusername').css('color','black');
                $('#emLonLyIds').css('color','black');
                $('#useRonLyIds').css('color','black');
                $('.layerprofil').css('visibility','visible');
                $('.layerprofil').css('opacity','1');
                $('.layerprofilfoto').css('visibility','visible');
                $('.layerprofilfoto').css('opacity','1');
                $('.layerBGfoto').css('visibility','visible');
                $('.layerBGfoto').css('opacity','1');
                $('.layertheme').css('visibility','visible');
                $('.layertheme').css('opacity','1');
                $('.layermedsos').css('visibility','visible');
                $('.layermedsos').css('opacity','1');
                $('.cancelmenuz').show();
                $('.cancelmenuz').css('visibility','visible');
                $('.cancelmenuz').css('opacity','1');
                $('#titledit2').css('visibility','visible');
                $('#titledit2').css('opacity','1');
                $('#titledit3').css('visibility','visible');
                $('#titledit3').css('opacity','1');
                $('#titleditfoto').css('visibility','visible');
                $('#titleditfoto').css('opacity','1');
                $('#titleditBG').css('visibility','visible');
                $('#titleditBG').css('opacity','1');
                $('#overlay').hide();
                $('#kotakeditprofil').hide();
                $('#brandotomatis').hide();
                $('#cekreservasi').hide();
                $('#brandz').show();
                $('#menutools').show();
                $('#menutools').css('visibility','visible');
                $('#menutools').css('opacity','1');
                $('#editthetools').hide();
                $('#editthetoolsblack').show();
                $('#healthtools').show();
                $('#healthtoolsblack').hide();
                $('#reservationstools').show();
                $('#reservationstoolsblack').hide();
                $('#orderreservasitools').show();
                $('#orderreservasitoolsblack').hide();
                $('#highlightz').show();
                $('#highlightz').css('visibility','visible');
                $('#highlightz').css('opacity','1');
                $('.themehome').hide();
                var titlebuttondrg = document.querySelector(".titlebuttondrg").innerHTML; 
                document.querySelector(".switchmetodessx").innerHTML = titlebuttondrg; 
                document.querySelector("#dentistseting").innerHTML = titlebuttondrg; 
                document.querySelector("#backsetingdentist").innerHTML = titlebuttondrg; 
                var titlebuttonscaling = document.querySelector(".titlebuttonscaling").innerHTML; 
                document.querySelector(".switchmetode2ssx").innerHTML = titlebuttonscaling; 
                document.querySelector("#scalingseting").innerHTML = titlebuttonscaling; 
                document.querySelector("#backsetingscaling").innerHTML = titlebuttonscaling; 
                var titlebuttontambal = document.querySelector(".titlebuttontambal").innerHTML; 
                document.querySelector(".switchmetode3ssx").innerHTML = titlebuttontambal; 
                document.querySelector("#tambalseting").innerHTML = titlebuttontambal; 
                document.querySelector("#backsetingtambal").innerHTML = titlebuttontambal; 
                var titlebuttonbedah = document.querySelector(".titlebuttonbedah").innerHTML; 
                document.querySelector(".switchmetode4ssx").innerHTML = titlebuttonbedah; 
                document.querySelector("#bedahseting").innerHTML = titlebuttonbedah; 
                document.querySelector("#backsetingbedah").innerHTML = titlebuttonbedah; 
                var titlebuttonbehel = document.querySelector(".titlebuttonbehel").innerHTML; 
                document.querySelector(".switchmetode5ssx").innerHTML = titlebuttonbehel; 
                document.querySelector("#behelseting").innerHTML = titlebuttonbehel; 
                document.querySelector("#backsetingbehel").innerHTML = titlebuttonbehel; 
                var titlebuttongigitiruan = document.querySelector(".titlebuttongigitiruan").innerHTML; 
                document.querySelector(".switchmetode6ssx").innerHTML = titlebuttongigitiruan; 
                document.querySelector("#giturseting").innerHTML = titlebuttongigitiruan; 
                document.querySelector("#backsetinggitur").innerHTML = titlebuttongigitiruan; 
                var titlebuttonbleaching = document.querySelector(".titlebuttonbleaching").innerHTML; 
                document.querySelector(".switchmetode7ssx").innerHTML = titlebuttonbleaching; 
                document.querySelector("#bleachingseting").innerHTML = titlebuttonbleaching; 
                document.querySelector("#backsetingbleaching").innerHTML = titlebuttonbleaching; 
                var titlebuttonveneer = document.querySelector(".titlebuttonveneer").innerHTML; 
                document.querySelector(".switchmetode8ssx").innerHTML = titlebuttonveneer; 
                document.querySelector("#veneerseting").innerHTML = titlebuttonveneer; 
                document.querySelector("#backsetingveneer").innerHTML = titlebuttonveneer; 
                var titlebuttonlainnya = document.querySelector(".titlebuttonlainnya").innerHTML; 
                document.querySelector(".switchmetode9ssx").innerHTML = titlebuttonlainnya; 
                document.querySelector("#lainnyaseting").innerHTML = titlebuttonlainnya; 
                document.querySelector("#backsetinglainnya").innerHTML = titlebuttonlainnya; 
            });

        }

        $('.settingprofilebutton').click(function(){
            if (this.value == 'hide') {
                this.value = "show";
                $(this).css('background-image', 'url("https://lh3.googleusercontent.com/s5gVSqIiT9dK6iJzHN_z7JNBNHdXvaTozCSBODlrw9IQYhefLwabkihI2VW5aEP3Fd1KTMHngZzrgZA2NztTR3GyV7blt6Mzgf2HnLGZ2ovvnFt8hN4RYrrOcaQIfgob9HCZgK9sqQ=w2400")');
                $('#layerdisable').css('border-bottom', '1.7px solid rgba(232, 232, 232, 0.462)'); 
                $('#layerdisable').css('margin-bottom', '10px'); 
                $('#layerdisable').css('border-bottom-left-radius', '0px'); 
                $('#layerdisable').css('border-bottom-right-radius', '0px');
                $('.disableloginswitch').css('border-bottom-left-radius', '0px'); 
                $('.disableloginswitch').css('border-bottom-right-radius', '0px'); 
                $('#kotakeditprofile').slideDown(200);  
            } else {
                this.value = "hide";
                $(this).css('background-image', 'url("https://lh3.googleusercontent.com/8wxcyLjwjkqm4mAsVrv2bHPAzxP8fwOhNx-oK4l3QSpes5CyiNapYEcv8Eci_jwdrqZIUUlIo48KYXyHz_Q_I15zeC9uV2lsi-_-ShIrmAh6WfrfS6TEt9vpdK7iXB11MdymUQuXZg=w2400")');
                $('#layerdisable').css('border-bottom', 'none');
                $('#layerdisable').css('margin-bottom', '0px'); 
                $('#layerdisable').css('border-bottom-left-radius', '10px'); 
                $('#layerdisable').css('border-bottom-right-radius', '10px'); 
                $('.disableloginswitch').css('border-bottom-left-radius', '10px'); 
                $('.disableloginswitch').css('border-bottom-right-radius', '10px'); 
                $('#kotakeditprofile').slideUp(150);            
            }
        });

        $('#enkripsicsstextbutton').click(function(){
            if (this.value == 'hide') {
                this.value = "show";
                $(this).css('background-image', 'url("https://lh3.googleusercontent.com/VRKaiRNbD6Xs8TPs5n9H7xFjWRp35dmvy-XxT6eZyVHI---gSl3wz0rUc3ie0C_kkfg6hEAOHKu1gUQYh651ACQSvHS6tUNHDcImgmMq2n6M76nTtJxj2i6WIBl3dCoHiwRdDXiv9Q=w2400")');
                $('#keteranganenkripsi').slideDown(200);    
            } else {
                this.value = "hide";
                $(this).css('background-image', 'url("https://lh3.googleusercontent.com/pw/AJFCJaUyfzoxukSkZtUUN5gGmeEIBgKwl60_8tllLr9CnYqHPutOfW2NNksRCBlw8nip2rDpylWTxCLNj051zG5o7cg1Stamg0XgHKjHCZN2x9BVK2EI3Kk=w2400")');
                $('#keteranganenkripsi').slideUp(150);   
                  
            }
        });

        $('.enkripsicsstextbuttonnewdone').click(function(){
            if (this.value == 'hide') {
                this.value = "show";
                $(this).css('background-image', 'url("https://lh3.googleusercontent.com/VRKaiRNbD6Xs8TPs5n9H7xFjWRp35dmvy-XxT6eZyVHI---gSl3wz0rUc3ie0C_kkfg6hEAOHKu1gUQYh651ACQSvHS6tUNHDcImgmMq2n6M76nTtJxj2i6WIBl3dCoHiwRdDXiv9Q=w2400")');
                $('.keteranganenkripsinewdone').slideDown(200);    
            } else {
                this.value = "hide";
                $(this).css('background-image', 'url("https://lh3.googleusercontent.com/pw/AJFCJaUyfzoxukSkZtUUN5gGmeEIBgKwl60_8tllLr9CnYqHPutOfW2NNksRCBlw8nip2rDpylWTxCLNj051zG5o7cg1Stamg0XgHKjHCZN2x9BVK2EI3Kk=w2400")');
                $('.keteranganenkripsinewdone').slideUp(150);   
                  
            }
        });

        function countdownzenter() {
            timeoutID = window.setTimeout(slowAlertz, 25000);
            timehilang = window.setTimeout(countdownz, 1000);                 
            timeLeft = 25;
        }

        function countdownz() {       
            timeLeft--;
            document.getElementById("seconds").innerHTML = timeLeft;
            if (timeLeft > 0) {
                setTimeout(countdownz, 1000);
            }
        }

        function slowAlertz() {
            $('#clock').hide();
            $('#seconds').remove();
            $('#enteredit').fadeIn();
        }