/*
        Update sheets code based on tutorial in below github repo
        https://github.com/jamiewilson/form-to-google-sheets

        I added:
         - Form validation
         - disabling and enabling of the Submit button to prevent multiple accidental submissions

         TODO:
          - Add logic to tell user which fields are blank
          - Fix invalid data check. Not loading modal
          - Break functions into smaller ones

 */
const scriptURL = "https://script.google.com/macros/s/AKfycbyPNWeOesFLqYzHv-p9Q0epeXdSSaXTzduBCLLdRUv_QNxdApc/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", e => {

    $("#submit").attr("disabled","true");

    if(form["name"].value === "" || form["email"].value === "" || form["message"].value === ""){
        invalidMessage()
        $("#submit").removeAttr("disabled");
        console.log("data missing")
    } else{
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form)})
            .then(response => {
                console.log("Success!", response);
                $("#submit").removeAttr("disabled");
                successMessage()
            })
            .catch(error => {
                console.error("Error!", error.message);
                failureMessage()
                $("#submit").removeAttr("disabled");
            })
    }
});

/*
    <div id=popUpModal style=popUp object>
        <div id=modalContent style=popUpContentAttr Object>
            <span class="year"><img src=closeIcon></span>
            <div>
                <h2> Message Header </h2>
                <h2> Message Contents </h2>
                <h2> Message Farewell </h2>
            </div>
        </div>
    </div>

 */

/*===============================

    Success Message

 ===============================*/
function successContent(){
    const $contentContainer = $('<div>');
    $contentContainer.css({
        "margin-top": "25px",
        "text-align": "center",
        "font-family": "\"Audiowide\", serif",
        "font-size": "22px"
    });

    const $messageHeader = "<h2>Message Received!</h2>";
    const $messageContent = $('<h2>')
    $messageContent.text("I'll be in touch soon.");
    $messageContent.css( {
        "margin-top":"50px",
        "margin-right": "25px",
        "font-size": "20px"
    });

    const $messageThanks = $('<h2>')
    $messageThanks.text("Thanks!");
    $messageThanks.css( {
        "margin-top":"10px",
        "margin-right": "25px",
        "font-size": "20px"
    });

    $contentContainer.append($messageHeader)
    $contentContainer.append($messageContent)
    $contentContainer.append($messageThanks)

    return $contentContainer
}

function successMessage() {
    const $background = buildModalBackground();
    const $messageContainer = buildModalContentContainer();
    $messageContainer.css({
        "width":"30%",
        "height": "200px"
    });
    const $closeButton = buildModalCloseButton("#formMessage");
    const $contentContainer = successContent();

    $messageContainer.append($closeButton);
    $messageContainer.append($contentContainer);
    $background.append($messageContainer);

    $("#formMessage").append($background)
}

/*===============================

    Failure Message

 ===============================*/
function failureContent(){
    const $contentContainer = $('<div>');
    $contentContainer.css({
        "margin-top": "25px",
        "text-align": "center",
        "font-family": "\"Audiowide\", serif",
        "font-size": "22px"
    });

    const $messageHeader = "<h2>Something went wrong!</h2>";
    const $messageContent = $('<h2>')
    $messageContent.text("Please try again soon.");
    $messageContent.css( {
        "margin-top":"50px",
        "margin-right": "25px",
        "font-size": "20px"
    });

    const $messageThanks = $('<h2>')
    $messageThanks.text("Thanks!");
    $messageThanks.css( {
        "margin-top":"10px",
        "margin-right": "25px",
        "font-size": "20px"
    });

    $contentContainer.append($messageHeader)
    $contentContainer.append($messageContent)
    $contentContainer.append($messageThanks)

    return $contentContainer
}

function failureMessage() {
    const $background = buildModalBackground();
    const $messageContainer = buildModalContentContainer();
    $messageContainer.css({
        "width":"30%",
        "height": "200px"
    });
    const $closeButton = buildModalCloseButton("#formMessage");
    const $contentContainer = failureContent();

    $messageContainer.append($closeButton);
    $messageContainer.append($contentContainer);
    $background.append($messageContainer);

    $("#formMessage").append($background)
}


/*===============================

    Incomplete Data

 ===============================*/
function invalidContent() {
    const $contentContainer = $('<div>');
    $contentContainer.css({
        "margin-top": "25px",
        "text-align": "center",
        "font-family": "\"Audiowide\", serif",
        "font-size": "22px"
    });

    const $messageHeader = "<h2>Something went wrong!</h2>";
    const $messageContent = $('<h2>')
    $messageContent.text("One of the fields is missing data");
    $messageContent.css( {
        "margin-top":"50px",
        "margin-right": "25px",
        "font-size": "20px"
    });

    const $messageThanks = $('<h2>')
    $messageThanks.text("Thanks!");
    $messageThanks.css( {
        "margin-top":"10px",
        "margin-right": "25px",
        "font-size": "20px"
    });

    $contentContainer.append($messageHeader)
    $contentContainer.append($messageContent)
    $contentContainer.append($messageThanks)

    return $contentContainer
}

function invalidMessage() {
    const $background = buildModalBackground();
    const $messageContainer = buildModalContentContainer();
    $messageContainer.css({
        "width":"30%",
        "height": "200px"
    });
    const $closeButton = buildModalCloseButton("#formMessage");
    const $contentContainer = invalidContent();

    $messageContainer.append($closeButton);
    $messageContainer.append($contentContainer);
    $background.append($messageContainer);

    $("#formMessage").append($background)
}

