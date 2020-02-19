$(document).ready(function(){
    $('.container_house').hide();
    $(this).click(function(){
        var link = "https://anapioficeandfire.com/api/houses/"+$('figure').attr("id");
        console.log(link);
    $.get()
    })   
});