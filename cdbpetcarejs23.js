$("#okgmaps").on("click", function() {
    var z = document.getElementById("usergmaps").value; 
    document.querySelector("#buttonzgmaps").href = z;
    $('#okgmaps').hide().delay(3505).fadeIn(0); 
    $('#loadinggmaps').show().delay(3500).fadeOut(0); 
});
