
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
const buttonInformations = document.querySelector("buttonInformation")
const winnerText = document.querySelector(".winnerType")
const winnerText2 = document.querySelector(".winnerType2")
const restartGame = document.querySelector(".newgame")
const getModal = document.querySelector(".modal")
winnerPlayer.classList.remove("playerWinner")
winnerPlaye2.classList.remove("playerWinner2")
const wooHooSound = document.querySelector('#woo-hoo-sound')
const wooHooSound2 = document.querySelector('#woo-hoo-sound2')
const wooHooSound3 = document.querySelector('#woo-hoo-sound3')

let canvas = document.querySelector(".playerNameSecondPlayer");

/////////////////////////////////////////////////
let ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
let textWidth = ctx.measureText("PLAYER 2").width;
let x = canvas.width / 2 - textWidth / 2;
let y = canvas.height / 2;
ctx.strokeText("PLAYER 2", x, y);
//////////////////////////////////////////////////



let canvas2 = document.querySelector(".playerName");
////////////////////////////////////////////////////////
let ctx2 = canvas2.getContext("2d");
ctx2.font = "30px Arial";
let textWidth2 = ctx2.measureText("PLAYER 1").width;
let x2 = canvas2.width / 2 - textWidth2 / 2;
let y2 = canvas2.height / 2;
ctx2.strokeText("PLAYER 1", x2, y2);
////////////////////////////////////////////////////////


let randomNumber = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let current = 0
let currentPlayer1 = 0;
let currentPlayer2 = 0;
let currentPlayer = 1;
let playing = true;
let gameTarget = 0


function startGame() {
    gameTarget = parseInt(input.value)
    if (gameTarget > 20 && gameTarget < 500) {
        getModal.style.visibility = "hidden"
    } else {
        alert("wrong")
    }
}
function information() {
    let button = document.querySelector(".buttonInformation");
    if (button.innerHTML === "Game Instructions") {
        button.innerHTML = `<ul>
            <li>in Your turn-roll the dice (at least once) and accumulate result in "current"</li><hr>
            <li>You can toll again or click "Hold" to save the points from "Current" and end the turn.</li><hr>
            <li>Note! if you get 6-6 you will lose all points from "current" and the turn will go your opponent</li><hr>
            <li>if you managed to reach exactly the target score - you win! if you passed it -you loose...</li><hr>
            </ul>`;
    } else {
        button.innerHTML = "Game Instructions";
    }
}


rollButton.addEventListener("click", function () {
    wooHooSound2.play()
    if (playing) {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        const randomNumber2 = Math.floor(Math.random() * 6) + 1;
        pictureElement.src = `/assest/dice-${randomNumber}.png`
        pictureElement2.src = `/assest/dice-${randomNumber}.png`


        if (currentPlayer === 1) {
            if (!playing) {
                return;
            }
            if (playing) {
                if (randomNumber !== 6 || randomNumber2 !== 6) {
                    currentPlayer1 += randomNumber + randomNumber2;
                    currentPlayer1Number.innerHTML = currentPlayer1;
                } else {
                    wooHooSound3.play()
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
                    wooHooSound3.play()
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
function playerOneWinner() {
    winnerPlayer.classList.add("playerWinner");
    ctx2.fillStyle = 'white';
    ctx2.fillText('PLAYER 1', x, y);
    holdNumberPlayer1.style.color = "white"
    playing = false;
    return;
}
function playerTwoWinner() {
    winnerPlaye2.classList.add("playerWinner");
    ctx.fillStyle = 'white';
    ctx.fillText('PLAYER 2', x, y);
    holdNumberPlayer2.style.color = "white"
    playing = false;

    return;
}

holdYourCurrent.addEventListener("click", function () {
    wooHooSound3.play()


    if (!playing) {
        return;
    }

    if (currentPlayer === 1) {
        if (parseInt(holdNumberPlayer1.innerHTML) + currentPlayer1 === gameTarget) {
            winnerText.innerHTML = `you won!`
            wooHooSound.play()
            playerOneWinner()
        } else {
            if (parseInt(holdNumberPlayer1.innerHTML) + currentPlayer1 > gameTarget) {
                winnerText2.innerHTML = `you won!`
                wooHooSound.play()
                winnerText.innerHTML = `passed the target score!`
                playerTwoWinner()

            }
        }
        holdNumberPlayer1.innerHTML = parseInt(holdNumberPlayer1.innerHTML) + currentPlayer1;
        currentPlayer1 = 0;
        currentPlayer1Number.innerHTML = currentPlayer1;
        player1.classList.toggle("currentplayer");
        player2.classList.toggle("currentplayer");
        currentPlayer = 2;
    } else if (currentPlayer === 2) {
        if (parseInt(holdNumberPlayer2.innerHTML) + currentPlayer2 === gameTarget) {
            winnerText2.innerHTML = `you won!`
            wooHooSound.play()


            playerTwoWinner()
        } else {
            if (parseInt(holdNumberPlayer2.innerHTML) + currentPlayer2 > gameTarget) {
                winnerText.innerHTML = `you won!`
                wooHooSound.play()

                winnerText2.innerHTML = `passed the target score!`

                playerOneWinner()
            }

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
    getModal.style.visibility = "visible"
    playing = true
    winnerText.innerHTML = ""
    winnerText2.innerHTML = ""
    holdNumberPlayer2.style.color = "rgb(218, 87, 87)";
    holdNumberPlayer1.style.color = "rgb(218, 87, 87)";

    ctx2.strokeText("PLAYER 1", x2, y2);

    ctx.strokeText("PLAYER 2", x, y);

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
    player2.classList.remove("currentplayer");
    player1.classList.add("currentplayer")
    currentPlayer = 1;
})




