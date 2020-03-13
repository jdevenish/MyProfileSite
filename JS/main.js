/*===============================

    JQuery Validation Check

 ===============================*/
if (typeof $ == "undefined"){
    console.log("oops! I still have to link my jQuery properly!");
} else {console.log("I did it! I linked jQuery and this js file properly!")};

/*===============================

    Initialize Variables

 ===============================*/
// About me expanding menu
let eduMenuExpanded = false;
let workMenuExpanded = false;
let certMenuExpanded = false;
let awardMenuExpanded = false;
let patentMenuExpanded = false;

// Fly out button states
let active1 = false;
let active2 = false;
let active3 = false;
let active4 = false;

const expandArrow = "https://res.cloudinary.com/doaftkgbv/image/upload/c_scale,w_64/v1583872051/expand_more-24px_jtv5ih.svg"
const collapseArrow = "https://res.cloudinary.com/doaftkgbv/image/upload/v1583872051/expand_less-24px_ohbeml.svg"

/*===============================

    CSS Objects

 ===============================*/
let navAboutMeON = {
    "transform": "translate(0px,-125px)"
};

let navWorkHistoryON = {
    "transform": "translate(60px,-105px)"
};

let navProjectsON = {
    "transform": "translate(105px,-60px)"
};

let navContactON = {
    "transform": "translate(125px,0px)"
};

let navOFF = {
    "transform": "none"
};

/*==============================================

        ABOUT ME LISTENERS
     Only execute if media query = mobile
==============================================*/
$("#education").click(function() {
    if($( window ).width() < 768){
        $( "#eduContent" ).toggleClass("hideContent" );
        if(eduMenuExpanded){
            $("#eduNavIcon").attr("src", expandArrow);
            eduMenuExpanded = false;
        } else{
            $("#eduNavIcon").attr("src", collapseArrow);
            eduMenuExpanded = true;
        }
    }
});

$("#workHistory").click(function() {
    if($(window).width() < 768){
        $( "#workContent" ).toggleClass("hideContent" );
        if(workMenuExpanded){
            $("#workNavIcon").attr("src", expandArrow);
            workMenuExpanded = false;
        } else{
            $("#workNavIcon").attr("src", collapseArrow);
            workMenuExpanded = true;
        }
    }
});

$("#certifications").click(function() {
    if($(window).width() < 768){
        $("#certContent").toggleClass("hideContent" );
        if(certMenuExpanded){
            $("#certNavIcon").attr("src", expandArrow);
            certMenuExpanded = false;
        } else{
            $("#certNavIcon").attr("src", collapseArrow);
            certMenuExpanded = true;
        }
    }
});

$("#awards").click(function() {
    if($(window).width() < 768){
        $("#awardsContent").toggleClass("hideContent" );
        if(awardMenuExpanded){
            $("#awardsNavIcon").attr("src", expandArrow);
            awardMenuExpanded = false;
        } else{
            $("#awardsNavIcon").attr("src", collapseArrow);
            awardMenuExpanded = true;
        }
    }
});

$("#patents").click(function(){
    if($( window ).width() < 768){
        $( "#patentsContent" ).toggleClass("hideContent" );
        if(patentMenuExpanded){
            $("#patentsNavIcon").attr("src", expandArrow);
            patentMenuExpanded = false;
        } else{
            $("#patentsNavIcon").attr("src", collapseArrow);
            patentMenuExpanded = true;
        }
    }
});

/*===========================================================

   Floating Mobile Fly Out Nav Menu
Inspired By: Code By Webdevtrick ( https://webdevtrick.com )

    Only visible if media query = mobile
 ============================================================*/
$(".container").on("click", function() {
    if (!active1){
        $(this).find(".navAboutMe").css(navAboutMeON);
        $(this).find(".navWorkHistory").css(navWorkHistoryON);
        $(this).find(".navProjects").css(navProjectsON);
        $(this).find(".navContact").css(navContactON);
    } else{
        $(this).find(".navAboutMe").css(navOFF);
        $(this).find(".navWorkHistory").css(navOFF);
        $(this).find(".navProjects").css(navOFF);
        $(this).find(".navContact").css(navOFF);
    }

    // Invert boolean values. Faster than setting in if/else
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
});