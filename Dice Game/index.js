document.getElementsByTagName("button")[0].addEventListener("click",function()
{
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    diceNumberL(randomNumber1);
    diceNumberR(randomNumber2);
    winner(randomNumber1, randomNumber2);

})

function winner(randomNumber1,randomNumber2){
    if (randomNumber1 > randomNumber2){
        document.getElementsByTagName("button")[0].innerHTML = '<h1 id="blink">Player 1 Wins!</h1>';
    }
    else if (randomNumber1 < randomNumber2){
        document.getElementsByTagName("button")[0].innerHTML = '<h1 id="blink">Player 2 Wins!</h1>';
    }
    else if (randomNumber1 == randomNumber2){
        document.getElementsByTagName("button")[0].innerHTML = '<h1 id="blink">Draw!</h1>';
    }
}

function diceNumberL(randomNumber1){

    if (randomNumber1 == 1){
        document.getElementById("dice1").setAttribute("src","images/dice-1.png");
    }
    else if (randomNumber1 == 2){
        document.getElementById("dice1").setAttribute("src","images/dice-2.png");
    }
    else if (randomNumber1 == 3){
        document.getElementById("dice1").setAttribute("src","images/dice-3.png");
    }
    else if (randomNumber1 == 4){
        document.getElementById("dice1").setAttribute("src","images/dice-4.png");
    }
    else if (randomNumber1 == 5){
        document.getElementById("dice1").setAttribute("src","images/dice-5.png");
    }
    else if (randomNumber1 == 6){
        document.getElementById("dice1").setAttribute("src","images/dice-6.png");
    }
}

function diceNumberR(randomNumber2){

    if (randomNumber2 == 1){
        document.getElementById("dice2").setAttribute("src","images/dice-1.png");
    }
    else if (randomNumber2 == 2){
        document.getElementById("dice2").setAttribute("src","images/dice-2.png");
    }
    else if (randomNumber2 == 3){
        document.getElementById("dice2").setAttribute("src","images/dice-3.png");
    }
    else if (randomNumber2 == 4){
        document.getElementById("dice2").setAttribute("src","images/dice-4.png");
    }
    else if (randomNumber2 == 5){
        document.getElementById("dice2").setAttribute("src","images/dice-5.png");
    }
    else if (randomNumber2 == 6){
        document.getElementById("dice2").setAttribute("src","images/dice-6.png");
    }
}
