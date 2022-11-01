let nameFrend = ['adam', 'adlan','umar','maga','islam','baysangur','apti','rasul','ayub'] 
let nameA = []
for(let i = 0; i < nameFrend.length; i++) {
    if(nameFrend[i][0] === 'a') {
        nameA.push(nameFrend[i])
    }
}
console.log(nameA)