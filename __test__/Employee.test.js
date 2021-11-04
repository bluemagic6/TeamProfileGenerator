const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee')

// Test the entire instance 

test('can start the employee class', () => {
    const emp = new Employee()
  expect(typeof(emp)).toBe('object');
});

// testing arguments 
test('setting the name argument', () => {
    const name = 'Johnny';
    const emp = new Employee(name);
    expect (emp.name).toBe(name);
})

test('setting id argument', () => {
    const id = 1232;
    const emp = new Employee('Johnny', id);
    expect (emp.id).toBe(id);
})

test('setting the email argument', () => {
    const email = 'whatever@gmail.com';
    const emp = new Employee('Johnny', 1232, email);
    expect (emp.email).toBe(email);
})
// testing arguments 
test('testing get name method', () => {
    const name = 'Johnny';
    const emp = new Employee(name);
    expect (emp.getName()).toBe(name);
})

test('testing get id method', () => {
    const id = 1232;
    const emp = new Employee('Johnny', id);
    expect (emp.getId()).toBe(id);
})

test('testing get email method', () => {
    const email = 'whatever@gmail.com';
    const emp = new Employee('Johnny', 1232, email);
    expect (emp.getEmail()).toBe(email);
})
test('testing get email method', () => {
    const role = 'Employee';
    const emp = new Employee('Johnny', 1232, 'whatever@gmail.com');
    expect (emp.getRole()).toBe(role);
})

