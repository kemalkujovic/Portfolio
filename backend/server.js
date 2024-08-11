require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;
  console.log(name, email, message);

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact form submission from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error occurred:", error);
      return res.status(500).send(error.toString());
    }
    console.log("Email sent:", info.response);
    res.status(200).send("Message sent successfully!");
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
