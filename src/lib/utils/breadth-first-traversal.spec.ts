import test from 'ava';

import { breadthFirstTraversal } from './breadth-first-traversal';

test('breadthFirstTraversal has correct output', (t) => {
  const tree = {
    id: 1,
    children: [
      { id: 2, children: [{ id: 4 }] },
      { id: 3, children: [{ id: 5 }] },
    ],
  };
  t.log(breadthFirstTraversal(tree, 'children').map((node) => node.id));
  t.deepEqual(
    breadthFirstTraversal(tree, 'children').map((node) => node.id),
    [1, 2, 3, 4, 5]
  );
});

test('breadthFirstTraversal callback', (t) => {
  const tree = {
    id: 1,
    children: [
      { id: 2, children: [{ id: 4 }] },
      { id: 3, children: [{ id: 5 }] },
    ],
  };
  let callbackExecutionCounter = 0;
  breadthFirstTraversal(tree, 'children', () => callbackExecutionCounter++);
  // Callback should have executed 5 times
  t.is(callbackExecutionCounter, 5);
});
