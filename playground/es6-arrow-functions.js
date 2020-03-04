const multiplier = {
    numbers: [2, 4, 5, 6, 9, 10, 11, 12], 
    multiplyBy : 8, 
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())