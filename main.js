let playerTurn = "player-one";
let arrayOfoccuppied = [[0,0,0], [0,0,0], [0,0,0]];
let aPlayerWon = false;

let func1 = function(){
    //position 1 called
    mainFuncDriver(playerTurn, 1);
}

let func2 = function(){
    //position 2 called
    mainFuncDriver(playerTurn, 2);
}

let func3 = function(){
    //position 3 called
    mainFuncDriver(playerTurn, 3);
}

let func4 = function(){
    //position 4 called
    mainFuncDriver(playerTurn, 4);
}

let func5 = function(){
    //position 5 called
    mainFuncDriver(playerTurn, 5);
}

let func6 = function(){
    //position 6 called
    mainFuncDriver(playerTurn, 6);
}

let func7 = function(){
    //position 7 called
    mainFuncDriver(playerTurn, 7);
}

let func8 = function(){
    //position 8 called
    mainFuncDriver(playerTurn, 8);
}

let func9 = function(){
    //position 9 called
    mainFuncDriver(playerTurn, 9);
}


let mainFuncDriver = function(playerToPlay, position){
    let getText = document.querySelector(".box-" + position + " h2");
    let getBackgroundColor = document.querySelector(".box-" + position);
    let getPlayerMessages = document.querySelector(".player-messages h4");
    let getPlayerMessagesClass = document.querySelector(".player-messages");


    if(playerToPlay == "player-one" && aPlayerWon == false){
        if(getText.innerHTML == "X" || getText.innerHTML == "O"){
            alert("Player-one: This spot is occuppied, please try another spot");
        }
        else if(getText.innerHTML == "-"){
            getText.innerHTML = "X";
            getBackgroundColor.style.backgroundColor = "red";
            //update position in array
            updatePosition(position, "player-one");

            //run check win postion function
            let playerWinSatus = checkWin(1);
            if(playerWinSatus == true){
                getPlayerMessagesClass.innerHTML = '<h4 onclick="playAgain()">PLAYER ONE WON THE GAME!!!!!!<br><br>Click me to play again or refresh the browser</h4>';
                getPlayerMessagesClass.style.cursor = "pointer";
            }
            else if(playerWinSatus == false){
                playerTurn = "player-two";
                getPlayerMessagesClass.style.background = "linear-gradient(to bottom , rgb(12, 26, 218), rgb(102, 0, 245))";
                getPlayerMessages.innerHTML = "player two's turn";
            }

            //check for a draw
            gameDraw();
        }
    }
    else if(playerToPlay == "player-two" && aPlayerWon == false){
        if(getText.innerHTML == "X" || getText.innerHTML == "O"){
            alert("Player-two: This spot is occuppied, please try another spot");
        }
        else if(getText.innerHTML == "-"){
            getText.innerHTML = "O";
            getBackgroundColor.style.backgroundColor = "blue";
            //update position in array
            updatePosition(position, "player-two");

            //run check win postion function
            let playerWinSatus = checkWin(2);
            if(playerWinSatus == true){
                getPlayerMessagesClass.innerHTML = '<h4 onclick="playAgain()">PLAYER TWO WON THE GAME!!!!!!<br><br>Click me to play again or refresh the browser</h4>';
                getPlayerMessagesClass.style.cursor = "pointer";
            }
            else if(playerWinSatus == false){
                playerTurn = "player-one";
                getPlayerMessagesClass.style.background = "linear-gradient(to bottom , rgb(218, 12, 32), rgb(245, 0, 0))";
                getPlayerMessages.innerHTML = "player one's turn";
            }

            //check for a draw
            gameDraw();
        }
    }
    else if(aPlayerWon == true){
        alert("please refresh the browser or click the play again button");
    }
}

let updatePosition = function(newPosition, inputPlayer){//dobulecheck
    if(newPosition == 1){
        if(inputPlayer == "player-one"){
            arrayOfoccuppied[0][0] = 1;
        }
        else if(inputPlayer == "player-two"){
            arrayOfoccuppied[0][0] = 2;
        }
    }
    else if(newPosition == 2){
        if(inputPlayer == "player-one"){
            arrayOfoccuppied[0][1] = 1;
        }
        else if(inputPlayer == "player-two"){
            arrayOfoccuppied[0][1] = 2;
        }
    }
    else if(newPosition == 3){
        if(inputPlayer == "player-one"){
            arrayOfoccuppied[0][2] = 1;
        }
        else if(inputPlayer == "player-two"){
            arrayOfoccuppied[0][2] = 2;
        }
    }
    else if(newPosition == 4){
        if(inputPlayer == "player-one"){
            arrayOfoccuppied[1][0] = 1;
        }
        else if(inputPlayer == "player-two"){
            arrayOfoccuppied[1][0] = 2;
        }
    }
    else if(newPosition == 5){
        if(inputPlayer == "player-one"){
            arrayOfoccuppied[1][1] = 1;
        }
        else if(inputPlayer == "player-two"){
            arrayOfoccuppied[1][1] = 2;
        }
    }
    else if(newPosition == 6){
        if(inputPlayer == "player-one"){
            arrayOfoccuppied[1][2] = 1;
        }
        else if(inputPlayer == "player-two"){
            arrayOfoccuppied[1][2] = 2;
        }
    }
    else if(newPosition == 7){
        if(inputPlayer == "player-one"){
            arrayOfoccuppied[2][0] = 1;
        }
        else if(inputPlayer == "player-two"){
            arrayOfoccuppied[2][0] = 2;
        }
    }
    else if(newPosition == 8){
        if(inputPlayer == "player-one"){
            arrayOfoccuppied[2][1] = 1;
        }
        else if(inputPlayer == "player-two"){
            arrayOfoccuppied[2][1] = 2;
        }
    }
    else if(newPosition == 9){
        if(inputPlayer == "player-one"){
            arrayOfoccuppied[2][2] = 1;
        }
        else if(inputPlayer == "player-two"){
            arrayOfoccuppied[2][2] = 2;
        }
    }
}

let checkWin = function(numberTocheck){//doublecheck
    let PlayerWon = false;
    
    if((arrayOfoccuppied[0][0] == numberTocheck) && (arrayOfoccuppied[1][0] == numberTocheck) && (arrayOfoccuppied[2][0] == numberTocheck)){
        PlayerWon = true;
        aPlayerWon = true;
    }
    else if((arrayOfoccuppied[0][1] == numberTocheck) && (arrayOfoccuppied[1][1] == numberTocheck) && (arrayOfoccuppied[2][1] == numberTocheck)){
        PlayerWon = true;
        aPlayerWon = true;
    }
    else if((arrayOfoccuppied[0][2] == numberTocheck) && (arrayOfoccuppied[1][2] == numberTocheck) && (arrayOfoccuppied[2][2] == numberTocheck)){
        PlayerWon = true;
        aPlayerWon = true;
    }
    else if((arrayOfoccuppied[0][0] == numberTocheck) && (arrayOfoccuppied[0][1] == numberTocheck) && (arrayOfoccuppied[0][2] == numberTocheck)){
        PlayerWon = true;
        aPlayerWon = true;
    }
    else if((arrayOfoccuppied[1][0] == numberTocheck) && (arrayOfoccuppied[1][1] == numberTocheck) && (arrayOfoccuppied[1][2] == numberTocheck)){
        PlayerWon = true;
        aPlayerWon = true;
    }
    else if((arrayOfoccuppied[2][0] == numberTocheck) && (arrayOfoccuppied[2][1] == numberTocheck) && (arrayOfoccuppied[2][2] == numberTocheck)){
        PlayerWon = true;
        aPlayerWon = true;
    }
    else if((arrayOfoccuppied[0][0] == numberTocheck) && (arrayOfoccuppied[1][1] == numberTocheck) && (arrayOfoccuppied[2][2] == numberTocheck)){
        PlayerWon = true;
        aPlayerWon = true;
    }
    else if((arrayOfoccuppied[0][2] == numberTocheck) && (arrayOfoccuppied[1][1] == numberTocheck) && (arrayOfoccuppied[2][0] == numberTocheck)){
        PlayerWon = true;
        aPlayerWon = true;
    }

    return PlayerWon;
}

let gameDraw = function(){
    if((arrayOfoccuppied[0][0] != 0) && (arrayOfoccuppied[0][1] != 0) && (arrayOfoccuppied[0][2] != 0)
        && (arrayOfoccuppied[1][0] != 0) && (arrayOfoccuppied[1][1] != 0) && (arrayOfoccuppied[1][2] != 0)
        && (arrayOfoccuppied[2][0] != 0) && (arrayOfoccuppied[2][1] != 0) && (arrayOfoccuppied[2][2] != 0)){
            let getPlayerMessagesClass = document.querySelector(".player-messages");
            getPlayerMessagesClass.innerHTML = '<h4 onclick="playAgain()">game is a draw<br><br>Click me to play again or refresh the browser</h4>';
            getPlayerMessagesClass.style.cursor = "pointer";
            aPlayerWon = true;
    }
}

let playAgain = function(){//doublecheck
    playerTurn = "player-one";
    let getPlayerMessagesClass = document.querySelector(".player-messages");
    getPlayerMessagesClass.innerHTML = "<h4>player one's turn</h4>";
    getPlayerMessagesClass.style.cursor = "none";
    
    //clean up array
    for(var x = 0; x < 3; ++x){
        for(var m = 0; m < 3; ++m){
            arrayOfoccuppied[x][m] = 0;
        }
    }

    //clean up display
    for(var i = 1; i < 10; ++i){
        let getOcuppiedText = document.querySelector(".box-" + i + " h2");
        let getBackgroundColor = document.querySelector(".box-" + i);
        getOcuppiedText.innerHTML = "-";
        getBackgroundColor.style.backgroundColor = "beige";
    }
    aPlayerWon = false;
}
