import nodeMailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import dotenv from 'dotenv';

dotenv.config();

const MAIL_SENDER = process.env.MAIL_SENDER;
const MAIL_SENDER_PASSWORD = process.env.MAIL_SENDER_PASSWORD;

export default async (to, subject, htmlContent) => {
  try {
    
    const transporter = nodeMailer.createTransport(
      smtpTransport({
        // host: 'smtp.googlemail.com',
        service: 'gmail',
        port: 587,
        secure: true,
        auth: {
          user: MAIL_SENDER,
          pass: MAIL_SENDER_PASSWORD,
        },
      })
    );

    await transporter.sendMail({
      from: MAIL_SENDER,
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
