import sendMail from './utils/send-mail.js';

(async () => {
    await sendMail('phamtranlinhchi02@gmail.com', 'Test email', 'This is a test email from Node.js!')
})()