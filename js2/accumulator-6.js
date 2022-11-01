let count = [432, 322, 234, 25, 75, 46, 35, 75, 43, 74]
let myCount = []
for(let i = 0; i < count.length; i++) {
    if(count[i] % 2 !== 0) {
        myCount.push(count[i])
    }
}
console.log(myCount)