const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sendEmail } = require('./sendEmail');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: '*',
  })
);

// Define your message endpoint
app.post('/message', async (req, res) => {
  let sendinginfo;
  const { username, phoneNumber, email, subject, message } = req.body;

  sendEmail(username, email, message, phoneNumber, subject)
    .then((info) => {
      console.log('Email sent:', info.response);
      res.status(200).send({
        info,
        errMsg: null,
        successMsg:
          "Thank you for reaching out to me through my portfolio website. I've received your message and will do my best to get back to you as soon as possible.",
      });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      res.status(500).send({
        errMsg: error.message,
        successMsg: null,
      });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
