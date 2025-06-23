const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/send-guide", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email required" });

  
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your_email@gmail.com",
      pass: "your_email_password_or_app_password",
    },
  });

  try {
    await transporter.sendMail({
      from: '"Lychee Share" <your_email@gmail.com>',
      to: email,
      subject: "Your Lychee Share Quick Start Guide",
      text: "Thank you for downloading Lychee Share! Here is your quick start guide.",
      
      attachments: [
        // { filename: "guide.pdf", path: "./path/to/guide.pdf" }
      ],
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = router;