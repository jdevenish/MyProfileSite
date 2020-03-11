let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'D1K%8idx@oW$7NW1'
    }
});

let mailOptions = {
    from: $("#emailAddr").value,
    to: 'justin.devenish@gmail.com',
    subject: `${$("#fullName").value} wants to say hi!`,
    text: $("#message").value
};

$("#submit").click(function() {
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});