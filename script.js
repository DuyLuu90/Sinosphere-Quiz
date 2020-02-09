'use strict'// undeclared variables not allowed
function generateQuestion (item) {
  console.log('\nGenerating question')
}
function generateQuizBank(){
  console.log('\nGenerating Quiz-Bank')
};
function renderQuizBank(){
  console.log('\nRendering Quiz-Bank to the DOM')
};
function handleStartClicked(){
  console.log('\nHandling Start-cliked')
  //this function display the question 
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
  renderQuizBank();
  handleStartClicked();
  handleAnswerClicked();
  handleAnswerSubmitted();
}
$(runQuizApp); //when the page loads, call 'runQuizApp'
