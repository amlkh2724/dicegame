
const rollButton = document.querySelector(".rolldice")
const pictureElement = document.querySelector(".dicePicture1")
const pictureElement2 = document.querySelector(".dicePicture2")
const currentPlayer1Number = document.querySelector(".currentNumber")
const currentPlayer2Number = document.querySelector(".currentNumber2")
const player1= document.querySelector(".player1-side")
const player2= document.querySelector(".player2-side")




let current = 0
let holdcurrent
let randomNumber = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let currentPlayer1 = 0;
let currentPlayer2 = 0;
let currentPlayer = 1;

rollButton.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    pictureElement.src = `dice-${randomNumber}.png`
    pictureElement2.src = `dice-${randomNumber2}.png`

    if (currentPlayer === 1) {
        
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
    } else if (currentPlayer === 2) {
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
    } else {
        console.log("Invalid player number")
    }
});




// rollButton.addEventListener("click", function () {
//     const randomNumber = Math.floor(Math.random() * 6) + 1;
//     const randomNumber2 = Math.floor(Math.random() * 6) + 1;
//     pictureElement.src = `dice-${randomNumber}.png`
//     pictureElement2.src = `dice-${randomNumber2}.png`
  
//     if(randomNumber!==6 || randomNumber2 !==6){
//         current += randomNumber + randomNumber2;
//         currentPlayer1.innerHTML = current;
//     }else{
//         current=0
//         currentPlayer1.innerHTML=0
//     }
    
// });
// By doing this, the random numbers will be generated once, and the same numbers will be used for both the picture elements and for the current calculation.
// Also, it's good practice to move any variables that don't change inside the event listener to outside so that they are only defined once.

// Please let me know if this helps or if there is anything else I can help you with.




