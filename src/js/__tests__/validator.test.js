import { Validator } from '../validator';


test('check valid username', () => {
  const newUser = new Validator();
  let received = newUser.validateUsername('mixazbubl');
  let expected = 'mixazbubl';
  expect(received).toBe(expected);
});

test('should throw Error Wrong user name!', () => {
  const newWrongUser = new Validator();

  expect(() => { newWrongUser.validateUsername('-mixazbubl-'); }).toThrow(new Error('Wrong user name!'));
});