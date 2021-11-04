const Manager = require("../lib/Manager");


test('can start the Manager class', () => {
    const emp = new Manager()
  expect(typeof(emp)).toBe('object');
});