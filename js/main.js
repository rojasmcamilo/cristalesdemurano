$(document).ready(function(){
    $(".b-continue").click(function(){
        $(".opening").remove()
    })
});

$(".imagen").click(function(e){
    var enlaceImagen = e.target.src;
    var ligthbox = '<div class="ligthbox">'+
                    '<img src="' + enlaceImagen + '" alt="">'+
                    '<button type="button" class="btn btn-outline-primary b-close">x</button>'+
                    '</div>';
    $("body").append(ligthbox)
    $(".b-close").click(function(){
        $(".ligthbox").remove()
    })
})

