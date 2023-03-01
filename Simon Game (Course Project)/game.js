var buttonColors =["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;
var userClickIndex = 0;

//Event listeners
$(document).keypress(function(e){
    if(!gameStarted){
        $("#level-title").text("Level " + level);
        nextSequence();
        gameStarted = true;
    }
});

$(".btn").click(function(e){
    var clickedColor = e.target.id;
    userClickedPattern.push(clickedColor);
    playSound(clickedColor);
    animatePress(clickedColor);
    checkAnswer(userClickedPattern.length-1);
});

// Functions
function nextSequence(){
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber =Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    var selectedButton =$("#" + randomChosenColor);
    selectedButton.fadeOut(50).fadeIn(50);
    playSound(randomChosenColor);

}
function playSound(currentColor){
    var soundToPlay = new Audio('./sounds/' + currentColor + '.mp3');
    soundToPlay.volume = 0.2;
    soundToPlay.play();
}
function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed")
    setTimeout(
        function(){
            $("#" + currentColor).removeClass("pressed");
        },
        100
    );
}
function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
  
        if (userClickedPattern.length === gamePattern.length){
  
          setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
  
      } else {
  
        console.log("wrong");
  
      }
}