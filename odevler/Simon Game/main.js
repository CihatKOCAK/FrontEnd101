const userClickedPattern = [];//User pattern
const gamePattern = [];//Game pattern
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;

function nextSequence()/*Random Colour Generate*/ {
    var randomNumber = Math.floor((Math.random() * 4));
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    clickAnimate(randomChosenColour);
    playSound(randomChosenColour);
    level++;
    userClickedPattern.length = 0;
    $("h1").html("Level " + level);
    return (randomNumber);
}
$(".btn").click(function ()/*User Click */ {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
})

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("succ")
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over")
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver();
    }
}

function startOver() {
    level=0;
    gamePattern.length=0;
    $(document).one("keypress",function() {
        nextSequence();
    })
}

$(document).one("keypress", function started()/*Game Start */ {
    nextSequence();
})


$(".btn").click(function (buttonId)/*Pressed button Animate/Sound*/ {
    var buttonId = this.id;
    playSound(buttonId);
    clickAnimate(buttonId)
    console.log(buttonId);
})

function playSound(key)/*Sound Function*/ {
    switch (key) {
        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;
        case "red":
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;
        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
        case "wrong":
            var wrong = new Audio("sounds/wrong.mp3");
            wrong.play();
            break;

        default:
            break;
    }
}
function clickAnimate(key)/*Animation Function*/ {
    $("#" + key).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}