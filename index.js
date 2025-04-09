import sendMail from './utils/send-mail.js';
import sendTele from './utils/send-tele.js';

(async () => {
    // await sendMail(['phamtranlinhchi02@gmail.com', 'chi.pham@svtech.com.vn'], 'Test email', 'This is a test email from Node.js!')
    await sendTele('Test telegram message!')
})()