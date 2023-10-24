function updateTimer() {
    future = Date.parse(databasexpired);
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    var clockExpired = document.getElementById("clockExpired");
    clockExpired.innerHTML =
        '<input type="text" id="expireddate" value="' + d + '" style="width:25px;text-align:center;background:transparent;color:white;border:none;" readonly>' +
        '<input type="text" id="expiredhour" value="' + h + '" style="width:25px;text-align:center;background:transparent;color:white;border:none;" readonly>' +
        '<input type="text" id="expiredmonth" value="' + m + '" style="width:25px;text-align:center;background:transparent;color:white;border:none;" readonly>' +
        '<input type="text" id="expiredsecond" value="' + s + '" style="width:25px;text-align:center;background:transparent;color:white;border:none;" readonly';

    var expireddate = document.getElementById("expireddate").value;
    if (expireddate < 1) {
        var klikduakali = document.getElementById("klikduakali");
        klikduakali.parentNode.removeChild(klikduakali);

        var themehome = document.querySelector(".themehome");
        themehome.parentNode.removeChild(themehome);

        var cekreservasi = document.getElementById("cekreservasi");
        cekreservasi.parentNode.removeChild(cekreservasi);

        var saygreetinginput = document.getElementById("saygreetinginput");
        saygreetinginput.parentNode.removeChild(saygreetinginput);

        var brand = document.getElementById("brand");
        brand.parentNode.removeChild(brand);

        var brandotomatis = document.getElementById("brandotomatis");
        brandotomatis.parentNode.removeChild(brandotomatis);

        clockExpired.parentNode.removeChild(clockExpired);

        var menutools = document.getElementById("menutools");
        menutools.parentNode.removeChild(menutools);

        var cancelmenuz = document.querySelector(".cancelmenuz");
        cancelmenuz.parentNode.removeChild(cancelmenuz);

        var highlightz = document.getElementById("highlightz");
        highlightz.parentNode.removeChild(highlightz);

        var newanddone = document.getElementById("newanddone");
        newanddone.parentNode.removeChild(newanddone);

        var groupusername = document.querySelector(".groupusername");
        groupusername.parentNode.removeChild(groupusername);

        var groups = document.querySelector(".groups");
        groups.parentNode.removeChild(groups);

        var groupss = document.querySelector(".groupss");
        groupss.parentNode.removeChild(groupss);

        var offlineMessage = document.getElementById("offline-message");
        offlineMessage.parentNode.removeChild(offlineMessage);

        var onlineMessage = document.getElementById("online-message");
        onlineMessage.parentNode.removeChild(onlineMessage);

        var modals = document.querySelectorAll(".modal");
        modals.forEach(function (modal) {
            modal.parentNode.removeChild(modal);
        });

        var setelahmenu = document.querySelector(".setelahmenu");
        setelahmenu.parentNode.removeChild(setelahmenu);

        var overlaybukti = document.getElementById("overlaybukti");
        overlaybukti.parentNode.removeChild(overlaybukti);

        var overlay = document.getElementById("overlay");
        overlay.parentNode.removeChild(overlay);

        var kotakeditprofil = document.getElementById("kotakeditprofil");
        kotakeditprofil.parentNode.removeChild(kotakeditprofil);

        var brandawal = document.getElementById("brandawal");
        brandawal.parentNode.removeChild(brandawal);

        var inputnich = document.getElementById("inputnich");
        inputnich.parentNode.removeChild(inputnich);

        var kotakbrand = document.getElementById("kotakbrand");
        kotakbrand.parentNode.removeChild(kotakbrand);

        var brandz = document.getElementById("brandz");
        brandz.parentNode.removeChild(brandz);

        var overlaycekreservasi = document.getElementById("overlaycekreservasi");
        overlaycekreservasi.parentNode.removeChild(overlaycekreservasi);

        var kotakeditcekreservasi = document.getElementById("kotakeditcekreservasi");
        kotakeditcekreservasi.parentNode.removeChild(kotakeditcekreservasi);

        var settingz = document.getElementById("settingz");
        settingz.parentNode.removeChild(settingz);

        var inputhighlightz = document.getElementById("inputhighlightz");
        inputhighlightz.parentNode.removeChild(inputhighlightz);

        var loadingorder = document.getElementById("loadingorder");
        loadingorder.parentNode.removeChild(loadingorder);

        var kotakloading = document.querySelector(".kotakloading");
        kotakloading.innerHTML = '<div class="ktkldng"></div><div class="loadingawalExpired">inactive account</div><div id="brandExpired"></div>';
    }
}

setInterval(updateTimer, 1000);

var jamdari = document.getElementById('jamdari');
var jamsampai = document.getElementById('jamsampai');
var jamdari2 = document.getElementById('jamdari2');
var jamsampai2 = document.getElementById('jamsampai2');
var hasiljam = document.getElementById('hasiljam');

jamdari.addEventListener('input', function () {
    hasiljam.value = jamdari.value + "." + jamsampai.value + "-" + jamdari2.value + "." + jamsampai2.value;
});

jamsampai.addEventListener('input', function () {
    hasiljam.value = jamdari.value + "." + jamsampai.value + "-" + jamdari2.value + "." + jamsampai2.value;
});

jamdari2.addEventListener('input', function () {
    hasiljam.value = jamdari.value + "." + jamsampai.value + "-" + jamdari2.value + "." + jamsampai2.value;
});

jamsampai2.addEventListener('input', function () {
    hasiljam.value = jamdari.value + "." + jamsampai.value + "-" + jamdari2.value + "." + jamsampai2.value;
});

var jawabannamapasien = document.getElementById('jawabannamapasien');
var judulbukti = document.getElementById('judulbukti');

jawabannamapasien.addEventListener('input', function () {
    var z = jawabannamapasien.value;
    judulbukti.innerHTML = "hai " + z + ",";
});

var ubahjadwals = document.getElementById('ubahjadwals');
var kotakeditprofils = document.getElementById('kotakeditprofils');
var hasilhari = document.getElementById('hasilhari');
var tambahjadwal = document.getElementById('tambahjadwal');

ubahjadwals.addEventListener('click', function () {
    kotakeditprofils.style.display = 'block';
});

var jadwalsenin = document.getElementById('jadwalsenin');
jadwalsenin.addEventListener('click', function () {
    kotakeditprofils.style.display = 'none';
    ubahjadwals.value = 'senin';
    ubahjadwals.textContent = 'senin';
    hasilhari.value = 'senin';

    if (hasilhari.value === 'senin') {
        tambahjadwal.style.display = 'block';
    }
});

var jadwalselasa = document.getElementById('jadwalselasa');
jadwalselasa.addEventListener('click', function () {
    kotakeditprofils.style.display = 'none';
    ubahjadwals.value = 'selasa';
    ubahjadwals.textContent = 'selasa';
    hasilhari.value = 'selasa';

    if (hasilhari.value === 'selasa') {
        tambahjadwal.style.display = 'block';
    }
});

var jadwalrabu = document.getElementById('jadwalrabu');
jadwalrabu.addEventListener('click', function () {
    kotakeditprofils.style.display = 'none';
    ubahjadwals.value = 'rabu';
    ubahjadwals.textContent = 'rabu';
    hasilhari.value = 'rabu';

    if (hasilhari.value === 'rabu') {
        tambahjadwal.style.display = 'block';
    }
});

var jadwalkamis = document.getElementById('jadwalkamis');
jadwalkamis.addEventListener('click', function () {
    kotakeditprofils.style.display = 'none';
    ubahjadwals.value = 'kamis';
    ubahjadwals.textContent = 'kamis';
    hasilhari.value = 'kamis';

    if (hasilhari.value === 'kamis') {
        tambahjadwal.style.display = 'block';
    }
});

var jadwaljumat = document.getElementById('jadwaljumat');
jadwaljumat.addEventListener('click', function () {
    kotakeditprofils.style.display = 'none';
    ubahjadwals.value = 'jumat';
    ubahjadwals.textContent = 'jumat';
    hasilhari.value = 'jumat';

    if (hasilhari.value === 'jumat') {
        tambahjadwal.style.display = 'block';
    }
});

var jadwalsabtu = document.getElementById('jadwalsabtu');
jadwalsabtu.addEventListener('click', function () {
    kotakeditprofils.style.display = 'none';
    ubahjadwals.value = 'sabtu';
    ubahjadwals.textContent = 'sabtu';
    hasilhari.value = 'sabtu';

    if (hasilhari.value === 'sabtu') {
        tambahjadwal.style.display = 'block';
    }
});

var jadwalminggu = document.getElementById('jadwalminggu');
jadwalminggu.addEventListener('click', function () {
    kotakeditprofils.style.display = 'none';
    ubahjadwals.value = 'minggu';
    ubahjadwals.textContent = 'minggu';
    hasilhari.value = 'minggu';

    if (hasilhari.value === 'minggu') {
        tambahjadwal.style.display = 'block';
    }
});

var contentbukti = document.getElementById('contentbukti');
var selesaibukti = document.getElementById('selesaibukti');
var kodepinbukti = document.getElementById('kodepinbukti');

selesaibukti.addEventListener("click", function () {
    kodepinbukti.select();
    document.execCommand("copy");
    contentbukti.style.display = 'none';
    clipboardpin.style.display = 'block';
    setTimeout(function () {
        clipboardpin.style.display = 'none';
        loadingselesai.style.display = 'block';
        setTimeout(function () {
            reloadpage.click();
        }, 2000);
    }, 3000);
});

var reservasipernah = document.getElementById('reservasipernah');
var overlaycekreservasi = document.getElementById('overlaycekreservasi');
var kotakeditcekreservasi = document.getElementById('kotakeditcekreservasi');
var groupcekreservasi = document.getElementById('groupcekreservasi');
var groupcekreservasi2 = document.getElementById('groupcekreservasi2');
var cekreservasi = document.getElementById('cekreservasi');

reservasipernah.addEventListener('click', function () {
    overlaycekreservasi.style.display = 'block';
    kotakeditcekreservasi.style.display = 'block';
    groupcekreservasi.style.display = 'block';
    groupcekreservasi2.style.display = 'none';
});

cekreservasi.addEventListener('click', function () {
    overlaycekreservasi.style.display = 'block';
    kotakeditcekreservasi.style.display = 'block';
    groupcekreservasi2.style.display = 'block';
    groupcekreservasi.style.display = 'none';
});

var saygreeting = document.getElementById('saygreeting');
var thecountsaygreeting = document.getElementById('the-countsaygreeting');
var currentsaygreeting = document.getElementById('currentsaygreeting');

saygreeting.addEventListener('keyup', function () {
    thecountsaygreeting.style.display = 'block';
    var characterCountsaygreeting = saygreeting.value.length;
    currentsaygreeting.textContent = characterCountsaygreeting;
});

saygreeting.addEventListener('focus', function () {
    thecountsaygreeting.style.display = 'block';
    var characterCountsaygreeting = saygreeting.value.length;
    currentsaygreeting.textContent = characterCountsaygreeting;
});

saygreeting.addEventListener('blur', function () {
    thecountsaygreeting.style.display = 'none';
});

var bioprofile = document.getElementById('bioprofile');
var kalimatsilahkan = document.querySelector('.kalimatsilahkan');
var thecountbioprofile = document.getElementById('the-countbioprofile');
var currentbioprofile = document.getElementById('currentbioprofile');

bioprofile.addEventListener('keyup', function () {
    var z = bioprofile.value;
    kalimatsilahkan.innerHTML = z;
    thecountbioprofile.style.display = 'block';
    var characterCountbioprofile = bioprofile.value.length;
    currentbioprofile.textContent = characterCountbioprofile;
});

bioprofile.addEventListener('focus', function () {
    var z = bioprofile.value;
    kalimatsilahkan.innerHTML = z;
    thecountbioprofile.style.display = 'block';
    var characterCountbioprofile = bioprofile.value.length;
    currentbioprofile.textContent = characterCountbioprofile;
});

bioprofile.addEventListener('input', function () {
    var z = bioprofile.value;
    kalimatsilahkan.innerHTML = z;
    thecountbioprofile.style.display = 'block';
    var characterCountbioprofile = bioprofile.value.length;
    currentbioprofile.textContent = characterCountbioprofile;
});

bioprofile.addEventListener('blur', function () {
    thecountbioprofile.style.display = 'none';
});

var saygreetinginput = document.getElementById('saygreetinginput');
saygreetinginput.addEventListener('click', function () {
    saygreetinginput.style.width = saygreetinginput.scrollWidth + 1 + 'px';
    setTimeout(function () {
        saygreetinginput.style.width = '110px';
    }, 4000);
});

var inputcekreservasi = document.getElementById('inputcekreservasi');
var entercektidak = document.getElementById('entercektidak');
var entercekreservasi = document.getElementById('entercekreservasi');

inputcekreservasi.addEventListener('input', function () {
    var c = this.selectionStart;
    var r = /a/gi;
    var v = this.value;
    if (r.test(v)) {
        this.value = v.replace(r, '');
        c--;
    }
    this.setSelectionRange(c, c);
    entercektidak.style.display = 'block';
    entercekreservasi.style.display = 'none';
});

var inputcekreservasi2 = document.getElementById('inputcekreservasi2');
var entercektidak2 = document.getElementById('entercektidak2');
var entercekreservasi2 = document.getElementById('entercekreservasi2');

inputcekreservasi2.addEventListener('input', function () {
    var c = this.selectionStart;
    var r = /a/gi;
    var v = this.value;
    if (r.test(v)) {
        this.value = v.replace(r, '');
        c--;
    }
    this.setSelectionRange(c, c);
    entercektidak2.style.display = 'block';
    entercekreservasi2.style.display = 'none';
});

var brand = document.getElementById('brand');
var overlay = document.getElementById('overlay');
var kotakeditprofil = document.getElementById('kotakeditprofil');
var klikduakali = document.getElementById('klikduakali');

brand.addEventListener('dblclick', function () {
    overlay.style.display = 'block';
    kotakeditprofil.style.display = 'block';
    klikduakali.parentNode.removeChild(klikduakali);
});

var cancelmenu = document.querySelector('.cancelmenu');
var overlay = document.getElementById('overlay');
var kotakeditprofil = document.getElementById('kotakeditprofil');

cancelmenu.addEventListener('click', function () {
    overlay.style.display = 'none';
    kotakeditprofil.style.display = 'none';
});

var canceljadwal = document.querySelector('.canceljadwal');
var kotakeditprofils = document.getElementById('kotakeditprofils');

canceljadwal.addEventListener('click', function () {
    kotakeditprofils.style.display = 'none';
});

var cancelmenuz = document.querySelector('.cancelmenuz');
var themehome = document.querySelector('.themehome');
var groupusername = document.querySelector('.groupusername');
var cekreservasi = document.getElementById('cekreservasi');
var saygreetinginput = document.getElementById('saygreetinginput');
var brandotomatis = document.getElementById('brandotomatis');
var brandz = document.getElementById('brandz');
var menutools = document.getElementById('menutools');
var highlightz = document.getElementById('highlightz');
var settingz = document.getElementById('settingz');
var searchnew = document.getElementById('searchnew');
var buttontodaynew = document.getElementById('buttontodaynew');
var searchdone = document.getElementById('searchdone');
var newanddone = document.getElementById('newanddone');
var htmlpdf = document.getElementById('htmlpdf');
var tambahanorderreservasi = document.getElementById('tambahanorderreservasi');

cancelmenuz.addEventListener('click', function () {
    saygreetinginput.style.display = 'block';
    themehome.style.display = 'block';
    groupusername.style.display = 'block';
    highlightz.style.display = 'none';
    menutools.style.display = 'none';
    cekreservasi.style.display = 'block';
    saygreetinginput.style.display = 'block';
    brandz.style.display = 'none';
    highlightz.style.display = 'none';
    settingz.style.display = 'none';
    themehome.classList.add('animatedzss');
    themehome.style.display = 'block';
    searchnew.style.display = 'none';
    buttontodaynew.style.display = 'none';
    searchdone.style.display = 'none';
    newanddone.style.display = 'none';
    htmlpdf.style.display = 'none';
    tambahanorderreservasi.style.marginTop = '20px';
});

var jamjadwalkiri = document.querySelectorAll(".jamjadwalkiri");
var inputQuantity = [];

jamjadwalkiri.forEach(function (jam, index) {
    jam.addEventListener('keyup', function (e) {
        var field = jam;
        var val = field.value;
        var thisIndex = index;
        if (field.validity && field.validity.badInput || isNaN(val) || field.is(":invalid")) {
            field.value = inputQuantity[thisIndex];
            return;
        }
        if (val.length > Number(field.maxLength)) {
            val = val.slice(0, 2);
            field.value = val;
        }
        inputQuantity[thisIndex] = val;
    });
});

var jamjadwalkanan = document.querySelectorAll(".jamjadwalkanan");
var inputQuantitys = [];

jamjadwalkanan.forEach(function (jam, index) {
    jam.addEventListener('keyup', function (e) {
        var field = jam;
        var val = field.value;
        var thisIndex = index;
        if (field.validity && field.validity.badInput || isNaN(val) || field.is(":invalid")) {
            field.value = inputQuantitys[thisIndex];
            return;
        }
        if (val.length > Number(field.maxLength)) {
            val = val.slice(0, 2);
            field.value = val;
        }
        inputQuantitys[thisIndex] = val;
    });
});
