'use strict';// undeclared variables not allowed

function handleStartClicked(){
  console.log('\nHandling Start-cliked');
  //this function display the question 
  $('main').on('click','#start',event =>renderAQuestion());
};

function updateQuestionAndScore() {
  const html= `
  <span class='currentQuestion'> Question: ${user.currentQuestion+1}/${quizBank.length} </span> 
  <span class='currentScore'> Score: ${user.score}/${quizBank.length} </span> `;
  $('.questions-scores').html(html);
}

function generateQuestion(item){
  console.log('\nGenerating question');
  return `
    <form id='js-questions' method='post'>
      <fieldset >
        <div class='questions'>
          <legend>${item.question}</legend>
          <img src='${item.image}' class='question-picture' alt='Question-Picture'>
        </div>
        <div class='options'>
          
        </div>
        <div class='submit'>
          <button type='submit' id='submit'> SUBMIT </button>
        </div> 
      </Fieldset>
    </form>`;
}

function generateOptions(array,item) {
  let optionHtml='';
  for (let i=0; i<array.length;i++) {
      optionHtml += `
      <input type='radio' name='option' id='${item.id}-${i}' value='${array[i]}'>
      <label for='${item.id}-${i}'>${array[i]}</label>
      <br>`
  };
  return optionHtml;
}

function renderAQuestion(){
  console.log('\nRendering a question to the DOM')
  updateQuestionAndScore();
  let question= quizBank[user.currentQuestion];
  let options=question.option; 
  const html= generateQuestion(question);
  $('.main').html(html);//replace the html of main class
  const optionHtml= generateOptions(options,question);
  $('.options').html(optionHtml);
  //user.currentQuestion ++;
};
function createAlertBox (message) {
  return `
    <fieldset class='alert'>
      <div class='message'>
        <p> ${message}</p>
      </div>
      <div class='submit'>
        <button type='select'ID='Next'>NEXT</button>
      </div>
    </fieldset>
  `
}
function handleNextClicked() {
  $('main').on('click','#Next', function(event) {
    $('#js-questions').show();
    $('.alert').empty();
    user.currentQuestion === quizBank.length?
    displayFinalScreen():renderAQuestion();
  })
}

function handleAnswerSubmitted(){
  console.log('\nHandling Answer-submitted');
  $('main').on('submit','#js-questions',event=>{
    event.preventDefault();
    $('#js-questions').hide();
    let result=quizBank[user.currentQuestion].answer;
    //(1) receive the answer 'selected'
    //Q: we can't use let/const to assign the property value to a variable
    user.answer= $("input[name='option']:checked").val();
    if (!user.answer) {
      $('main').append(`${createAlertBox('Please choose an option')}`);
    }
    else if (user.answer===result) {
      $('main').append(`${createAlertBox('Your answer is correct')}`);
      user.score ++;
      user.currentQuestion ++;
    }
    else {
      $('main').append(`${createAlertBox(`That's wrong.The correct answer is ${result}.`)}`);
      user.currentQuestion ++;
    }
    /*
    user.currentQuestion === quizBank.length?
    displayFinalScreen(): renderAQuestion();
    */
  });

  //this function (1)'receive' the Answer 'cliked' by the user, (2)compare it with the correct Answer, (3) alert the user if his/her ans is correct or not, (4) record the score, then (5) move on to the next question in the quiz bank 
};

function displayFinalScreen() {
  console.log('\nDisplaying Final Screen');
  let finalHtml= `
    <fieldset class='final-screen'>
      <div class='message'>
        <p>THANK YOU</p>
        <p> You have completed your quiz. Your score is <span> ${user.score}/${quizBank.length} </span>. What would you like to do next?</p>
      </div>
      <div class='submit'>
        <button type='select' ID='exit'>EXIT</button>
        <button type='select' ID='startOver'>START OVER</button>
      </div>
    </fieldset>` ;
  user.currentQuestion=0;
  user.score=0;
  $('.questions-scores').empty();
  $('main').html(finalHtml);
}
function restartQuiz() {
  $('main').on('click','#startOver', event=> renderAQuestion());
}
function exitQuiz() {
  $('main').on('click','#exit', event=>location.reload());
}
/*
function generateQuizBank(){
  console.log('\nGenerating Quiz-Bank');
*/
function runQuizApp() {
  handleStartClicked();
  handleNextClicked();
  //generateQuestion();// this function needs not to be called when the page loads.
  //generateQuizBank ();
  //renderAQuestion();  
  handleAnswerSubmitted();
  //displayFinalScreen();
  restartQuiz();
  exitQuiz();
} 
$(runQuizApp);
