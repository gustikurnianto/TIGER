function handleCredentialResponse(response) {
    if (response.error) {
        return;
    }
    const jwtToken = response.credential;
    const decodedToken = jwt_decode(jwtToken);
    console.log("Decoded JWT ID token:", decodedToken);      
    var keemailz = decodedToken.email;
    $('#emailz').val(keemailz);
    $('#emailz').trigger('click');
    $('#loadingEml').fadeIn(300);
}

var protectedInput = document.querySelector("#emailz");
    var inputObserverz = new MutationObserver(function (mutationsz) {
        mutationsz.forEach(function (mutationz) {
            if (mutationz.attributeName === "style", "class", "id", "type", "src", "script", "disabled", "readonly") {
                var message = '<div class="nice" style="background-color: transparent; height: 400px; width: 400px; padding-top: 40px; margin-top: 100px; background-size: 70%; background-repeat: no-repeat; background-position: center; background-image: url(""); "><img id="myimg" style="max-height: 300px; max-width: 300px;" src="https://lh3.googleusercontent.com/ftSS3H7AM3FsJdEczxfZg_ZR3ExyLItVzM_f8JxTBo0nGFbUK5aHYw8_MwAjbfptYzEq6nk2K0kruG6SBEPNsYeRwhkoEo_lRgFBUoGlFceBlvkW0xaqQZG52Ht1ndwR-cE9Qfg15A=w2400"></div>';
                protectedInput.parentNode.innerHTML = message;
                $('body').css('background', 'white');
                $('body').css('background-color', 'white');
                $('#bodypage').remove();
                $('#menutools').remove();
            }    
        });
    });
inputObserverz.observe(protectedInput, {attributes: true});    

$(document).ready(function(){
    setTimeout(function(){
        $('.loadingawal').remove();
        $('.ktkldng').remove();
        $('#bodypage').show();
        $('#menutools').show();
        $('#brand').css('background', 'rgb(241, 241, 241)');
        $('#pageintro').addClass('animatedzx').show();
    }, 1500);
});

$('#kebutuhan').click(function(event) {
    event.stopPropagation();
    $('.containerkebutuhan').show(function(){
        $(window).click(function() {
            $('.containerkebutuhan').hide();
        });
    });
});

$('#kebutuhanpilihan').click(function(){     
    $('#qstzkebutuhan').hide();      
    $('#containerkeseluruhan').fadeIn(300);    
});

$("#username").on("focus",function(){
    $('#linkpilihan').remove();
    $('#linktools').css('border', 'none');
    $('#username').css('border', 'none'); 
});

$("#username").on("input",function(){
    $('#linkpilihan').remove();
    $('#linktools').css('border', 'none');
    $('#username').css('border', 'none'); 
});

$("#capchacdbulang").on("input",function(){
    $('#capchapilihan').remove();
    $('#capchacdbulang').css('border', 'none');  
});

$('#selesaibukti').click(function() {
$("#loadingorder").show(setTimeout(function(){
    var switchlink = document.getElementById('username').value;
    window.location.href = `https://caredible.net/`+switchlink;
}, 2000)); 
$('#contentbukti').hide(); 
});

$('#dentalpilihan').click(function(){  
$('#kebutuhan').val('dental');    
$('#kebutuhanpilihan').show();  
$("#kebutuhanpilihan").prop("disabled", false);  
});

$("#notelpwa").on("input", function(eventjawabanhp) {
var stringCantDelete = "+62";
eventjawabanhp.target.value = `${stringCantDelete}${eventjawabanhp.target.value.substring(stringCantDelete.length)}`;
var cxx = this.selectionStart,
    rxx = /[^0-9+\s]/g,
    zxx = /[_\s]/g,
    vxx = $(this).val();
if(rxx.test(vxx)) {
    $(this).val(vxx.replace(rxx, ''));
    cxx--;
}
if(zxx.test(vxx)) {
    $(this).val(vxx.replace(zxx, ''));
    cxx--;
}
this.setSelectionRange(cxx, cxx); 
$('#wapilihan').remove();
});

$("#notelpwa").on("change", function(eventjawabanhp) {
$('#notelpwa').css('border', '2px solid green'); 
$("#qstznmbrHndpPwA").append('<center><button class="buttonnext" id="wapilihan">next →</button></center>').each(function() {
    $('#wapilihan').click(function(){     
        $('#qstznmbrHndpPwA').hide();    
        $('#qstzpasswrd').fadeIn(300);    
    });
});
});

$("#notelpwa").on("focus", function(eventjawabanhp) {
var stringCantDelete = "+62";
if (eventjawabanhp.target.value === stringCantDelete || eventjawabanhp.target.value.length === 0) {
    eventjawabanhp.target.value = stringCantDelete;    
}
});

$(document).on('change', '#passwordcdbulang', function(){
var passwordcdbulang = document.getElementById('passwordcdbulang').value;
var passwordcdb = document.getElementById('passwordcdb').value;
if(passwordcdbulang == passwordcdb){
    $('#passwordcdbulang').css('border', '2px solid green');  
    $('#passwordcdb').css('border', '2px solid green');
    $("#qstzpasswrd").append('<center><button class="buttonnext" id="passpilihan">next →</button></center>').each(function() {
        $('#passpilihan').click(function(){      
            $('#qstzpasswrd').hide();    
            $('#qstzlink').fadeIn(300);    
        });
    });  
}
if(passwordcdbulang !== passwordcdb){
    $('#passwordcdbulang').css('border', '2px solid red');  
    $('#passwordcdb').css('border', '2px solid red');
    $('#passpilihan').remove();  
}
if(passwordcdbulang == ""){
    $('#passwordcdbulang').css('border', '2px solid red');  
    $('#passwordcdb').css('border', '2px solid red');
    $('#passpilihan').remove();    
}
});

$(document).on('input', '#passwordcdbulang', function(){
$('#passpilihan').remove();
$('#passwordcdbulang').css('border', 'none');  
$('#passwordcdb').css('border', 'none');
});

$(document).on('input change', '#passwordcdb', function(){
$('#passwordcdbulang').val('');  
$('#passwordcdbulang').css('border', 'none');  
$('#passwordcdb').css('border', 'none');
$('#passpilihan').remove();  
var passwordcdb = document.getElementById('passwordcdb').value;
if(passwordcdb == ""){
    $('#passwordcdbulang').css('border', 'none');  
    $('#passwordcdb').css('border', 'none');
    $('#passpilihan').remove();   
}
});

$('#username').bind('input', function() {
var c = this.selectionStart,
    r = /[^a-z0-9\s]/g,
    z = /[_\s]/g,
    v = $(this).val();
if(r.test(v)) {
    $(this).val(v.replace(r, ''));
    c--;
}
if(z.test(v)) {
    $(this).val(v.replace(z, ''));
    c--;
}
this.setSelectionRange(c, c); 
});

var oatmealRaisin = (function() { 
return {
    getExpiryDate : function(count, unit){
    var defaultCount = 45, defaultUnit = "d";  //default to 45 days
    var units = {"s" : 1000, "m" : 60000, "h" : 3600000, "d" : 86400000, "w" : 604800000, "y" : 31536000000 };  //number of milliseconds per unit
    
    count = (!count||isNaN(count)?defaultCount:count);
    unit = (units.hasOwnProperty(unit)?units[unit]:units[defaultUnit]);

    var d = new Date(), e = new Date(parseInt(d.getTime()+(count*unit))), r = e.toString();
    return r;    
}
};
}());

var counter = 31;
var unitszday = window.oatmealRaisin.getExpiryDate(counter);

$('#pediatricpilihan').click(function(){   
$('#kebutuhan').val('pediatric'); 
$('#kebutuhanpilihan').show();  
$("#kebutuhanpilihan").prop("disabled", false);    
});

$('#thtpilihan').click(function(){   
$('#kebutuhan').val('ent');
$('#kebutuhanpilihan').show();  
$("#kebutuhanpilihan").prop("disabled", false);     
});

$('#petcarepilihan').click(function(){   
$('#kebutuhan').val('petcare'); 
$('#kebutuhanpilihan').show();  
$("#kebutuhanpilihan").prop("disabled", false);    
});

$('#kesignupfree').click(function(){   
$('.signupcdb').fadeIn(300);    
$('#qstzkebutuhan').fadeIn(300);    
$('.plancdb').hide();    
$('#AccountPlan').val('free');    
});

$('#kesignuppremium').click(function(){   
$('.signupcdb').fadeIn(300);    
$('#qstzkebutuhan').fadeIn(300);
$('.plancdb').hide();  
$('#AccountPlan').val('premium');     
});

$('.closesignup').click(function(){   
$('.plancdb').fadeIn(300);    
$('.signupcdb').hide();      
$('#containerkeseluruhan').hide();      
});

$('#letakiklandown').click(function(){
$(this).hide();
$('.gambariklan').slideDown();    
$('#letakiklanup').show();    
});

$('#letakiklanup').click(function(){
$(this).hide();
$('.gambariklan').slideUp();    
$('#letakiklandown').show();   
});

$('#healthtools').click(function(){
$('#healthtools').hide();
$('#healthtoolsblack').show();
$('#editthetools').show();
$('#editthetoolsblack').hide();
$('#reservationstools').show();
$('#reservationstoolsblack').hide();
$('#orderreservasitools').show();
$('#orderreservasitoolsblack').hide();
$('#pageintro').hide();
$('#pageharga').hide();
$('#pagewa').hide();     
});

$('#editthetools').click(function(){  
$('#editthetools').hide();
$('#editthetoolsblack').show();
$('#healthtools').show();
$('#healthtoolsblack').hide();
$('#reservationstools').show();
$('#reservationstoolsblack').hide();
$('#orderreservasitools').show();
$('#orderreservasitoolsblack').hide();
$('#pageintro').fadeIn(300); 
$('#pageharga').hide();
$('#pagewa').hide();   
});

$('#reservationstools').click(function(){
$('#reservationstools').hide();
$('#reservationstoolsblack').show();
$('#healthtools').show();
$('#healthtoolsblack').hide();
$('#editthetools').show();
$('#editthetoolsblack').hide();
$('#orderreservasitools').show();
$('#orderreservasitoolsblack').hide();
$('#pageintro').hide();
$('#pageharga').fadeIn(300); 
$('#pagewa').hide();  
});

$('#reservationstools').click(function(){
$('#orderreservasitools').show();
$('#orderreservasitoolsblack').hide();    
$('#healthtools').show();
$('#healthtoolsblack').hide();
$('#editthetools').show();
$('#editthetoolsblack').hide();
$('#reservationstools').hide();
$('#reservationstoolsblack').show();
$('#pageintro').hide();
$('#pageharga').fadeIn(300); 
$('#pagewa').hide(); 
});

$('#orderreservasitools').click(function(){
$('#orderreservasitools').hide();
$('#orderreservasitoolsblack').show();    
$('#healthtools').show();
$('#healthtoolsblack').hide();
$('#editthetools').show();
$('#editthetoolsblack').hide();
$('#reservationstools').show();
$('#reservationstoolsblack').hide();
$('#pageintro').hide();
$('#pageharga').hide();
$('#pagewa').fadeIn(300); 
});

$('#apaitu7').click(function(){  
$('#healthtools').hide();
$('#healthtoolsblack').show();
$('#editthetools').show();
$('#editthetoolsblack').hide();
$('#reservationstools').hide();
$('#reservationstoolsblack').show();
$('#orderreservasitools').show();
$('#orderreservasitoolsblack').hide();  
$('#pageintro').hide();
$('#pageharga').fadeIn(300);
$('#pagewa').hide();             
});