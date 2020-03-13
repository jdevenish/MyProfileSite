/*
    TODO: Figure out why project modals are stacking
 */

/*===============================

    Initialize Variables

 ===============================*/
let projectArray = [];
const projectSpreadsheetURL = "https://spreadsheets.google.com/feeds/list/1t0qkcAYCxxrVNQ3TpLGhP3ovSpSgrcyShWTxNN_8zNE/od6/public/values?alt=json";
const closeIcon = "https://res.cloudinary.com/doaftkgbv/image/upload/v1583872051/close-24px_vgg9zk.svg";

/*===============================

    CSS Objects

 ===============================*/
let popUp = {
    "display": "block",
    "position": "fixed",
    "z-index": "1",
    "padding-top": "150px",
    "left": "0",
    "top": "0",
    "width": "100%",
    "height": "100%",
    "overflow": "auto",
    "background-color": "rgba(0,0,0,0.4)"
};

let popUpBox = {
    "background-color": "#fefefe",
    "margin":"auto",
    "padding":"20px",
    "border": "1px solid #888",
    "width":"60%",
    "text-align": "center",
    "border-radius": "5px",
    "box-shadow": "2px 2px rgba(0,0,0,0.5)"
};

let popUpBoxHeader = {
    "font-family": "\"Audiowide\", serif",
    "font-size": "26px",
    "margin-bottom": "12px"
};

let popUpBoxMessage = {
    "font-size": "14px",
    "margin-bottom": "8px"
};

let imgContainer = {
    "width":"90%",
    "height":"90%",
    "cursor": "pointer",
    "border": "1px solid black"
};

/*===============================

   HTML TAG ATTRIBUTES

 ===============================*/

let popUpAttr = {
    "id" : "popUpModal"
};

let popUpContentAttr = {
    "id" : "modalContent"
};

/*===============================

   NETWORK OPERATIONS

 ===============================*/

let requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch(projectSpreadsheetURL, requestOptions)
    .then(response => response.json()) // This parses date from string to object
    .then(result => {
        let projects = result.feed.entry.map(project => {
            return {
                title: project.gsx$title.$t,
                description: project.gsx$description.$t,
                icon: project.gsx$projecticon.$t,
                repoURL: project.gsx$url.$t,
                youtubeURL: project.gsx$url.$t,
                article: project.gsx$url.$t
            }
        })
        app(projects)
    })
    .catch(error => console.log("error", error));



/*################### DISPLAY ALL PROJECTS FUNCTIONS ########################*/

/*===============================

    Build and return the project card

    <div class="project" style="background-image: url(${project.icon});">
        <div class="projectName">
            <h3>${project.title}</h3>
        </div>
    </div>
 ===============================*/
let buildProjectCard = (project) => {
    const $cardContainer = buildCardContainer(project);
    const $projectNameBanner = buildCardBanner(project);

    $cardContainer.append($projectNameBanner);

    return $cardContainer
};

/*===============================

    Build card container

    <div class="project" style="background-image: url(${project.icon});">

    </div>
 ===============================*/
function buildCardContainer(project) {
    const $cardContainer = $("<div>");
    $cardContainer.addClass("project").css({
        "background-image": `url(${project.icon})`
    });

    $cardContainer.on("click", findProject);

    return $cardContainer
}

/*===============================

    Build card banner

    <div class=projectName>
        <h3>Project Title</h3>
    </div>
 ===============================*/
function buildCardBanner(project) {
    const $projectNameBanner = $("<div>");
    $projectNameBanner.addClass("projectName");

    const $projectName = $("<h3>");
    $projectName.text(project.title);

    $projectNameBanner.append($projectName);

    return $projectNameBanner
}

/*===============================

    Display project cards

    - Load project details onto screen.
    - Make a local copy of project object
 ===============================*/
function app(projects) {
    for(let i=0; i<projects.length; i++){
        projectArray.push(projects[i]);
        $("#projectContentContainer").append(buildProjectCard(projects[i]))
    }
    projectArray = projects.slice();
}

/*################### PROJECT DETAILS FUNCTIONS ########################*/

/*===============================

    When a project is clicked,
    find the project details needed
    to build the modal
 ===============================*/
function findProject() {
    for(let i=0; i<projectArray.length; i++){
        if($(this).html().includes(projectArray[i].title)){
            loadDetailsModal(projectArray[i])
        }
    }
}

/*===============================

   Load details modal once project
   card has been clicked
 ===============================*/
function loadDetailsModal(singleProject) {
    let $modalBackground = buildModalBackground();
    let $modalDetails = buildModalDetails(singleProject);

    $modalBackground.append($modalDetails);
    $("#projectModal").append($modalBackground).css("display", "block")
}

/*===============================

    Build modal background

    <div id=popUpModal style=popUp object>

    </div>
 ===============================*/
function buildModalBackground(){
    const $divModal = $("<div>");
    $divModal.css(popUp);
    $divModal.attr(popUpAttr);

    return $divModal
}

/*===============================

    Build modal Details
    <div>
        <h2>Project Title <span class="year"><img src=closeIcon></span></h2>
        <img src=project icon>
        <p>Description</p>
    </div>

 ===============================*/
function buildModalDetails(currentProject){
    const $divModalContent = buildModalContentContainer();
    const $h2ModalContent = buildModalHeaderText(currentProject);
    const $imgProject = buildModalImage(currentProject);
    const $pModalContent = buildModalDescription(currentProject);

    $divModalContent.append($h2ModalContent);
    $divModalContent.append($imgProject);
    $divModalContent.append($pModalContent);

    return $divModalContent
}

/*===============================

    Build Modal: modal content container
    <div id=modalContent style=popUpContentAttr Object>

    </div>
 ===============================*/
function buildModalContentContainer() {
    const $divModalContent = $("<div>");
    $divModalContent.css(popUpBox);
    $divModalContent.attr(popUpContentAttr);

    return $divModalContent
}

/*===============================

    Build Modal: header text

    <h2>Project Title <span class="year"><img src=closeIcon></span></h2>
 ===============================*/
function buildModalHeaderText(currentProject) {
    const $h2ModalContent = $("<h2>");
    $h2ModalContent.text(currentProject.title);
    $h2ModalContent.css(popUpBoxHeader);

    const $closeButton = buildModalCloseButton();

    $h2ModalContent.append($closeButton);
    return $h2ModalContent
}

/*===============================

    Build Modal: close button

    <span class="year"><img src=closeIcon></span>
 ===============================*/
function buildModalCloseButton(id="#popUpModal") {
    const $closeButton = $("<span>").addClass("year");

    // NOTE: Don't add () to end of listener function. Will execute immediately if so.
    $closeButton.on("click", closeModal =>{
        $(id).remove()
    })

    const $closeIcon = $("<img>").attr({
        "src": closeIcon
    })

    $closeButton.append($closeIcon);
    return $closeButton
}

/*===============================

    Build Modal: Image

    <img src=project icon>
 ===============================*/
function buildModalImage(currentProject) {
    const $imgProject = $("<img>");
    $imgProject.attr({
        "src":currentProject.icon,
        "id":"selectedProject"
    });
    $imgProject.css(imgContainer);
    $imgProject.on("click", linkToProject => {
        let win = window.open(currentProject.repoURL);
        win.focus();
    });

    return $imgProject
}

/*===============================

    Build Modal: Description

     <p>Description</p>
 ===============================*/
function buildModalDescription(currentProject) {
    const $pModalContainer = $("<div>")
    $pModalContainer.css({
        "width": "60%",
        "margin": "20px auto"
    });
    const $pModalContent = $("<p>");
    $pModalContent.text(currentProject.description);
    $pModalContent.css(popUpBoxMessage);

    $pModalContainer.append($pModalContent);
    return $pModalContainer
}