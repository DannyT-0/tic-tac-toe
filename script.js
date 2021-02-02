// Store gameboard in an Array inside of a gameboard OBJECT. Tic tac toe gameboard is 3 by 3 row
// Your players will be stored in objects as well
// the flow of the game will be controlled by an object as well

const container = document.querySelector("#container")


const gameBoard = (() => {
    let playBox = [];

    function createBoard() {
        for (i = 0; i < 9; i++) {
            const rowBox = document.createElement("div");
            rowBox.className = "rowTicTac" + i;
            container.appendChild(rowBox);
            playBox.push(rowBox);

        }
        console.log(playBox)
    }

    return {
        createBoard 
}

})();

gameBoard.createBoard();

const players = (playerName, playerSymbol) => {
    const name = () => playerName;
    const symbol = () => playerSymbol;

    return {
        name,
        symbol
    }
}

const player1 = players("danny", "X");