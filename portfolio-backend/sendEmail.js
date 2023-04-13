const nodemailer = require('nodemailer');

require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'thehunterzeko@gmail.com',
    pass: `${process.env.PASSWORD}`,
  },
});

function sendEmail(username, email, message, phoneNumber, subject) {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: email,
      to: 'yazan.ali.dev@gmail.com',
      subject: `New message from ${username}`,
      text: `Name: ${username}\nEmail: ${email}\nPhone: ${phoneNumber}\nSubject: ${subject}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log('Email sent: ' + info.response);
        resolve(info);
      }
    });
  });
}

module.exports = { sendEmail };
