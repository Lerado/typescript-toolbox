/* eslint-disable @typescript-eslint/no-unused-vars */
import test from 'ava';

import { OnChange, SimpleChange } from './onchange.decorator';

class TestClass {
  callbackExecution = 0;
  latestChange: SimpleChange<number> | null = null;

  protected _callback(_newValue: number, changes: SimpleChange<number>) {
    this.callbackExecution++;
    this.latestChange = changes;
  }
}

/**
 * Checks if OnChange decorator throws an error
 * when callback function can not be found using its name
 */
test('OnChange with function name should fail if function not found', (t) => {
  class TestClassChild extends TestClass {
    @OnChange('functionNotFound') property = 0;
  }

  t.throws(() => new TestClassChild());
});

/**
 * Checks if OnChange decorator works as expected with a callback function name
 */
test('OnChange with function name', (t) => {
  class TestClassChild extends TestClass {
    @OnChange('_callback') property = 0;
  }

  const instance = new TestClassChild();

  // Check initial values
  t.is(instance.property, 0);
  t.is(instance.callbackExecution, 1);
  t.not(instance.latestChange, null);
  t.true(instance.latestChange?.isFirstChange());
  t.true(instance.latestChange?.firstChange);
  t.is(instance.latestChange?.previousValue, undefined);
  t.is(instance.latestChange?.currentValue, 0);

  // Change
  instance.property = 1;

  // Check state after change
  t.is(instance.property, 1);
  t.is(instance.callbackExecution, 2);
  t.not(instance.latestChange, null);
  t.false(instance.latestChange?.isFirstChange());
  t.false(instance.latestChange?.firstChange);
  t.is(instance.latestChange?.previousValue, 0);
  t.is(instance.latestChange?.currentValue, 1);
});

/**
 * Checks if OnChange decorator works as expected with a callback function
 */
test('OnChange with function', (t) => {
  class TestClassChild extends TestClass {
    @OnChange<number>(function (this: TestClassChild, newValue, changes) {
      this._callback(newValue, changes);
    })
    property = 0;
  }

  const instance = new TestClassChild();

  // Check initial values
  t.is(instance.property, 0);
  t.is(instance.callbackExecution, 1);
  t.not(instance.latestChange, null);
  t.true(instance.latestChange?.isFirstChange());
  t.true(instance.latestChange?.firstChange);
  t.is(instance.latestChange?.previousValue, undefined);
  t.is(instance.latestChange?.currentValue, 0);

  // Change
  instance.property = 1;

  // Check state after change
  t.is(instance.property, 1);
  t.is(instance.callbackExecution, 2);
  t.not(instance.latestChange, null);
  t.false(instance.latestChange?.isFirstChange());
  t.false(instance.latestChange?.firstChange);
  t.is(instance.latestChange?.previousValue, 0);
  t.is(instance.latestChange?.currentValue, 1);
});

/**
 * Checks if OnChange decorator only reacts to value changes
 */
test('OnChange should only react to changes', (t) => {
  class TestClassChild extends TestClass {
    @OnChange<number>(function (this: TestClassChild, newValue, changes) {
      this._callback(newValue, changes);
    })
    property = 0;
  }

  const instance = new TestClassChild();

  // Callback should have executed once at this point (initialization)
  t.is(instance.callbackExecution, 1);

  // Set same value to property
  instance.property = 0;

  // Callback execution counter should be the same
  t.is(instance.callbackExecution, 1);
});
