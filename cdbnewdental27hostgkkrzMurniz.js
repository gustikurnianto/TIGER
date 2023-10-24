// Fungsi untuk menyembunyikan elemen
function hideElement(element) {
    element.style.display = 'none';
}

// Fungsi untuk menampilkan elemen dengan animasi
function showElementWithAnimation(element) {
    element.style.display = 'block';
    element.classList.add('animatedz');
}

// Mengambil elemen-elemen yang akan digunakan
var backseting = document.querySelector('.backseting');
var ktkinputmenuz = document.querySelectorAll('.ktkinputmenuz');
var ktkinputmenu = document.getElementById('ktkinputmenu');
var dentistseting = document.getElementById('dentistseting');
var ktkdentist = document.getElementById('ktkdentist');
var scalingseting = document.getElementById('scalingseting');
var ktkscaling = document.getElementById('ktkscaling');
var tambalseting = document.getElementById('tambalseting');
var ktktambal = document.getElementById('ktktambal');
var bedahseting = document.getElementById('bedahseting');
var ktkbedah = document.getElementById('ktkbedah');
var behelseting = document.getElementById('behelseting');
var ktkbehel = document.getElementById('ktkbehel');
var giturseting = document.getElementById('giturseting');
var ktkgitur = document.getElementById('ktkgitur');
var bleachingseting = document.getElementById('bleachingseting');
var ktkbleaching = document.getElementById('ktkbleaching');
var veneerseting = document.getElementById('veneerseting');
var ktkveneer = document.getElementById('ktkveneer');
var lainnyaseting = document.getElementById('lainnyaseting');
var ktklainnya = document.getElementById('ktklainnya');

// Menambahkan event click ke elemen 'backseting'
backseting.addEventListener('click', function () {
    ktkinputmenuz.forEach(hideElement);
    showElementWithAnimation(ktkinputmenu);
});

// Menambahkan event click ke elemen 'dentistseting'
dentistseting.addEventListener('click', function () {
    hideElement(ktkinputmenu);
    showElementWithAnimation(ktkdentist);
});

// Menambahkan event click ke elemen 'scalingseting'
scalingseting.addEventListener('click', function () {
    hideElement(ktkinputmenu);
    showElementWithAnimation(ktkscaling);
});

// Menambahkan event click ke elemen 'tambalseting'
tambalseting.addEventListener('click', function () {
    hideElement(ktkinputmenu);
    showElementWithAnimation(ktktambal);
});

// Menambahkan event click ke elemen 'bedahseting'
bedahseting.addEventListener('click', function () {
    hideElement(ktkinputmenu);
    showElementWithAnimation(ktkbedah);
});

// Menambahkan event click ke elemen 'behelseting'
behelseting.addEventListener('click', function () {
    hideElement(ktkinputmenu);
    showElementWithAnimation(ktkbehel);
});

// Menambahkan event click ke elemen 'giturseting'
giturseting.addEventListener('click', function () {
    hideElement(ktkinputmenu);
    showElementWithAnimation(ktkgitur);
});

// Menambahkan event click ke elemen 'bleachingseting'
bleachingseting.addEventListener('click', function () {
    hideElement(ktkinputmenu);
    showElementWithAnimation(ktkbleaching);
});

// Menambahkan event click ke elemen 'veneerseting'
veneerseting.addEventListener('click', function () {
    hideElement(ktkinputmenu);
    showElementWithAnimation(ktkveneer);
});

// Menambahkan event click ke elemen 'lainnyaseting'
lainnyaseting.addEventListener('click', function () {
    hideElement(ktkinputmenu);
    showElementWithAnimation(ktklainnya);
});

// Mengambil elemen-elemen yang akan digunakan
var healthtools = document.getElementById('healthtools');
var healthtoolsblack = document.getElementById('healthtoolsblack');
var editthetools = document.getElementById('editthetools');
var editthetoolsblack = document.getElementById('editthetoolsblack');
var reservationstools = document.getElementById('reservationstools');
var reservationstoolsblack = document.getElementById('reservationstoolsblack');
var orderreservasitools = document.getElementById('orderreservasitools');
var orderreservasitoolsblack = document.getElementById('orderreservasitoolsblack');
var pacaktools = document.getElementById('pacaktools');
var pacaktoolsblack = document.getElementById('pacaktoolsblack');
var adopttools = document.getElementById('adopttools');
var adopttoolsblack = document.getElementById('adopttoolsblack');
var groupusername = document.querySelectorAll('.groupusername');
var groupeditreservasi = document.getElementById('groupeditreservasi');
var grouporderreservasi = document.getElementById('grouporderreservasi');
var grouphighlightz = document.getElementById('grouphighlightz');
var settingz = document.getElementById('settingz');
var highlightz = document.getElementById('highlightz');
var inputhighlightz = document.getElementById('inputhighlightz');
var groupeditmenu = document.getElementById('groupeditmenu');
var clearzz = document.getElementById('clearz');
var searchnew = document.getElementById('searchnew');
var buttontodaynew = document.getElementById('buttontodaynew');
var searchdone = document.getElementById('searchdone');
var newanddone = document.getElementById('newanddone');
var htmlpdf = document.getElementById('htmlpdf');

// Menambahkan event click ke elemen 'healthtools'
healthtools.addEventListener('click', function () {
    healthtools.style.display = 'none';
    healthtoolsblack.style.display = 'block';
    editthetools.style.display = 'block';
    editthetoolsblack.style.display = 'none';
    reservationstools.style.display = 'block';
    reservationstoolsblack.style.display = 'none';
    orderreservasitools.style.display = 'block';
    orderreservasitoolsblack.style.display = 'none';
    pacaktools.style.display = 'block';
    pacaktoolsblack.style.display = 'none';
    adopttools.style.display = 'block';
    adopttoolsblack.style.display = 'none';

    groupusername.forEach(function (element) {
        element.style.display = 'none';
    });

    groupeditreservasi.style.display = 'none';
    grouporderreservasi.style.display = 'none';
    grouphighlightz.style.display = 'none';
    settingz.style.display = 'none';
    highlightz.style.display = 'none';
    inputhighlightz.style.display = 'none';

    groupeditmenu.style.display = 'block';
    groupeditmenu.classList.add('animatedz');
    groupeditmenu.style.visibility = 'visible';
    groupeditmenu.style.opacity = '1';

    containereditmenu.style.display = 'block';

    clearzz.click();
    clearzz.style.left = '60px';
    clearzz.style.backgroundImage = "url('https://lh3.googleusercontent.com/VBU8ARG1TdGPhvmdCbPUinHRGT_h5EseHh4eJ5t_rHzC5YF-YGpLrgW1snyTzdpiGNw1qxNdjeq2Y6I-fB0mqkXPbbwVFyRjsxJZaU0se3aQt4o6ZoJsFvEEmJuSxqrlPCWWZsA9RA=w2400')";

    searchnew.style.display = 'none';
    buttontodaynew.style.display = 'none';
    searchdone.style.display = 'none';
    newanddone.style.display = 'none';
    htmlpdf.style.display = 'none';
});

// Menambahkan event click ke elemen 'editthetools'
editthetools.addEventListener('click', function () {
    editthetools.style.display = 'none';
    editthetoolsblack.style.display = 'block';
    healthtools.style.display = 'block';
    healthtoolsblack.style.display = 'none';
    reservationstools.style.display = 'block';
    reservationstoolsblack.style.display = 'none';
    orderreservasitools.style.display = 'block';
    orderreservasitoolsblack.style.display = 'none';
    pacaktools.style.display = 'block';
    pacaktoolsblack.style.display = 'none';
    adopttools.style.display = 'block';
    adopttoolsblack.style.display = 'none';
    groupeditmenu.style.display = 'none';
    groupeditreservasi.style.display = 'none';
    grouporderreservasi.style.display = 'none';
    
    groupusername.forEach(function (element) {
        element.style.display = 'block';
    });

    settingz.style.display = 'none';
    highlightz.style.display = 'block';
    grouphighlightz.style.display = 'none';
    grouphighlightz.style.visibility = 'hidden';
    grouphighlightz.style.opacity = '0';
    inputhighlightz.style.display = 'none';

    clearz.click();
    clearz.style.left = '60px';
    clearz.style.backgroundImage = "url('https://lh3.googleusercontent.com/VBU8ARG1TdGPhvmdCbPUinHRGT_h5EseHh4eJ5t_rHzC5YF-YGpLrgW1snyTzdpiGNw1qxNdjeq2Y6I-fB0mqkXPbbwVFyRjsxJZaU0se3aQt4o6ZoJsFvEEmJuSxqrlPCWWZsA9RA=w2400')";

    searchnew.style.display = 'none';
    buttontodaynew.style.display = 'none';
    searchdone.style.display = 'none';
    newanddone.style.display = 'none';
    htmlpdf.style.display = 'none';
});

// Menambahkan event click ke elemen 'reservationstools'
reservationstools.addEventListener('click', function () {
    reservationstools.style.display = 'none';
    reservationstoolsblack.style.display = 'block';
    healthtools.style.display = 'block';
    healthtoolsblack.style.display = 'none';
    editthetools.style.display = 'block';
    editthetoolsblack.style.display = 'none';
    orderreservasitools.style.display = 'block';
    orderreservasitoolsblack.style.display = 'none';
    pacaktools.style.display = 'block';
    pacaktoolsblack.style.display = 'none';
    adopttools.style.display = 'block';
    adopttoolsblack.style.display = 'none';

    groupusername.forEach(function (element) {
        element.style.display = 'none';
    });

    grouporderreservasi.style.display = 'none';
    grouphighlightz.style.display = 'none';
    inputhighlightz.style.display = 'none';
    settingz.style.display = 'none';
    highlightz.style.display = 'none';
    groupeditmenu.style.display = 'none';
    groupeditreservasi.style.display = 'block';
    groupeditreservasi.style.visibility = 'visible';
    groupeditreservasi.style.opacity = '1';

    containereditreservasi.style.display = 'block';

    clearz.click();
    clearz.style.left = '60px';
    clearz.style.backgroundImage = "url('https://lh3.googleusercontent.com/VBU8ARG1TdGPhvmdCbPUinHRGT_h5EseHh4eJ5t_rHzC5YF-YGpLrgW1snyTzdpiGNw1qxNdjeq2Y6I-fB0mqkXPbbwVFyRjsxJZaU0se3aQt4o6ZoJsFvEEmJuSxqrlPCWWZsA9RA=w2400')";

    searchnew.style.display = 'none';
    buttontodaynew.style.display = 'none';
    searchdone.style.display = 'none';
    newanddone.style.display = 'none';
    htmlpdf.style.display = 'none';
});

// Mengambil elemen-elemen yang akan digunakan
var loadingorder = document.getElementById('loadingorder');
var analitiktools = document.getElementById('analitiktools');
var analitiktoolsblack = document.getElementById('analitiktoolsblack');
var containerAnalitik = document.getElementById('containerAnalitik');
var canvasBar = document.getElementById('canvasBar');
var canvasDoughnut = document.getElementById('canvasDoughnut');
var kotakInfo = document.getElementById('kotakInfo');
var kotakInfoDone = document.getElementById('kotakInfoDone');
var newtools = document.getElementById('newtools');
var newtoolsblack = document.getElementById('newtoolsblack');
var donetools = document.getElementById('donetools');
var donetoolsblack = document.getElementById('donetoolsblack');
var tambahanorderreservasi = document.getElementById('tambahanorderreservasi');
var emptyiconkotakInfo = document.getElementById('emptyiconkotakInfo');

// Menambahkan event click ke elemen 'orderreservasitools'
orderreservasitools.addEventListener('click', function () {
    loadingorder.style.display = 'block';
    orderreservasitools.style.display = 'none';
    orderreservasitoolsblack.style.display = 'block';
    healthtools.style.display = 'block';
    healthtoolsblack.style.display = 'none';
    editthetools.style.display = 'block';
    editthetoolsblack.style.display = 'none';
    reservationstools.style.display = 'block';
    reservationstoolsblack.style.display = 'none';
    pacaktools.style.display = 'block';
    pacaktoolsblack.style.display = 'none';
    adopttools.style.display = 'block';
    adopttoolsblack.style.display = 'none';
    analitiktools.style.display = 'block';
    analitiktoolsblack.style.display = 'none';
    containerAnalitik.style.display = 'none';
    canvasBar.remove();
    canvasDoughnut.remove();

    groupusername.forEach(function (element) {
        element.style.display = 'none';
    });

    groupeditmenu.style.display = 'none';
    groupeditreservasi.style.display = 'none';
    grouphighlightz.style.display = 'none';
    settingz.style.display = 'none';
    highlightz.style.display = 'none';
    inputhighlightz.style.display = 'none';
    grouporderreservasi.style.display = 'block';
    grouporderreservasi.classList.add('animatedz');
    grouporderreservasi.style.visibility = 'visible';
    grouporderreservasi.style.opacity = '1';
    kotakInfo.style.display = 'block';
    kotakInfo.style.visibility = 'visible';
    kotakInfo.style.opacity = '1';

    clearz.click();
    clearz.style.backgroundImage = "url('https://lh3.googleusercontent.com/VBU8ARG1TdGPhvmdCbPUinHRGT_h5EseHh4eJ5t_rHzC5YF-YGpLrgW1snyTzdpiGNw1qxNdjeq2Y6I-fB0mqkXPbbwVFyRjsxJZaU0se3aQt4o6ZoJsFvEEmJuSxqrlPCWWZsA9RA=w2400')";
    clearz.style.left = '60px';

    searchnew.style.display = 'block';
    buttontodaynew.style.display = 'block';
    searchdone.style.display = 'none';
    newanddone.style.display = 'block';
    newtools.style.display = 'none';
    newtoolsblack.style.display = 'block';
    donetools.style.display = 'block';
    donetoolsblack.style.display = 'none';
    htmlpdf.style.display = 'none';
    tambahanorderreservasi.style.marginTop = '20px';

    // Fungsi isilah
    function isilah() {
        var text = document.querySelectorAll('.isilah');

        text.forEach(function (element) {
            element.setAttribute('rows', '1');
            resize(element);
        });

        text.forEach(function (element) {
            element.addEventListener('click', function () {
                resize(element);
            });
        });

        function resize(element) {
            element.style.height = 'auto';
            element.style.height = element.scrollHeight + 'px';
        }
    }

    isilah();

    grouporderreservasi.addEventListener('load', function () {
        loadingorder.style.display = 'none';
        circlenotif.style.display = 'none';
    });

    if (Array.from(kotakInfo.children).some(element => element.style.display === 'block')) {
        emptyiconkotakInfo.style.display = 'none';
    } else {
        emptyiconkotakInfo.style.display = 'block';
    }
});

// Mengambil elemen-elemen yang akan digunakan


// Menambahkan event click ke elemen 'newtools'
newtools.addEventListener('click', function () {
    loadingorder.style.display = 'block';
    newtools.style.display = 'none';
    newtoolsblack.style.display = 'block';
    donetools.style.display = 'block';
    donetoolsblack.style.display = 'none';
    analitiktools.style.display = 'block';
    analitiktoolsblack.style.display = 'none';
    htmlpdf.style.display = 'none';
    kotakInfoDone.style.display = 'none';
    containerAnalitik.style.display = 'none';
    canvasBar.remove();
    canvasDoughnut.remove();
    kotakInfo.style.display = 'block';
    searchdone.style.display = 'none';
    searchnew.style.display = 'show';
    buttontodaynew.style.display = 'show';
    tambahanorderreservasi.style.marginTop = '20px';
    clearz.click();
    clearz.style.left = '60px';
    clearz.style.backgroundImage = "url('https://lh3.googleusercontent.com/VBU8ARG1TdGPhvmdCbPUinHRGT_h5EseHh4eJ5t_rHzC5YF-YGpLrgW1snyTzdpiGNw1qxNdjeq2Y6I-fB0mqkXPbbwVFyRjsxJZaU0se3aQt4o6ZoJsFvEEmJuSxqrlPCWWZsA9RA=w2400')";

    // Fungsi isilah
    function isilah() {
        var text = document.querySelectorAll('.isilah');

        text.forEach(function (element) {
            element.setAttribute('rows', '1');
            resize(element);
        });

        text.forEach(function (element) {
            element.addEventListener('click', function () {
                resize(element);
            });
        });

        function resize(element) {
            element.style.height = 'auto';
            element.style.height = element.scrollHeight + 'px';
        }
    }

    isilah();

    kotakInfo.addEventListener('load', function () {
        loadingorder.style.display = 'none';
    });

    if (Array.from(kotakInfo.children).some(element => element.style.display === 'block')) {
        emptyiconkotakInfo.style.display = 'none';
    } else {
        emptyiconkotakInfo.style.display = 'block';
    }
});

// Mengambil elemen-elemen yang akan digunakan

var emptyiconkotakInfoDone = document.getElementById('emptyiconkotakInfoDone');

// Menambahkan event click ke elemen 'donetools'
donetools.addEventListener('click', function () {
    loadingorder.style.display = 'block';
    donetools.style.display = 'none';
    donetoolsblack.style.display = 'block';
    newtools.style.display = 'block';
    newtoolsblack.style.display = 'none';
    analitiktools.style.display = 'block';
    analitiktoolsblack.style.display = 'none';
    htmlpdf.style.display = 'block';
    kotakInfo.style.display = 'none';
    containerAnalitik.style.display = 'none';
    canvasBar.remove();
    canvasDoughnut.remove();
    kotakInfoDone.style.display = 'block';
    kotakInfoDone.style.visibility = 'visible';
    kotakInfoDone.style.opacity = '1';
    searchdone.style.display = 'block';
    searchnew.style.display = 'none';
    buttontodaynew.style.display = 'none';
    tambahanorderreservasi.style.marginTop = '60px';
    clearz.click();
    clearz.style.left = '131px';
    clearz.style.backgroundImage = "url('https://lh3.googleusercontent.com/8cARlSy_2sehK_-YRbrJirzFk0Sp7YY06kOV0cx2adurn-p3mjz18g0UTtiQ-e_qxe5ylqZB-CDRNVkwVwOTL317HmoleMQTie6lhlYSks_olkClIpwyL8gP0x17BiJeLERk31NUYg=w2400')";

    // Fungsi isilahDone
    function isilahDone() {
        var textDone = document.querySelectorAll('.isilahDone');

        textDone.forEach(function (element) {
            element.setAttribute('rows', '1');
            resize(element);
        });

        textDone.forEach(function (element) {
            element.addEventListener('click', function () {
                resize(element);
            });
        });

        function resize(element) {
            element.style.height = 'auto';
            element.style.height = element.scrollHeight + 'px';
        }
    }

    isilahDone();

    kotakInfoDone.addEventListener('load', function () {
        loadingorder.style.display = 'none';
    });

    if (Array.from(kotakInfoDone.children).some(element => element.style.display === 'block')) {
        emptyiconkotakInfoDone.style.display = 'none';
    } else {
        emptyiconkotakInfoDone.style.display = 'block';
    }
});


// Mengambil elemen-elemen yang akan digunakan

var clearz = document.getElementsByClassName('clear');
var kosong = document.getElementsByClassName('kosong');

// Menambahkan event click ke elemen 'analitiktools'
analitiktools.addEventListener('click', function () {
    loadingorder.style.display = 'block';
    donetools.style.display = 'block';
    donetoolsblack.style.display = 'none';
    newtools.style.display = 'block';
    newtoolsblack.style.display = 'none';
    analitiktools.style.display = 'none';
    analitiktoolsblack.style.display = 'block';
    kotakInfo.style.display = 'none';
    kotakInfoDone.style.display = 'none';
    htmlpdf.style.display = 'none';
    containerAnalitik.style.display = 'block';
    containerAnalitik.style.visibility = 'visible';
    containerAnalitik.style.opacity = '1';
    searchdone.style.display = 'none';
    searchnew.style.display = 'none';
    buttontodaynew.style.display = 'none';
    tambahanorderreservasi.style.marginTop = '20px';
    for (let i = 0; i < clearz.length; i++) {
        clearz[i].style.display = 'none';
    }
    for (let i = 0; i < kosong.length; i++) {
        kosong[i].style.display = 'none';
    }

    containerAnalitik.addEventListener('load', function () {
        loadingorder.style.display = 'none';
    });

    if (Array.from(kotakInfo.children).some(element => element.style.display === 'block')) {
        emptyiconkotakInfo.style.display = 'none';
    } else {
        emptyiconkotakInfo.style.display = 'block';
    }

    if (Array.from(kotakInfoDone.children).some(element => element.style.display === 'block')) {
        emptyiconkotakInfoDone.style.display = 'none';
    } else {
        emptyiconkotakInfoDone.style.display = 'block';
    }

    let dataReservasi = [0, 0, 0, 0, 0, 0, 0, 0];

    var canvas1 = document.createElement("canvas");
    canvas1.width = 540;
    canvas1.height = 540;
    canvas1.id = 'canvasBar';
    document.getElementById('containerAnalitik').appendChild(canvas1);

    var canvas3 = document.createElement("canvas");
    canvas3.width = 540;
    canvas3.height = 540;
    canvas3.id = 'canvasDoughnut';
    canvas3.style.marginTop = '10px';
    canvas3.style.borderTop = '0.5px solid rgb(211, 211, 211)';
    canvas3.style.paddingTop = '10px';
    document.getElementById('containerAnalitik').appendChild(canvas3);

    var satu = document.querySelector('.titlebuttonscaling').textContent;
    var dua = document.querySelector('.titlebuttontambal').textContent;
    var tiga = document.querySelector('.titlebuttonbedah').textContent;
    var empat = document.querySelector('.titlebuttonbehel').textContent;
    var lima = document.querySelector('.titlebuttongigitiruan').textContent;
    var enam = document.querySelector('.titlebuttonbleaching').textContent;
    var tujuh = document.querySelector('.titlebuttonveneer').textContent;
    var delapan = document.querySelector('.titlebuttonlainnya').textContent;

    var ctx1 = canvas1.getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: [satu, dua, tiga, empat, lima, enam, tujuh, delapan],
            datasets: [{
                label: 'jumlah reservasi',
                data: dataReservasi,
                backgroundColor: ['rgba(30, 163, 245)', 'green', 'red', 'purple', 'blue', 'orange', 'grey', 'magenta'],
                borderRadius: 5
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        font: {
                            family: 'Poppins',
                            size: 10,
                            weight: 500
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            family: 'Poppins',
                            size: 10,
                            weight: 500
                        }
                    }
                }
            }
        }
    });

    var ctx3 = canvas3.getContext("2d");
    var myChart3 = new Chart(ctx3, {
        type: 'doughnut',
        data: {
            labels: [satu, dua, tiga, empat, lima, enam, tujuh, delapan],
            datasets: [{
                label: 'jumlah reservasi',
                data: dataReservasi,
                backgroundColor: ['rgba(30, 163, 245)', 'green', 'red', 'purple', 'blue', 'orange', 'grey', 'magenta'],
                borderRadius: 5
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        font: {
                            family: 'Poppins',
                            size: 10,
                            weight: 500
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            family: 'Poppins',
                            size: 10,
                            weight: 500
                        }
                    }
                }
            }
        }
    });

    Chart.defaults.font.family = 'Poppins';
    Chart.defaults.font.size = 10;
    Chart.defaults.font.weight = 500;

    var reservasiElements = document.querySelectorAll('.judulreservasi, .judulreservasiDone');

    reservasiElements.forEach(function (element) {
        var reservasi = element.textContent;

        if (reservasi === satu) {
            dataReservasi[0] += 1;
        } else if (reservasi === dua) {
            dataReservasi[1] += 1;
        } else if (reservasi === tiga) {
            dataReservasi[2] += 1;
        } else if (reservasi === empat) {
            dataReservasi[3] += 1;
        } else if (reservasi === lima) {
            dataReservasi[4] += 1;
        } else if (reservasi === enam) {
            dataReservasi[5] += 1;
        } else if (reservasi === tujuh) {
            dataReservasi[6] += 1;
        } else if (reservasi === delapan) {
            dataReservasi[7] += 1;
        }

        myChart1.update();
        myChart3.update();
    });

});

// Mengambil elemen-elemen yang akan digunakan//

// Menambahkan event click ke elemen 'pacaktools'//
pacaktools.addEventListener('click', function () {
    pacaktools.style.display = 'none';
    pacaktoolsblack.style.display = 'block';
    healthtools.style.display = 'block';
    healthtoolsblack.style.display = 'none';
    editthetools.style.display = 'block';
    editthetoolsblack.style.display = 'none';
    reservationstools.style.display = 'block';
    reservationstoolsblack.style.display = 'none';
    orderreservasitools.style.display = 'block';
    orderreservasitoolsblack.style.display = 'none';
    adopttools.style.display = 'block';
    adopttoolsblack.style.display = 'none';
});

// Menambahkan event click ke elemen 'adopttools'//
adopttools.addEventListener('click', function () {
    adopttools.style.display = 'none';
    adopttoolsblack.style.display = 'block';
    healthtools.style.display = 'block';
    healthtoolsblack.style.display = 'none';
    editthetools.style.display = 'block';
    editthetoolsblack.style.display = 'none';
    reservationstools.style.display = 'block';
    reservationstoolsblack.style.display = 'none';
    orderreservasitools.style.display = 'block';
    orderreservasitoolsblack.style.display = 'none';
    pacaktools.style.display = 'block';
    pacaktoolsblack.style.display = 'none';
});

// Menambahkan event click ke elemen '.reservasi'//
var reservasi = document.querySelectorAll('.reservasi');
var setelahmenu = document.querySelector('.setelahmenu');
var cancelmenuss = document.querySelectorAll('.cancelmenuss');
var kotakcancel = document.querySelector('.kotakcancel');
var judulmenu = document.querySelector('.judulmenu');
var pagereservasi = document.querySelector('#pagereservasi');
var pages = document.querySelectorAll('.pages');
var yakinform = document.querySelectorAll('.yakinform');
var kirimform = document.querySelectorAll('.kirimform');
var acakkodepin = document.querySelector('#acakkodepin');

reservasi.forEach(function (element) {
    element.addEventListener('click', function () {
        reservasi.forEach(function (el) {
            el.style.display = 'none';
        });
        setelahmenu.style.display = 'block';
        setelahmenu.style.visibility = 'visible';
        setelahmenu.style.opacity = '1';
        cancelmenuss.forEach(function (el) {
            el.style.display = 'none';
        });
        kotakcancel.style.display = 'block';
        judulmenu.classList.add('animatedzz');
        judulmenu.style.display = 'block';
        pagereservasi.classList.add('animatedzzreservasi');
        pagereservasi.style.display = 'block';
        pages.forEach(function (el) {
            el.style.display = 'none';
        });
        yakinform.forEach(function (el) {
            el.disabled = true;
        });
        kirimform.forEach(function (el) {
            el.disabled = true;
        });
        acakkodepin.click();
    });
});

// Menambahkan event click ke elemen '#acakkodepin'//
acakkodepin.addEventListener('click', function () {
    var charsNumber = "0123456789";
    var charsLower = "abcdefghijklmnopqrstuvwxyz";
    var charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    var charsAll = [charsNumber];
    var chars = charsAll.join('');
    var stringLength = 6;
    let randomString = '';

    for (let i = 0; i < stringLength; i++) {
        var randNum = Math.floor(Math.random() * chars.length);
        randomString += chars.substring(randNum, randNum + 1);
    }

    var kodepin = document.getElementById('kodepin');
    kodepin.size = stringLength * 1.4;
    kodepin.value = "CDB" + randomString;
    kodepin.click();
});

// Menambahkan event click ke elemen '#kodepin'//
var kodepin = document.getElementById('kodepin');
var kodepinbukti = document.getElementById('kodepinbukti');

kodepin.addEventListener('click', function () {
    kodepinbukti.value = kodepin.value;
});

// Mengambil elemen-elemen yang akan digunakan
var tabel1z = document.getElementById('tabel1z');
var klmpbutton = document.querySelectorAll('.klmpbutton');
var titlebuttondrg = document.querySelector('.titlebuttondrg');
var bloknamadentist = document.querySelectorAll('.bloknamadentist');

// Fungsi untuk menangani aksi ketika tombol menu "drgbutton" diklik
function handleDrgButtonClick() {
    tabel1z.style.display = 'none';
    kotakcancel.style.display = 'none';
    cancelmenuss.forEach(el => el.style.display = 'block');
    judulmenu.classList.add('animatedzz');
    pages[1].classList.add('animatedzz');
    klmpbutton.forEach(el => el.style.display = 'none');
    var z = titlebuttondrg.innerHTML;
    cancelmenuss[0].innerHTML = z;
    bloknamadentist.forEach(text => {
        text.setAttribute('rows', 1);
        resize(text);
        text.addEventListener('click', function() {
            resize(text);
        });
    });
    
    function resize($text) {
        $text.style.height = 'auto';
        $text.style.height = $text.scrollHeight + 'px';
    }
}

// Menambahkan event click ke elemen '#drgbutton'
var drgbutton = document.getElementById('drgbutton');
drgbutton.addEventListener('click', handleDrgButtonClick);

// Mengambil elemen-elemen yang akan digunakan
var tambahanreservasi = document.querySelectorAll('.tambahanreservasi');
var titlebuttonscaling = document.querySelector('.titlebuttonscaling');
var titlebuttontambal = document.querySelector('.titlebuttontambal');
var titlebuttonbedah = document.querySelector('.titlebuttonbedah');

// Fungsi umum untuk menangani aksi pada tombol menu
function handleMenuButtonClick(pagesIndex, titleElement) {
    tabel1z.style.display = 'none';
    kotakcancel.style.display = 'none';
    cancelmenuss.forEach(el => el.style.display = 'block');
    reservasi.forEach(el => el.style.display = 'block');
    tambahanreservasi.forEach(el => el.style.display = 'block');
    judulmenu.classList.add('animatedzz');
    pages[pagesIndex].classList.add('animatedzz');
    klmpbutton.forEach(el => el.style.display = 'none');
    var z = titleElement.innerHTML;
    cancelmenuss[0].innerHTML = z;
    document.getElementById('judulreservasi').value = z;
    document.getElementById('canceljudul').innerHTML = z;
}

// Menambahkan event click ke elemen '#healthbutton'
var healthbutton = document.getElementById('healthbutton');
healthbutton.addEventListener('click', function () {
    handleMenuButtonClick(2, titlebuttonscaling);
});

// Menambahkan event click ke elemen '#groombutton'
var groombutton = document.getElementById('groombutton');
groombutton.addEventListener('click', function () {
    handleMenuButtonClick(3, titlebuttontambal);
});

// Menambahkan event click ke elemen '#hotelbutton'
var hotelbutton = document.getElementById('hotelbutton');
hotelbutton.addEventListener('click', function () {
    handleMenuButtonClick(4, titlebuttonbedah);
});

// Mengambil elemen-elemen yang akan digunakan
var titlebuttonbehel = document.querySelector('.titlebuttonbehel');
var titlebuttongigitiruan = document.querySelector('.titlebuttongigitiruan');
var titlebuttonbleaching = document.querySelector('.titlebuttonbleaching');

// Fungsi umum untuk menangani aksi pada tombol menu
function handleMenuButtonClick(pagesIndex, titleElement) {
    tabel1z.style.display = 'none';
    kotakcancel.style.display = 'none';
    cancelmenuss.forEach(el => el.style.display = 'block');
    reservasi.forEach(el => el.style.display = 'block');
    tambahanreservasi.forEach(el => el.style.display = 'block');
    judulmenu.classList.add('animatedzz');
    pages[pagesIndex].classList.add('animatedzz');
    klmpbutton.forEach(el => el.style.display = 'none');
    var z = titleElement.innerHTML;
    cancelmenuss[0].innerHTML = z;
    document.getElementById('judulreservasi').value = z;
    document.getElementById('canceljudul').innerHTML = z;
}

// Menambahkan event click ke elemen '#pacakbutton'
var pacakbutton = document.getElementById('pacakbutton');
pacakbutton.addEventListener('click', function () {
    handleMenuButtonClick(5, titlebuttonbehel);
});

// Menambahkan event click ke elemen '#adoptionbutton'
var adoptionbutton = document.getElementById('adoptionbutton');
adoptionbutton.addEventListener('click', function () {
    handleMenuButtonClick(6, titlebuttongigitiruan);
});

// Menambahkan event click ke elemen '#bleachbutton'
var bleachbutton = document.getElementById('bleachbutton');
bleachbutton.addEventListener('click', function () {
    handleMenuButtonClick(7, titlebuttonbleaching);
});

// Mengambil elemen-elemen yang akan digunakan
var titlebuttonveneer = document.querySelector('.titlebuttonveneer');
var titlebuttonlainnya = document.querySelector('.titlebuttonlainnya');

// Fungsi umum untuk menangani aksi pada tombol menu
function handleMenuButtonClick(pagesIndex, titleElement) {
    tabel1z.style.display = 'none';
    kotakcancel.style.display = 'none';
    cancelmenuss.forEach(el => el.style.display = 'block');
    reservasi.forEach(el => el.style.display = 'block');
    tambahanreservasi.forEach(el => el.style.display = 'block');
    judulmenu.classList.add('animatedzz');
    pages[pagesIndex].classList.add('animatedzz');
    klmpbutton.forEach(el => el.style.display = 'none');
    var z = titleElement.innerHTML;
    cancelmenuss[0].innerHTML = z;
    document.getElementById('judulreservasi').value = z;
    document.getElementById('canceljudul').innerHTML = z;
}

// Menambahkan event click ke elemen '#veneerbutton'
var veneerbutton = document.getElementById('veneerbutton');
veneerbutton.addEventListener('click', function () {
    handleMenuButtonClick(8, titlebuttonveneer);
});

// Menambahkan event click ke elemen '#lainnyabutton'
var lainnyabutton = document.getElementById('lainnyabutton');
lainnyabutton.addEventListener('click', function () {
    handleMenuButtonClick(9, titlebuttonlainnya);
});

// Mengambil elemen-elemen yang akan digunakan

// Fungsi umum untuk menyembunyikan elemen dan menampilkan elemen lainnya
function hideElementsAndShowTable() {
    kotakcancel.forEach(el => el.style.display = 'none');
    judulmenu.forEach(el => el.style.display = 'none');
    cancelmenuss.forEach(el => el.style.display = 'none');
    pages.forEach(el => el.style.display = 'none');
    tabel1z.classList.add('animatedzz');
    tabel1z.style.display = 'block';
    klmpbutton.forEach(el => el.style.display = 'block');
    reservasi.forEach(el => el.style.display = 'none');
    setelahmenu.forEach(el => {
        el.style.visibility = 'hidden';
        el.style.opacity = '0';
    });
    tambahanreservasi.forEach(el => el.style.display = 'none');
}

// Menambahkan event click ke elemen '.kotakcancel'
kotakcancel.forEach(el => {
    el.addEventListener('click', hideElementsAndShowTable);
});

// Menambahkan event click ke elemen '.cancelmenuss'
cancelmenuss.forEach(el => {
    el.addEventListener('click', hideElementsAndShowTable);
});

// Mengambil elemen-elemen yang akan digunakan
var ubahusername = document.getElementById("ubahusername");
var userNametools = document.getElementById("usernametools");
var colorPicker = document.getElementById("colorPicker");
var inputcolor = document.getElementById("inputcolor");
var inputcolorz = document.getElementById("inputcolorz");
var colorPickerz = document.getElementById("colorPickerz");
var colorPickerzz = document.getElementById("colorPickerzz");
var inputcolorzz = document.getElementById("inputcolorzz");
var drgbg = document.querySelectorAll(".drgbg");
var scalingbg = document.querySelectorAll(".scalingbg");
var tambalbg = document.querySelectorAll(".tambalbg");
var bedahbg = document.querySelectorAll(".bedahbg");
var behelbg = document.querySelectorAll(".behelbg");
var gigitiruanbg = document.querySelectorAll(".gigitiruanbg");
var bleachingbg = document.querySelectorAll(".bleachingbg");
var veneerbg = document.querySelectorAll(".veneerbg");
var lainnyabg = document.querySelectorAll(".lainnyabg");
var infos = document.querySelectorAll(".infos");
var isiform = document.querySelectorAll(".isiform");
var reservasis = document.querySelectorAll(".reservasis");
var titledentist = document.querySelectorAll(".titledentist");
var cekreservasi = document.getElementById("cekreservasi");
var saygreetinginput = document.getElementById("saygreetinginput");
var colorPickerzzz = document.getElementById("colorPickerzzz");
var inputcolorzzz = document.getElementById("inputcolorzzz");
var kalimatsilahkan = document.querySelectorAll(".kalimatsilahkan");

// Event listener untuk "#ubahusername"
ubahusername.addEventListener("input", function() {
    var z = ubahusername.value;
    userNametools.innerHTML = "@" + z;
});

// Event listener untuk "#colorPicker"
colorPicker.addEventListener("input", function() {
    var z = colorPicker.value;
    inputcolor.value = z;
    inputcolor.style.backgroundColor = z;
    document.body.style.backgroundColor = z;
});

// Event listener untuk "#colorPickerz"
colorPickerz.addEventListener("input", function() {
    var z = colorPickerz.value;
    inputcolorz.value = z;
    inputcolorz.style.backgroundColor = z;
    userNametools.style.color = z;
});

// Event listener untuk "#colorPickerzz"
colorPickerzz.addEventListener("input", function() {
    var z = colorPickerzz.value;
    inputcolorzz.value = z;
    inputcolorzz.style.backgroundColor = z;
    drgbg.forEach(el => (el.style.backgroundColor = z));
    scalingbg.forEach(el => (el.style.backgroundColor = z));
    tambalbg.forEach(el => (el.style.backgroundColor = z));
    bedahbg.forEach(el => (el.style.backgroundColor = z));
    behelbg.forEach(el => (el.style.backgroundColor = z));
    gigitiruanbg.forEach(el => (el.style.backgroundColor = z));
    bleachingbg.forEach(el => (el.style.backgroundColor = z));
    veneerbg.forEach(el => (el.style.backgroundColor = z));
    lainnyabg.forEach(el => (el.style.backgroundColor = z));
    infos.forEach(el => (el.style.backgroundColor = z));
    reservasi.forEach(el => (el.style.backgroundColor = z));
    isiform.forEach(el => (el.style.backgroundColor = z));
    reservasis.forEach(el => (el.style.backgroundColor = z));
    titledentist.forEach(el => (el.style.backgroundColor = z));
    cekreservasi.style.backgroundColor = z;
    saygreetinginput.style.backgroundColor = z;
});

// Event listener untuk "#colorPickerzzz"
colorPickerzzz.addEventListener("input", function() {
    var z = colorPickerzzz.value;
    inputcolorzzz.value = z;
    inputcolorzzz.style.backgroundColor = z;
    kalimatsilahkan.forEach(el => (el.style.color = z));
});

// Event listener untuk "#checkboxfont1"
document.getElementById("checkboxfont1").addEventListener("click", function() {
    document.getElementById("fontstyle").value = "Poppins";
    document.getElementById("saygreetinginput").style.fontFamily = "Poppins";
    document.getElementById("usernametools").style.fontFamily = "Poppins";
    
    var elementsWithPoppinsFont = document.querySelectorAll(".kalimatsilahkan, .list-itemdrg, .list-itemjadwal, .titlebuttoninfo, .titlebuttondrg, .titlebuttonscaling, .titlebuttontambal, .titlebuttonbedah, .titlebuttonbehel, .titlebuttongigitiruan, .titlebuttonbleaching, .titlebuttonveneer, .titlebuttonlainnya, .titleinfos, .readmore, #jawabannamapasien, #jawabanalamat, #jawabanjeniskelamin, #jawabantanggallahir, #jawabanumurangka, #jawabanumurtahunbulan, #jawabankeluhan, #jawabanalergi, #jawabanfotokeluhanz, #jawabanjadwal, .jawabanjams, .jawabanjamsdokter, #jawabanhp, .cancelmenuss, #cancelreservasi, #canceljudul, .bloknamadentist, .bloknamaMenu, .titledentist, .reservasi, .isiform, .yakinform, .kirimform, .suksesform, .gambarsuksesform, .gambarkiriminfo, .tulisankiriminfo");
    
    elementsWithPoppinsFont.forEach(function(element) {
        element.style.fontFamily = "Poppins";
    });
});

// Event listener untuk "#checkboxfont2"
document.getElementById("checkboxfont2").addEventListener("click", function() {
    document.getElementById("fontstyle").value = "Noto Sans";
    document.getElementById("saygreetinginput").style.fontFamily = "Noto Sans";
    document.getElementById("usernametools").style.fontFamily = "Noto Sans";
    
    var elementsWithNotoSansFont = document.querySelectorAll(".kalimatsilahkan, .list-itemdrg, .list-itemjadwal, .titlebuttoninfo, .titlebuttondrg, .titlebuttonscaling, .titlebuttontambal, .titlebuttonbedah, .titlebuttonbehel, .titlebuttongigitiruan, .titlebuttonbleaching, .titlebuttonveneer, .titlebuttonlainnya, .titleinfos, .readmore, #jawabannamapasien, #jawabanalamat, #jawabanjeniskelamin, #jawabantanggallahir, #jawabanumurangka, #jawabanumurtahunbulan, #jawabankeluhan, #jawabanalergi, #jawabanfotokeluhanz, #jawabanjadwal, .jawabanjams, .jawabanjamsdokter, #jawabanhp, .cancelmenuss, #cancelreservasi, #canceljudul, .bloknamadentist, .bloknamaMenu, .titledentist, .reservasi, .isiform, .yakinform, .kirimform, .suksesform, .gambarsuksesform, .gambarkiriminfo, .tulisankiriminfo");
    
    elementsWithNotoSansFont.forEach(function(element) {
        element.style.fontFamily = "Noto Sans";
    });
});

// Event listener untuk "#checkboxfont3"
document.getElementById("checkboxfont3").addEventListener("click", function() {
    document.getElementById("fontstyle").value = "Open Sans";
    document.getElementById("saygreetinginput").style.fontFamily = "Open Sans";
    document.getElementById("usernametools").style.fontFamily = "Open Sans";
    
    var elementsWithOpenSansFont = document.querySelectorAll(".kalimatsilahkan, .list-itemdrg, .list-itemjadwal, .titlebuttoninfo, .titlebuttondrg, .titlebuttonscaling, .titlebuttontambal, .titlebuttonbedah, .titlebuttonbehel, .titlebuttongigitiruan, .titlebuttonbleaching, .titlebuttonveneer, .titlebuttonlainnya, .titleinfos, .readmore, #jawabannamapasien, #jawabanalamat, #jawabanjeniskelamin, #jawabantanggallahir, #jawabanumurangka, #jawabanumurtahunbulan, #jawabankeluhan, #jawabanalergi, #jawabanfotokeluhanz, #jawabanjadwal, .jawabanjams, .jawabanjamsdokter, #jawabanhp, .cancelmenuss, #cancelreservasi, #canceljudul, .bloknamadentist, .bloknamaMenu, .titledentist, .reservasi, .isiform, .yakinform, .kirimform, .suksesform, .gambarsuksesform, .gambarkiriminfo, .tulisankiriminfo");
    
    elementsWithOpenSansFont.forEach(function(element) {
        element.style.fontFamily = "Open Sans";
    });
});

// Event listener untuk "#checkboxfont4"
document.getElementById("checkboxfont4").addEventListener("click", function() {
    document.getElementById("fontstyle").value = "Source Serif Pro";
    document.getElementById("saygreetinginput").style.fontFamily = "Source Serif Pro";
    document.getElementById("usernametools").style.fontFamily = "Source Serif Pro";
    
    var elementsWithSourceSerifProFont = document.querySelectorAll(".kalimatsilahkan, .list-itemdrg, .list-itemjadwal, .titlebuttoninfo, .titlebuttondrg, .titlebuttonscaling, .titlebuttontambal, .titlebuttonbedah, .titlebuttonbehel, .titlebuttongigitiruan, .titlebuttonbleaching, .titlebuttonveneer, .titlebuttonlainnya, .titleinfos, .readmore, #jawabannamapasien, #jawabanalamat, #jawabanjeniskelamin, #jawabantanggallahir, #jawabanumurangka, #jawabanumurtahunbulan, #jawabankeluhan, #jawabanalergi, #jawabanfotokeluhanz, #jawabanjadwal, .jawabanjams, .jawabanjamsdokter, #jawabanhp, .cancelmenuss, #cancelreservasi, #canceljudul, .bloknamadentist, .bloknamaMenu, .titledentist, .reservasi, .isiform, .yakinform, .kirimform, .suksesform, .gambarsuksesform, .gambarkiriminfo, .tulisankiriminfo");
    
    elementsWithSourceSerifProFont.forEach(function(element) {
        element.style.fontFamily = "Source Serif Pro";
    });
});

// Event listener untuk "#checkboxmetode1"
document.getElementById("checkboxmetode1").addEventListener("click", function() {
    document.getElementById("bentukbutton").value = "10px";
    document.getElementById("bentukbutton1").value = "11px";
    document.getElementById("bentukbutton2").value = "15px";
    document.getElementById("bentukbutton3").value = "7px";
    
    var buttons = document.querySelectorAll("#drgbutton, #healthbutton, #groombutton, #hotelbutton, #pacakbutton, #adoptionbutton, #bleachbutton, #veneerbutton, #lainnyabutton");
    buttons.forEach(function(button) {
        button.style.borderRadius = "10px";
    });
    
    var blokImages = document.querySelectorAll(".blokimagedentist, .blokimageMenu");
    blokImages.forEach(function(blokImage) {
        blokImage.style.borderRadius = "11px";
    });
    
    var elementsWithRadius15px = document.querySelectorAll("#list-item, #list-itempin");
    elementsWithRadius15px.forEach(function(element) {
        element.style.borderRadius = "15px";
    });
    
    var elementsWithRadius7px = document.querySelectorAll("#list-itemdrg, #list-itemjadwal, .reservasi, .isiform, .yakinform, .kirimform, .suksesform");
    elementsWithRadius7px.forEach(function(element) {
        element.style.borderRadius = "7px";
    });
    
    document.getElementById("saygreetinginput").style.borderRadius = "7px";
    document.getElementById("borderlistz").style.borderRadius = "11px";
    document.getElementById("borderlistzpin").style.borderRadius = "11px";
    document.getElementById("logoprofile").style.borderRadius = "10px";
    document.getElementById("cekreservasi").style.borderRadius = "10px";
});

// Event listener untuk "#checkboxmetode2"
document.getElementById("checkboxmetode2").addEventListener("click", function() {
    document.getElementById("bentukbutton").value = "100px";
    document.getElementById("bentukbutton1").value = "100px";
    document.getElementById("bentukbutton2").value = "100px";
    document.getElementById("bentukbutton3").value = "100px";
    
    var allElements = document.querySelectorAll("#drgbutton, #healthbutton, #groombutton, #hotelbutton, #pacakbutton, #adoptionbutton, #bleachbutton, #veneerbutton, #lainnyabutton, .blokimagedentist, .blokimageMenu, #logoprofile, #cekreservasi, .borderlistz, .borderlistzpin, #list-item, #list-itempin, #list-itemdrg, #list-itemjadwal, .reservasi, .isiform, .yakinform, .kirimform, .suksesform");
    
    allElements.forEach(function(element) {
        element.style.borderRadius = "100px";
    });
    
    document.getElementById("saygreetinginput").style.borderRadius = "100px";
});

// Event listener untuk "#checkboxmetode1s"
document.getElementById("checkboxmetode1s").addEventListener("click", function() {
    var checkboxfont1 = document.querySelector('.checkboxfont1');
    var checkboxfont2 = document.querySelector('.checkboxfont2');
    var checkboxfont3 = document.querySelector('.checkboxfont3');
    var checkboxfont4 = document.querySelector('.checkboxfont4');

    if (window.orientation !== 0 && checkboxfont1.checked) {
        var buttonsToChange = document.querySelectorAll('.drgbutton1, #drgbutton, .healthbutton1, #healthbutton, .groombutton1, #groombutton, .hotelbutton1, #hotelbutton, .pacakbutton1, #pacakbutton, .adoptionbutton1, #adoptionbutton, .bleachbutton1, #bleachbutton, .veneerbutton1, #veneerbutton, .lainnyabutton1, #lainnyabutton');
        buttonsToChange.forEach(function(button) {
            button.style.width = '180px';
        });
    }

    if (window.orientation == 0 && checkboxfont1.checked) {
        var buttonsToChange = document.querySelectorAll('.drgbutton1, #drgbutton, .healthbutton1, #healthbutton, .groombutton1, #groombutton, .hotelbutton1, #hotelbutton, .pacakbutton1, #pacakbutton, .adoptionbutton1, #adoptionbutton, .bleachbutton1, #bleachbutton, .veneerbutton1, #veneerbutton, .lainnyabutton1, #lainnyabutton');
        buttonsToChange.forEach(function(button) {
            button.style.width = '135px';
        });
    }

    if (window.orientation !== 0 && checkboxfont2.checked) {
        var buttonsToChange = document.querySelectorAll('.drgbutton1, #drgbutton, .healthbutton1, #healthbutton, .groombutton1, #groombutton, .hotelbutton1, #hotelbutton, .pacakbutton1, #pacakbutton, .adoptionbutton1, #adoptionbutton, .bleachbutton1, #bleachbutton, .veneerbutton1, #veneerbutton, .lainnyabutton1, #lainnyabutton');
        buttonsToChange.forEach(function(button) {
            button.style.width = '180px';
        });
    }

    if (window.orientation == 0 && checkboxfont2.checked) {
        var buttonsToChange = document.querySelectorAll('.drgbutton1, #drgbutton, .healthbutton1, #healthbutton, .groombutton1, #groombutton, .hotelbutton1, #hotelbutton, .pacakbutton1, #pacakbutton, .adoptionbutton1, #adoptionbutton, .bleachbutton1, #bleachbutton, .veneerbutton1, #veneerbutton, .lainnyabutton1, #lainnyabutton');
        buttonsToChange.forEach(function(button) {
            button.style.width = '135px';
        });
    }

    if (window.orientation !== 0 && checkboxfont3.checked) {
        var buttonsToChange = document.querySelectorAll('.drgbutton1, #drgbutton, .healthbutton1, #healthbutton, .groombutton1, #groombutton, .hotelbutton1, #hotelbutton, .pacakbutton1, #pacakbutton, .adoptionbutton1, #adoptionbutton, .bleachbutton1, #bleachbutton, .veneerbutton1, #veneerbutton, .lainnyabutton1, #lainnyabutton');
        buttonsToChange.forEach(function(button) {
            button.style.width = '180px';
        });
    }

    if (window.orientation == 0 && checkboxfont3.checked) {
        var buttonsToChange = document.querySelectorAll('.drgbutton1, #drgbutton, .healthbutton1, #healthbutton, .groombutton1, #groombutton, .hotelbutton1, #hotelbutton, .pacakbutton1, #pacakbutton, .adoptionbutton1, #adoptionbutton, .bleachbutton1, #bleachbutton, .veneerbutton1, #veneerbutton, .lainnyabutton1, #lainnyabutton');
        buttonsToChange.forEach(function(button) {
            button.style.width = '135px';
        });
    }

    if (window.orientation !== 0 && checkboxfont4.checked) {
        var buttonsToChange = document.querySelectorAll('.drgbutton1, #drgbutton, .healthbutton1, #healthbutton, .groombutton1, #groombutton, .hotelbutton1, #hotelbutton, .pacakbutton1, #pacakbutton, .adoptionbutton1, #adoptionbutton, .bleachbutton1, #bleachbutton, .veneerbutton1, #veneerbutton, .lainnyabutton1, #lainnyabutton');
        buttonsToChange.forEach(function(button) {
            button.style.width = '180px';
        });
    }

    if (window.orientation == 0 && checkboxfont4.checked) {
        var buttonsToChange = document.querySelectorAll('.drgbutton1, #drgbutton, .healthbutton1, #healthbutton, .groombutton1, #groombutton, .hotelbutton1, #hotelbutton, .pacakbutton1, #pacakbutton, .adoptionbutton1, #adoptionbutton, .bleachbutton1, #bleachbutton, .veneerbutton1, #veneerbutton, .lainnyabutton1, #lainnyabutton');
        buttonsToChange.forEach(function(button) {
            button.style.width = '135px';
        });
    }

    var klmpbutton = document.querySelectorAll('.klmpbutton');
    klmpbutton.forEach(function(button) {
        button.style.display = '';
    });

    var drgbg = document.querySelector('.drgbg');
    drgbg.style.width = '61px';
    drgbg.style.height = '61px';
    drgbg.style.maxHeight = '61px';
    drgbg.style.maxWidth = '61px';

    var scalingbg = document.querySelector('.scalingbg');
    scalingbg.style.width = 'auto';
    scalingbg.style.height = '61px';
    scalingbg.style.maxHeight = '61px';
    scalingbg.style.maxWidth = '101px';
    scalingbg.style.marginLeft = '12px';

    var tambalbg = document.querySelector('.tambalbg');
    tambalbg.style.width = '61px';
    tambalbg.style.height = '61px';
    tambalbg.style.maxHeight = '61px';
    tambalbg.style.maxWidth = '61px';

    var bedahbg = document.querySelector('.bedahbg');
    bedahbg.style.width = 'auto';
    bedahbg.style.height = '61px';
    bedahbg.style.maxHeight = '61px';
    bedahbg.style.maxWidth = '101px';
    bedahbg.style.marginLeft = '12px';

    var behelbg = document.querySelector('.behelbg');
    behelbg.style.width = '61px';
    behelbg.style.height = '61px';
    behelbg.style.maxHeight = '61px';
    behelbg.style.maxWidth = '61px';

    var gigitiruanbg = document.querySelector('.gigitiruanbg');
    gigitiruanbg.style.width = '61px';
    gigitiruanbg.style.height = '61px';
    gigitiruanbg.style.maxHeight = '61px';
    gigitiruanbg.style.maxWidth = '61px';

    var bleachingbg = document.querySelector('.bleachingbg');
    bleachingbg.style.width = '61px';
    bleachingbg.style.height = '61px';
    bleachingbg.style.maxHeight = '61px';
    bleachingbg.style.maxWidth = '61px';

    var veneerbg = document.querySelector('.veneerbg');
    veneerbg.style.width = '61px';
    veneerbg.style.height = '61px';
    veneerbg.style.maxHeight = '61px';
    veneerbg.style.maxWidth = '61px';

    var lainnyabg = document.querySelector('.lainnyabg');
    lainnyabg.style.width = '61px';
    lainnyabg.style.height = '61px';
    lainnyabg.style.maxHeight = '61px';
    lainnyabg.style.maxWidth = '61px';

    var titlebuttoninfo = document.querySelectorAll('.titlebuttoninfo');
    titlebuttoninfo.forEach(function(button) {
        button.style.marginTop = '0px';
    });

    var titlebuttondrg = document.querySelectorAll('.titlebuttondrg');
    titlebuttondrg.forEach(function(button) {
        button.style.marginLeft = '0px';
        button.style.marginRight = '0px';
        button.style.marginTop = '0px';
        button.style.marginBottom = '0px';
    });

    var titlebuttonscaling = document.querySelectorAll('.titlebuttonscaling');
    titlebuttonscaling.forEach(function(button) {
        button.style.marginLeft = '0px';
        button.style.marginRight = '0px';
        button.style.marginTop = '0px';
        button.style.marginBottom = '0px';
    });

    var titlebuttontambal = document.querySelectorAll('.titlebuttontambal');
    titlebuttontambal.forEach(function(button) {
        button.style.marginLeft = '0px';
        button.style.marginRight = '0px';
        button.style.marginTop = '0px';
        button.style.marginBottom = '0px';
    });

    var titlebuttonbedah = document.querySelectorAll('.titlebuttonbedah');
    titlebuttonbedah.forEach(function(button) {
        button.style.marginLeft = '0px';
        button.style.marginRight = '0px';
        button.style.marginTop = '0px';
        button.style.marginBottom = '0px';
    });

    var titlebuttonbehel = document.querySelectorAll('.titlebuttonbehel');
    titlebuttonbehel.forEach(function(button) {
        button.style.marginLeft = '0px';
        button.style.marginRight = '0px';
        button.style.marginTop = '0px';
        button.style.marginBottom = '0px';
    });

    var titlebuttongigitiruan = document.querySelectorAll('.titlebuttongigitiruan');
    titlebuttongigitiruan.forEach(function(button) {
        button.style.marginLeft = '0px';
        button.style.marginRight = '0px';
        button.style.marginTop = '0px';
        button.style.marginBottom = '0px';
    });

    var titlebuttonbleaching = document.querySelectorAll('.titlebuttonbleaching');
    titlebuttonbleaching.forEach(function(button) {
        button.style.marginLeft = '0px';
        button.style.marginRight = '0px';
        button.style.marginTop = '0px';
        button.style.marginBottom = '0px';
    });

    var titlebuttonveneer = document.querySelectorAll('.titlebuttonveneer');
    titlebuttonveneer.forEach(function(button) {
        button.style.marginLeft = '0px';
        button.style.marginRight = '0px';
        button.style.marginTop = '0px';
        button.style.marginBottom = '0px';
    });

    var titlebuttonlainnya = document.querySelectorAll('.titlebuttonlainnya');
    titlebuttonlainnya.forEach(function(button) {
        button.style.marginLeft = '0px';
        button.style.marginRight = '0px';
        button.style.marginTop = '0px';
        button.style.marginBottom = '0px';
    });

    document.getElementById('drgbutton').className = "drgbutton1";
    document.getElementById('healthbutton').className = "healthbutton1";
    document.getElementById('groombutton').className = "groombutton1";
    document.getElementById('hotelbutton').className = "hotelbutton1";
    document.getElementById('pacakbutton').className = "pacakbutton1";
    document.getElementById('adoptionbutton').className = "adoptionbutton1";
    document.getElementById('bleachbutton').className = "bleachbutton1";
    document.getElementById('veneerbutton').className = "veneerbutton1";
    document.getElementById('lainnyabutton').className = "lainnyabutton1";

    document.getElementById('gambarbutton0').value = "drgbutton1";
    document.getElementById('gambarbutton1').value = "healthbutton1";
    document.getElementById('gambarbutton2').value = "groombutton1";
    document.getElementById('gambarbutton3').value = "hotelbutton1";
    document.getElementById('gambarbutton4').value = "pacakbutton1";
    document.getElementById('gambarbutton5').value = "adoptionbutton1";
    document.getElementById('gambarbutton6').value = "bleachbutton1";
    document.getElementById('gambarbutton7').value = "veneerbutton1";
    document.getElementById('gambarbutton8').value = "lainnyabutton1";

    document.getElementById('gambarbutton').value = "type 1";
});

var checkbox = document.getElementById("checkboxmetode1slist");

checkbox.addEventListener("click", function() {
  
    var checkboxfont1 = document.querySelector('.checkboxfont1');
var checkboxfont2 = document.querySelector('.checkboxfont2');
var checkboxfont3 = document.querySelector('.checkboxfont3');
var checkboxfont4 = document.querySelector('.checkboxfont4');

if (window.orientation !== 0 && checkboxfont1.checked) {
    document.querySelector(".ktksilahkan").style.width = "420px";
    document.querySelector("#kotakconcern").style.width = "420px";
    document.querySelector("#tabels").style.maxWidth = "418px";

    var blokdentist = document.querySelectorAll('.blokdentist');
    var bloknamadentist = document.querySelectorAll('.bloknamadentist');
    var bloknamaMenu = document.querySelectorAll('.bloknamaMenu');
    var infos = document.querySelectorAll('.infos');
    var reservasi1 = document.querySelectorAll('.reservasi1');
    var reservasis = document.querySelectorAll('.reservasis');
    var jawabannamapasien = document.querySelectorAll('#jawabannamapasien');
    var jawabanalamat = document.querySelectorAll('#jawabanalamat');
    var jawabantanggallahir = document.querySelectorAll('#jawabantanggallahir');
    var jawabanumurangka = document.querySelectorAll('#jawabanumurangka');
    var jawabanjeniskelamin = document.querySelectorAll('#jawabanjeniskelamin');
    var jawabankeluhan = document.querySelectorAll('#jawabankeluhan');
    var jawabanalergi = document.querySelectorAll('#jawabanalergi');
    var jawabanfotokeluhanz = document.querySelectorAll('#jawabanfotokeluhanz');
    var jawabanjadwal = document.querySelectorAll('#jawabanjadwal');
    var jawabanjams = document.querySelectorAll('.jawabanjams');
    var jawabanjamsdokter = document.querySelectorAll('.jawabanjamsdokter');
    var jawabanhp = document.querySelectorAll('#jawabanhp');

    for (var i = 0; i < blokdentist.length; i++) {
        blokdentist[i].style.width = "333px";
        bloknamadentist[i].style.width = "273px";
        bloknamaMenu[i].style.width = "293px";
        infos[i].style.width = "333px";
        reservasi1[i].style.width = "333px";
        reservasis[i].style.width = "333px";
        jawabannamapasien[i].style.width = "333px";
        jawabanalamat[i].style.width = "333px";
        jawabantanggallahir[i].style.width = "333px";
        jawabanumurangka[i].style.width = "248px";
        jawabanjeniskelamin[i].style.width = "333px";
        jawabankeluhan[i].style.width = "333px";
        jawabanalergi[i].style.width = "333px";
        jawabanfotokeluhanz[i].style.width = "333px";
        jawabanjadwal[i].style.width = "333px";
        jawabanjams[i].style.width = "333px";
        jawabanjamsdokter[i].style.width = "333px";
        jawabanhp[i].style.width = "333px";
    }

    var titlebuttondrg = document.querySelectorAll('.titlebuttondrg');
    var titlebuttonscaling = document.querySelectorAll('.titlebuttonscaling');
    var titlebuttontambal = document.querySelectorAll('.titlebuttontambal');
    var titlebuttonbedah = document.querySelectorAll('.titlebuttonbedah');
    var titlebuttonbehel = document.querySelectorAll('.titlebuttonbehel');
    var titlebuttongigitiruan = document.querySelectorAll('.titlebuttongigitiruan');
    var titlebuttonbleaching = document.querySelectorAll('.titlebuttonbleaching');
    var titlebuttonveneer = document.querySelectorAll('.titlebuttonveneer');
    var titlebuttonlainnya = document.querySelectorAll('.titlebuttonlainnya');

    for (var i = 0; i < titlebuttondrg.length; i++) {
        titlebuttondrg[i].style.marginLeft = "auto";
        titlebuttondrg[i].style.marginRight = "13px";
        titlebuttondrg[i].style.marginTop = "13px";
        titlebuttondrg[i].style.marginBottom = "auto";

        titlebuttonscaling[i].style.marginLeft = "auto";
        titlebuttonscaling[i].style.marginRight = "13px";
        titlebuttonscaling[i].style.marginTop = "13px";
        titlebuttonscaling[i].style.marginBottom = "auto";

        titlebuttontambal[i].style.marginLeft = "auto";
        titlebuttontambal[i].style.marginRight = "13px";
        titlebuttontambal[i].style.marginTop = "13px";
        titlebuttontambal[i].style.marginBottom = "auto";

        titlebuttonbedah[i].style.marginLeft = "auto";
        titlebuttonbedah[i].style.marginRight = "13px";
        titlebuttonbedah[i].style.marginTop = "13px";
        titlebuttonbedah[i].style.marginBottom = "auto";

        titlebuttonbehel[i].style.marginLeft = "auto";
        titlebuttonbehel[i].style.marginRight = "13px";
        titlebuttonbehel[i].style.marginTop = "13px";
        titlebuttonbehel[i].style.marginBottom = "auto";

        titlebuttongigitiruan[i].style.marginLeft = "auto";
        titlebuttongigitiruan[i].style.marginRight = "13px";
        titlebuttongigitiruan[i].style.marginTop = "13px";
        titlebuttongigitiruan[i].style.marginBottom = "auto";

        titlebuttonbleaching[i].style.marginLeft = "auto";
        titlebuttonbleaching[i].style.marginRight = "13px";
        titlebuttonbleaching[i].style.marginTop = "13px";
        titlebuttonbleaching[i].style.marginBottom = "auto";

        titlebuttonveneer[i].style.marginLeft = "auto";
        titlebuttonveneer[i].style.marginRight = "13px";
        titlebuttonveneer[i].style.marginTop = "13px";
        titlebuttonveneer[i].style.marginBottom = "auto";

        titlebuttonlainnya[i].style.marginLeft = "auto";
        titlebuttonlainnya[i].style.marginRight = "13px";
        titlebuttonlainnya[i].style.marginTop = "13px";
        titlebuttonlainnya[i].style.marginBottom = "auto";
    }

    var pages = document.querySelectorAll('.pages');
    var judulmenu = document.querySelectorAll('.judulmenu');
    var cancelmenuss = document.querySelectorAll('.cancelmenuss');
    var kotakcancel = document.querySelectorAll('.kotakcancel');
    var drgbutton1 = document.querySelectorAll('.drgbutton1');
    var healthbutton1 = document.querySelectorAll('.healthbutton1');
    var groombutton1 = document.querySelectorAll('.groombutton1');
    var hotelbutton1 = document.querySelectorAll('.hotelbutton1');
    var pacakbutton1 = document.querySelectorAll('.pacakbutton1');
    var adoptionbutton1 = document.querySelectorAll('.adoptionbutton1');
    var bleachbutton1 = document.querySelectorAll('.bleachbutton1');
    var veneerbutton1 = document.querySelectorAll('.veneerbutton1');
    var lainnyabutton1 = document.querySelectorAll('.lainnyabutton1');

    for (var i = 0; i < pages.length; i++) {
        pages[i].style.width = "418px";
        judulmenu[i].style.width = "418px";
        cancelmenuss[i].style.width = "418px";
        cancelmenuss[i].style.backgroundSize = "3%";
        kotakcancel[i].style.width = "418px";
        kotakcancel[i].style.backgroundSize = "3%";
    }

    for (var i = 0; i < drgbutton1.length; i++) {
        drgbutton1[i].style.width = "180px";
        healthbutton1[i].style.width = "180px";
        groombutton1[i].style.width = "180px";
        hotelbutton1[i].style.width = "180px";
        pacakbutton1[i].style.width = "180px";
        adoptionbutton1[i].style.width = "180px";
        bleachbutton1[i].style.width = "180px";
        veneerbutton1[i].style.width = "180px";
        lainnyabutton1[i].style.width = "180px";
    }
}

var checkboxfont1 = document.querySelector('.checkboxfont1');
if (window.orientation === 0 && checkboxfont1.checked) {
    document.querySelector(".ktksilahkan").style.width = "315px";
    document.querySelector("#kotakconcern").style.width = "315px";
    document.querySelector("#tabels").style.maxWidth = "315px";

    var blokdentistList = document.querySelectorAll('.blokdentist');
    var bloknamadentistList = document.querySelectorAll('.bloknamadentist');
    var bloknamaMenuList = document.querySelectorAll('.bloknamaMenu');
    var infosList = document.querySelectorAll('.infos');
    var reservasi1List = document.querySelectorAll('.reservasi1');
    var reservasisList = document.querySelectorAll('.reservasis');
    var jawabannamapasienList = document.querySelectorAll('#jawabannamapasien');
    var jawabanalamatList = document.querySelectorAll('#jawabanalamat');
    var jawabantanggallahirList = document.querySelectorAll('#jawabantanggallahir');
    var jawabanumurangkaList = document.querySelectorAll('#jawabanumurangka');
    var jawabanjeniskelaminList = document.querySelectorAll('#jawabanjeniskelamin');
    var jawabankeluhanList = document.querySelectorAll('#jawabankeluhan');
    var jawabanalergiList = document.querySelectorAll('#jawabanalergi');
    var jawabanfotokeluhanzList = document.querySelectorAll('#jawabanfotokeluhanz');
    var jawabanjadwalList = document.querySelectorAll('#jawabanjadwal');
    var jawabanjamsList = document.querySelectorAll('.jawabanjams');
    var jawabanjamsdokterList = document.querySelectorAll('.jawabanjamsdokter');
    var jawabanhpList = document.querySelectorAll('#jawabanhp');

    for (var i = 0; i < blokdentistList.length; i++) {
        blokdentistList[i].style.width = "260px";
        bloknamadentistList[i].style.width = "200px";
        bloknamaMenuList[i].style.width = "220px";
        infosList[i].style.width = "260px";
        reservasi1List[i].style.width = "260px";
        reservasisList[i].style.width = "260px";
        jawabannamapasienList[i].style.width = "260px";
        jawabanalamatList[i].style.width = "260px";
        jawabantanggallahirList[i].style.width = "260px";
        jawabanumurangkaList[i].style.width = "175px";
        jawabanjeniskelaminList[i].style.width = "260px";
        jawabankeluhanList[i].style.width = "260px";
        jawabanalergiList[i].style.width = "260px";
        jawabanfotokeluhanzList[i].style.width = "260px";
        jawabanjadwalList[i].style.width = "260px";
        jawabanjamsList[i].style.width = "260px";
        jawabanjamsdokterList[i].style.width = "260px";
        jawabanhpList[i].style.width = "260px";
    }

    var titlebuttondrgList = document.querySelectorAll('.titlebuttondrg');
    var titlebuttonscalingList = document.querySelectorAll('.titlebuttonscaling');
    var titlebuttontambalList = document.querySelectorAll('.titlebuttontambal');
    var titlebuttonbedahList = document.querySelectorAll('.titlebuttonbedah');
    var titlebuttonbehelList = document.querySelectorAll('.titlebuttonbehel');
    var titlebuttongigitiruanList = document.querySelectorAll('.titlebuttongigitiruan');
    var titlebuttonbleachingList = document.querySelectorAll('.titlebuttonbleaching');
    var titlebuttonveneerList = document.querySelectorAll('.titlebuttonveneer');
    var titlebuttonlainnyaList = document.querySelectorAll('.titlebuttonlainnya');

    for (var i = 0; i < titlebuttondrgList.length; i++) {
        titlebuttondrgList[i].style.marginLeft = "auto";
        titlebuttondrgList[i].style.marginRight = "13px";
        titlebuttondrgList[i].style.marginTop = "13px";
        titlebuttondrgList[i].style.marginBottom = "auto";

        titlebuttonscalingList[i].style.marginLeft = "auto";
        titlebuttonscalingList[i].style.marginRight = "13px";
        titlebuttonscalingList[i].style.marginTop = "13px";
        titlebuttonscalingList[i].style.marginBottom = "auto";

        titlebuttontambalList[i].style.marginLeft = "auto";
        titlebuttontambalList[i].style.marginRight = "13px";
        titlebuttontambalList[i].style.marginTop = "13px";
        titlebuttontambalList[i].style.marginBottom = "auto";

        titlebuttonbedahList[i].style.marginLeft = "auto";
        titlebuttonbedahList[i].style.marginRight = "13px";
        titlebuttonbedahList[i].style.marginTop = "13px";
        titlebuttonbedahList[i].style.marginBottom = "auto";

        titlebuttonbehelList[i].style.marginLeft = "auto";
        titlebuttonbehelList[i].style.marginRight = "13px";
        titlebuttonbehelList[i].style.marginTop = "13px";
        titlebuttonbehelList[i].style.marginBottom = "auto";

        titlebuttongigitiruanList[i].style.marginLeft = "auto";
        titlebuttongigitiruanList[i].style.marginRight = "13px";
        titlebuttongigitiruanList[i].style.marginTop = "13px";
        titlebuttongigitiruanList[i].style.marginBottom = "auto";

        titlebuttonbleachingList[i].style.marginLeft = "auto";
        titlebuttonbleachingList[i].style.marginRight = "13px";
        titlebuttonbleachingList[i].style.marginTop = "13px";
        titlebuttonbleachingList[i].style.marginBottom = "auto";

        titlebuttonveneerList[i].style.marginLeft = "auto";
        titlebuttonveneerList[i].style.marginRight = "13px";
        titlebuttonveneerList[i].style.marginTop = "13px";
        titlebuttonveneerList[i].style.marginBottom = "auto";

        titlebuttonlainnyaList[i].style.marginLeft = "auto";
        titlebuttonlainnyaList[i].style.marginRight = "13px";
        titlebuttonlainnyaList[i].style.marginTop = "13px";
        titlebuttonlainnyaList[i].style.marginBottom = "auto";
    }

    var pagesList = document.querySelectorAll('.pages');
    var judulmenuList = document.querySelectorAll('.judulmenu');
    var cancelmenussList = document.querySelectorAll('.cancelmenuss');
    var kotakcancelList = document.querySelectorAll('.kotakcancel');
    var drgbutton1List = document.querySelectorAll('.drgbutton1');
    var healthbutton1List = document.querySelectorAll('.healthbutton1');
    var groombutton1List = document.querySelectorAll('.groombutton1');
    var hotelbutton1List = document.querySelectorAll('.hotelbutton1');
    var pacakbutton1List = document.querySelectorAll('.pacakbutton1');
    var adoptionbutton1List = document.querySelectorAll('.adoptionbutton1');
    var bleachbutton1List = document.querySelectorAll('.bleachbutton1');
    var veneerbutton1List = document.querySelectorAll('.veneerbutton1');
    var lainnyabutton1List = document.querySelectorAll('.lainnyabutton1');

    for (var i = 0; i < pagesList.length; i++) {
        pagesList[i].style.width = "315px";
        judulmenuList[i].style.width = "315px";
        cancelmenussList[i].style.width = "315px";
        cancelmenussList[i].style.backgroundSize = "5%";
        kotakcancelList[i].style.width = "315px";
        kotakcancelList[i].style.backgroundSize = "5%";
    }

    for (var i = 0; i < drgbutton1List.length; i++) {
        drgbutton1List[i].style.width = "135px";
        healthbutton1List[i].style.width = "135px";
        groombutton1List[i].style.width = "135px";
        hotelbutton1List[i].style.width = "135px";
        pacakbutton1List[i].style.width = "135px";
        adoptionbutton1List[i].style.width = "135px";
        bleachbutton1List[i].style.width = "135px";
        veneerbutton1List[i].style.width = "135px";
        lainnyabutton1List[i].style.width = "135px";
    }

    bloknamadentist();
}

var checkboxfont2 = document.querySelector('.checkboxfont2');

if (window.orientation !== 0 && checkboxfont2.checked) {
    document.querySelector(".ktksilahkan").style.width = "420px";
    document.querySelector("#kotakconcern").style.width = "420px";
    document.querySelector("#tabels").style.maxWidth = "418px";

    var elementsToResize = [
        '.blokdentist',
        '.bloknamadentist',
        '.bloknamaMenu',
        '.infos',
        '.reservasi1',
        '.reservasis',
        '#jawabannamapasien',
        '#jawabanalamat',
        '#jawabantanggallahir',
        '#jawabanumurangka',
        '#jawabanjeniskelamin',
        '#jawabankeluhan',
        '#jawabanalergi',
        '#jawabanfotokeluhanz',
        '#jawabanjadwal',
        '.jawabanjams',
        '.jawabanjamsdokter',
        '#jawabanhp',
        '.titlebuttondrg',
        '.titlebuttonscaling',
        '.titlebuttontambal',
        '.titlebuttonbedah',
        '.titlebuttonbehel',
        '.titlebuttongigitiruan',
        '.titlebuttonbleaching',
        '.titlebuttonveneer',
        '.titlebuttonlainnya',
        '.pages',
        '.judulmenu',
        '.cancelmenuss',
        '.kotakcancel',
        '.drgbutton1',
        '#drgbutton',
        '.drgbutton1list',
        '.healthbutton1',
        '#healthbutton',
        '.healthbutton1list',
        '.groombutton1',
        '#groombutton',
        '.groombutton1list',
        '.hotelbutton1',
        '#hotelbutton',
        '.hotelbutton1list',
        '.pacakbutton1',
        '#pacakbutton',
        '.pacakbutton1list',
        '.adoptionbutton1',
        '#adoptionbutton',
        '.adoptionbutton1list',
        '.bleachbutton1',
        '#bleachbutton',
        '.bleachbutton1list',
        '.veneerbutton1',
        '#veneerbutton',
        '.veneerbutton1list',
        '.lainnyabutton1'
    ];

    for (var i = 0; i < elementsToResize.length; i++) {
        var elements = document.querySelectorAll(elementsToResize[i]);
        for (var j = 0; j < elements.length; j++) {
            if (elements[i].id === 'drgbutton') {
                elements[i].style.width = "400px";
            } else {
                elements[i].style.width = "180px";
            }
        }
    }

    var pagesList = document.querySelectorAll('.pages');
    var judulmenuList = document.querySelectorAll('.judulmenu');
    var cancelmenussList = document.querySelectorAll('.cancelmenuss');
    var kotakcancelList = document.querySelectorAll('.kotakcancel');

    for (var i = 0; i < pagesList.length; i++) {
        pagesList[i].style.width = "418px";
        judulmenuList[i].style.width = "418px";
        cancelmenussList[i].style.width = "418px";
        cancelmenussList[i].style.backgroundSize = "3%";
        kotakcancelList[i].style.width = "418px";
        kotakcancelList[i].style.backgroundSize = "3%";
    }

    bloknamadentist();
}

var checkboxfont2 = document.querySelector('.checkboxfont2');

if (window.orientation === 0 && checkboxfont2.checked) {
    document.querySelector(".ktksilahkan").style.width = "315px";
    document.querySelector("#kotakconcern").style.width = "315px";
    document.querySelector("#tabels").style.maxWidth = "315px";

    var elementsToResize = [
        '.blokdentist',
        '.bloknamadentist',
        '.bloknamaMenu',
        '.infos',
        '.reservasi1',
        '.reservasis',
        '#jawabannamapasien',
        '#jawabanalamat',
        '#jawabantanggallahir',
        '#jawabanumurangka',
        '#jawabanjeniskelamin',
        '#jawabankeluhan',
        '#jawabanalergi',
        '#jawabanfotokeluhanz',
        '#jawabanjadwal',
        '.jawabanjams',
        '.jawabanjamsdokter',
        '#jawabanhp',
        '.titlebuttondrg',
        '.titlebuttonscaling',
        '.titlebuttontambal',
        '.titlebuttonbedah',
        '.titlebuttonbehel',
        '.titlebuttongigitiruan',
        '.titlebuttonbleaching',
        '.titlebuttonveneer',
        '.titlebuttonlainnya',
        '.pages',
        '.judulmenu',
        '.cancelmenuss',
        '.kotakcancel',
        '.drgbutton1',
        '#drgbutton',
        '.drgbutton1list',
        '.healthbutton1',
        '#healthbutton',
        '.healthbutton1list',
        '.groombutton1',
        '#groombutton',
        '.groombutton1list',
        '.hotelbutton1',
        '#hotelbutton',
        '.hotelbutton1list',
        '.pacakbutton1',
        '#pacakbutton',
        '.pacakbutton1list',
        '.adoptionbutton1',
        '#adoptionbutton',
        '.adoptionbutton1list',
        '.bleachbutton1',
        '#bleachbutton',
        '.bleachbutton1list',
        '.veneerbutton1',
        '#veneerbutton',
        '.veneerbutton1list',
        '.lainnyabutton1'
    ];

    for (var i = 0; i < elementsToResize.length; i++) {
        var elements = document.querySelectorAll(elementsToResize[i]);
        for (var j = 0; j < elements.length; j++) {
            if (elements[i].id === 'drgbutton') {
                elements[i].style.width = "295px";
            } else {
                elements[i].style.width = "135px";
            }
        }
    }

    var pagesList = document.querySelectorAll('.pages');
    var judulmenuList = document.querySelectorAll('.judulmenu');
    var cancelmenussList = document.querySelectorAll('.cancelmenuss');
    var kotakcancelList = document.querySelectorAll('.kotakcancel');

    for (var i = 0; i < pagesList.length; i++) {
        pagesList[i].style.width = "315px";
        judulmenuList[i].style.width = "315px";
        cancelmenussList[i].style.width = "315px";
        cancelmenussList[i].style.backgroundSize = "5%";
        kotakcancelList[i].style.width = "315px";
        kotakcancelList[i].style.backgroundSize = "5%";
    }

    bloknamadentist();
}

var checkboxfont3 = document.querySelector('.checkboxfont3');

if (window.orientation !== 0 && checkboxfont3.checked) {
    document.querySelector(".ktksilahkan").style.width = "420px";
    document.querySelector("#kotakconcern").style.width = "420px";
    document.querySelector("#tabels").style.maxWidth = "418px";

    var elementsToResize = [
        '.blokdentist',
        '.bloknamadentist',
        '.bloknamaMenu',
        '.infos',
        '.reservasi1',
        '.reservasis',
        '#jawabannamapasien',
        '#jawabanalamat',
        '#jawabantanggallahir',
        '#jawabanumurangka',
        '#jawabanjeniskelamin',
        '#jawabankeluhan',
        '#jawabanalergi',
        '#jawabanfotokeluhanz',
        '#jawabanjadwal',
        '.jawabanjams',
        '.jawabanjamsdokter',
        '#jawabanhp',
        '.titlebuttondrg',
        '.titlebuttonscaling',
        '.titlebuttontambal',
        '.titlebuttonbedah',
        '.titlebuttonbehel',
        '.titlebuttongigitiruan',
        '.titlebuttonbleaching',
        '.titlebuttonveneer',
        '.titlebuttonlainnya',
    ];

    for (var i = 0; i < elementsToResize.length; i++) {
        var elements = document.querySelectorAll(elementsToResize[i]);
        for (var j = 0; j < elements.length; j++) {
            if (elements[i].id === 'drgbutton') {
                elements[i].style.width = "400px";
            } else {
                elements[i].style.width = "180px";
            }
        }
    }

    var pagesList = document.querySelectorAll('.pages');
    var judulmenuList = document.querySelectorAll('.judulmenu');
    var cancelmenussList = document.querySelectorAll('.cancelmenuss');
    var kotakcancelList = document.querySelectorAll('.kotakcancel');

    for (var i = 0; i < pagesList.length; i++) {
        pagesList[i].style.width = "418px";
        judulmenuList[i].style.width = "418px";
        cancelmenussList[i].style.width = "418px";
        cancelmenussList[i].style.backgroundSize = "3%";
        kotakcancelList[i].style.width = "418px";
        kotakcancelList[i].style.backgroundSize = "3%";
    }

    bloknamadentist();
}

var checkboxfont3 = document.querySelector('.checkboxfont3');

if (window.orientation === 0 && checkboxfont3.checked) {
    document.querySelector(".ktksilahkan").style.width = "315px";
    document.querySelector("#kotakconcern").style.width = "315px";
    document.querySelector("#tabels").style.maxWidth = "315px";

    var elementsToResize = [
        '.blokdentist',
        '.bloknamadentist',
        '.bloknamaMenu',
        '.infos',
        '.reservasi1',
        '.reservasis',
        '#jawabannamapasien',
        '#jawabanalamat',
        '#jawabantanggallahir',
        '#jawabanumurangka',
        '#jawabanjeniskelamin',
        '#jawabankeluhan',
        '#jawabanalergi',
        '#jawabanfotokeluhanz',
        '#jawabanjadwal',
        '.jawabanjams',
        '.jawabanjamsdokter',
        '#jawabanhp',
        '.titlebuttondrg',
        '.titlebuttonscaling',
        '.titlebuttontambal',
        '.titlebuttonbedah',
        '.titlebuttonbehel',
        '.titlebuttongigitiruan',
        '.titlebuttonbleaching',
        '.titlebuttonveneer',
        '.titlebuttonlainnya'
    ];

    for (var i = 0; i < elementsToResize.length; i++) {
        var elements = document.querySelectorAll(elementsToResize[i]);
        for (var j = 0; j < elements.length; j++) {
            if (elements[i].id === 'drgbutton') {
                elements[i].style.width = "295px";
            } else {
                elements[i].style.width = "135px";
            }
        }
    }

    var pagesList = document.querySelectorAll('.pages');
    var judulmenuList = document.querySelectorAll('.judulmenu');
    var cancelmenussList = document.querySelectorAll('.cancelmenuss');
    var kotakcancelList = document.querySelectorAll('.kotakcancel');

    for (var i = 0; i < pagesList.length; i++) {
        pagesList[i].style.width = "315px";
        judulmenuList[i].style.width = "315px";
        cancelmenussList[i].style.width = "315px";
        cancelmenussList[i].style.backgroundSize = "5%";
        kotakcancelList[i].style.width = "315px";
        kotakcancelList[i].style.backgroundSize = "5%";
    }

    bloknamadentist();
}

var checkboxfont4 = document.querySelector('.checkboxfont4');

if (window.orientation !== 0 && checkboxfont4.checked) {
    document.querySelector(".ktksilahkan").style.width = "420px";
    document.querySelector("#kotakconcern").style.width = "420px";
    document.querySelector("#tabels").style.maxWidth = "418px";

    var elementsToResize = [
        '.blokdentist',
        '.bloknamadentist',
        '.bloknamaMenu',
        '.infos',
        '.reservasi1',
        '.reservasis',
        '#jawabannamapasien',
        '#jawabanalamat',
        '#jawabantanggallahir',
        '#jawabanumurangka',
        '#jawabanjeniskelamin',
        '#jawabankeluhan',
        '#jawabanalergi',
        '#jawabanfotokeluhanz',
        '#jawabanjadwal',
        '.jawabanjams',
        '.jawabanjamsdokter',
        '#jawabanhp',
        '.titlebuttondrg',
        '.titlebuttonscaling',
        '.titlebuttontambal',
        '.titlebuttonbedah',
        '.titlebuttonbehel',
        '.titlebuttongigitiruan',
        '.titlebuttonbleaching',
        '.titlebuttonveneer',
        '.titlebuttonlainnya'
    ];

    for (var i = 0; i < elementsToResize.length; i++) {
        var elements = document.querySelectorAll(elementsToResize[i]);
        for (var j = 0; j < elements.length; j++) {
            if (elements[i].id === 'drgbutton') {
                elements[i].style.width = "400px";
            } else {
                elements[i].style.width = "180px";
            }
        }
    }

    var pagesList = document.querySelectorAll('.pages');
    var judulmenuList = document.querySelectorAll('.judulmenu');
    var cancelmenussList = document.querySelectorAll('.cancelmenuss');
    var kotakcancelList = document.querySelectorAll('.kotakcancel');

    for (var i = 0; i < pagesList.length; i++) {
        pagesList[i].style.width = "418px";
        judulmenuList[i].style.width = "418px";
        cancelmenussList[i].style.width = "418px";
        cancelmenussList[i].style.backgroundSize = "3%";
        kotakcancelList[i].style.width = "418px";
        kotakcancelList[i].style.backgroundSize = "3%";
    }

    bloknamadentist();
}

var checkboxfont4 = document.querySelector('.checkboxfont4');

if (window.orientation === 0 && checkboxfont4.checked) {
    document.querySelector(".ktksilahkan").style.width = "315px";
    document.querySelector("#kotakconcern").style.width = "315px";
    document.querySelector("#tabels").style.maxWidth = "315px";

    var elementsToResize = [
        '.blokdentist',
        '.bloknamadentist',
        '.bloknamaMenu',
        '.infos',
        '.reservasi1',
        '.reservasis',
        '#jawabannamapasien',
        '#jawabanalamat',
        '#jawabantanggallahir',
        '#jawabanumurangka',
        '#jawabanjeniskelamin',
        '#jawabankeluhan',
        '#jawabanalergi',
        '#jawabanfotokeluhanz',
        '#jawabanjadwal',
        '.jawabanjams',
        '.jawabanjamsdokter',
        '#jawabanhp',
        '.titlebuttondrg',
        '.titlebuttonscaling',
        '.titlebuttontambal',
        '.titlebuttonbedah',
        '.titlebuttonbehel',
        '.titlebuttongigitiruan',
        '.titlebuttonbleaching',
        '.titlebuttonveneer',
        '.titlebuttonlainnya'
    ];

    for (var i = 0; i < elementsToResize.length; i++) {
        var elements = document.querySelectorAll(elementsToResize[i]);
        for (var j = 0; j < elements.length; j++) {
            if (elements[j].id === 'drgbutton') {
                elements[j].style.width = "295px";
            } else {
                elements[j].style.width = "135px";
            }
        }
    }

    var pagesList = document.querySelectorAll('.pages');
    var judulmenuList = document.querySelectorAll('.judulmenu');
    var cancelmenussList = document.querySelectorAll('.cancelmenuss');
    var kotakcancelList = document.querySelectorAll('.kotakcancel');

    for (var i = 0; i < pagesList.length; i++) {
        pagesList[i].style.width = "315px";
        judulmenuList[i].style.width = "315px";
        cancelmenussList[i].style.width = "315px";
        cancelmenussList[i].style.backgroundSize = "5%";
        kotakcancelList[i].style.width = "315px";
        kotakcancelList[i].style.backgroundSize = "5%";
    }

    bloknamadentist();
}

var klmpbuttons = document.querySelectorAll('.klmpbutton');
for (var i = 0; i < klmpbuttons.length; i++) {
    klmpbuttons[i].style.display = 'flex';
}

var drgbg = document.querySelectorAll('.drgbg');
for (var i = 0; i < drgbg.length; i++) {
    drgbg[i].style.width = '40px';
    drgbg[i].style.height = '40px';
    drgbg[i].style.maxHeight = '40px';
    drgbg[i].style.maxWidth = '40px';
}

var scalingbg = document.querySelectorAll('.scalingbg');
for (var i = 0; i < scalingbg.length; i++) {
    scalingbg[i].style.width = 'auto';
    scalingbg[i].style.height = '40px';
    scalingbg[i].style.maxHeight = '40px';
    scalingbg[i].style.maxWidth = '60px';
    scalingbg[i].style.marginLeft = '0px';
}

var tambalbg = document.querySelectorAll('.tambalbg');
for (var i = 0; i < tambalbg.length; i++) {
    tambalbg[i].style.width = '40px';
    tambalbg[i].style.height = '40px';
    tambalbg[i].style.maxHeight = '40px';
    tambalbg[i].style.maxWidth = '40px';
}

var bedahbg = document.querySelectorAll('.bedahbg');
for (var i = 0; i < bedahbg.length; i++) {
    bedahbg[i].style.width = 'auto';
    bedahbg[i].style.height = '40px';
    bedahbg[i].style.maxHeight = '40px';
    bedahbg[i].style.maxWidth = '60px';
    bedahbg[i].style.marginLeft = '0px';
}

var behelbg = document.querySelectorAll('.behelbg');
for (var i = 0; i < behelbg.length; i++) {
    behelbg[i].style.width = '40px';
    behelbg[i].style.height = '40px';
    behelbg[i].style.maxHeight = '40px';
    behelbg[i].style.maxWidth = '40px';
}

var gigitiruanbg = document.querySelectorAll('.gigitiruanbg');
for (var i = 0; i < gigitiruanbg.length; i++) {
    gigitiruanbg[i].style.width = '40px';
    gigitiruanbg[i].style.height = '40px';
    gigitiruanbg[i].style.maxHeight = '40px';
    gigitiruanbg[i].style.maxWidth = '40px';
}

var bleachingbg = document.querySelectorAll('.bleachingbg');
for (var i = 0; i < bleachingbg.length; i++) {
    bleachingbg[i].style.width = '40px';
    bleachingbg[i].style.height = '40px';
    bleachingbg[i].style.maxHeight = '40px';
    bleachingbg[i].style.maxWidth = '40px';
}

var veneerbg = document.querySelectorAll('.veneerbg');
for (var i = 0; i < veneerbg.length; i++) {
    veneerbg[i].style.width = '40px';
    veneerbg[i].style.height = '40px';
    veneerbg[i].style.maxHeight = '40px';
    veneerbg[i].style.maxWidth = '40px';
}

var lainnyabg = document.querySelectorAll('.lainnyabg');
for (var i = 0; i < lainnyabg.length; i++) {
    lainnyabg[i].style.width = '40px';
    lainnyabg[i].style.height = '40px';
    lainnyabg[i].style.maxHeight = '40px';
    lainnyabg[i].style.maxWidth = '40px';
}

var titlebuttoninfos = document.querySelectorAll('.titlebuttoninfo');
for (var i = 0; i < titlebuttoninfos.length; i++) {
    titlebuttoninfos[i].style.marginTop = "14px";
}

var healthbutton1lists = document.querySelectorAll('.healthbutton1list');
var hotelbutton1lists = document.querySelectorAll('.hotelbutton1list');
for (var i = 0; i < healthbutton1lists.length; i++) {
    healthbutton1lists[i].style.paddingLeft = '13px';
    hotelbutton1lists[i].style.paddingLeft = '13px';
}

document.getElementById('drgbutton').classList.add('drgbutton1list');
document.getElementById('healthbutton').classList.add('healthbutton1list');
document.getElementById('groombutton').classList.add('groombutton1list');
document.getElementById('hotelbutton').classList.add('hotelbutton1list');
document.getElementById('pacakbutton').classList.add('pacakbutton1list');
document.getElementById('adoptionbutton').classList.add('adoptionbutton1list');
document.getElementById('bleachbutton').classList.add('bleachbutton1list');
document.getElementById('veneerbutton').classList.add('veneerbutton1list');
document.getElementById('lainnyabutton').classList.add('lainnyabutton1list');

document.getElementById('gambarbutton0').value = 'drgbutton1list';
document.getElementById('gambarbutton1').value = 'healthbutton1list';
document.getElementById('gambarbutton2').value = 'groombutton1list';
document.getElementById('gambarbutton3').value = 'hotelbutton1list';
document.getElementById('gambarbutton4').value = 'pacakbutton1list';
document.getElementById('gambarbutton5').value = 'adoptionbutton1list';
document.getElementById('gambarbutton6').value = 'bleachbutton1list';
document.getElementById('gambarbutton7').value = 'veneerbutton1list';
document.getElementById('gambarbutton8').value = 'lainnyabutton1list';

document.getElementById('gambarbutton').value = 'type 1 list';

});

document.getElementById('checkboxmetode1ss').addEventListener('change', function() {
    var fbResult = document.getElementById('fbresult');
    var switchMetodess = document.querySelector('.switchmetodess');
    var userFacebookz = document.getElementById('userfacebookz');

    if (this.checked) {
        document.getElementById('FB').style.display = 'block';
        userFacebookz.style.display = 'block';
        switchMetodess.style.borderBottomLeftRadius = '0px';
        switchMetodess.style.borderBottomRightRadius = '0px';
        fbResult.value = 'true';
    } else {
        document.getElementById('FB').style.display = 'none';
        userFacebookz.style.display = 'none';
        switchMetodess.style.borderBottomLeftRadius = '7px';
        switchMetodess.style.borderBottomRightRadius = '7px';
        fbResult.value = '';
    }
});

document.getElementById('checkboxmetode2ss').addEventListener('change', function() {
    var igResult = document.getElementById('igresult');
    var switchMetode2ss = document.querySelector('.switchmetode2ss');
    var userInstagramz = document.getElementById('userinstagramz');

    if (this.checked) {
        document.getElementById('IG').style.display = 'block';
        userInstagramz.style.display = 'block';
        switchMetode2ss.style.borderBottomLeftRadius = '0px';
        switchMetode2ss.style.borderBottomRightRadius = '0px';
        igResult.value = 'true';
    } else {
        document.getElementById('IG').style.display = 'none';
        userInstagramz.style.display = 'none';
        switchMetode2ss.style.borderBottomLeftRadius = '7px';
        switchMetode2ss.style.borderBottomRightRadius = '7px';
        igResult.value = '';
    }
});

document.getElementById('checkboxmetode3ss').addEventListener('change', function() {
    var gmapsResult = document.getElementById('gmapsresult');
    var switchMetode3ss = document.querySelector('.switchmetode3ss');

    if (this.checked) {
        document.getElementById('googlemaps').style.display = 'block';
        switchMetode3ss.style.borderBottomLeftRadius = '0px';
        switchMetode3ss.style.borderBottomRightRadius = '0px';
        document.getElementById('map').style.display = 'block';
        document.getElementById('usergooglemaps').style.display = 'block';
        document.getElementById('searchfieldz').style.display = 'block';
        document.getElementById('okgmaps').style.display = 'block';
        document.getElementById('kotakqq').style.display = 'block';
        gmapsResult.value = 'true';
    } else {
        document.getElementById('googlemaps').style.display = 'none';
        switchMetode3ss.style.borderBottomLeftRadius = '7px';
        switchMetode3ss.style.borderBottomRightRadius = '7px';
        document.getElementById('map').style.display = 'none';
        document.getElementById('usergooglemaps').style.display = 'none';
        document.getElementById('searchfieldz').style.display = 'none';
        document.getElementById('okgmaps').style.display = 'none';
        document.getElementById('kotakqq').style.display = 'none';
        gmapsResult.value = '';
    }
});

document.getElementById('checkboxmetode4ss').addEventListener('change', function() {
    var twitterResult = document.getElementById('twitterresult');
    var switchMetode4ss = document.querySelector('.switchmetode4ss');
    var userTwitterz = document.getElementById('usertwitterz');

    if (this.checked) {
        document.getElementById('twitter').style.display = 'block';
        userTwitterz.style.display = 'block';
        switchMetode4ss.style.borderBottomLeftRadius = '0px';
        switchMetode4ss.style.borderBottomRightRadius = '0px';
        twitterResult.value = 'true';
    } else {
        document.getElementById('twitter').style.display = 'none';
        userTwitterz.style.display = 'none';
        switchMetode4ss.style.borderBottomLeftRadius = '7px';
        switchMetode4ss.style.borderBottomRightRadius = '7px';
        twitterResult.value = '';
    }
});

document.getElementById('checkboxmetode5ss').addEventListener('change', function() {
    var tiktokResult = document.getElementById('tiktokresult');
    var switchMetode5ss = document.querySelector('.switchmetode5ss');
    var userTiktokz = document.getElementById('usertiktokz');

    if (this.checked) {
        document.getElementById('tiktok').style.display = 'block';
        userTiktokz.style.display = 'block';
        switchMetode5ss.style.borderBottomLeftRadius = '0px';
        switchMetode5ss.style.borderBottomRightRadius = '0px';
        tiktokResult.value = 'true';
    } else {
        document.getElementById('tiktok').style.display = 'none';
        userTiktokz.style.display = 'none';
        switchMetode5ss.style.borderBottomLeftRadius = '7px';
        switchMetode5ss.style.borderBottomRightRadius = '7px';
        tiktokResult.value = '';
    }
});

document.getElementById('checkboxmetode6ss').addEventListener('change', function() {
    var waResult = document.getElementById('waresult');
    var switchMetode6ss = document.querySelector('.switchmetode6ss');
    var userWhatsappz = document.getElementById('userwhatsappz');

    if (this.checked) {
        document.getElementById('WA').style.display = 'block';
        userWhatsappz.style.display = 'block';
        switchMetode6ss.style.borderBottomLeftRadius = '0px';
        switchMetode6ss.style.borderBottomRightRadius = '0px';
        waResult.value = 'true';
    } else {
        document.getElementById('WA').style.display = 'none';
        userWhatsappz.style.display = 'none';
        switchMetode6ss.style.borderBottomLeftRadius = '7px';
        switchMetode6ss.style.borderBottomRightRadius = '7px';
        waResult.value = '';
    }
});

document.getElementById('userfacebook').addEventListener('input', function() {
    var z = document.getElementById('userfacebook').value;
    document.querySelector('#userfb').value = 'https://www.facebook.com/' + z;
    document.querySelector('#buttonzfb').href = 'https://www.facebook.com/' + z;
});

document.getElementById('userinstagram').addEventListener('input', function() {
    var z = document.getElementById('userinstagram').value;
    document.querySelector('#userig').value = 'https://www.instagram.com/' + z;
    document.querySelector('#buttonzig').href = 'https://www.instagram.com/' + z;
});

document.getElementById('usertwitter').addEventListener('input', function() {
    var z = document.getElementById('usertwitter').value;
    document.querySelector('#usertwt').value = 'https://www.twitter.com/' + z;
    document.querySelector('#buttonztwitter').href = 'https://www.twitter.com/' + z;
});

document.getElementById('usertiktok').addEventListener('input', function() {
    var z = document.getElementById('usertiktok').value;
    document.querySelector('#usertt').value = 'https://www.tiktok.com/ @' + z;
    document.querySelector('#buttonztiktok').href = 'https://www.tiktok.com/ @' + z;
});

document.getElementById('userwhatsapp').addEventListener('input', function() {
    var z = document.getElementById('userwhatsapp').value;
    document.querySelector('#userwht').value = 'https://wa.me/' + z;
    document.querySelector('#buttonzwa').href = 'https://wa.me/' + z;
});

document.getElementById('checkboxmetode1sz').addEventListener('click', function() {
    document.getElementById('FB').className = 'fbdark';
    document.getElementById('IG').className = 'igdark';
    document.getElementById('googlemaps').className = 'gmapsdark';
    document.getElementById('twitter').className = 'twitterdark';
    document.getElementById('tiktok').className = 'tiktokdark';
    document.getElementById('WA').className = 'wadark';

    document.getElementById('gambarbuttonzz').value = 'dark';
});

document.getElementById('checkboxmetode2sz').addEventListener('click', function() {
    document.getElementById('FB').className = 'fblight';
    document.getElementById('IG').className = 'iglight';
    document.getElementById('googlemaps').className = 'gmapslight';
    document.getElementById('twitter').className = 'twitterlight';
    document.getElementById('tiktok').className = 'tiktoklight';
    document.getElementById('WA').className = 'walight';

    document.getElementById('gambarbuttonzz').value = 'light';
});

document.getElementById('checkboxmetode1ssx').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('hide1result').value = 'hide';
        document.getElementById('buttonz1').style.display = 'none';
    } else {
        document.getElementById('hide1result').value = '';
        document.getElementById('buttonz1').style.display = '';
    }
});

document.getElementById('checkboxmetode2ssx').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('hide2result').value = 'hide';
        document.getElementById('buttonz2').style.display = 'none';
    } else {
        document.getElementById('hide2result').value = '';
        document.getElementById('buttonz2').style.display = '';
    }
});

document.getElementById('checkboxmetode3ssx').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('hide3result').value = 'hide';
        document.getElementById('buttonz3').style.display = 'none';
    } else {
        document.getElementById('hide3result').value = '';
        document.getElementById('buttonz3').style.display = '';
    }
});

document.getElementById('checkboxmetode4ssx').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('hide4result').value = 'hide';
        document.getElementById('buttonz4').style.display = 'none';
    } else {
        document.getElementById('hide4result').value = '';
        document.getElementById('buttonz4').style.display = '';
    }
});

document.getElementById('checkboxmetode5ssx').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('hide5result').value = 'hide';
        document.getElementById('buttonz5').style.display = 'none';
    } else {
        document.getElementById('hide5result').value = '';
        document.getElementById('buttonz5').style.display = '';
    }
});

document.getElementById('checkboxmetode6ssx').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('hide6result').value = 'hide';
        document.getElementById('buttonz6').style.display = 'none';
    } else {
        document.getElementById('hide6result').value = '';
        document.getElementById('buttonz6').style.display = '';
    }
});

document.getElementById('checkboxmetode7ssx').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('hide7result').value = 'hide';
        document.getElementById('buttonz7').style.display = 'none';
    } else {
        document.getElementById('hide7result').value = '';
        document.getElementById('buttonz7').style.display = '';
    }
});

document.getElementById('checkboxmetode8ssx').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('hide8result').value = 'hide';
        document.getElementById('buttonz8').style.display = 'none';
    } else {
        document.getElementById('hide8result').value = '';
        document.getElementById('buttonz8').style.display = '';
    }
});

document.getElementById('checkboxmetode9ssx').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('hide9result').value = 'hide';
        document.getElementById('buttonz9').style.display = 'none';
    } else {
        document.getElementById('hide9result').value = '';
        document.getElementById('buttonz9').style.display = '';
    }
});

document.getElementById('checkboxsenin').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('inputsenin').value = 'libur';
    } else {
        document.getElementById('inputsenin').value = '';
    }
});

document.getElementById('checkboxselasa').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('inputselasa').value = 'libur';
    } else {
        document.getElementById('inputselasa').value = '';
    }
});

document.getElementById('checkboxrabu').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('inputrabu').value = 'libur';
    } else {
        document.getElementById('inputrabu').value = '';
    }
});

document.getElementById('checkboxkamis').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('inputkamis').value = 'libur';
    } else {
        document.getElementById('inputkamis').value = '';
    }
});

document.getElementById('checkboxjumat').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('inputjumat').value = 'libur';
    } else {
        document.getElementById('inputjumat').value = '';
    }
});

document.getElementById('checkboxsabtu').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('inputsabtu').value = 'libur';
    } else {
        document.getElementById('inputsabtu').value = '';
    }
});

document.getElementById('checkboxminggu').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('inputminggu').value = 'libur';
    } else {
        document.getElementById('inputminggu').value = '';
    }
});

document.getElementById('resetlibur').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('updatelibur').style.display = 'block';

    document.getElementById('checkboxsenin').checked = false;
    document.getElementById('checkboxsenin').disabled = false;
    document.getElementById('inputsenin').value = '';

    document.getElementById('checkboxselasa').checked = false;
    document.getElementById('checkboxselasa').disabled = false;
    document.getElementById('inputselasa').value = '';

    document.getElementById('checkboxrabu').checked = false;
    document.getElementById('checkboxrabu').disabled = false;
    document.getElementById('inputrabu').value = '';

    document.getElementById('checkboxkamis').checked = false;
    document.getElementById('checkboxkamis').disabled = false;
    document.getElementById('inputkamis').value = '';

    document.getElementById('checkboxjumat').checked = false;
    document.getElementById('checkboxjumat').disabled = false;
    document.getElementById('inputjumat').value = '';

    document.getElementById('checkboxsabtu').checked = false;
    document.getElementById('checkboxsabtu').disabled = false;
    document.getElementById('inputsabtu').value = '';

    document.getElementById('checkboxminggu').checked = false;
    document.getElementById('checkboxminggu').disabled = false;
    document.getElementById('inputminggu').value = '';

    document.getElementById('cutilibur').value = '';
});