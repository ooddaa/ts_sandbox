/* Inverting a BinaryTree from 
Coding Interview with Dan Abramov
https://youtu.be/XEt09iK8IXs?t=1042
*/


/* 
from

  root
 /    \
A      B
| \    | \
Al Ar  Bl Br

to

  root
 /    \
B      A
| \    | \
Br Bl  Ar Al

*/

interface BinaryTree {
    name: string,
    children?: { left?: BinaryTree, right?: BinaryTree }
}

// interface BinaryTree {
//   name: 'root',
//   children: Node
// }



export const tree: BinaryTree = { 
  name: 'root', 
  children: {
    left: {
      name: 'A',
      children: {
        left: { name: 'Al' },
        right: { name: 'Ar' },
      }
    },
    right: {
      name: 'B',
      children: {
        left: { name: 'Bl' },
        right: { name: 'Br' },
      }
    },
  }
}

const result = invertTree(tree)

export default function invertTree(tree: BinaryTree): BinaryTree {
  return tree
}