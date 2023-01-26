
// let current = 0;
// const rollButton = document.querySelector(".rolldice")
// const pictureElement = document.querySelector(".dicePicture1")
// const pictureElement2 = document.querySelector(".dicePicture2")
// const currentPlayer1 = document.querySelector(".currentNumber")
// const currentPlayer2 = document.querySelector(".currentNumber2")

// rollButton.addEventListener("click", function() {
//     const randomNumber = Math.floor(Math.random() * 6) + 1;
//     console.log(randomNumber);
//     pictureElement.src = `dice-${randomNumber}.png`;
//     pictureElement2.src = `dice-${randomNumber}.png`;
//     current = randomNumber + randomNumber;
//     currentPlayer1.innerHTML = current;
// });
const rollButton = document.querySelector(".rolldice")
const pictureElement = document.querySelector(".dicePicture1")
const pictureElement2 = document.querySelector(".dicePicture2")
const currentPlayer1 = document.querySelector(".currentNumber")
const currentPlayer2 = document.querySelector(".currentNumber2")
let current = 0
let holdcurrent
rollButton.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    const randomNumber2=Math.floor(Math.random() * 6) + 1
    console.log(randomNumber);
    pictureElement.src = `dice-${randomNumber}.png`
    pictureElement2.src = `dice-${randomNumber2}.png`
    
    current+=randomNumber + randomNumber2
    // holdcurrent=current
    currentPlayer1.innerHTML=current
  


})