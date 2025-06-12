const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const url = 'http://localhost:7865/';

  it('should return status code 200', (done) => {
    request.get(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return "Welcome to the payment system"', (done) => {
    request.get(url, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865/cart';

  it('should return 200 for numeric cart ID', (done) => {
    request.get(`${baseUrl}/12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 for non-numeric cart ID', (done) => {
    request.get(`${baseUrl}/hello`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments', () => {
  const url = 'http://localhost:7865/available_payments';

  it('should return correct payment methods object', (done) => {
    request.get({ url, json: true }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login', () => {
  const url = 'http://localhost:7865/login';

  it('should return Welcome Betty when userName is Betty', (done) => {
    request.post({
      url,
      json: true,
      body: { userName: 'Betty' }
    }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('should return 400 when userName is missing', (done) => {
    request.post({
      url,
      json: true,
      body: {}
    }, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });
});
