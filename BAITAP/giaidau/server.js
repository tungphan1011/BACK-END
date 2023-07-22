import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {  deleteUserById,findUserById,updateUser,getUsers,addUser, getgiaidau, addgiaidau, updategiaidau} from './Users.js'
//kieu cu la const getUsers = require('./userstore.js')
const server = express()
const PORT = 3000
server.use(cors())
server.use(bodyParser.json())
server.get('/',(req,res)=>{
    res.send('Welcome to my servers')
})

server.get('/Users',(req,res)=>{
    res.send(getUsers())
})
server.get('/Users/:id',(req,res)=>{
    
    const UserId = parseInt(req.params.id)
    const user = findUserById(UserId)
    
    if(user == null){
        res.status(404).send("User not found")
    }else{
        res.send(findUserById(UserId))
    }
})
server.post('/Users',(req,res)=>{
    
    const user = req.body
    if(user?.username && user?.displayName && user?.age){
        addUser(req.body)
        res.send("user added")
    }else{
        res.status(404).send("Missing filed")
    }

})
server.put('/Users',(req,res)=>{
    const user = req.body
    if(user?.username && user?.displayName && user?.age){
        updateUser(req.body)
        res.send("user added")
    }else{
        res.status(404).send("Missing filed")
    }
})
server.delete('/Users/:id',(req,res)=>{
    const UserId = parseInt(req.params.id)
    const user = findUserById(UserId)
    
    if(user == null){
        res.status(404).send("User not found")
    }else{
        console.log("delete cussess")
        res.send(deleteUserById(UserId))
    }

})
server.get('/Giaidau',(req,res)=>{
    res.send(getgiaidau())
})
server.get('/Giaidau/:id',(req,res)=>{
    const giaidauId = parseInt(req.params.id)
    
    res.send(getgiaidau(giaidauId))
})
server.post('/giaidau',(req,res)=>{
      
    addgiaidau(req.body)
    res.send("giai added")
})
server.put('/giaidau/:id',(req,res)=>{
    const giaidauId = parseInt(req.params.id)
        updategiaidau(req.body,giaidauId)
        res.send("them user vao giai dau")
 
})
server.delete('/Users/:id',(req,res)=>{
    const giaidauId = parseInt(req.params.id)
        res.send(deleteUserById(giaidauId))
})



server.listen(PORT,()=>{
    console.log('Server is running');
})
// lỗi thiết kế api 
//get/getusers
//delete/deleteUser
//put/updateUser

//khai niem middleware 