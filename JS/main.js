

let eduMenuExpanded = false;
let workMenuExpanded = false;
let certMenuExpanded = false;
let awardMenuExpanded = false;
let patentMenuExpanded = false;


if (typeof $ == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
} else {console.log('I did it! I linked jQuery and this js file properly!')};


let nameInputAttr = {
    // size: 50,
    placeholder: "First and Last Name"
}

let companyInputAttr = {
    // size: 50,
    placeholder: "Company Name"
}

let emailInputAttr = {
    // size: 103,
    placeholder: "Email Address"
}

let bodyInputAttr = {

}

let bodyCSS = {
    "width": "100%",
    "padding": "12px",
    "border": "1px solid #ccc",
    "border-radius": "4px",
    "resize": "vertical"
}

let rowCSS = {
    "width":" 75%",
    "margin-top": "6px"
}

/*==============================================

        FUNCTIONS

==============================================*/
let buildEmailForm = () => {
    $(".formRow").addClass(rowCSS)
    $("#name").attr(nameInputAttr).addClass(bodyCSS);
    $("#company").attr(companyInputAttr).addClass(bodyCSS);
    $("#email").attr(emailInputAttr).addClass(bodyCSS);
    $("#body").attr(bodyInputAttr).addClass(bodyCSS);
    //$("#body").addClass(bodyCSS).addClass(bodyCSS);
}

/*==============================================

        LISTENERS

==============================================*/
$("#education").click(function() {
    if($( window ).width() < 768){
        $( "#eduContent" ).toggleClass("hideContent" );
        if(eduMenuExpanded){
            $("#eduNavIcon").attr("src", "https://res.cloudinary.com/doaftkgbv/image/upload/c_scale,w_64/v1583872051/expand_more-24px_jtv5ih.svg");
            eduMenuExpanded = false;
        } else{
            $("#eduNavIcon").attr("src", "https://res.cloudinary.com/doaftkgbv/image/upload/v1583872051/expand_less-24px_ohbeml.svg");
            eduMenuExpanded = true;
        }
    }
});

$( "#workHistory" ).click(function() {
    if($( window ).width() < 768){
        $( "#workContent" ).toggleClass("hideContent" );
        if(workMenuExpanded){
            $("#workNavIcon").attr("src", "https://res.cloudinary.com/doaftkgbv/image/upload/c_scale,w_64/v1583872051/expand_more-24px_jtv5ih.svg");
            workMenuExpanded = false;
        } else{
            $("#workNavIcon").attr("src", "https://res.cloudinary.com/doaftkgbv/image/upload/v1583872051/expand_less-24px_ohbeml.svg");
            workMenuExpanded = true;
        }
    }
});

$( "#certifications" ).click(function() {
    if($( window ).width() < 768){
        $( "#certContent" ).toggleClass("hideContent" );
        if(certMenuExpanded){
            $("#certNavIcon").attr("src", "https://res.cloudinary.com/doaftkgbv/image/upload/c_scale,w_64/v1583872051/expand_more-24px_jtv5ih.svg");
            certMenuExpanded = false;
        } else{
            $("#certNavIcon").attr("src", "https://res.cloudinary.com/doaftkgbv/image/upload/v1583872051/expand_less-24px_ohbeml.svg");
            certMenuExpanded = true;
        }
    }
});

$( "#awards" ).click(function() {
    if($( window ).width() < 768){
        $( "#awardsContent" ).toggleClass("hideContent" );
        if(awardMenuExpanded){
            $("#awardsNavIcon").attr("src", "https://res.cloudinary.com/doaftkgbv/image/upload/c_scale,w_64/v1583872051/expand_more-24px_jtv5ih.svg");
            awardMenuExpanded = false;
        } else{
            $("#awardsNavIcon").attr("src", "https://res.cloudinary.com/doaftkgbv/image/upload/v1583872051/expand_less-24px_ohbeml.svg");
            awardMenuExpanded = true;
        }
    }
});

$( "#patents" ).click(function(){
    if($( window ).width() < 768){
        $( "#patentsContent" ).toggleClass("hideContent" );
        if(patentMenuExpanded){
            $("#patentsNavIcon").attr("src", "https://res.cloudinary.com/doaftkgbv/image/upload/c_scale,w_64/v1583872051/expand_more-24px_jtv5ih.svg");
            patentMenuExpanded = false;
        } else{
            $("#patentsNavIcon").attr("src", "https://res.cloudinary.com/doaftkgbv/image/upload/v1583872051/expand_less-24px_ohbeml.svg");
            patentMenuExpanded = true;
        }
    }
});


//buildEmailForm();

