// let nodemailer = require('nodemailer');
//
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'youremail@gmail.com',
//         pass: 'D1K%8idx@oW$7NW1'
//     }
// });
//
// let mailOptions = {
//     from: $("#emailAddr").value,
//     to: 'justin.devenish@gmail.com',
//     subject: ,
//     text: $("#message").value
// };

$("#submit").click(function() {
    let to = 'justin.devenish@gmail.com'
    let subject = $('#message').attributes
    let body = $("#message").attr('value')
    console.log($('#fullName').attributes)

    //document.location.href = `mailto:justin.devenish@gmail.com?subject=${subject}&body=${body}`


});

// function sendMail()
// {
//     var yourMessage = document.getElementById("message").value;
//     var subject = document.getElementById("selectList").value;
//     document.location.href = "mailto:chrisgreg23@googlemail.com?subject="
//         + encodeURIComponent(subject)
//         + "&body=" + encodeURIComponent(yourMessage);
// }