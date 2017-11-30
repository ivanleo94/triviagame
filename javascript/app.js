
$( ".Submitbutton" ).click(function() {
    alert( "Handler for .click() called." )
    var correctanswers=0
    var incorrectanswers=0
    var time=30
    var Questionone= $('input[name="A"]:checked').val();
    var Questiontwo=$('input[name="B"]:checked').val();
    var Questionthree=$('input[name="C"]:checked').val();
    var Questionfour=$('input[name="D"]:checked').val();
    var Questionfive=$('input[name="E"]:checked').val();
    var Questionsix=$('input[name="F"]:checked').val();
    var Questionseven=$('input[name="G"]:checked').val();
    var Questioneight=$('input[name="H"]:checked').val();
    var Questionnine=$('input[name="I"]:checked').val();
    var Questionten=$('input[name="J"]:checked').val();
    var Questioneleven=$('input[name="K"]:checked').val();
    console.log(Questionone,Questiontwo,Questionthree,Questionfour,Questionfive,Questionsix,Questionseven,Questioneight,Questionnine,Questionten,Questioneleven)
    ;

// user guessed correctly
function userWin() {
    $("#gameScreen").html("<p>You got it right!</p>");
    correctGuesses++;
    var correctAnswer = questions[questionCounter].correctAnswer;
    $("#gameScreen").append("<p>The answer was <span class='answer'>" + 
        correctAnswer + 
        "</span></p>" + 
        questions[questionCounter].image);
    setTimeout(nextQuestion, 4000);
    questionCounter++;
}

    if (answer= right) {
        right
    }
  });