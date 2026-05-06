import * as functions from '../code-to-unit-test/unit-test-me.js';

// isPhoneNumber
test('valid phone number with area code and dashes', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('valid phone number with parentheses', () => {
  expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('invalid phone number - too short', () => {
  expect(functions.isPhoneNumber('123-456')).toBe(false);
});
test('invalid phone number - letters', () => {
  expect(functions.isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail
test('valid email', () => {
  expect(functions.isEmail('test@example.com')).toBe(true);
});
test('valid email with underscores', () => {
  expect(functions.isEmail('my_email@domain.org')).toBe(true);
});
test('invalid email - missing @', () => {
  expect(functions.isEmail('testexample.com')).toBe(false);
});
test('invalid email - missing domain', () => {
  expect(functions.isEmail('test@')).toBe(false);
});

// isStrongPassword
test('valid strong password', () => {
  expect(functions.isStrongPassword('Hello123')).toBe(true);
});
test('valid strong password with underscore', () => {
  expect(functions.isStrongPassword('abc_1234')).toBe(true);
});
test('invalid password - starts with number', () => {
  expect(functions.isStrongPassword('1abc1234')).toBe(false);
});
test('invalid password - too short', () => {
  expect(functions.isStrongPassword('abc')).toBe(false);
});

// isDate
test('valid date', () => {
  expect(functions.isDate('12/25/2023')).toBe(true);
});
test('valid date - single digit month and day', () => {
  expect(functions.isDate('1/1/2023')).toBe(true);
});
test('invalid date - wrong format', () => {
  expect(functions.isDate('2023-12-25')).toBe(false);
});
test('invalid date - missing year', () => {
  expect(functions.isDate('12/25/23')).toBe(false);
});

// isHexColor
test('valid 6 character hex color with hash', () => {
  expect(functions.isHexColor('#ff5733')).toBe(true);
});
test('valid 3 character hex color without hash', () => {
  expect(functions.isHexColor('fff')).toBe(true);
});
test('invalid hex color - invalid characters', () => {
  expect(functions.isHexColor('#gggggg')).toBe(false);
});
test('invalid hex color - wrong length', () => {
  expect(functions.isHexColor('#12345')).toBe(false);
});