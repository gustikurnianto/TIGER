document.getElementById("inputcekreservasi2").addEventListener("keyup", filterSearch);
  function filterSearch(){

    var searchTerm = $("#inputcekreservasi2").val();

    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
  
    $.extend($.expr[':'], {
      'containsi': function(elem, i, match, array)
    {
      return (elem.textContent || elem.value || '').toLowerCase()
      .indexOf((match[3] || "").toLowerCase()) >= 0;
    }
    });
  
  $(".pinnich").not(":containsi('" + searchSplit + "')").each(function(e)   {
        document.getElementById('inputcekreservasiss').value = "";
  });
  
  $(".pinnich:containsi('" + searchSplit + "')").each(function(e) {
        var aku = $(this).val();
        if (searchSplit.length == 9) {
            document.getElementById('inputcekreservasiss').value = aku;
            $('#entercekreservasi2').show();
            $('#entercektidak2').hide();
        } else {
            document.getElementById('inputcekreservasiss').value = "";
            $('#entercekreservasi2').hide();
            $('#entercektidak2').show();
        }
  });

     var value,name,profile,i;
     value = document.getElementById('inputcekreservasi2').value.toUpperCase();
  profile = document.getElementsByClassName('pinnich');
    for(i=0;profile.length;i++){
      name = profile[i].getElementsByClassName('pinnich');
      if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
        profile[i].style.display ="";
      }else{
        profile[i].style.display = "none";
      }
    }  
  }
