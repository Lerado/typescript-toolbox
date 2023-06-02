export type SimpleChange<T> = {
  readonly firstChange: boolean;
  readonly previousValue: T;
  readonly currentValue: T;
} & { readonly isFirstChange: () => boolean };

type CallbackFunction<T> = (value: T, change: SimpleChange<T>) => unknown;

/**
 * Invokes a callback method when a class property is set
 *
 * ### Usage
 * ```ts
 * import { OnChange } from '@lerado/typescript-toolbox';
 *
 * class MyClass {
 *  &#64;OnChange(function(changes) {
 *    console.log(changes);
 *  })
 *  property1 = 0;
 *
 *  &#64;OnChange(function(changes) {
 *    console.log(changes);
 *  })
 *  property1 = 0;
 * }
 * ```
 * @param callback - the callback function
 */
const OnChange = <T = unknown>(
  callback: CallbackFunction<T> | string
): CallableFunction => {
  const cachedValueKey = Symbol();
  const isFirstChangeKey = Symbol();

  return (target: Record<string, unknown>, key: PropertyKey) => {
    const callbackFn: CallbackFunction<T> =
      typeof callback === 'string'
        ? (target[callback] as CallbackFunction<T>)
        : callback;
    if (!callbackFn) {
      return new Error(
        `Cannot find method ${callback} in class ${target.constructor.name}`
      );
    }

    return Object.defineProperty(target, key, {
      set: function (value) {
        // Change status of "isFirstChange"
        this[isFirstChangeKey] = this[isFirstChangeKey] === undefined;

        // Do nothing if old value is the same as new value
        if (!this[isFirstChangeKey] && this[cachedValueKey] === value) {
          return;
        }

        const oldValue = this[cachedValueKey];
        this[cachedValueKey] = value;
        const change: SimpleChange<T> = {
          firstChange: this[isFirstChangeKey],
          previousValue: oldValue,
          currentValue: this[cachedValueKey],
          isFirstChange: () => this[isFirstChangeKey],
        };

        callbackFn.call(this, this[cachedValueKey], change);
      },

      get: function () {
        return this[cachedValueKey];
      },
    });
  };
};

export { OnChange };
