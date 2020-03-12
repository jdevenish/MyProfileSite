/*===============================

    JQuery Validation Check

 ===============================*/
if (typeof $ == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
} else {console.log('I did it! I linked jQuery and this js file properly!')};

/*===============================

    Mobile Expanding Nav Variables

 ===============================*/
let eduMenuExpanded = false;
let workMenuExpanded = false;
let certMenuExpanded = false;
let awardMenuExpanded = false;
let patentMenuExpanded = false;

/*===============================

    CSS Objects

 ===============================*/
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

/*===============================

   HTML TAG ATTRIBUTES

 ===============================*/
let nameInputAttr = {
    placeholder: "First and Last Name"
}

let companyInputAttr = {
    placeholder: "Company Name"
}

let emailInputAttr = {
    // size: 103,
    placeholder: "Email Address"
}


/*==============================================

        ABOUT ME LISTENERS

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

$("#workHistory").click(function() {
    if($(window).width() < 768){
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

$("#certifications").click(function() {
    if($(window).width() < 768){
        $("#certContent").toggleClass("hideContent" );
        if(certMenuExpanded){
            $("#certNavIcon").attr("src", "https://res.cloudinary.com/doaftkgbv/image/upload/c_scale,w_64/v1583872051/expand_more-24px_jtv5ih.svg");
            certMenuExpanded = false;
        } else{
            $("#certNavIcon").attr("src", "https://res.cloudinary.com/doaftkgbv/image/upload/v1583872051/expand_less-24px_ohbeml.svg");
            certMenuExpanded = true;
        }
    }
});

$("#awards").click(function() {
    if($(window).width() < 768){
        $("#awardsContent").toggleClass("hideContent" );
        if(awardMenuExpanded){
            $("#awardsNavIcon").attr("src", "https://res.cloudinary.com/doaftkgbv/image/upload/c_scale,w_64/v1583872051/expand_more-24px_jtv5ih.svg");
            awardMenuExpanded = false;
        } else{
            $("#awardsNavIcon").attr("src", "https://res.cloudinary.com/doaftkgbv/image/upload/v1583872051/expand_less-24px_ohbeml.svg");
            awardMenuExpanded = true;
        }
    }
});

$("#patents").click(function(){
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

/*===============================

   Mobile Expanding Nav Menu
Inspired By: Code By Webdevtrick ( https://webdevtrick.com )
 ===============================*/
let active1 = false;
let active2 = false;
let active3 = false;
let active4 = false;

let navAboutMeON = {
    'transform': 'translate(0px,-125px)'
}

let navWorkHistoryON = {
    'transform': 'translate(60px,-105px)'
}

let navProjectsON = {
    'transform': 'translate(105px,-60px)'
}

let navContactON = {
    'transform': 'translate(125px,0px)'
}

let navOFF = {
    'transform': 'none'
}

$('.container').on('click', function() {
    if (!active1){
        $(this).find('.navAboutMe').css(navAboutMeON);
        $(this).find('.navWorkHistory').css(navWorkHistoryON);
        $(this).find('.navProjects').css(navProjectsON);
        $(this).find('.navContact').css(navContactON);
    } else{
        $(this).find('.navAboutMe').css(navOFF);
        $(this).find('.navWorkHistory').css(navOFF);
        $(this).find('.navProjects').css(navOFF);
        $(this).find('.navContact').css(navOFF);
    }
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
});