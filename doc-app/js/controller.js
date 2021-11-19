import {
    readQuestions
} from './model.js';

//Get item text
const questions = [];
document.getElementById("btn-add").addEventListener("click", () => {
var question = document.getElementById("arrayAdd").value;
questions.push(question);
console.log(questions);
var questionsJSON = JSON.stringify(questions);
console.log(questionsJSON);

});

function loadQuestions() {
    readQuestions();
}

window.onload = function() {
    loadQuestions();
};