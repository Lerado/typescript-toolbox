import test from 'ava';

import { objectToFlatString } from './object-to-flat-string';

test('objectToFlatString', (t) => {
  t.is(
    objectToFlatString({ id: 123, name: 'Mr. Smith', age: 23 }),
    '123mr. smith23'
  );
});
