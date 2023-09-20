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
