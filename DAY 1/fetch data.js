const axios = require('axios')

function fetchQuestions(nQuestion, callback) {
    axios.get(`https://opentdb.com/api.php?amount=${nQuestion}`).then((res) => {
        callback(res.data.results)
    })
   
}
let Questions=[]
function insertQuestion(a,b,c) {
    const Question = {
        question: a,
        correct: b,
        answer:c
    }
    Questions.push(Question)
}
fetchQuestions(3, (questions) => {
    console.log(questions);

   for (let index = 0; index < questions.length; index++) {
    let a = questions[index].question
    let b = questions[index].correct_answer
    let c = []
    c = questions[index].incorrect_answers  
    const randomIndex = Math.floor(Math.random()*c.length);
    c.splice(randomIndex,0,b);
    insertQuestion(a,b,c)
   }
   for (let i = 0; i < Questions.length; i++) {
    console.log(Questions[i].question);
    if(Questions[i].answer.length >2){
                
        console.log(`A.${Questions[i].answer[0]}`);
        console.log(`B.${Questions[i].answer[1]}`);
        console.log(`C.${Questions[i].answer[2]}`);
        console.log(`D.${Questions[i].answer[3]}`);
    }else{
        console.log(`A.${Questions[i].answer[0]}`);
        console.log(`B.${Questions[i].answer[1]}`)
    }
    const prompt = require('prompt-sync')()

    const userInput = prompt('What is your answer: ')
    if(userInput == Questions[i].correct){
        console.log('win');
    }else{
        console.log('trys');
    }


   }



})
