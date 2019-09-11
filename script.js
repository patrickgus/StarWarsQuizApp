let questionNumber = 0;
let score = 0;

function renderQuestion() {
  const answers = STORE[questionNumber].answers.map(function (answer) {
	  return `<label class="answerOption">
              <input type="radio" name="answer" value="${answer}" required>
              <span>${answer}</span>
            </label>`;
  }).join(''); 

  return `
    <h2 class="questionTitle">${STORE[questionNumber].question}</h2>
    <form>
      <fieldset>
        ${answers}
        <button type="submit" class="submitButton">Submit</button>
      </fieldset>
    </form>`;
}

function increaseQuestionNumber() {
    questionNumber ++;

    $('.questionNumber').text(questionNumber + 1);
}

function handleStartButton() {
  // hide .quizStart class
  // replace with next question
  // set questionNumber to 1
  $('.quizStart').on('click', '.startButton', function(event) {
    $('.quizStart').hide();
    
    $('.questionAnswerForm').html(renderQuestion());

    $('.questionNumber').text(1);
  });
}

function increaseScore() {

  score ++;
  
  $('.score').text(score);
}

function renderCorrectAnswer() {
  $('.questionAnswerForm').html(`<h2>Correct!</h2>
    <button type="button" class="nextButton">Next</button>`);
  
  increaseScore();
}

function renderIncorrectAnswer() {
  const correctAnswer = `${STORE[questionNumber].correctAnswer}`;

  $('.questionAnswerForm').html(`<h2>Incorrect!</h2>
      <p>The correct answer is <span>"${correctAnswer}"</span></p>
    <button type="button" class="nextButton">Next</button>`);
} 

function renderFeedback() {
  const selected = $('input:checked');
  const answer = selected.val();
  const correctAnswer = `${STORE[questionNumber].correctAnswer}`;

  if (answer === correctAnswer) {
    renderCorrectAnswer();
  } else {
    renderIncorrectAnswer();
  }
}

function handleSubmitButton() {
  // hide question
  // display feedback correct or incorrect
  // increase score if feedback is correct
  $('.questionAnswerForm').on('click', '.submitButton', function(event) {
    event.preventDefault();

    renderFeedback();
  });
}

function renderResults() {
  return `<h2>Results</h2>
      <p>Score: ${score}/10</p>
    <button type="button" class="restartButton">Restart</button>`;
}

function handleNextButton() {
  // hide feedback
  // display next question (unless last question)
  // increase question number
  // after last question dispay results
  $('.questionAnswerForm').on('click', '.nextButton', function(event) {

    if (questionNumber < STORE.length - 1) {
      increaseQuestionNumber();

      $('.questionAnswerForm').html(renderQuestion());

    } else {
      $('.questionAnswerForm').html(renderResults());
    };
  });
}

function handleRestartButton() {
  // hide results
  // display start screen
  // change score and question numbers to 0
  $('.questionAnswerForm').on('click', '.restartButton', function(event) {
    location.reload();
  });
}

function handleButtons() {
  handleStartButton();
  handleSubmitButton();
  handleNextButton();
  handleRestartButton();
}

$(handleButtons);