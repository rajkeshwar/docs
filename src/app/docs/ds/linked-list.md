Basic methods on LinkedList
```js
class LinkedList {
    constructor(value) {
        this.head = null;
        this.length = 0;
        this.addToHead(value);
    }
    
    addToHead(value) {
        const newNode = { value };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    
    removeFromHead() {
        if (this.length === 0) {
            return undefined;
        }
        
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        
        return value;
    }
    
    find(val) {
        let thisNode = this.head;
        
        while(thisNode) {
            if(thisNode.value === val) {
                return thisNode;
            }
            
            thisNode = thisNode.next;
        }
        
        return thisNode;
    }
    
    remove(val) {
        if(this.length === 0) {
            return undefined;
        }
        
        if (this.head.value === val) {
            return this.removeFromHead();
        }
        
        let previousNode = this.head;
        let thisNode = previousNode.next;
        
        while(thisNode) {
            if(thisNode.value === val) {
                break;
            }
            
            previousNode = thisNode;
            thisNode = thisNode.next;
        }
        
        if (thisNode === null) {
            return undefined;
        }
        
        previousNode.next = thisNode.next;
        this.length--;
        return this;
    }
}
```

Linked list simplified in ES6
```ts
class Node {
   constructor(data, next = null) {
     this.data = data;
     this.next = next;
   }
}

class LinkedList {
   constructor() {
      this.head = null;
   }

   append(data) {
     if(this.head === null) {
        this.head = new Node(data); 
        return;
     } 
     let current = this.head;
     while(current.next !== null) {
       current = current.next;
     }
     current.next = new Node(data);
   }

   prepend(data) {
     let node = new Node(data);
     node.next = this.head;
     this.head = node;
   } 

   delete(data) {
     if(this.head === null) return;
     if(this.head.data == data) {
       this.head = this.head.next;
       return;
     }
     let current = this.head;
     while(current.next !== null) {
       if(current.next.data === data) {
          current.next = current.next.next;
          return;
       }
       current = current.next;
     }
   }
}
```
