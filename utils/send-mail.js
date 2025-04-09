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
          user: process.env.ADMIN_MAIL,
          pass: process.env.ADMIN_MAIL_PASSWORD,
        },
      })
    );

    await transporter.sendMail({
      from: process.env.ADMIN_MAIL,
      to: to,
      subject: subject,
      html: htmlContent,
    });
    // console.log(info);
    console.log('successfully send email');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
