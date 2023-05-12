require("dotenv").config()
const nodemailer = require("nodemailer")

const sendEmail = async (dataEmail) => {
  try {
    // config nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // send email
    transporter
      .sendMail(dataEmail)
      .then((info) => {
        console.log("Email sent successfully.")
        console.log(info)
      })
      .catch((error) => {
        console.log(error)
      })
  } catch (error) {
    console.log(error)
  }
}

module.exports = sendEmail
