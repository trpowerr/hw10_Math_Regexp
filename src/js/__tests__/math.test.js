import { person } from '../math';

function checkNewAttack () {
  let att = person.newAttack(2);
  if (att == 90) {
      return true
  }
}

function checkStoned () {
  let att = person.stoned(2);
  if (att == 85) {
      return true
  }
}


test('check ATTACK', () => {
  let received = checkNewAttack();
  let expected = true;
  expect(received).toBe(expected);
});

test('check STONED', () => {
  let received = checkStoned();
  let expected = true;
  expect(received).toBe(expected);
});


