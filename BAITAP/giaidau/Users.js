export let users =[
   { username:'vuong', displayName:'vui', age:19},
   {  username:'vu', displayName:'t', age:18}

]
export let giaidaus=[
    {id:1,name:['vui','t']}
]
export function getgiaidau(){
    return giaidaus
}
export function getgiaidaubyid(id){
    return giaidaus[id]
}
export function nguoichienthang(id){
    const i = giaidaus.findIndex(giaidauid=>{
        return giaidauid.id ===id  ;
    })
    const ranElement = Math.floor(Math.random()*giaidaus[i].name.length)
    return giaidaus[i].name[ranElement]
    
}
export function addgiaidau(giaidau){
    giaidaus.push(giaidau)
}
export function deletegiaidauById(giaidauId){
    giaidaus= giaidaus.filter(giaidau =>{
        return giaidau.id !== giaidauId;
    })
}
export function updategiaidau(userId,giaidauid){
    const giaidauIndex = giaidaus.findIndex(giaidau=>{
        return giaidau.id === giaidauid;
    })
    giaidaus[giaidauIndex].name.push(users[userId].displayName)
}

export function getUsers(){
    return users
}
export function addUser(user){
    users.push(user)
}
export function findUserById(userId){
    return users[userId];
}
export function deleteUserById(userId){
    
        return users.pop(users[userId]);
    
}
export function updateUser(user){
    const userIndex =  user.id
    
    users[userIndex].username =user.username
    users[userIndex].displayName= user.displayName
    users[userIndex].age= user.age

}
