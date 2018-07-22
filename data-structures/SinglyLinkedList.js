let head = null;
let tail = null;

function SinglyLinkedList() {
  this.length = 0;
}

/**
 * Node that fills an index in the linked list.
 *
 * @param       {Any} value the value (item) to be added to this stack
 * @constructor
 */
function Node(value) {
  this.value = value;
  this.next = null;
}

const S = SinglyLinkedList.prototype;

S.add = function add(value) {
  const newNode = new Node(value);
  if (this.length === 0) {
    head = newNode;
    tail = newNode;
  } else {
    let node = head;
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
  }
  this.length += 1;
};

S.removeAt = function removeAt(index) {
  if (index < 0 || index > this.length - 1) {
    throw Error(`Illegal Argument: index=${index} is smaller than 0 or bigger than 'length - 1'`);
  }
  if (index === 0) {
    this.removeHead();
  } else if (index === this.length - 1) {
    this.removeTail();
  } else {
    let i = 0;
    let node = head;
    while (index > i + 1) {
      node = node.next;
      i += 1;
    }
    node.next = node.next.next;
    this.length -= 1;
  }
};

S.insertAt = function insertAt(value, index) {
  if (index < 0 || index > this.length - 1) {
    throw Error(`Illegal Argument: index=${index} is smaller than 0 or bigger than 'length - 1'`);
  }
  if (index === 0) {
    this.insertHead(value);
  } else if (index === this.length - 1) {
    this.add(value);
  } else {
    const newNode = new Node(value);
    let i = 0;
    let node = head;
    while (index > i + 1) {
      node = node.next;
      i += 1;
    }
    const oldNext = node.next;
    node.next = newNode;
    newNode.next = oldNext;
    this.length += 1;
  }
};

S.searchAt = function searchAt(index) {
  if (index < 0 || index > this.length - 1) {
    throw Error(`Illegal Argument: index=${index} is smaller than 0 or bigger than 'length - 1'`);
  }
  if (index === 0) {
    return this.searchHead();
  }
  if (index === this.length - 1) {
    return this.searchTail();
  }
  let i = 0;
  let node = head;
  while (index > i) {
    node = node.next;
    i += 1;
  }
  return node.value;
};

S.removeHead = function removeTail() {
  if (this.length === 0) {
    throw new Error('No Such Element: linked list is empty');
  }
  if (this.length === 1) {
    head = null;
    tail = null;
  } else {
    head = head.next;
  }
  this.length -= 1;
};

S.removeTail = function removeTail() {
  if (this.length === 0) {
    throw new Error('No Such Element: linked list is empty');
  }
  if (this.length === 1) {
    head = null;
    tail = null;
  } else {
    let node = head;
    while (node.next.next) {
      node = node.next;
    }
    node.next = null;
  }
  this.length -= 1;
};

S.insertHead = function insertHead(value) {
  const newNode = new Node(value);
  if (this.length === 0) {
    head = newNode;
    tail = newNode;
  } else {
    const oldHead = head;
    head = newNode;
    head.next = oldHead;
  }
  this.length += 1;
};

S.searchHead = function searchHead() {
  if (this.length === 0) {
    throw new Error('No Such Element: linked list is empty');
  }
  return head.value;
};

S.searchTail = function searchTail() {
  if (this.length === 0) {
    throw new Error('No Such Element: linked list is empty');
  }
  return tail.value;
};

S.asArray = function asArray() {
  const arr = new Array(this.length);
  let node = head;
  while (node.next) {
    arr.push(node.value);
    node = node.next;
  }
  return arr;
};
