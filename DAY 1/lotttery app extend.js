const fs = require('fs')

let users = []

function randElementInArray(arr) {
    const randomIndex = Math.floor(Math.random()*arr.length)
    return arr[randomIndex]
}

function insertUser(n, a) {
    const user = {
        name: n,
        age: a,
    }
    users.push(user)
}

function getUsersFromFile(filename, callback) {

    fs.readFile(filename, 'utf8', (err, data) => {
        callback(data)
    })
}

getUsersFromFile('users.txt', (data) => {
    const lines = data.split('\n')
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].split(' ')
        let name = line[0]
        let age = line[1]
        insertUser(name, age)
    }
    const winningUser = randElementInArray(users)
    console.log(`${winningUser.name} has won a lottery ticket at age ${winningUser.age}`)
})