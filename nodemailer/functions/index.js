// const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: functions.config().mail.email,
        pass: functions.config().mail.pass
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        const nameV = req.body.name;
        const emailV = req.body.email;
        const txt = req.body.msg;

        const mailOptions = {
            from: 'Requested Demo <froot.web@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: 'mailto:froot.web@gmail.com',
            subject: 'Requested Demo from website', // email subject
            html: `<p style="font-size: 16px;"> Name: ${nameV}</p>
            <p style="font-size: 16px;"> EmailId: ${emailV}</p>
            <p style="font-size: 20px;"> ${txt}</p>`
            // email content in HTML
        };

        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            console.log(info);
            
            if (erro) {
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });
});