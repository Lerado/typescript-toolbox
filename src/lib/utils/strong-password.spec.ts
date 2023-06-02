import test from 'ava';

import { isStrongPassword } from './strong-password';

test('isStrongPassword', (t) => {
  t.false(isStrongPassword('123456'));
  t.false(isStrongPassword('password123'));
  t.false(isStrongPassword('Password123'));
  t.true(isStrongPassword('Password!123'));
});
