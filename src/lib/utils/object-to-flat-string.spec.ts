import test from 'ava';

import { objectToFlatString } from './object-to-flat-string';

test('objectToFlatString', (t) => {
  t.is(
    objectToFlatString({
      id: 123,
      name: 'Mr. Smith',
      profile: { age: 23, linkedInUrl: null },
      deletedAt: null,
    }),
    '123mr. smith23'
  );
});
