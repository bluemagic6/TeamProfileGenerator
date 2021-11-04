const Intern = require("../lib/intern");


test('can start the intern class', () => {
    const emp = new Intern()
  expect(typeof(emp)).toBe('object');
});
test('can start the school argument', () => {
    const school = "UNT"
    const emp = new Intern(school)
  expect(emp.school).toBe(school);
});