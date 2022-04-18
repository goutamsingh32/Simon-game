var level=0;
var started=false;

var btnColor=["green","blue","yellow","pink"];
var gamePattern=[];
var choosenPattern=[];

document.querySelector("body").addEventListener("keypress",function(){
    if(!started){
        document.querySelector("h1").innerHTML="Level "+level;
        nextSequence();
        started=true;
    }
});

for(var i=0;i<4;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){

        var userChosenColour=$(this).attr("class");
        choosenPattern.push(userChosenColour);
        playSound(userChosenColour)
        // animation(userChosenColour);
        checkAnswer(choosenPattern.length-1);
    
    });
}


function checkAnswer(currentLevel){

    if(gamePattern[currentLevel]===choosenPattern[currentLevel]){
        if(gamePattern.length===choosenPattern.length){

            setTimeout(function (){
                nextSequence();
            },1000);
        }
    }
    else{
        playSound("wrong");
        document.querySelector("body").classList.add("game-over");
        document.querySelector("h1").innerHTML="game over  Press any key to restart ";

        setTimeout(function(){
            document.querySelector("body").classList.remove("game-over");
        },200);

        startOver();

    }
}

// function animation(str){
    
//     document.querySelector("."+str).classList.add("pressed");
//     setTimeout(function(){
//         document.querySelector("."+str).classList.remove("pressed");
//     },50);
// }

function nextSequence(){
    level++;
    choosenPattern=[];
    var randomNumber=Math.floor(Math.random()*4);
    document.querySelector("h1").innerHTML="Level "+level;
    var randomColor=btnColor[randomNumber];
    
    gamePattern.push(randomColor);
    playSound(randomColor);
    
    $("." + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);

}



function playSound(str){
    var audio=new Audio("sounds/"+str+".mp3");
    audio.play();
}

function startOver(){
    gamePattern=[];
    choosenPattern=[];
    level=0;
    started=0;
}

