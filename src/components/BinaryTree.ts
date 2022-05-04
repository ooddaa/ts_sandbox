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

// import cloneDeep from 'lodash/cloneDeep';
import util from "util";

export const log = (...items: any) =>
  items.forEach((item: any) =>
    console.log(util.inspect(item, { depth: null, colors: true }))
  );

export interface BinaryTree {
  name: string;
  children?: { left?: BinaryTree; right?: BinaryTree };
}

export const tree: BinaryTree = {
  name: "root",
  children: {
    left: {
      name: "A",
      children: {
        left: { name: "Al" },
        right: { name: "Ar" },
      },
    },
    right: {
      name: "B",
      children: {
        left: { name: "Bl" },
        right: { name: "Br" },
      },
    },
  },
};

export default function invertBinaryTree(tree_: BinaryTree): BinaryTree {
  // const tree = cloneDeep(tree_)
  const tree = JSON.parse(JSON.stringify(tree_));

  /* 
    1. examine tree
    2. if has children -> swap left<>right
    3. recurse on children with invertBinaryTree
  */

  let { children } = tree;

  if (
    typeof children == "object" &&
    children.hasOwnProperty("left") &&
    children.hasOwnProperty("right")
  ) {
    /* swap left and right */
    let _ = children["left"] as BinaryTree;

    /* and recurse on children */
    children["left"] = invertBinaryTree(children["right"] as BinaryTree);
    children["right"] = invertBinaryTree(_);
  }

  return tree;
}
