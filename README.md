# Project 1: My Profile Site

[(Click here to view the site)](https://jdevenish.github.io/MyProfileSite/)  

[Link to YouTube Video](https://www.youtube.com/watch?v=sjJuBYxz3EQ)

## Overview
Build a website from scratch using the skills taught during the firs section of this course. The website will be a self portfolio site displaying and linking to work I've done for homework and class labs. 

## Project Description
This is a website designed and built by myself to highlight what I've learned from the Unit 1 of the Immersive Software Engineering course. It should provide the viewer with information about myself including some of the following: 
* Name
* Paragraph or two about me
* Education
* Work History
* Accomplishments
* Portfolio of work:
	* Websites
	* Images built with HTML/CSS
	* Algorithm solutions
  
## Project Schedule
Below is the timeline provided with roadmap estimates
|  Day | Deliverable | Status
|---|---| ---|
|Fri| Project Description | Complete
|Mon| Wireframes / Priority Matrix / Timeline | Complete
|Wed| Core Application Structure (HTML, CSS, etc.) | Complete
|Thur| MVP & Bug Fixes | Complete
|Fri| Final Touches | Complete
|Mon| Present | Complete

## Feature Research & Prioritization 

I started this project by researching other portfolio websites to get inspiration and a better understanding of how I would want to structure my site. The person viewing my portfolio should be able to quickly find three major things; a little about me and how I stand out from the compeition, some way to review and grade my work, and most importantly, an easy way to contact me. 

### Design Inspiration ###

#### Mobile Touch Targets ####
![Mobile Touch Targets](https://res.cloudinary.com/doaftkgbv/image/upload/c_scale,h_663/v1584308078/MobileTargetZones_ydlx0d.png)

#### Mobile Specific Menu Placement ####
![Mob Nav](https://res.cloudinary.com/doaftkgbv/image/upload/c_scale,h_824/v1584308077/BottomNav_hcqquf.png)

#### Large clean welcome page & fun navigation ####
![Welcome Page](https://res.cloudinary.com/doaftkgbv/image/upload/c_scale,h_516/v1584308080/DesignInspiration-NavTransition_geq1n6.png)

#### Project Card Transition #####
![Project Cards](https://res.cloudinary.com/doaftkgbv/image/upload/c_scale,w_1206/v1584308079/DesignInspiration-CardTransition_nauwna.png)

Below is how I broke down and prioritiezed the features that came from my research. 
#### Feature Brainstorm ####
![Feature Brainstorm](https://res.cloudinary.com/doaftkgbv/image/upload/c_scale,h_575/v1583773100/FeatureBrainstorming_hssb1g.png)

#### Value vs Complexity Graph ####
![Value vs Complexity Chart](https://res.cloudinary.com/doaftkgbv/image/upload/c_scale,h_504/v1583773146/ValueVSComplexity_u2inhx.png)


### Wireframes ###

#### Mobile ####
![Mobile Wireframe](https://res.cloudinary.com/doaftkgbv/image/upload/c_scale,h_877/v1583771400/Mobile-Wireframe_jm9zpg.png)

#### Desktop ####
![Desktop Wireframe](https://res.cloudinary.com/doaftkgbv/image/upload/c_scale,w_761/v1583771399/Desktop-wireframe_lwi0vk.png)


### MVP
- Responsive
  - [x] Mobile first
  - [x] Tablet
  - [x] Desktop
  
- Build Welcome Section
	- [x] Add large clean background graphic
	- [x] Add Name/Logo
	- [x] Add brand/mission statement / paragraph
	
- Build "About Me" Section
	- [x] Column for Education
	- [x] Column for Work History
	- [x] Column for Achievments / Certifications / Patents

- Build "Projects" section
	- [x] Dynamic project cards 
	- [x] Pop up modal with project details
  	- [x] Link to navigate to project repo

- Build "Contact Me" section
	- Links to social platforms
		- [x] Github
		- [x] LinkedIn
		- [x] Codepen
	- [x] Message Me Interface
	
- Content Creation
	- [x] Create Youtube video about this project
  
### Post MVP
- [x] Floating mobile navigation button **COMPLETE**
- [ ] Bouncing scroll down arrow on page load
- [ ] Grid to Carousel Switcher
- [ ] Carousel for projects
- [ ] Clean up Codepen projects **PARTIAL** 
- [ ] Clean up Github projects **PARTIAL**
- [ ] Clean up Repl.it projects **PARTIAL**

## Functional Components
Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Add large clean background graphic | H | 0.5hrs| 0.5hrs | 0hrs |
| Add brand/mission statement / paragraph | H | 0.5hrs| 0.5hrs | 0hrs |
| Column for Education | H | 1.5hrs| 2hrs | 0hrs |
| Column for Work History | H | 1.5hrs| 2hrs | 0hrs |
| Column for Achievments / Certifications | H | 0.5hrs| 2hrs | 0hrs |
| Update projects sheet | H | 1.0hrs| 0.5hrs | 0hrs |
| Grid layout of projects | H | 2.0hrs| 0hrs | 0hrs |
| Pop over modal with project details | H | 3.0hrs| 4.0hrs | 0hrs |
| Links to social platforms | H | 0.5hrs| 0.5hrs | 0hrs |
| Make site responsive | H | 3hrs | 8hrs | 0hrs |
| Email Me Interface | H | 3hrs| 4hrs | 0hrs |
| Floating mobile navigation button | M | 5hrs| 5hrs | 0hrs |
| Bouncing scroll down arrow on page load | L | 2hrs| 0hrs | 0hrs |
| Collapse navigation menu | L | 1.5hrs| 3hrs | 0hrs |
| Grid to Carousel Switcher | M | 0.5hrs| 0hrs | 0hrs |
| Carousel for projects | M | 4.5hrs| 0hrs | 0hrs |
| Create Youtube video about this project | H | 4hrs | 0hrs | 0hrs |
| Clean up Codepen projects | L | 1hrs | 1hrs | 0hrs |
| Clean up Github projects | L | 1hrs | 0hrs | 0hrs |
| Clean up Repl.it projects | L | 1hrs | 0hrs | 0hrs |
| Code clean up & Testing | M | 3hrs | 4hrs | 0hrs |
| Total | H | 40hrs| 33hrs | 0hrs |


## Additional Libraries ##
Fonts:
```
        <link href="https://fonts.googleapis.com/css?family=Audiowide&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Nanum+Pen+Script&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Architects+Daughter&display=swap" rel="stylesheet">
```

Icons:
Used for the floating mobile navigation menu
```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
```
 

## Code Snippet
Below is the code for my mobile navigation menu. It's a floating icon that sits in the bottom left corner and when clicked has delayed flyout icons for each of my websites sections. 

HTML
```
<div class="container">
    <a href="#welcomePage" class="navAboutMe"><i class="fa fa-home fa-2x"></i></a>
    <a href="#work" class="navWorkHistory"><i class="fa fa-user fa-2x"></i></a>
    <a href="#myProject" class="navProjects"><i class="fa fa-code fa-2x"></i></a>
    <a href="#contact" class="navContact"><i class="fa fa-envelope-o fa-2x"></i></a>
    <a class="bigOne"><i class="fa fa-bars fa-3x"></i></a>
</div>
```
CSS
```
.container {
    bottom:15px;
    left:15px;
    position:fixed;
    display:block;
    width:100px;
    height:100px;
    background-color:transparent;
    border-radius:50%;
    z-index:20;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
}

.navAboutMe {
    width:60%;
    height:60%;
    border-radius:50%;
    position:absolute;
    color:white;
    text-align:center;
    line-height:75px;
    bottom:25%;
    left:25%;
    z-index:19;
    transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    background-color: #F7B90B;
    border: 2px solid #CAC4C6;
}

.navWorkHistory {
    width:60%;
    height:60%;
    border-radius:50%;
    position:absolute;
    color:white;
    text-align:center;
    line-height:75px;
    bottom:25%;
    left:25%;
    z-index:19;
    transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550) .2s;
    background-color: #F7B90B;
    border: 2px solid #CAC4C6;
}

.navProjects {
    width:60%;
    height:60%;
    border-radius:50%;
    position:absolute;
    color:white;
    text-align:center;
    line-height:70px;
    bottom:25%;
    left:25%;
    transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550) .4s;
    background-color: #F7B90B;
    border: 2px solid #CAC4C6;
}

.navContact {
    width:60%;
    height:60%;
    border-radius:50%;
    position:absolute;
    color:white;
    text-align:center;
    line-height:70px;
    bottom:25%;
    left:25%;
    transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550) .6s;
    background-color: #F7B90B;
    border: 2px solid #CAC4C6;
}

.bigOne {
    bottom:15px;
    left:15px;
    width:100px;
    height:100px;
    background:#212121;
    border-radius:50%;
    z-index:21;
    color:white;
    text-align:center;
    line-height:120px;
    cursor:pointer;
    position:fixed;
}
```
Java Script
```
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

```

## Issues and Resolutions
* Click listener executing before it should. 
	* **RESOLUTION** Remove the function brackets on listeners ie function ~~()~~
* Stacking project modals
	* **RESOLUTION** Referencing wrong ID on click event
* Project modal images drawing outside boundary of pop up modal.
	* **RESOLUTION** Made the image size a percentage of the pop up modal instead of fixed size
