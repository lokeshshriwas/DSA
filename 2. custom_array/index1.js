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
}

const newArray = new MyArray()

newArray.NewPush("apple")
newArray.NewPush("banana")
newArray.NewPush("pineapple")
newArray.NewPush("peach")

newArray.NewPop()
