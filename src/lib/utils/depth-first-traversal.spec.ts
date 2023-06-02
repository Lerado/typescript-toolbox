import test from 'ava';

import { depthFirstTraversal } from './depth-first-traversal';

test('depthFirstTraversal has correct output', (t) => {
  const tree = {
    id: 1,
    children: [{ id: 2 }, { id: 3 }],
  };
  t.deepEqual(
    depthFirstTraversal(tree, 'children').map((node) => node.id),
    [1, 2, 3]
  );
});

test('depthFirstTraversal callback', (t) => {
  const tree = {
    id: 1,
    children: [{ id: 2 }, { id: 3 }],
  };
  let callbackExecutionCounter = 0;
  depthFirstTraversal(tree, 'children', () => callbackExecutionCounter++);
  // Callback should have executed 3 times
  t.is(callbackExecutionCounter, 3);
});
