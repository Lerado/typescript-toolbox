/**
 * Performs a depth-first traversal of a tree-like structure
 * and returns the march of the traversal
 *
 * ### Usage
 * ```ts
 * import { depthFirstTraversal } from '@lerado/typescript-toolbox';
 *
 * const tree = {
 *  id: 1,
 *  children: [
 *    { id: 2 },
 *    { id: 3 }
 *  ]
 * };
 *
 * depthFirstTraversal(tree, 'children', console.log);
 * // => console: 1, 2, 3
 * // => [{ id: 1 }, { id: 2 }, { id: 3 }]
 * ```
 * @param root - the tree's root object
 * @param childrenKey - accessor name for child elements
 * @param callback - a callback function to execute for each visited element
 */
const depthFirstTraversal = <T extends Record<string, unknown>>(
  root: T,
  childrenKey: string,
  callable?: (visitedElement: T) => unknown
): Partial<T>[] => {
  const result: T[] = [];
  const stack: T[] = [];
  stack.push(root);

  while (stack.length) {
    const visitedElement: T = stack.pop() as T;
    // Visit
    if (callable) {
      callable(visitedElement);
    }
    result.push(visitedElement);
    // Stack children in the reverse order to preserve original order
    const children: T[] = (visitedElement[childrenKey] as T[]) ?? [];
    for (let childIndex = children.length - 1; childIndex >= 0; childIndex--) {
      stack.push(children[childIndex]);
  }

  return result;
};

export { depthFirstTraversal };
