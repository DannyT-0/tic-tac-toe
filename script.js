// // Store gameboard in an Array inside of a gameboard OBJECT. Tic tac toe gameboard is 3 by 3 row
// // Your players will be stored in objects as well
// // the flow of the game will be controlled by an object as well

const container = document.querySelector("#container")
const btnContainer = document.querySelector("#buttonContainer")
const nameContainer = document.querySelector("#nameContainer")
const playerOne = document.querySelector("#playerOne")
const playerTwo = document.querySelector("#playerTwo")
const startBtn = document.querySelector("#startGame")
const resetBtn = document.querySelector("#resetGame")
const rowBox = document.querySelectorAll(".rowBox")


// const gameBoard = (function () {
//     const emptyBoard = () => {
//         let playBoard = ["", "", "", "", "", "", "", "", ""]
//         return playBoard;
//     }

//     const filledBoard = () => {
//         let playBoard = ["X", "X", "X", "X", "X", "X", "X", "X", "O"];
//         return playBoard;
//     }

// })();



// const gameDisplay = (function () {
//     const startBtn = document.querySelector("#startGame")
//     const resetBtn = document.querySelector("#resetGame")

// })();



// const players = (name) => {

// }








let playBox = ["", "", "", "", "", "", "", "", ""];
console.log(rowBox)

function appendBoard() {
    let xCount = 0;
    let oCount = 0;
    for (let j = 0; j < playBox.length; j++) {
        playBox[j] === "X" && xCount++
    }
    let xSymbolCount = xCount;

    for (let j = 0; j < playBox.length; j++) {
        playBox[j] === "O" && oCount++
    }
    let oSymbolCount = oCount;


    for (let i = 0; i < rowBox.length; i++) {
        rowBox[i].addEventListener("click", (e) => {
            if (xSymbolCount == 0 || xSymbolCount <= oSymbolCount) {
                e.target.textContent = "X";
                e.target.value = e.target.textContent;
                xSymbolCount++;
                playBox[i] = rowBox[i].value;
                console.log(playBox)
                console.log(xSymbolCount, "X count")
                console.log(oSymbolCount, "O count")

            } else if (xSymbolCount > 0 && oSymbolCount == 0 || oSymbolCount < xSymbolCount) {
                e.target.textContent = "O";
                e.target.value = e.target.textContent;
                oSymbolCount++;
                playBox[i] = rowBox[i].value;
                console.log(playBox)
                console.log(xSymbolCount, "X count")
                console.log(oSymbolCount, "O count")
            }

        })
    }


}

appendBoard();





