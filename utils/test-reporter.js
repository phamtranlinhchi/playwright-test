import sendMail from './send-mail.js';
import sendTele from './send-tele.js';

import stripAnsi from 'strip-ansi';
import dotenv from 'dotenv';

dotenv.config();

const RECEIVERS = process.env.MAIL_RECEIVERS;

export default class TestReporter {
  failedTests = [];

  onTestEnd(test, result) {
    if (result.status === 'failed') {
      this.failedTests.push({
        title: `Test Case: ${test.title}`,
        error: stripAnsi(result.error?.message) || 'Unknown error',
      });
    }
  }

  async onEnd() {
    try {
      if (this.failedTests.length > 0) {
        const receivers = RECEIVERS?.trim().split(',').map((email) => email.trim());
        const subject = '🔴 Playwright Test Failures Detected';
        const body = this.failedTests
          .map((t, i) => {
            return `#${i + 1}: ${t.title}<br />Failed: ${t.error}<br /><br />`;
          })
          .join('\n');

        await Promise.all([
          sendMail(receivers, subject, body),
          // sendTele(body),
        ]).catch((error) => {
          console.error('Error sending alerts:', error);
        });
      }
    } catch (error) {
      console.error('Error handle test end:', error);
    }
  }
}
