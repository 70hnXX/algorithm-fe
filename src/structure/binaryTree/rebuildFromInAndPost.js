/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 中序遍历 inorder = [9,3,15,20,7]
// 后序遍历 postorder = [9,15,7,20,3]
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) return null
  const root = postorder[postorder.length - 1]
  const inorderIndex = inorder.indexOf(root)
  const postorderIndex = postorder.indexOf(root)

  const leftInorder = inorder.slice(0, inorderIndex)
  const leftPostorder = postorder.slice(0, leftInorder.length)

  const rightInorder = inorder.slice(inorderIndex + 1)
  const rightPostorder = postorder.slice(leftPostorder.length, postorderIndex)

  const left = buildTree(leftInorder, leftPostorder)
  const right = buildTree(rightInorder, rightPostorder)
  const t = new TreeNode(root, left, right)
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