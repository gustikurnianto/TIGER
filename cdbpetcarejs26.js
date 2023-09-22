        var gh=[];
        $('#kotakbioreservasi').on('change', 'input[type=checkbox]', function() {

        var id = $(this).val(); // this gives me null
        var index = gh.indexOf(id);
        
        if($(this).is(':checked')){
            gh.push(id);
            document.getElementById("cutilibur").value=''+gh+'';
        }
        else{
            if (index > -1) {
            gh.splice(index, 1);
            document.getElementById("cutilibur").value=''+gh+'';
            }
        }
        });
