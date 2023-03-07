const nodemailer = require("nodemailer");
const { EMAIL, PASSWORD } =process.env;

// async..await is not allowed in global scope, must use a wrapper
async function main(email) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "outlook",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: EMAIL, // generated ethereal user
      pass: PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Ape Apparel Co 👻" <apeapparelco@outlook.com>', // sender address
    to: email, // list of receivers
    subject: "Welcome!!", // Subject line
    text: "Thanks so much for joining us, we can't wait to get wild with you.", // plain text body
    html: "<b>Thanks so much for joining us, we can't wait to get wild with you.  You'll be the first to now about new products and sales!!</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = {
  main,
}
