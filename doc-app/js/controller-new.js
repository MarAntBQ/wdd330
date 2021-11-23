import {
    readCountries,
    readQuestions,
    receiveQuestions
} from './model.js';

//Get item text
// const questions = [];
// document.getElementById("btn-add").addEventListener("click", () => {
// var question = document.getElementById("arrayAdd").value;
// questions.push(question);
// console.log(questions);
// var questionsJSON = JSON.stringify(questions);
// console.log(questionsJSON);

// });

function loadQuestions() {
    readCountries();
    readQuestions();
    var selects = document.getElementsByTagName("SELECT");
    console.log(selects);
}

window.onload = function () {
    loadQuestions();
};

document.getElementById("personalTest").addEventListener("submit", () => {
    event.preventDefault();
    var inputs = document.getElementsByTagName("INPUT");
    var selects = document.getElementsByTagName("SELECT");
    var countryCode = selects[0].value;
    var Phone = inputs[2].value;
    var MixedPhone = countryCode + '' + Phone;
    var newTest = {
        "name": inputs[0].value,
        "email": inputs[1].value,
        "phone": MixedPhone,
        "address": inputs[3].value,
        "q1": selects[1].value,
        "q2": selects[2].value,
        "q3": selects[3].value,
        "q4": selects[4].value,
        "q5": selects[5].value,
        "q6": selects[6].value,
        "q7": selects[7].value,
        "q8": selects[8].value,
        "q9": selects[9].value,
        "q10": selects[10].value,
        "q11": selects[11].value,
        "q12": selects[12].value,
        "q13": selects[13].value,
        "q14": selects[14].value,
        "q15": selects[15].value,
        "q16": selects[16].value,
        "q17": selects[17].value,
        "q18": selects[18].value,
        "q19": selects[19].value,
        "q20": selects[20].value,
        "q21": selects[21].value,
        "q22": selects[22].value,
        "q23": selects[23].value,
        "q24": selects[24].value,
        "q25": selects[25].value,
        "q26": selects[26].value,
        "q27": selects[27].value,
        "q28": selects[28].value,
        "q29": selects[29].value,
        "q30": selects[30].value,
        "q31": selects[31].value,
        "q32": selects[32].value,
        "q33": selects[33].value,
        "q34": selects[34].value,
        "q35": selects[35].value,
        "q36": selects[36].value,
        "q37": selects[37].value,
        "q38": selects[38].value
    };
    receiveQuestions(newTest);
});