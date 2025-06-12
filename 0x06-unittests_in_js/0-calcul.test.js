const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
  it("should return 4 when inputs are 1 and 3", () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it("should return 5 when inputs are 1 and 3.7", () => {
    expect.assertions(1);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it("should return 5 when inputs are 1.2 and 3.7", () => {
    expect.assertions(1);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it("should return 6 when inputs are 1.5 and 3.7", () => {
    expect.assertions(1);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it("should return 5 when inputs are 1.4 and 3.6", () => {
    expect.assertions(1);
    assert.strictEqual(calculateNumber(1.4, 3.6), 5);
  });

  it("should return -4 when inputs are -1.2 and -2.5", () => {
    expect.assertions(1);
    assert.strictEqual(calculateNumber(-1.2, -2.5), -4);
  });

  it("should return 0 when both are 0.4 and 0.4", () => {
    expect.assertions(1);
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
  });

  it("should return 2 when inputs are 0.5 and 0.5", () => {
    expect.assertions(1);
    assert.strictEqual(calculateNumber(0.5, 0.5), 2);
  });
});
