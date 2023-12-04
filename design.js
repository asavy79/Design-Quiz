var aButton = document.getElementById('answera');
var bButton = document.getElementById('answerb');
var cButton = document.getElementById('answerc');
var dButton = document.getElementById('answerd');
var question = document.getElementById('question');
var econQuestions;
var questionObject;
var index = 0;
var choices = document.getElementsByClassName('choices');

const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};




fetch('softwareDesignQuestions.json')
  .then(response => response.json())
  .then(data => {
    // Work with the JSON data here

    econQuestions = data;
    shuffle(econQuestions);
    getQuestion();

    // The rest of your code that depends on the JSON data can go here
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);

    
  });



function getQuestion() {
    questionObject = econQuestions[index];
    question.innerHTML = questionObject.question;
    aButton.innerHTML = questionObject.choices.a;
    bButton.innerHTML = questionObject.choices.b;
    cButton.innerHTML = questionObject.choices.c;
    dButton.innerHTML = questionObject.choices.d;
    index += 1;
    resetAnswerButtonStyles();
}

function checkAnswer(selectedChoice) {
    resetAnswerButtonStyles();
    if(selectedChoice == questionObject.answer) {
        document.getElementById('answer' + selectedChoice).style.background = 'lightgreen';
    }
    else {
        document.getElementById('answer' + selectedChoice).style.background = 'rgb(255, 77, 77)';
    }
}

function resetAnswerButtonStyles() {
    aButton.style.background = 'lightgray';
    bButton.style.background = 'lightgray';
    cButton.style.background = 'lightgray';
    dButton.style.background = 'lightgray';
  }


