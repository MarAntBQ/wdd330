function readQuestions() {
    var QuestionsDisplayer = document.getElementById("questions-ctnr");
    fetch("https://mbrelax.xyz/questions")
    .then(response => response.json())
    .then(json => {
      let questionN = json.length;
      for (var i =0; i < questionN; i++) {
          var aQuestion = json[i];
          QuestionsDisplayer.innerHTML +=
          `<p class="fs18px tac mt5px mb5px tbold">${aQuestion}</p>
          <select name="question${i}" id="question${i}" required>
          <option>Select</option>
          <option value="YES">Yes</option>
          <option value="YES">No</option>
          </select>`;
      }
    });
}

export {readQuestions};