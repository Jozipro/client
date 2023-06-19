const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Merci de remplir tous les champs." });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: process.env.MAIL_ADRESS,
      pass: process.env.MAIL_PASS,
    },
  });
  let mailOptions = {
    from: data.email,
    to: process.env.MAIL_ADRESS,
    subject: `message from ${data.name}`,
    html: `
      
                  <h3>Informations<h3/>
                  <ul>
                  <li>Name: ${data.name}<li/>
                  <li>Email: ${data.email}<li/>
                  </ul>
                  <h3>Message</h3>
                  <p>${data.message}<p/>
                  `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "Merci de remplir les champs." });
      res.status(200).json({ msg: "Reçu ! Je reviens vite vers vous !" });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
});
module.exports = router;
