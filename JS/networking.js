let projectArray = []




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
}

let popUpBox = {
    "background-color": "#fefefe",
    "margin":"auto",
    "padding":"20px",
    "border": "1px solid #888",
    "width":"60%",
    "text-align": "center"
}

let popUpBoxHeader = {
    "font-family": "\'Inknut Antiqua\', serif",
    "font-size": "20px",
    "margin-bottom": "12px"
}

let popUpBoxMessage = {
    "font-size": "14px",
    "margin-bottom": "8px"
}

let imgContainer = {
    "width":"400",
    "height":"400",
    "cursor": "pointer"
}

/*===============================

   HTML TAG ATTRIBUTES

 ===============================*/

let popUpAttr = {
    "id" : "popUpModal"
}

let popUpContentAttr = {
    "id" : "modalContent"
}

/*===============================

   NETWORK OPERATIONS

 ===============================*/

let requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://spreadsheets.google.com/feeds/list/1t0qkcAYCxxrVNQ3TpLGhP3ovSpSgrcyShWTxNN_8zNE/od6/public/values?alt=json", requestOptions)
    .then(response => response.json()) // This parses date from string to object
    .then(result => {
        // console.log(result) // This provides us access to the parse data]
        let projects = result.feed.entry.map(project => {
            // console.log('project', project.gsx$title.$t)
            return {
                title: project.gsx$title.$t,
                description: project.gsx$description.$t,
                icon: project.gsx$projecticon.$t,
                repoURL: project.gsx$url.$t,
                youtubeURL: project.gsx$url.$t,
                article: project.gsx$url.$t
            }
        })
        // console.log(projects)
        app(projects)
    })
    .catch(error => console.log('error', error));



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
    const $cardContainer = buildCardContainer(project)
    const $projectNameBanner = buildCardBanner(project)

    $cardContainer.append($projectNameBanner)

    return $cardContainer
}

/*===============================

    Build card container

    <div class="project" style="background-image: url(${project.icon});">

    </div>
 ===============================*/
function buildCardContainer(project) {

    const $cardContainer = $('<div>')
    $cardContainer.addClass("project").css({
        "background-image": `url(${project.icon})`
    })

    $cardContainer.on('click', findProject)

    return $cardContainer
}

/*===============================

    Build card banner

    <div class=projectName>
        <h3>Project Title</h3>
    </div>
 ===============================*/
function buildCardBanner(project) {
    const $projectNameBanner = $('<div>')
    $projectNameBanner.addClass("projectName")

    const $projectName = $('<h3>')
    $projectName.text(project.title)

    $projectNameBanner.append($projectName)

    return $projectNameBanner
}

/*===============================

    Display project cards

    - Load project details onto screen.
    - Make a local copy of project object
 ===============================*/
function app(projects) {
    for(let i=0; i<projects.length; i++){
        projectArray.push(projects[i])
        $('#projectContentContainer').append(buildProjectCard(projects[i]))
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
        console.log("Searching...")
        if($(this).html().includes(projectArray[i].title)){
            console.log("Match found")
            loadDetailsModal(projectArray[i])
        }
    }
}

/*===============================

   Load details modal once project
   card has been clicked
 ===============================*/
function loadDetailsModal(singleProject) {
    console.log("Modal Loading", singleProject)
    let $modalBackground = buildModalBackground()
    let $modalDetails = buildModalDetails(singleProject)

    $modalBackground.append($modalDetails)
    $("#modal").append($modalBackground).css("display", "block")
}

/*===============================

    Build modal background

    <div id=popUpModal style=popUp object>

    </div>
 ===============================*/
function buildModalBackground(){
    const $divModal = $('<div>')
    $divModal.css(popUp)
    $divModal.attr(popUpAttr)

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

    const $divModalContent = buildModalContentContainer()
    const $h2ModalContent = buildModalHeaderText(currentProject)
    const $imgProject = buildModalImage(currentProject)
    const $pModalContent = buildModalDescription(currentProject)

    $divModalContent.append($h2ModalContent)
    $divModalContent.append($imgProject)
    $divModalContent.append($pModalContent)

    return $divModalContent
}

/*===============================

    Build Modal: modal content container
    <div id=modalContent style=popUpContentAttr Object>

    </div>
 ===============================*/
function buildModalContentContainer() {
    const $divModalContent = $('<div>')
    $divModalContent.css(popUpBox)
    $divModalContent.attr(popUpContentAttr)

    return $divModalContent
}

/*===============================

    Build Modal: header text

    <h2>Project Title <span class="year"><img src=closeIcon></span></h2>
 ===============================*/
function buildModalHeaderText(currentProject) {
    const $h2ModalContent = $('<h2>')
    $h2ModalContent.text(currentProject.title)
    $h2ModalContent.css(popUpBoxHeader)

    const $closeButton = buildModalCloseButton()

    $h2ModalContent.append($closeButton)
    console.log("buildModalHeaderText Called")
    return $h2ModalContent
}

/*===============================

    Build Modal: close button

    <span class="year"><img src=closeIcon></span>
 ===============================*/
function buildModalCloseButton() {
    const $closeButton = $('<span>').addClass("year")

    // Can't have closeModal with () our it executes immed.
    $closeButton.on("click", closeModal =>{
        $('#modal').css("display","none")
    })

    const $closeIcon = $('<img>').attr({
        "src":"https://res.cloudinary.com/doaftkgbv/image/upload/v1583872051/close-24px_vgg9zk.svg"
    })

    $closeButton.append($closeIcon)
    console.log("buildModalCloseButton Called")
    return $closeButton
}

/*===============================

    Build Modal: Image

    <img src=project icon>
 ===============================*/
function buildModalImage(currentProject) {
    const $imgProject = $('<img>')
    $imgProject.attr({
        "src":currentProject.icon,
        "id":"selectedProject"
    })
    $imgProject.css(imgContainer)
    $imgProject.on("click", linkToProject => {
        let win = window.open(currentProject.repoURL);
        win.focus();
    })

    return $imgProject
}

/*===============================

    Build Modal: Description

    <p>Description</p>
 ===============================*/
function buildModalDescription(currentProject) {
    const $pModalContent = $('<p>')
    $pModalContent.text(currentProject.description)
    $pModalContent.css(popUpBoxMessage)

    return $pModalContent
}





