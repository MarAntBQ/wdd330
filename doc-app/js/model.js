function readCountries() {
  var CountriesDisplayer = document.getElementById("countryCode");
  fetch("./data/contries.json")
    .then(response => response.json())
    .then(json => {
      let countryN = json.length;
      for (var i = 0; i < countryN; i++) {
        var aCountry = json[i];
        CountriesDisplayer.innerHTML +=
          `<option value="${aCountry["dial_code"]}">${aCountry["name"]} (${aCountry["dial_code"]})</option>`;
      }
    });
}

function readQuestions() {
  var QuestionsDisplayer = document.getElementById("questions-ctnr");
  fetch("https://mbrelax.xyz/questions")
    .then(response => response.json())
    .then(json => {
      let questionN = json.length;
      for (var i = 0; i < questionN; i++) {
        var aQuestion = json[i];
        // QuestionsDisplayer.innerHTML +=
        //   `<p class="fs18px tac mt5px mb5px tbold">${i +1}. ${aQuestion}</p>
        //     <div class="row-input">
        //       <input type="radio" required name="question${i}" id="question${i}" value="true" >
        //       <label for="question${i}">Yes</label>
        //     </div>
        //     <div class="row-input">
        //       <input type="radio" required name="question${i}" id="question${i*100+100}" value="false" >
        //       <label for="question${i*100+100}">No</label>
        //     </div>`;
        QuestionsDisplayer.innerHTML +=
          `<p class="fs18px tac mt5px mb5px tbold">${i +1}. ${aQuestion}</p>
          <select name="question${i}" id="question${i}" required>
          <option value="">Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </select>`;
      }
    });
}


function receiveQuestions(questions) {
  //console.table(questions);
  let s1 = 0;
  let s2 = 0;
  let s3 = 0;
  let s4 = 0;
  let s5 = 0;
  let s6 = 0;
  let s7 = 0;
  let s8 = 0;
  let s9 = 0;
  if (questions.q1 == 'true') {
    s1 = s1 + 1;
    s3 = s3 + 1;
    s5 = s5 + 1;
    s8 = s8 + 1;
  }
  if (questions.q2 == 'true') {
    s5 = s5 + 1;
  }
  if (questions.q3 == 'true') {
    s1 = s1 + 1;
    s2 = s2 + 1;
    s6 = s6 + 1;
    s7 = s7 + 1;
  }
  if (questions.q4 == 'true') {
    s1 = s1 + 1;
    s5 = s5 + 1;
  }
  if (questions.q5 == 'true') {
    s1 = s1 + 1;
    s2 = s2 + 1;
    s3 = s3 + 1;
    s7 = s7 + 1;
  }
  if (questions.q6 == 'true') {
    s2 = s2 + 1;
    s4 = s4 + 1;
    s7 = s7 + 1;
    s8 = s8 + 1;
  }
  if (questions.q7 == 'true') {
    s3 = s3 + 1;
    s4 = s4 + 1;
    s5 = s5 + 1;
  }
  if (questions.q8 == 'true') {
    s2 = s2 + 1;
    s3 = s3 + 1;
    s4 = s4 + 1;
    s8 = s8 + 1;
  }
  if (questions.q9 == 'true') {
    s7 = s7 + 1;
  }
  if (questions.q10 == 'true') {
    s1 = s1 + 1;
    s4 = s4 + 1;
    s6 = s6 + 1;
  }
  if (questions.q11 == 'true') {
    s3 = s3 + 1;
    s4 = s4 + 1;
    s8 = s8 + 1;
  }
  if (questions.q12 == 'true') {
    s5 = s5 + 1;
  }
  if (questions.q13 == 'true') {
    s1 = s1 + 1;
  }
  if (questions.q14 == 'true') {
    s3 = s3 + 1;
    s4 = s4 + 1;
    s5 = s5 + 1;
    s8 = s8 + 1;
  }
  if (questions.q15 == 'true') {
    s1 = s1 + 1;
    s2 = s2 + 1;
    s7 = s7 + 1;
    s8 = s8 + 1;
    s9 = s9 + 1;
  }
  if (questions.q16 == 'true') {
    s4 = s4 + 1;
    s8 = s8 + 1;
  }
  if (questions.q17 == 'true') {
    s2 = s2 + 1;
    s6 = s6 + 1;
  }
  if (questions.q18 == 'true') {
    s2 = s2 + 1;
    s4 = s4 + 1;
    s8 = s8 + 1;
  }
  if (questions.q19 == 'true') {
    s8 = s8 + 1;
  }
  if (questions.q20 == 'true') {
    s1 = s1 + 1;
    s9 = s9 + 1;
  }
  if (questions.q21 == 'true') {
    s1 = s1 + 1;
    s8 = s8 + 1;
    s9 = s9 + 1;
  }
  if (questions.q22 == 'true') {
    s1 = s1 + 1;
    s3 = s3 + 1;
  }
  if (questions.q23 == 'true') {
    s4 = s4 + 1;
    s8 = s8 + 1;
  }
  if (questions.q24 == 'true') {
    s2 = s2 + 1;
  }
  if (questions.q25 == 'true') {
    s4 = s4 + 1;
    s9 = s9 + 1;
  }
  if (questions.q26 == 'true') {
    s5 = s5 + 1;
    s6 = s6 + 1;
  }
  if (questions.q27 == 'true') {
    s3 = s3 + 1;
    s8 = s8 + 1;
  }
  if (questions.q28 == 'true') {
    s1 = s1 + 1;
    s4 = s4 + 1;
    s8 = s8 + 1;
    s9 = s9 + 1;
  }
  if (questions.q29 == 'true') {
    s4 = s4 + 1;
    s5 = s5 + 1;
    s8 = s8 + 1;
  }
  if (questions.q30 == 'true') {
    s1 = s1 + 1;
    s2 = s2 + 1;
    s5 = s5 + 1;
  }
  if (questions.q31 == 'true') {
    s1 = s1 + 1;
    s2 = s2 + 1;
    s6 = s6 + 1;
  }
  if (questions.q32 == 'true') {
    s1 = s1 + 1;
    s7 = s7 + 1;
    s9 = s9 + 1;
  }
  if (questions.q33 == 'true') {
    s1 = s1 + 1;
    s4 = s4 + 1;
  }
  if (questions.q34 == 'true') {
    s2 = s2 + 1;
    s4 = s4 + 1;
    s8 = s8 + 1;
  }
  if (questions.q35 == 'true') {
    s2 = s2 + 1;
    s3 = s3 + 1;
    s5 = s5 + 1;
    s9 = s9 + 1;
  }
  if (questions.q36 == 'true') {
    s6 = s6 + 1;
  }
  if (questions.q37 == 'true') {
    s2 = s2 + 1;
    s7 = s7 + 1;
    s8 = s8 + 1;
  }
  if (questions.q38 == 'true') {
    s2 = s2 + 1;
    s4 = s4 + 1;
    s8 = s8 + 1;
  }

  var today = new Date();

  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  const FinalTest = {
    "id": Date.now(),
    "date": date,
    "name": questions.name,
    "email": questions.email,
    "phone": questions.phone,
    "address": questions.address,
    "digestive": s1,
    "intestinal": s2,
    "circulatory": s3,
    "nervous": s4,
    "immune": s5,
    "respiratory": s6,
    "urinary": s7,
    "glandular": s8,
    "structure": s9
  }
  //console.log(FinalTest);
  saveDataInCache(FinalTest);
}

function saveDataInCache(newTest) {
  var examsTest = null;
  var examsTestLists = localStorage["examsTest"];
  if (examsTestLists == null) {
    examsTest = [];
  } else {
    examsTest = JSON.parse(examsTestLists)
  }
  examsTest.push(newTest);
  var examsTestString = JSON.stringify(examsTest);
  localStorage["examsTest"] = examsTestString;
  window.location.href = "past.html";
}

function ShowPastExams() {
  var storedExamsTest = localStorage["examsTest"];
  var ExamsDisplayer = document.getElementById("ExamsDisplayer");
  if (storedExamsTest != null) {
    var examsTest = JSON.parse(storedExamsTest);
    ExamsDisplayer.innerHTML = null;
    var numberOfExams = examsTest.length;
    for (var i = examsTest.length; i > 0; i--) {
      var currentI = i - 1;
      var aExam = examsTest[currentI];
      var digestiveAnswer = System1State(aExam["digestive"]);
      var intestinalAnswer = System2State(aExam["intestinal"]);
      var circulatoryAnswer = System3State(aExam["circulatory"]);
      var nervousAnswer = System4State(aExam["nervous"]);
      var immuneAnswer = System5State(aExam["immune"]);
      var respiratoryAnswer = System6State(aExam["respiratory"]);
      var urinaryAnswer = System7State(aExam["urinary"]);
      var glandularAnswer = System8State(aExam["glandular"]);
      var structureAnswer = System9State(aExam["structure"]);
      ExamsDisplayer.innerHTML += `<div class="past-exam">
      <h2>Exam # ${aExam["id"]}</h2>
      <p><strong><i class="fas fa-calendar-alt"></i> Date:</strong> ${aExam["date"]}</p>
      <p><strong><i class="fas fa-user"></i> Name:</strong> ${aExam["name"]}</p>
      <p><strong><i class="fas fa-envelope"></i> Email:</strong> ${aExam["email"]}</p>
      <p><strong><i class="fas fa-phone-volume"></i> Phone:</strong> <a href="tel:+${aExam["phone"]}">${aExam["phone"]}</a></p>
      <p><strong><i class="fas fa-map-pin"></i> Address:</strong> ${aExam["address"]}</p>
      <hr>
      </br>
      <h2>Digestive System</h2>
      ${digestiveAnswer}
      <hr>
      </br>
      <h2>Intestinal System</h2>
      ${intestinalAnswer}
      <hr>
      </br>
      <h2>Circulatory System</h2>
      ${circulatoryAnswer}
      <hr>
      </br>
      <h2>Nervous System</h2>
      ${nervousAnswer}
      <hr>
      </br>
      <h2>Immune System</h2>
      ${immuneAnswer}
      <hr>
      </br>
      <h2>Respiratory System</h2>
      ${respiratoryAnswer}
      <hr>
      </br>
      <h2>Urinary System</h2>
      ${urinaryAnswer}
      <hr>
      </br>
      <h2>Glandular System</h2>
      ${glandularAnswer}
      <hr>
      </br>
      <h2>Structural System</h2>
      ${structureAnswer}
      </div>`;
    }
  }
}

const VGH = '<h3 class="fs30px">Very Good Health</h3><p class="tac tbold"><i class="fas fa-laugh-beam"></i> Congratulations! You seem to lead a lifestyle that will help you maintain a balance of health.</p>';
const GH = '<h3 class="fs30px">Good Health</h3><p class="tac tbold"><i class="far fa-laugh"></i> Your lifestyle and dietary profile seem healthy, but you might want to consider some changes to maintain a better health.</p>';
const RH = '<h3 class="fs30px">Regular Health</h3><p class="tac tbold"><i class="far fa-sad-tear"></i> You need to change your diet and lifestyle as recommendation in order to improve your health.</p>';
const BH = '<h3 class="fs30px">Bad Health</h3><p class="tac tbold"><i class="fas fa-sad-cry"></i> We seriously recommend changing your diet and lifestyle.</p>';

function System1State(s1) {
  if (s1 <= 1) {
    return VGH;
  } else if (s1 <= 3) {
    return GH;
  } else if (s1 <= 6) {
    return RH;
  } else {
    return BH;
  }
}

function System2State(s2) {
  if (s2 <= 1) {
    return VGH;
  } else if (s2 <= 3) {
    return GH;
  } else if (s2 <= 6) {
    return RH;
  } else {
    return BH;
  }
}
function System3State(s3) {
  if (s3 <= 0) {
    return VGH;
  } else if (s3 <= 1) {
    return GH;
  } else if (s3 <= 3) {
    return RH;
  } else {
    return BH;
  }
}
function System4State(s4) {
  if (s4 <= 1) {
    return VGH;
  } else if (s4 <= 3) {
    return GH;
  } else if (s4 <= 5) {
    return RH;
  } else {
    return BH;
  }
}
function System5State(s5) {
  if (s5 <= 1) {
    return VGH;
  } else if (s5 <= 3) {
    return GH;
  } else if (s5 <= 5) {
    return RH;
  } else {
    return BH;
  }
}
function System6State(s5) {
  if (s5 <= 0) {
    return VGH;
  } else if (s5 <= 1) {
    return GH;
  } else if (s5 <= 3) {
    return RH;
  } else {
    return BH;
  }
}
function System7State(s5) {
  if (s5 <= 0) {
    return VGH;
  } else if (s5 <= 1) {
    return GH;
  } else if (s5 <= 3) {
    return RH;
  } else {
    return BH;
  }
}
function System8State(s5) {
  if (s5 <= 1) {
    return VGH;
  } else if (s5 <= 3) {
    return GH;
  } else if (s5 <= 5) {
    return RH;
  } else {
    return BH;
  }
}
function System9State(s5) {
  if (s5 <= 0) {
    return VGH;
  } else if (s5 <= 1) {
    return GH;
  } else if (s5 <= 3) {
    return RH;
  } else {
    return BH;
  }
}

export {
  readCountries,
  readQuestions,
  receiveQuestions,
  ShowPastExams
};