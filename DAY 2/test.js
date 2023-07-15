const numbers =[-1,1,2,3,4,5]
const evenNumber = numbers.filter(number =>{
    if(number % 2 == 0){
        return true
    }else{
        return false
    }
})

const numberLess5 = numbers.filter(number =>{
    if(number < 5){
        return true
    }else{
        return false
    }
})

console.log(numberLess5)

const firstnegativenumber = numbers.find(number =>{
    if(number<0){
        return true
    }else{
        return false
    }
});

console.log(firstnegativenumber);