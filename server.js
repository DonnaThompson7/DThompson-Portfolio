const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// at root, run `node server.js` to start this server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

// Service is case-sensitive; Also using only app-specific pwd here...
const contactEmail = nodemailer.createTransport({
  service: 'iCloud',
  auth: {
    user: "donnathompsonc@icloud.com",
    pass: "dztj-vplh-kftp-fdkv"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log('Could not setup email contact. Error is ', error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: "donnathompsonc@icloud.com",
    to: "donnathompsonc@icloud.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  console.log('Going to send: ', mail);
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log('tried to send email but failed with error: ', error);
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});