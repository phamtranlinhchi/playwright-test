import sendMail from './send-mail.js';
import sendTele from './send-tele.js';
import testInfo from './test-info.js';

import stripAnsi from 'strip-ansi';
import dotenv from 'dotenv';

dotenv.config();

const RECEIVERS = process.env.MAIL_RECEIVERS;

export default class TestReporter {
  failedTests = [];

  onTestEnd(test, result) {      
    if (result.status !== 'passed') {
      const match = test.location.file.match(/\\tests\\(.+?)\.spec\.js$/);
      const web = match ? match[1] : null;
      this.failedTests.push({
        url: testInfo[web].testUrl,
        username: testInfo[web].testUsername,
        title: test.title,
        error: stripAnsi(result.error?.message) || 'Unknown error',
      });
    }
  }

  async onEnd() {
    try {
      if (this.failedTests.length > 0) {
        // const receivers = RECEIVERS?.trim().split(',').map((email) => email.trim());
        // const subject = '🔴 Playwright Test Failures Detected';
        // const body = this.failedTests
        //   .map((t, i) => {
        //     return `#${i + 1}: ${t.title}<br />Failed: ${t.error}<br /><br />`;
        //   })
        //   .join('\n');
        
        const body = `*🔴 Internal Auto Check Fail*\n${this.failedTests
          .map((t, i) => {
            return `\n#${i + 1}: *${t.title}*\nUrl: ${t.url}\nUsername: ${t.username}\n${t.error}\n`;
          })
          .join('\n')}`          
          
        await Promise.all([
          // sendMail(receivers, subject, body),
          await sendTele(body),
        ]).catch((error) => {
          console.error('Error sending alerts:', error);
        });
      }
    } catch (error) {
      console.error('Error handle test end:', error);
    }
  }
}
