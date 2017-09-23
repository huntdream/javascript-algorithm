function BinarySearchTree() {
    let Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    let root = null;
    this.insert = function (key) {
        let newNode = new Node(key);

        if (root === null) {
            root = newNode;
            console.log('Key inserted', root);
        } else {
            insertNode(root, newNode);
        }
    };

    const insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };
    this.getValue = function () {
        console.log(root.key);
    }
}

let tree = new BinarySearchTree();
tree.insert(88);
tree.getValue();