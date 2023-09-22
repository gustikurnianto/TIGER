$(document).ready(function(){
    $("#searchnew").blur(function() {
        if(!$(this).val()){
            $('#clearz').hide();
            $('#searchnew').css({ "background-image" : "url('https://lh3.googleusercontent.com/NB_rp1kR9Zum_QsP5SRQMmKQln9UkqGL6-BCctn4kB1-_LZUQExqZjL-UQgZCz6ztrw1qwFaCJhK5fjO4UFim4GRIHgqP9ZKpe22bfOpLY3tB9MWxNPPl5yPhoWh4NTaTU6rrAHMxA=w2400')" });
        }
    })
});

$(document).ready(function(){
    $("#searchdone").blur(function() {
        if(!$(this).val()){
            $('#clearz').hide();
            $('#searchdone').css({ "background-image" : "url('https://lh3.googleusercontent.com/IZXXpwa87kV1O3BJXdITPnPDAV18no_Erll5N9XqTKDfUhJL87LbvhtSEBtKaH5W5HYS54nnEDksn42EWje5wg3eJL_VtuBhLd8J_5nBSEKcLfAzv7PmRm92IxYMBzfGagkDvalgYg=w2400')" });
        }
    })
});
