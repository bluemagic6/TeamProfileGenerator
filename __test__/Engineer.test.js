const Engineer = require('../lib/Engineer')

test('can start the engineer class', () => {
    const emp = new Engineer()
  expect(typeof(emp)).toBe('object');
});
test('can start the github argument', () => {
    const gh = 'bluemagic6'
    const emp = new Engineer(gh)
  expect(emp.gh).toBe(gh);
});