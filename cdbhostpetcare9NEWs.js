$('#searchnew').click(function() {
    $('#clearz').show();  
    $('#clearz').css('left', "60px");
    $('#clearz').css('top', "-30.5px");
    $('#searchnew').css({ "background-image" : "url('')" });
});

$('#buttontodaynew').click(function() {
    var datePdf = new Date();
    var DayNamesPdf = datePdf.getDate();
    if (DayNamesPdf < 10) {
        DayNamesPdf = '0'+DayNamesPdf;
    }
    var monthNamesPdf = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
    ];
    var monthNamePdf = monthNamesPdf[datePdf.getMonth()];
    var todayPDf = `${DayNamesPdf} ${monthNamePdf} ${datePdf.getFullYear()}`;
    var timePdf = `${todayPDf}`;
    document.getElementById('searchnew').value = timePdf;
    $('#clearz').show();  
    $('#searchnew').trigger('click');
    $('#searchnew').css({ "background-image" : "url('')" });
});

$('#searchdone').click(function() {
    $('#clearz').show(); 
    $('#clearz').css('left', "131px"); 
    $('#clearz').css('top', "-32.5px");
    $('#searchdone').css({ "background-image" : "url('')" });
});

$('#clearz').click(function() {
    $('#clearz').hide();
    $('.kosong').hide();
    $('#searchnew').val("");
    $('#searchdone').val("");
    $('.ctnInfo').slideDown(400);
    $('.ctnInfoDone').slideDown(400);
    $('#searchnew').css({ "background-image" : "url('https://lh3.googleusercontent.com/NB_rp1kR9Zum_QsP5SRQMmKQln9UkqGL6-BCctn4kB1-_LZUQExqZjL-UQgZCz6ztrw1qwFaCJhK5fjO4UFim4GRIHgqP9ZKpe22bfOpLY3tB9MWxNPPl5yPhoWh4NTaTU6rrAHMxA=w2400')" });
    $('#searchdone').css({ "background-image" : "url('https://lh3.googleusercontent.com/IZXXpwa87kV1O3BJXdITPnPDAV18no_Erll5N9XqTKDfUhJL87LbvhtSEBtKaH5W5HYS54nnEDksn42EWje5wg3eJL_VtuBhLd8J_5nBSEKcLfAzv7PmRm92IxYMBzfGagkDvalgYg=w2400')" });
    return false;
});