const { Tree } = require("./binaryTree");

const t = new Tree();

const arr = [1, null, 2, 3]
arr.forEach(item => {
  if (item) {
    t.insert(item)
  }
})
// 中序遍历二叉树
var inorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.data);
    current = current.right;
  }
  return result;
};
// 前序遍历二叉树
var preorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      result.push(current.data);
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    current = current.right;
  }
  return result;
};
// 后序遍历二叉树
var postorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let last = null; // 标记上一个访问的节点
  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack[stack.length - 1];
    if (!current.right || current.right == last) {
      current = stack.pop();
      result.push(current.data);
      last = current;
      current = null; // 继续弹栈
    } else {
      current = current.right;
    }
  }
  return result;
}
