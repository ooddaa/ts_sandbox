import { tree } from '../src/components/sandbox/BinaryTree';
import invertBinaryTree from '../src/components/sandbox/BinaryTree'

const invertedTree = { 
  name: 'root', 
  children: {
    left: {
      name: 'B',
      children: {
        left: { name: 'Br' },
        right: { name: 'Bl' },
      }
    },
    right: {
      name: 'A',
      children: {
        left: { name: 'Ar' },
        right: { name: 'Al' },
      }
    },
  }
}

test('inverts a binary tree', () => {
  const rv = invertBinaryTree(tree)
  expect(rv).toMatchObject(invertedTree)
})