import test from 'ava';

import { depthFirstTraversal } from './depth-first-traversal';

test('depthFirstTraversal', (t) => {
  const tree = {
    id: 1,
    children: [{ id: 2 }, { id: 3 }],
  };
  t.deepEqual(
    depthFirstTraversal(tree, 'children').map((node) => node.id),
    [1, 2, 3]
  );
});
