'use strict';// undeclared variables not allowed

function generateQuestion (item) {
  console.log('\nGenerating question')
  ///*
  return `
  <div class='js-questions'>
    <legend>${item.question}</legend>
    <img src='${item.image}' class='question-picture' alt='Question-Picture'>
  </div>
  <div class='js-options'>
    <input type='radio' id='${item.id}-0' value='0'>
    <label for='${item.id}-0'>${item.option[0]}</label>
    <br>
    <input type='radio' id='${item.id}-1' value='1'>
    <label for='${item.id}-1'>${item.option[1]}</label>
    <br>
    <input type='radio' id='${item.id}-2' value='2'>
    <label for='${item.id}-2'>${item.option[2]}</label>
    <br>
    <input type='radio' id='${item.id}-3' value='3'>
    <label for='${item.id}-3'>${item.option[3]}</label>
    <br>  
  </div>
  <div class='js-submit'>
    <button type='submit'class='submit'> SUBMIT </button>
  </div> `
  //*/
}
function generateQuizBank(){
  console.log('\nGenerating Quiz-Bank')
};
function renderAQuestion(){
  console.log('\nRendering a question to the DOM')
  const html=generateQuestion(quizBank[user.currentQuestion]);
  $('.questions-screen').html(html);

};
function handleStartClicked(){
  console.log('\nHandling Start-cliked')
  //this function display the question 
  $('.start').on('click', event=>renderAQuestion());
};
function handleAnswerClicked(){
  console.log('\nHandling Answer-cliked')
};
function handleAnswerSubmitted(){
  console.log('\nHandling Answer-submitted')
  //this function (1)'receive' the Answer 'cliked' by the user, (2)compare it with the correct Answer, (3) alert the user if his/her ans is correct or not, (4) record the score, then (5) move on to the next question in the quiz bank 
};

function runQuizApp() {
  generateQuestion()
  generateQuizBank ()
  renderAQuestion();
  handleStartClicked();
  handleAnswerClicked();
  handleAnswerSubmitted();
}
$(runQuizApp); //when the page loads, call 'runQuizApp'
