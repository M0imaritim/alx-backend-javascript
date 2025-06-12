const assert = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./5-payment');

describe('sendPaymentRequestToAPI', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', () => {
    sendPaymentRequestToAPI(100, 20);
    assert.strictEqual(consoleSpy.calledOnce, true);
    assert.strictEqual(consoleSpy.calledWithExactly('The total is: 120'), true);
  });

  it('should log "The total is: 20" when called with 10 and 10', () => {
    sendPaymentRequestToAPI(10, 10);
    assert.strictEqual(consoleSpy.calledOnce, true);
    assert.strictEqual(consoleSpy.calledWithExactly('The total is: 20'), true);
  });
});
