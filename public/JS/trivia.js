var myQuestions = [
    {
      question: "Who played drums for Led Zeppelin",
      answers: {
        a: 'John Bonham',
        b: 'Art Blakey',
        c: 'Dave Grohl'
      },
      correctAnswer: 'a'
    },
    {
      question: "Who is the main character in lord of the rings?",
      answers: {
        a: 'Frodo',
        b: 'Aragorn',
        c: 'Gandalf'
      },
      correctAnswer: 'a'
    },
    {
        question: "What sport did Mark Mcguire play?",
        answers: {
          a: 'Basketball',
          b: 'Baseball',
          c: 'Hockey'
        },
        correctAnswer: 'b'
    },
    {
        question: "When was the Declaration of Independence signed?",
        answers: {
          a: '2004',
          b: '1812',
          c: '1776'
        },
        correctAnswer: 'c'
    },
    {
        question: "Who was the lead singer of Queen?",
        answers: {
          a: 'Freddie Mercury',
          b: 'Axl Rose',
          c: 'David Draiman'
        },
        correctAnswer: 'a'
    }
  ];
  
  var questionContainer = document.getElementById('question');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuestion(myQuestions, questionContainer, resultsContainer, submitButton);
  
  function generateQuestion(questions, questionContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, questionContainer){
      var output = [];
      var answers;
      for(var i=0; i<questions.length; i++){
        answers = [];
        for(letter in questions[i].answers){
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }

        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );

      }
      questionContainer.innerHTML = output.join('');
    }
  
    function showResults(questions, questionContainer, resultsContainer){
      var answerContainers = questionContainer.querySelectorAll('.answers');
      var userAnswer = '';
      var numCorrect = 0;
      for(var i=0; i<questions.length; i++){
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        if(userAnswer===questions[i].correctAnswer){
          numCorrect++;
          answerContainers[i].style.color = '#ff895d';
        }else{
          answerContainers[i].style.color = 'transparent';
        }
      }
  
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + ' Correct!';
    }
  
    showQuestions(questions, questionContainer);
    
    submitButton.onclick = function(){
      showResults(questions, questionContainer, resultsContainer);
    }
  
  }