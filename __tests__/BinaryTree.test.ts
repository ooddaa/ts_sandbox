// import { BinaryTree }  from '../src/components/BinaryTree'
import { tree } from '../src/components/BinaryTree';
import invertBinaryTree from '../src/components/BinaryTree'
import util from 'util';

const log = (...items: any) =>
  items.forEach((item) =>
    console.log(util.inspect(item, { depth: null, colors: true }))
  );



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