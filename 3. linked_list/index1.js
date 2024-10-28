class Node {
    constructor(value){
        if(!value) return;
        this.head = value,
        this.next = null
    }
}

class linkedList {
    constructor(value){
        if(!value) return
        this.head = new Node(value),
        this.tail = this.head,
        this.length = 1
    }

    addLast (value){
        const newNode = new Node(value)
        if(this.head == null){
            this.head = newNode
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    addFirst (value){
        const newNode = new Node(value)
        if(this.head == null){
            this.head = newNode
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
    }

    removeFirst (){
        this.head = this.head.next 
        this.length--
    }

    removeLast (){
        let prev = this.head
        for (let i = 1; i < this.length-1; i++) {
            prev = prev.next 
        }
    
        prev.next = null
        this.tail = prev
        this.length--
    }

    getFirstItem (){
        return this.head   
    }

    getLastItem (){
        return this.tail   
    }

    getByIndex (idx){
        if(idx > this.length) return "Invalid Index"
        let prev= this.head
        for (let i = 0; i < idx ; i++) {
            prev = prev.next
        }
        return prev
    }

    setByIndex (idx, itemToSet){
        if(idx > this.length) return "Invalid Index"
        let setItem = this.getByIndex(idx)
        setItem.head = itemToSet
    }

    insertByIndex (idx, itemToSet){
        if(idx > this.length) return "Invalid Index"
        let insertIdx = this.getByIndex(idx - 1)
        let item = new Node(itemToSet)
        item.next = insertIdx.next
        insertIdx.next = item
        this.length++
        return item
    }


}

const myLinkedList = new linkedList(1);
myLinkedList.addLast(2)
myLinkedList.addLast(3)
myLinkedList.addLast(4)
myLinkedList.addLast(5)
// console.log(myLinkedList.getFirstItem())
// console.log(myLinkedList.getLastItem())

// myLinkedList.removeLast()
// console.log(myLinkedList.insertByIndex(1, 10))
// console.log(myLinkedList)
// myLinkedList.addFirst(0)
// console.log(myLinkedList);

console.log(myLinkedList.findSize())
// console.log(myLinkedList)