
const rollButton = document.querySelector(".rolldice")
const pictureElement = document.querySelector(".dicePicture1")
const pictureElement2 = document.querySelector(".dicePicture2")
const currentPlayer1Number = document.querySelector(".currentNumber")
const currentPlayer2Number = document.querySelector(".currentNumber2")
const holdYourCurrent = document.querySelector(".hold")
const player1 = document.querySelector(".player1-side")
const player2 = document.querySelector(".player2-side")
const holdNumberPlayer1 = document.querySelector(".holdNumber")
const holdNumberPlayer2 = document.querySelector(".holdNumberSecondPlayer")
const winnerPlayer = document.querySelector(".playerWinner")
const winnerPlaye2 = document.querySelector(".playerWinner2")
const buttonInformations=document.querySelector("buttonInformation")

const restartGame = document.querySelector(".newgame")
const getModal=document.querySelector(".modal")


winnerPlayer.classList.remove("playerWinner")
winnerPlaye2.classList.remove("playerWinner2")


let randomNumber = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let current = 0
let currentPlayer1 = 0;
let currentPlayer2 = 0;
let currentPlayer = 1;
let playing = true;
let gameTarget = 0
function startGame(){
     gameTarget=parseInt(input.value)
    if(gameTarget > 20 && gameTarget < 500){
        getModal.style.visibility="hidden"
    }else{
        alert("wrong")
    }
    

}
function information(){
    let button = document.querySelector(".buttonInformation");
        if (button.innerHTML === "Game Instructions") {
            console.log("hi");
            button.innerHTML = `lorem20akf kasmdkasm kdmka smdkoamns dmkoasm kdmaskmdkaskodmas mdkosamkd maskmd`;
        } else {
            button.innerHTML = "Click me";
        }
    }


rollButton.addEventListener("click", function () {
    if (playing) {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        const randomNumber2 = Math.floor(Math.random() * 6) + 1;
        pictureElement.src = `dice-${randomNumber}.png`
        pictureElement2.src = `dice-${randomNumber2}.png`


        if (currentPlayer === 1) {
            if (!playing) {
                return;
            }
            if (playing) {
                if (randomNumber !== 6 || randomNumber2 !== 6) {
                    currentPlayer1 += randomNumber + randomNumber2;
                    currentPlayer1Number.innerHTML = currentPlayer1;
                } else {
                    currentPlayer1 = 0;
                    currentPlayer1Number.innerHTML = currentPlayer1;
                    currentPlayer = 2;
                    player1.classList.toggle("currentplayer")
                    player2.classList.toggle("currentplayer")
                }
            }
        } else if (currentPlayer === 2) {
            if (playing) {
                if (randomNumber !== 6 || randomNumber2 !== 6) {
                    currentPlayer2 += randomNumber + randomNumber2;
                    currentPlayer2Number.innerHTML = currentPlayer2;
                } else {
                    currentPlayer2 = 0;
                    currentPlayer2Number.innerHTML = currentPlayer2;
                    currentPlayer = 1;
                    player1.classList.toggle("currentplayer")
                    player2.classList.toggle("currentplayer")
                }
            }

        } else {
            console.log("Invalid player number")
        }
    }
});


holdYourCurrent.addEventListener("click", function () {
    if (!playing) {
        return;
    }

    let getCurrent = 0;
    if (currentPlayer === 1) {
        if (parseInt(holdNumberPlayer1.innerHTML) + currentPlayer1 >= gameTarget) {
            winnerPlayer.classList.add("playerWinner");
            playing = false;
            return;
        }
        holdNumberPlayer1.innerHTML = parseInt(holdNumberPlayer1.innerHTML) + currentPlayer1;
        currentPlayer1 = 0;
        currentPlayer1Number.innerHTML = currentPlayer1;
        player1.classList.toggle("currentplayer");
        player2.classList.toggle("currentplayer");
        currentPlayer = 2;
    } else if (currentPlayer === 2) {
        if (parseInt(holdNumberPlayer2.innerHTML) + currentPlayer2 >= gameTarget) {
            winnerPlaye2.classList.add("playerWinner");
            playing = false;
            return;
        }
        holdNumberPlayer2.innerHTML = parseInt(holdNumberPlayer2.innerHTML) + currentPlayer2;
        currentPlayer2 = 0;
        currentPlayer2Number.innerHTML = currentPlayer2;
        player1.classList.toggle("currentplayer");
        player2.classList.toggle("currentplayer");
        currentPlayer = 1;
    }
})


restartGame.addEventListener("click", function () {
    playing = true

    currentPlayer1 = 0
    currentPlayer2 = 0
    if (currentPlayer === 1) {
        winnerPlayer.classList.remove("playerWinner")
    } 
    winnerPlaye2.classList.remove("playerWinner")

    currentPlayer1Number.innerHTML = "0"
    currentPlayer2Number.innerHTML = "0"
    holdNumberPlayer1.innerHTML = "0"
    holdNumberPlayer2.innerHTML = "0"
    // player1.classList.toggle("currentplayer");
    player2.classList.remove("currentplayer");
    player1.classList.add("currentplayer")
    currentPlayer = 1;
})






