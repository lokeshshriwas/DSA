// ************** Item Reverse *********************** //

function reverse (item) {
    return item.split("").reverse().join("")
}
console.log(reverse("huxn webdev"))


// ******************* palindrom *********************** //

function palindrom (item) {
    const reverse = item.split("").reverse().join("")
    if(reverse === item){
        return "palindrom"
    } else {
        return "Not palindrom"
    }
}

console.log(palindrom("dada"))


// ******************** Integer Reversal ************************ //

function reverseInt(num){
    const str = String(num)
    return Number(str.split("").reverse().join(""))
}

console.log(reverseInt(1234))


// ****************** Capitalize words ************************ //
function capital(name) {
    const step1 = name.toLowerCase().split("")
    let step2 = []
    for (let i = 0; i < step1.length; i++) {
       let step =  step1[i].toUpperCase()
        step2.push(step)
    }

    return step2.toString().replaceAll(",", "")
}

console.log(capital("LokesH"))


// ***************** Fiz buzz *************************** //

function fizBuz(num){
    for (let i = 0; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            console.log("fizzBuzz")
        } else if(i % 3 === 0){
            console.log("Fizz")
        } else if(i % 5 === 0){
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

// fizBuz(15)


// we have an array of numbers which is indicating stock prices and we need to pruchase it once at the lowest price and then sell it once in the profit whole buy and sell must be taken place just once

function buySellStocks(arr){
    let minPrice = arr[0];
    let maxProfit = 0;
    
    for (let i = 1; i < arr.length; i++) {
        const currentPrice = arr[i]
        minPrice = Math.min(minPrice, currentPrice)

        const potentialProfit = currentPrice - minPrice

        maxProfit = Math.max(maxProfit, potentialProfit)
        // console.log(maxProfit)
    }   
    return maxProfit
}

console.log(buySellStocks([7,1,2,3,5,6]))




