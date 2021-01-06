/**
 * Linked list algorithm with javascript
 */

class Node {
  constructor(values) {
    this.values = values;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this._head = new Node(null)
  }

  insert_node_to_tail(node) {
    this.tail().next = node
  }

  insert_node_to_head(node) {
    if (this._head.next) {
      let current_head = this._head

      node.next = current_head.next
      current_head.next = node
    } else {
      this._head.next = node
    }
  }

  is_empty() {
    return this._head.next === null
  }

  head() {
    return this._head.next
  }

  tail() {
    let current = this._head

    while(current.next) {
      current = current.next
    }

    return current
  }
}

const linkedList = new MyLinkedList()

console.log('Empty list?', linkedList.is_empty())

linkedList.insert_node_to_head(new Node({ id: 1, name: 'John', age: 32 }))

linkedList.insert_node_to_head(new Node({ id: 2, name: 'Barry', age: 33 }))

linkedList.insert_node_to_tail(new Node({ id: 3, name: 'Joe', age: 34 }))

console.log('Empty list?', linkedList.is_empty())

console.log('First node:', linkedList.head())

console.log('Last node:', linkedList.tail())