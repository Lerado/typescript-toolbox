/**
 * Performs a breadth-first traversal of a tree-like structure
 * and returns the march of the traversal
 *
 * ### Usage
 * ```ts
 * import { breadthFirstTraversal } from '@lerado/typescript-toolbox';
 *
 * const tree = {
 *  id: 1,
 *  children: [
 *    { id: 2, children: [ { id: 4 } ] },
 *    { id: 3, children: [ { id: 5 } ] }
 *  ]
 * };
 *
 * breadthFirstTraversal(tree, 'children', console.log);
 * // => console: 1, 2, 3, 4, 5
 * // => [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
 * ```
 * @param root - the tree's root object
 * @param childrenKey - accessor name for child elements
 * @param callback - a callback function to execute for each visited element
 */
const breadthFirstTraversal = <T extends Record<string, unknown>>(
  root: T,
  childrenKey: string,
  callable?: (visitedElement: T) => unknown
): Partial<T>[] => {
  const result: T[] = [];
  const queue: T[] = [];
  queue.push(root);

  while (queue.length) {
    const visitedElement: T = queue.shift() as T;
    // Visit
    if (callable) {
      callable(visitedElement);
    }
    result.push(visitedElement);
    // queue bloc children from right to left to preserve order
    const children: T[] = (visitedElement[childrenKey] as T[]) ?? [];
    for (let childIndex = 0; childIndex < children.length; childIndex++) {
      queue.push(children[childIndex]);
    }
  }

  return result;
};

export { breadthFirstTraversal };
