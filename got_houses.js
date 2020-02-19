$(document).ready(function(){
    $('.container_house').hide();
    $(this).click(function(){
        var link = "https://anapioficeandfire.com/api/houses/"+$('figure').attr("id");
        $('.container_house').show();
        console.log(link);
    // $.get(link, function(res){ //it generates an CORS error
    //     console.log(res);
    //     $('.house_names').append(res.name);
    //     $('house_word').append(res.words);
    //     for(var i = 0; i < res.titles.lenght; i++){
    //         $('house_titles').append(res.titles[i]);
    //     }
    // }, "json");
    });   
});