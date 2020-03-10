if (typeof $ == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
} else {console.log('I did it! I linked jQuery and this js file properly!')};


$("#education").click(function() {
    if($( window ).width() < 768){
        $( "#eduContent" ).toggleClass("hideContent" );
    } else{
        // $( "#eduContent" ).css("display", "none" );
    }
});

$( "#workHistory" ).click(function() {
    if($( window ).width() < 768){
        $( "#workContent" ).toggleClass("hideContent" );
    }
});

$( "#certifications" ).click(function() {
    if($( window ).width() < 768){
        $( "#certContent" ).toggleClass("hideContent" );
    }
});

$( "#awards" ).click(function() {
    if($( window ).width() < 768){
        $( "#awardsContent" ).toggleClass("hideContent" );
    }
});

$( "#patents" ).click(function() {
    if($( window ).width() < 768){
        $( "#patentsContent" ).toggleClass("hideContent" );
    }
});
