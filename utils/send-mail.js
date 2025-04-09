import nodeMailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import dotenv from 'dotenv';

dotenv.config();

export default async (to, subject, htmlContent) => {
  try {
    
    const transporter = nodeMailer.createTransport(
      smtpTransport({
        // host: 'smtp.googlemail.com',
        service: 'gmail',
        port: 587,
        secure: true,
        auth: {
          user: process.env.MAIL_SENDER,
          pass: process.env.MAIL_SENDER_PASSWORD,
        },
      })
    );

    await transporter.sendMail({
      from: process.env.MAIL_SENDER,
      to: to,
      subject: subject,
      html: htmlContent,
    });
    // console.log(info);
    console.log('Successfully send email to: ', to);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
