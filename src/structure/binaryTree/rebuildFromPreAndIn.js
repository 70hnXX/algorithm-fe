/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 前序遍历 preorder = [3,9,20,15,7] 0
// 中序遍历 inorder = [9,3,15,20,7] 1
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!inorder.length || !inorder.length) return null
  const root = preorder[0]
  const inorderIndex = inorder.indexOf(root)

  const leftinorder = inorder.slice(0, inorderIndex)
  const leftPreorder = preorder.slice(1, leftinorder.length + 1)

  const rightPreorder = preorder.slice(leftinorder.length + 1)
  const rightinorder = inorder.slice(inorderIndex + 1)

  const t = new TreeNode(root, buildTree(leftPreorder, leftinorder), buildTree(rightPreorder, rightinorder))
  return t
};
// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val)
//   this.left = (left === undefined ? null : left)
//   this.right = (right === undefined ? null : right)
// }
// const arr1 = [9, 3, 15, 20, 7]
// const arr2 = [9, 15, 7, 20, 3]
// console.log(buildTree(arr1, arr2))