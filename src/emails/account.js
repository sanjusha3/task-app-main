const nodemailer = require('nodemailer')
require('dotenv').config()

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASS
    }
});
var email, name
const welcomeEmail = (email, name) => {
    var mailOptions = {
        from: 'snagwani@argusoft.com',
        to: email,
        subject: 'Thanks for joining our platform!',
        text: `Welcome ${name}.`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

const cancellationEmail = (email, name) => {
    var mailOptions = {
        from: 'snagwani@argusoft.com',
        to: email,
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}.Come back soon!`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {
    welcomeEmail,
    cancellationEmail
}

// const nodemailer = require('nodemailer');

// let mailTransporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.NODEMAILER_EMAIL,
//         pass: process.env.NODEMAILER_PASS
//     }
// });

// const mail = "sanjusha.nagwani50@gmail.com"

// mailDetails = {
//     from: process.env.NODEMAILER_EMAIL,
//     to: email,
//     subject: 'Test mail',
//     text: `Your package from ${brand.toUpperCase()} has arrived. Please collect it from reception.`
// };

// mailTransporter.sendMail(mailDetails, function (err, data) {
//     if (err) {
//         console.log(mailDetails)
//         console.log('Error Occurs', err);
//     } else {
//         console.log('Email sent successfully');
//     }
// });
