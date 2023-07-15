let arr = [1, 2, 3, 5, 6, 7, 101]
let m = 12
let sumOdd =0
let sumEven = 0;
for(let i=0;i<arr.length;i++){
   if(arr[i]  < m ){
        if(arr[i]%2==0){
            sumEven = sumEven + arr[i];
    } else {
        sumOdd = sumOdd + arr[i]
    }

   } 
}
console.log(sumEven)
console.log(sumOdd)

// SIMPLE LOTTERY APP
//
// Input:
//   users: array of users
// Output:
//   pick a random winning user in users

const users =[
    {name:"khoa", age: 20}
    
]

function insertUser(n, a){
    const user ={
        name :n,
        age : a,
    }
    users.push(user)
    
}

insertUser('Binh',21)
insertUser('An',21)
insertUser('tung',21)

for(let i=0; i< users.length;i++){
    console.log(users[i].name)
}

function ranElementInArray(arr){
    const ranElement = Math.floor(Math.random()*arr.length)
    return arr[ranElement]
}
const winning = ranElementInArray(users)
console.log(`${winning.name} has won a lottery tick at ${winning.age}`)