'use strict';// undeclared variables not allowed

function handleStartClicked(){
  console.log('\nHandling Start-cliked');
  //this function display the question 
  $('main').on('click','#start',event =>renderAQuestion());
};

function updateQuestionAndScore() {
  const html= `
  <span class='span'> Question: ${user.currentQuestion+1}/${quizBank.length} </span> 
  <span class='span'> Score: ${user.score}/${quizBank.length} </span> `;
  $('.questions-scores').html(html);
}

function generateQuestion(item){
  console.log('\nGenerating question');
  return `
    <form id='js-questions' method='post'>
      <fieldset class='questions' >
        <div class='currentQuestion'>
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
    <form ID='js-alert' method='post'>
      <fieldset class='alert'>
        <div class='message'>
          <p class='alertMessage'> ${message}</p>
        </div>
        <div class='submit'>
          <button type='submit'>OK</button>
        </div>
      </fieldset>
    </form>
  `
}

function handleAnswerSubmitted(){
  console.log('\nHandling Answer-submitted');
  $('main').on('submit','#js-questions',event=>{
    event.preventDefault();
    $('#js-questions').hide();
    let result=quizBank[user.currentQuestion].answer;
    //this function (1)'receive' the Answer 'submited' by the user, (2)compare it with the 'result', (3) alert the user if his/her ans is correct or not, (4) update the score and the current question.
    //Q: we can't use let/const to assign the property value to a variable
    user.answer= $("input[name='option']:checked").val();
    if (!user.answer) {
      $('main').append(`${createAlertBox('Please choose an option!')}`);
      $('.alertMessage').toggleClass('yellow');
    }
    else if (user.answer===result) {
      $('main').append(`${createAlertBox('Your answer is correct.')}`);
      $('.alertMessage').toggleClass('green');
      user.score ++;
      user.currentQuestion ++;
    }
    else {
      $('main').append(`${createAlertBox(`That's wrong.The correct answer is '${result}'.`)}`);
      $('.alertMessage').toggleClass('red');
      user.currentQuestion ++;
    }
  });
};

function handleOKClicked() {
  $('main').on('submit','#js-alert', function(event) {
    event.preventDefault();
    $('#js-questions').show();
    $('.alert').empty();
    user.currentQuestion === quizBank.length?
    renderFinalScreen():renderAQuestion();
  });
}

function renderFinalScreen() {
  console.log('\nDisplaying Final Screen');
  let finalHtml= `
    <fieldset class='final-screen'>
      <div class='message'>
        <p>THANK YOU</p>
        <p> You have completed your quiz. Your score is <span class='span'> ${user.score}/${quizBank.length} </span>. What would you like to do next?</p>
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
  handleAnswerSubmitted();
  handleOKClicked();
  restartQuiz();
  exitQuiz();
  //generateQuestion();// this function needs not to be called when the page loads.
  //generateOptions();
  //createAlertBox();
  //generateQuizBank ();
  //renderAQuestion();   
  //renderFinalScreen();
} 
$(runQuizApp);
