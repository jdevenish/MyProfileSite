/*
        Update sheets code based on below github repo
        https://github.com/jamiewilson/form-to-google-sheets

        I added the disabling and enabling of the button to prevent multiple submissions

 */
const scriptURL = 'https://script.google.com/macros/s/AKfycbyPNWeOesFLqYzHv-p9Q0epeXdSSaXTzduBCLLdRUv_QNxdApc/exec'

const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {

    $("#submit").attr("disabled","true")
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            console.log('Success!', response)
            $("#submit").removeAttr("disabled")
            successMessage()
        })
        .catch(error => {
            console.error('Error!', error.message)
            failureMessage()
        })
})



function successMessage() {
    const $background = buildModalBackground()
    const $messageContainer = buildModalContentContainer()
    const $closeButton = buildModalCloseButton("#formMessage")
    const $message = "<h2>Message Recieved!</h2><br><h2>I'll be in touch soon!</h2>"

    $messageContainer.append($closeButton)
    $messageContainer.append($message)
    $background.append($messageContainer)

    $("#formMessage").append($background)
}

function failureMessage() {
    const $background = buildModalBackground()
    const $messageContainer = buildModalContentContainer()
    const $closeButton = buildModalCloseButton("#formMessage")
    const $message = "<h2>Oh No! Something went wrong!</h2><br><h2>Please try again soon!</h2>"

    $messageContainer.append($closeButton)
    $messageContainer.append($message)
    $background.append($messageContainer)

    $("#formMessage").append($background)
}