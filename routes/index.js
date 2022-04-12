const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "HOME" });
});

router.post("/home/send", function (req, res, next) {

  //EMAIL SENDER
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "yourmail@gmail.com",
      pass: "yourmailpassword",
    },
  });

  //MULTIPLE MAILS
  var mailList = ["firstmail@email.com", "targetmail@email.com"];

  //MAIL OPTIONS  
  var mailOptions = {
    from: "Mryesiller <youremail@gmail.com>",
    to: mailList,
    subject: "Nodemailer Test",
    text: `Form details Name: ${req.body.name} Email: ${req.body.email} Message: ${req.body.message}`,
    html:
      "<p>Submit details...</p><ul><li>Name: " +
      req.body.name +
      "</li><li>Email: " +
      req.body.email +
      "</li><li>Message: " +
      req.body.message +
      "</li></ul>",
  };

  //SEND MAIL
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.redirect("/");
    } else {
      console.log("Message Sent: " + info.response);
      res.locals.message = "Email send";     
      res.render('success')
      
    }
  });
});


module.exports = router;
