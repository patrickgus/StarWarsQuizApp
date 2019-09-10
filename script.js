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
        <button type="button" class="submitButton">Submit</button>
      </fieldset>
    </form>`;
}

function increaseQuestionNumber() {
  $('.questionNumber').text(questionNumber + 1);
}

function handleStartButton() {
  // Hide .quizStart class
  // replace with next question
  // increase questionNumber
  $('.quizStart').on('click', '.startButton', function(event) {
    $('.quizStart').hide();
    
    $('.questionAnswerForm').html(renderQuestion());

    increaseQuestionNumber();
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
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;

  $('.questionAnswerForm').html(`<h2>Incorrect!</h2>
          <p>The correct answer is <span>"${correctAnswer}"</span></p>
        <button type="button" class="nextButton">Next</button>`);
} 

function renderFeedback() {
  let selected = $('input:checked');
  let answer = selected.val();
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;

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

function handleNextButton() {
  // hide feedback
  // display next question (unless last question)
  // increase question number
  // after last question dispay results
}

function handleRestartButton() {
  // hide results
  // display start screen
  // change score and question numbers to 0
}

function handleButtons() {
  handleStartButton();
  handleSubmitButton();
  handleNextButton();
  handleRestartButton();
}

$(handleButtons);