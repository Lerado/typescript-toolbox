import test from 'ava';

import { depthFirstTraversal } from './depth-first-traversal';

test('depthFirstTraversal has correct output', (t) => {
  const tree = {
    id: 1,
    children: [
      { id: 2, children: [{ id: 4 }] },
      { id: 3, children: [{ id: 5 }] },
    ],
  };
  t.log(depthFirstTraversal(tree, 'children').map((node) => node.id));
  t.deepEqual(
    depthFirstTraversal(tree, 'children').map((node) => node.id),
    [1, 2, 4, 3, 5]
  );
});

test('depthFirstTraversal callback', (t) => {
  const tree = {
    id: 1,
    children: [
      { id: 2, children: [{ id: 4 }] },
      { id: 3, children: [{ id: 5 }] },
    ],
  };
  let callbackExecutionCounter = 0;
  depthFirstTraversal(tree, 'children', () => callbackExecutionCounter++);
  // Callback should have executed 5 times
  t.is(callbackExecutionCounter, 5);
});
