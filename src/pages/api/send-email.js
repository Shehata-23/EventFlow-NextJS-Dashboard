import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, phone, email, subject, message } = req.body;

    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      let info = await transporter.sendMail({
        from: `"Contact Form" <${process.env.SMTP_USER}>`,
        to: process.env.RECIPIENT_EMAIL, 
        subject: `New Contact Form Submission: ${subject}`,
        text: `
          Name: ${name}
          Phone: ${phone}
          Email: ${email}
          Subject: ${subject}
          Message: ${message}
        `,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      console.log("Message sent: %s", info.messageId);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ error: "Error sending email", details: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
