const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    // Create a spy on Utils.calculateNumber
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, 'SUM', 100, 20);

    spy.restore();
  });
});
