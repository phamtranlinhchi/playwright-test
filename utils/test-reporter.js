import sendMail from './send-mail.js';

export default class TestReporter {
  failedTests = [];

  onTestEnd(test, result) {
    if (result.status === 'failed') {
      this.failedTests.push({
        title: test.title,
        error: result.error?.message || 'Unknown error',
      });
    }
  }

  async onEnd() {
    try {
      if (this.failedTests.length > 0) {
        const receivers = [
          'phamtranlinhchi02@gmail.com',
          'chi.pham@svtech.com.vn',
        ];
        const subject = '🔴 Playwright Test Failures Detected';
        const body = this.failedTests
          .map((t, i) => {
            return `#${i + 1}: ${t.title}\nError: ${t.error}\n`;
          })
          .join('\n');

        await sendMail(receivers, subject, body);
      }
    } catch (error) {
      console.error('Error handle test end:', error);
    }
  }
}
