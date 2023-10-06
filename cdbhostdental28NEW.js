function updateTimer() {
    future  = Date.parse(databasexpired);
    now     = new Date();
    diff    = future - now;

    days  = Math.floor( diff / (1000*60*60*24) );
    hours = Math.floor( diff / (1000*60*60) );
    mins  = Math.floor( diff / (1000*60) );
    secs  = Math.floor( diff / 1000 );

    d = days;
    h = hours - days  * 24;
    m = mins  - hours * 60;
    s = secs  - mins  * 60;

    document.getElementById("clockExpired")
        .innerHTML =
        '<input type="text" id="expireddate" value="'+ d +'" style="width:25px;text-align:center;background:transparent;color:white;border:none;" readonly>' +
        '<input type="text" id="expiredhour" value="'+ h +'" style="width:25px;text-align:center;background:transparent;color:white;border:none;" readonly>' +
        '<input type="text" id="expiredmonth" value="'+ m +'" style="width:25px;text-align:center;background:transparent;color:white;border:none;" readonly>' +
        '<input type="text" id="expiredsecond" value="'+ s +'" style="width:25px;text-align:center;background:transparent;color:white;border:none;" readonly>' ;
    
        var expireddate = document.getElementById("expireddate").value;
        if (expireddate < 1) {
            $('#klikduakali').remove();
            $(".themehome").remove();
            $("#cekreservasi").remove();
            $("#saygreetinginput").remove();
            $("#brand").remove();
            $("#brandotomatis").remove();
            $("#clockExpired").remove();
            $("#menutools").remove();
            $(".cancelmenuz").remove();
            $("#highlightz").remove();
            $("#newanddone").remove();
            $(".groupusername").remove();
            $(".groups").remove();
            $(".groupss").remove();
            $("#offline-message").remove();
            $("#online-message").remove();
            $(".modal").remove();
            $(".setelahmenu").remove();
            $("#overlaybukti").remove();
            $("#overlay").remove();
            $("#kotakeditprofil").remove();
            $("#brandawal").remove();
            $("#inputnich").remove();
            $("#kotakbrand").remove();
            $("#brandz").remove();
            $("#overlaycekreservasi").remove();
            $("#kotakeditcekreservasi").remove();
            $("#settingz").remove();
            $("#inputhighlightz").remove();
            $("#loadingorder").remove();
            $(".kotakloading").append('<div class="ktkldng"></div><div class="loadingawalExpired">inactive account</div><div id="brandExpired"></div>');
        }
}
setInterval('updateTimer()', 1000 );

$(document).ready(function(){
    setTimeout(function(){
        $('.loadingawal').remove();
        $('.ktkldng').remove();
        $('#brandawal').hide();
        $('.themehome').show();
        $('#brand').show();
        $('#cekreservasi').show(function(){
            setTimeout(function(){
                teswindow();
            }, 2000);
        });
        $('.appearhome').addClass('animatedzx').show();
    }, 1500);
    setTimeout(function(){
        $('#klikduakali').fadeIn(300);
    }, 2500);
});

$('#jamdari').on('input', function () {
    var jamdari = document.getElementById('jamdari').value;
    var jamsampai = document.getElementById('jamsampai').value;
    var jamdari2 = document.getElementById('jamdari2').value;
    var jamsampai2 = document.getElementById('jamsampai2').value;
    document.getElementById('hasiljam').value = jamdari+"."+jamsampai+"-"+jamdari2+"."+jamsampai2;
});

$('#jamsampai').on('input', function () {
    var jamdari = document.getElementById('jamdari').value;
    var jamsampai = document.getElementById('jamsampai').value;
    var jamdari2 = document.getElementById('jamdari2').value;
    var jamsampai2 = document.getElementById('jamsampai2').value;
    document.getElementById('hasiljam').value = jamdari+"."+jamsampai+"-"+jamdari2+"."+jamsampai2;
});

$('#jamdari2').on('input', function () {
    var jamdari = document.getElementById('jamdari').value;
    var jamsampai = document.getElementById('jamsampai').value;
    var jamdari2 = document.getElementById('jamdari2').value;
    var jamsampai2 = document.getElementById('jamsampai2').value;
    document.getElementById('hasiljam').value = jamdari+"."+jamsampai+"-"+jamdari2+"."+jamsampai2;
});

$('#jamsampai2').on('input', function () {
    var jamdari = document.getElementById('jamdari').value;
    var jamsampai = document.getElementById('jamsampai').value;
    var jamdari2 = document.getElementById('jamdari2').value;
    var jamsampai2 = document.getElementById('jamsampai2').value;
    document.getElementById('hasiljam').value = jamdari+"."+jamsampai+"-"+jamdari2+"."+jamsampai2;
});

$('#jawabannamapasien').on('input', function () {
    var z = document.getElementById('jawabannamapasien').value;
    document.getElementById('judulbukti').innerHTML = "hai "+z+",";
});

$('#ubahjadwals').click(function(){
    $('#kotakeditprofils').show();
});

$('#jadwalsenin').click(function(){
    $('#kotakeditprofils').hide();
    $('#ubahjadwals').val('senin');
    $('#ubahjadwals').text('senin');
    $('#hasilhari').val('senin');

    var value = document.getElementById('hasilhari');

    if (value.value == "senin") {
        $('#tambahjadwal').show();
    }  
});

$('#jadwalselasa').click(function(){
    $('#kotakeditprofils').hide();
    $('#ubahjadwals').val('selasa');
    $('#ubahjadwals').text('selasa');
    $('#hasilhari').val('selasa');

    var value = document.getElementById('hasilhari');

    if (value.value == "selasa") {
        $('#tambahjadwal').show();
    }  
});

$('#jadwalrabu').click(function(){
    $('#kotakeditprofils').hide();
    $('#ubahjadwals').val('rabu');
    $('#ubahjadwals').text('rabu');
    $('#hasilhari').val('rabu');

    var value = document.getElementById('hasilhari');

    if (value.value == "rabu") {
        $('#tambahjadwal').show();
    }  
});

$('#jadwalkamis').click(function(){
    $('#kotakeditprofils').hide();
    $('#ubahjadwals').val('kamis');
    $('#ubahjadwals').text('kamis');
    $('#hasilhari').val('kamis');

    var value = document.getElementById('hasilhari');

    if (value.value == "kamis") {
        $('#tambahjadwal').show();
    }  
});

$('#jadwaljumat').click(function(){
    $('#kotakeditprofils').hide();
    $('#ubahjadwals').val('jumat');
    $('#ubahjadwals').text('jumat');
    $('#hasilhari').val('jumat');

    var value = document.getElementById('hasilhari');

    if (value.value == "jumat") {
        $('#tambahjadwal').show();
    }  
});

$('#jadwalsabtu').click(function(){
    $('#kotakeditprofils').hide();
    $('#ubahjadwals').val('sabtu');
    $('#ubahjadwals').text('sabtu');
    $('#hasilhari').val('sabtu');

    var value = document.getElementById('hasilhari');

    if (value.value == "sabtu") {
        $('#tambahjadwal').show();
    }  
});

$('#jadwalminggu').click(function(){
    $('#kotakeditprofils').hide();
    $('#ubahjadwals').val('minggu');
    $('#ubahjadwals').text('minggu');
    $('#hasilhari').val('minggu');

    var value = document.getElementById('hasilhari');

    if (value.value == "minggu") {
        $('#tambahjadwal').show();
    }  
});

let copyText = document.querySelector("#contentbukti");
copyText.querySelector("#selesaibukti").addEventListener("click", function () {
    let input = copyText.querySelector("#kodepinbukti");
    input.select();
    document.execCommand("copy");
    $("#contentbukti").hide();
    $("#clipboardpin").show(setTimeout(function(){
        $("#clipboardpin").hide();
        $("#loadingselesai").show(setTimeout(function(){
            $("#reloadpage").trigger('click');
        }, 2000)); 
    }, 3000));    
});

$('#reservasipernah').click(function(){
    $('#overlaycekreservasi').show();
    $('#kotakeditcekreservasi').show();
    $('#groupcekreservasi').show();
    $('#groupcekreservasi2').hide();
});

$('#cekreservasi').click(function(){
    $('#overlaycekreservasi').show();
    $('#kotakeditcekreservasi').show();
    $('#groupcekreservasi2').show();
    $('#groupcekreservasi').hide();
});

$('#saygreeting').on("keyup focus", function() {
    $("#the-countsaygreeting").show();
    var characterCountsaygreeting = $(this).val().length;
    var currentsaygreeting = $('#currentsaygreeting');
    currentsaygreeting.text(characterCountsaygreeting);
}).blur(function() {
    $("#the-countsaygreeting").hide();
});

$('#bioprofile').on("keyup focus input", function() {
    var z = document.getElementById("bioprofile").value; 
    document.querySelector(".kalimatsilahkan").innerHTML = z; 
    $("#the-countbioprofile").show();
    var characterCountbioprofile = $(this).val().length;
    var currentbioprofile = $('#currentbioprofile');
    currentbioprofile.text(characterCountbioprofile);
}).blur(function() {
    $("#the-countbioprofile").hide();
});

$('#saygreetinginput').click(function(){
    $("#saygreetinginput").css('width', '280px');
    $("#saygreetinginput").css('text-overflow', 'none');
    $("#saygreetinginput").css('overflow', 'none');
    $("#saygreetinginput").css('white-space', 'none');
    setTimeout(function(){
        $("#saygreetinginput").css('width', '83px');
        $("#saygreetinginput").css('text-overflow', 'ellipsis');
        $("#saygreetinginput").css('overflow', 'hidden');
        $("#saygreetinginput").css('white-space', 'nowrap');
    }, 4000);
});

$('#inputcekreservasi').bind('input', function() {
    var c = this.selectionStart,
        r = /a/gi,
        v = $(this).val();
    if(r.test(v)) {
        $(this).val(v.replace(r, ''));
        c--;
    }
    this.setSelectionRange(c, c);
});

$('#inputcekreservasi2').bind('input', function() {
    var c = this.selectionStart,
        r = /a/gi,
        v = $(this).val();
    if(r.test(v)) {
        $(this).val(v.replace(r, ''));
        c--;
    }
    this.setSelectionRange(c, c);
});

$('#brand').dblclick(function(){
    $('#overlay').show();
    $('#kotakeditprofil').show();
    $('#klikduakali').remove();
});

$('.cancelmenu').click(function(){
    $('#overlay').hide();
    $('#kotakeditprofil').hide();
    $('#overlaycekreservasi').hide();
    $('#kotakeditcekreservasi').hide();
    $('#groupcekreservasi').hide();
    $('#groupcekreservasi2').hide();
    $('#edittoolscekreservasi').show();
    $('#ownertoolscekreservasi').show();
    $('#groupcekreservasi3').hide();
    $('#inputcekreservasi').val("");
    $('#inputcekreservasi2').val("");
    $('#entercekreservasi').hide();
    $('#entercekreservasi2').hide();
    $('#entercektidak').show();
    $('#entercektidak2').show();
    $("#batalreservasi").text('batalkan reservasi');
    $("#batalreservasi").css('background', 'black');
});

$('.canceljadwal').click(function(){
    $('#kotakeditprofils').hide();
});

$('.cancelmenuz').click(function(){
    $('.groupkeseluruhan').hide();
    $('.groupusername').hide();
    $('#grouphighlightz').hide();
    $('#groupeditmenu').hide();
    $('#groupeditreservasi').hide();
    $('#grouporderreservasi').hide();
    $('.cancelmenuz').hide();
    $('#inputhighlightz').hide();
    $('#brandotomatis').show();
    $('#cekreservasi').show();
    $('#saygreetinginput').show();
    $('#brandz').hide();
    $('#menutools').hide();
    $('#highlightz').hide();
    $('#settingz').hide();
    $('.themehome').addClass('animatedzss').show();
    $('#searchnew').hide();
    $('#buttontodaynew').hide();
    $('#searchdone').hide();
    $('#newanddone').hide();
    $('#htmlpdf').hide();
    $('#tambahanorderreservasi').css({ "margin-top" : "20px" });
});

var inputQuantity = [];
$(function() {     
  $(".jamjadwalkiri").on("keyup", function (e) {
    var $field = $(this),
        val=this.value,
        $thisIndex=parseInt($field.data("idx"),10); 
    if (this.validity && this.validity.badInput || isNaN(val) || $field.is(":invalid") ) {
        this.value = inputQuantity[$thisIndex];
        return;
    } 
    if (val.length > Number($field.attr("maxlength"))) {
      val=val.slice(0, 2);
      $field.val(val);
    }
    inputQuantity[$thisIndex]=val;
  });      
});

var inputQuantitys = [];
$(function() {     
  $(".jamjadwalkanan").on("keyup", function (e) {
    var $field = $(this),
        val=this.value,
        $thisIndex=parseInt($field.data("idx"),10); 
    if (this.validity && this.validity.badInput || isNaN(val) || $field.is(":invalid") ) {
        this.value = inputQuantitys[$thisIndex];
        return;
    } 
    if (val.length > Number($field.attr("maxlength"))) {
      val=val.slice(0, 2);
      $field.val(val);
    }
    inputQuantitys[$thisIndex]=val;
  });      
});