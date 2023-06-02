/**
 * Serializes an object.
 * The idea is to serialize each object to a queryable string.
 * This is very useful for search engines.
 *
 * ### Usage
 * ```ts
 * import { objectToFlatString } from '@lerado/typescript-toolbox';
 *
 * objectToFlatString({ id: 123, name: 'Mr. Smith', age: 23 });
 * // => to 123mr. smith23.
 * ```
 * @param object
 */
const objectToFlatString = (object: Record<string, unknown>): string => {
  // A treatment stack
  const stack = [];
  let result = '';

  // Initialization
  for (const key in object) {
    if (object[key] !== null) {
      stack.push(object[key]);
    }
  }
  stack.reverse(); // Just to pop in the same order of the keys

  // Iteration and serialization
  while (stack.length) {
    const value: unknown = stack.pop();

    if (typeof value === 'object') {
      for (const key in value) {
        const keyValue = (value as Record<string, number>)[key];
        if (keyValue !== null) {
          stack.push(keyValue);
        }
      }
    } else {
      result += String(value).toLowerCase();
    }
  }

  return result;
};

export { objectToFlatString };
