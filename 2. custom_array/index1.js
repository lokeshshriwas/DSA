class MyArray{
    constructor(){
        this.length = 0
        this.data = {}
    }

    NewPush (item) {
        this.data[this.length] = item
        this.length++ 
        console.log('---------' , this.data)
        return 
    }

    NewPop (){
        delete this.data[this.length -1 ]
        this.length-- 
        console.log(this.length)
    }

    shift() {
        const firstElem = this.data[0]
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1]
        this.length--
        return firstElem
    }

    remove(idx){
        const dataToRemove = this.data[idx]

        for (let i = idx; i < this.length; i++) {
            this.data[i] = this.data[i + 1]
        }

        delete this.data[this.length -1 ]
        this.length--

        return dataToRemove
    }
}

const newArray = new MyArray()

newArray.NewPush("apple")
newArray.NewPush("banana")
newArray.NewPush("pineapple")
newArray.NewPush("peach")

// newArray.NewPop()
console.log(newArray)
console.log(newArray.remove(1))
console.log(newArray)