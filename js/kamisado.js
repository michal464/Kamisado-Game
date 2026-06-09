let cell = {
    isFocus: false,
    row: null,
    col: null,
    color: null,
    isFull: null,
    solider: null
};

let solider = {
    color: null,
    type: null
};

const cColor = {
    BLACK: "black",
    WHITE: "white"
};

let prevCell = {
    cell: null
};

let soliderLocateCell = {
    cell: null
};

let nextSolider = {
    solider: null,
};

let isFirstSoliderClick = false;
let board = document.getElementById('game-board');
const sizeOfRowAndCol = 8;

let gameBoard = [
    [{ row: 0, col: 0, color: 'brown', isFull: true, solider: { color: 'brown', type: cColor.BLACK } },
    { row: 0, col: 1, color: 'purple', isFull: true, solider: { color: 'purple', type: cColor.BLACK } },
    { row: 0, col: 2, color: 'blue', isFull: true, solider: { color: 'blue', type: cColor.BLACK } },
    { row: 0, col: 3, color: 'yellow', isFull: true, solider: { color: 'yellow', type: cColor.BLACK } },
    { row: 0, col: 4, color: 'pink', isFull: true, solider: { color: 'pink', type: cColor.BLACK } },
    { row: 0, col: 5, color: 'green', isFull: true, solider: { color: 'green', type: cColor.BLACK } },
    { row: 0, col: 6, color: 'red', isFull: true, solider: { color: 'red', type: cColor.BLACK } },
    { row: 0, col: 7, color: 'orange', isFull: true, solider: { color: 'orange', type: cColor.BLACK } }],
    [{ row: 1, col: 0, color: 'green', isFull: false },
    { row: 1, col: 1, color: 'brown', isFull: false },
    { row: 1, col: 2, color: 'yellow', isFull: false },
    { row: 1, col: 3, color: 'red', isFull: false },
    { row: 1, col: 4, color: 'purple', isFull: false },
    { row: 1, col: 5, color: 'pink', isFull: false },
    { row: 1, col: 6, color: 'orange', isFull: false },
    { row: 1, col: 7, color: 'blue', isFull: false }],
    [{ row: 2, col: 0, color: 'red', isFull: false },
    { row: 2, col: 1, color: 'yellow', isFull: false },
    { row: 2, col: 2, color: 'brown', isFull: false },
    { row: 2, col: 3, color: 'green', isFull: false },
    { row: 2, col: 4, color: 'blue', isFull: false },
    { row: 2, col: 5, color: 'orange', isFull: false },
    { row: 2, col: 6, color: 'pink', isFull: false },
    { row: 2, col: 7, color: 'purple', isFull: false }],
    [{ row: 3, col: 0, color: 'yellow', isFull: false },
    { row: 3, col: 1, color: 'blue', isFull: false },
    { row: 3, col: 2, color: 'purple', isFull: false },
    { row: 3, col: 3, color: 'brown', isFull: false },
    { row: 3, col: 4, color: 'orange', isFull: false },
    { row: 3, col: 5, color: 'red', isFull: false },
    { row: 3, col: 6, color: 'green', isFull: false },
    { row: 3, col: 7, color: 'pink', isFull: false }],
    [{ row: 4, col: 0, color: 'pink', isFull: false },
    { row: 4, col: 1, color: 'green', isFull: false },
    { row: 4, col: 2, color: 'red', isFull: false },
    { row: 4, col: 3, color: 'orange', isFull: false },
    { row: 4, col: 4, color: 'brown', isFull: false },
    { row: 4, col: 5, color: 'purple', isFull: false },
    { row: 4, col: 6, color: 'blue', isFull: false },
    { row: 4, col: 7, color: 'yellow', isFull: false }],
    [{ row: 5, col: 0, color: 'purple', isFull: false },
    { row: 5, col: 1, color: 'pink', isFull: false },
    { row: 5, col: 2, color: 'orange', isFull: false },
    { row: 5, col: 3, color: 'blue', isFull: false },
    { row: 5, col: 4, color: 'green', isFull: false },
    { row: 5, col: 5, color: 'brown', isFull: false },
    { row: 5, col: 6, color: 'yellow', isFull: false },
    { row: 5, col: 7, color: 'red', isFull: false }],
    [{ row: 6, col: 0, color: 'blue', isFull: false },
    { row: 6, col: 1, color: 'orange', isFull: false },
    { row: 6, col: 2, color: 'pink', isFull: false },
    { row: 6, col: 3, color: 'purple', isFull: false },
    { row: 6, col: 4, color: 'red', isFull: false },
    { row: 6, col: 5, color: 'yellow', isFull: false },
    { row: 6, col: 6, color: 'brown', isFull: false },
    { row: 6, col: 7, color: 'green', isFull: false }],
    [{ row: 7, col: 0, color: 'orange', isFull: true, solider: { color: 'orange', type: cColor.WHITE } },
    { row: 7, col: 1, color: 'red', isFull: true, solider: { color: 'red', type: cColor.WHITE } },
    { row: 7, col: 2, color: 'green', isFull: true, solider: { color: 'green', type: cColor.WHITE } },
    { row: 7, col: 3, color: 'pink', isFull: true, solider: { color: 'pink', type: cColor.WHITE } },
    { row: 7, col: 4, color: 'yellow', isFull: true, solider: { color: 'yellow', type: cColor.WHITE } },
    { row: 7, col: 5, color: 'blue', isFull: true, solider: { color: 'blue', type: cColor.WHITE } },
    { row: 7, col: 6, color: 'purple', isFull: true, solider: { color: 'purple', type: cColor.WHITE } },
    { row: 7, col: 7, color: 'brown', isFull: true, solider: { color: 'brown', type: cColor.WHITE } }]
];

let tempGameBoard = structuredClone(gameBoard);

document.addEventListener("DOMContentLoaded", function () {
    init();
});

function init() {
    paintBoard();
    locateSoliders();
    showPrfil();
}

function paintBoard() {
    for (let row = 0; row < sizeOfRowAndCol; row++) {
        for (let col = 0; col < sizeOfRowAndCol; col++) {
            let cell = gameBoard[row][col];
            let paintCell = document.createElement('div');
            paintCell.classList.add(`cell_${row}_${col}`, `color-${cell.color}`);
            paintCell.addEventListener('click', function (event) {
                handleCellClick.call(this, event);
            });
            board.appendChild(paintCell);
        }
    }
}

function locateSoliders() {
    for (let col = 0; col < sizeOfRowAndCol; col++) {
        initLocateSolider(gameBoard[0][col].solider, 0, col);
    }
    for (let col = 0; col < sizeOfRowAndCol; col++) {
        initLocateSolider(gameBoard[sizeOfRowAndCol - 1][col].solider, sizeOfRowAndCol - 1, col);
    }
}

function initLocateSolider(solider, row, col) {
    let entity = document.createElement('div');
    entity.classList.add(`circle-${solider.type}`, `color-${solider.color}`);
    let cell = document.querySelector(`.cell_${row}_${col}.color-${solider.color}`);
    cell.appendChild(entity);
}

function showPrfil() {
    let player1 = JSON.parse(sessionStorage.getItem('player1'));
    let player2 = JSON.parse(sessionStorage.getItem('player2'));
    document.getElementById('player1-name').textContent = `Second Player: ${player1.Name}`;
    document.getElementById('player2-name').textContent = `First Player: ${player2.Name}`;
}

function PlayerProfil(nextSoliderType) {
    if (nextSoliderType == cColor.BLACK) {
        document.getElementById('player2-profile').classList.add('hidden');
        document.getElementById('player1-profile').classList.remove('hidden');

    } else {
        document.getElementById('player1-profile').classList.add('hidden');
        document.getElementById('player2-profile').classList.remove('hidden');
    }
}

function findCellBySoliderProp(color, type) {
    for (let i = 0; i < gameBoard.length; i++) {
        for (let j = 0; j < gameBoard[i].length; j++) {
            const cell = gameBoard[i][j];
            if (cell.solider && cell.solider.color === color && cell.solider.type === type) { return cell; }
        }
    }
}


function handleCellClick(event) {
    let [_, row, col] = event.currentTarget.classList[0].split('_');
    let focusCell = gameBoard[row][col];
    focusCell.isFocus = true;
    if (!isFirstSoliderClick) {
        if (focusCell.isFull == false) {
            alert("To start the game, please click on a black piece.")
            return;
        }
        else {
            PlayerProfil(nextSolider.type);
            isFirstSoliderClick = true;
            nextSolider = structuredClone(focusCell.solider);
            prevCell = focusCell;
            soliderLocateCell = findCellBySoliderProp(nextSolider.color, nextSolider.type);
            setBold(soliderLocateCell.row, soliderLocateCell.col);
        }
    }
    else {
        if (validateStep(focusCell)) {
            PlayerProfil(nextSolider.type);
            setUnbold(soliderLocateCell.row, soliderLocateCell.col);
            prevCell.isFocus = false;
            locateSolider(focusCell, soliderLocateCell, nextSolider, event.currentTarget);
            nextSolider.type = toggleSoliderType(nextSolider.type);
            nextSolider.color = focusCell.color;
            soliderLocateCell = findCellBySoliderProp(nextSolider.color, nextSolider.type);
            setBold(soliderLocateCell.row, soliderLocateCell.col);
            prevCell = focusCell;
            checkVictory(prevCell, focusCell);
            playSound('correct');
        }
        else {
            playSound('lose');
            alert('הצעד שלך נוגד את כללי המשחק');
        }
    }

}

function validateStep(focusCell) {
    if (soliderLocateCell.col === focusCell.col && soliderLocateCell.solider.type === cColor.WHITE && soliderLocateCell.row > focusCell.row)
        if (!IsBlockingSolider(soliderLocateCell, focusCell, soliderLocateCell.solider.type))
            return true;
    if (soliderLocateCell.col === focusCell.col && soliderLocateCell.solider.type === cColor.BLACK && soliderLocateCell.row < focusCell.row)
        if (!IsBlockingSolider(soliderLocateCell, focusCell, soliderLocateCell.solider.type))
            return true;
    if (Math.abs(soliderLocateCell.col - focusCell.col) === Math.abs(soliderLocateCell.row - focusCell.row)) {
        if (soliderLocateCell.solider.type === cColor.WHITE && soliderLocateCell.row > focusCell.row)
            if (!IsBlockingSolider(soliderLocateCell, focusCell, soliderLocateCell.solider.type))
                return true;
        if (soliderLocateCell.solider.type === cColor.BLACK && soliderLocateCell.row < focusCell.row)
            if (!IsBlockingSolider(soliderLocateCell, focusCell, soliderLocateCell.solider.type))
                return true;
    }
    return false;
}

function locateSolider(focusCell, soliderLocateCell, solider, entity) {
    focusCell.isFull = true
    soliderLocateCell.solider = null
    soliderLocateCell.isFull = false;
    focusCell.solider = structuredClone(solider);
    const movingSolider = document.querySelector(`.circle-${solider.type}.color-${solider.color}`);
    entity.appendChild(movingSolider);
}

function toggleSoliderType(type) {
    if (type == cColor.BLACK) {

        return cColor.WHITE;
    }
    return cColor.BLACK;
}

function checkVictory(prevCell, focusCell) {
    if (prevCell.solider.type === cColor.WHITE && focusCell.row === 0) {
        document.getElementById('victoryMusic').play();
        alert("השחקן הלבן ניצח!");
        window.location.href = '../html/winner.html'
    } else if (prevCell.solider.type === cColor.BLACK && focusCell.row === sizeOfRowAndCol - 1) {
        document.getElementById('victoryMusic').play();
        alert("השחקן השחור ניצח!");
        window.location.href = '../html/winner.html'
    }
}


function IsBlockingSolider(source, target, soliderType) {
    if (soliderType == cColor.WHITE) {
        if (source.col == target.col) {
            for (let i = source.row - 1; i >= target.row; i--) {
                if (gameBoard[i][source.col].isFull)
                    return true;
            };
        }
        else {
            return checkUpSlant(source, target, soliderType);
        }
    }
    else {
        if (source.col == target.col) {
            for (let i = source.row + 1; i <= target.row; i++) {
                if (gameBoard[i][source.col].isFull)
                    return true;
            };
        }
        else {
            return checkDownSlant(source, target, soliderType);
        }
    }
}
//WHITE
function checkUpSlant(source, target) {
    if (source.col < target.col) {
        for (let i = source.row - 1, j = source.col + 1; i >= target.row && j <= target.col; i--, j++)
            if (gameBoard[i][j].isFull)
                return true;
    }
    else {
        for (let i = source.row - 1, j = source.col - 1; i >= target.row && j >= target.col; i--, j--)
            if (gameBoard[i][j].isFull)
                return true;
    }
}
//BLACK
function checkDownSlant(source, target) {
    if (source.col < target.col) {
        for (let i = source.row + 1, j = source.col + 1; i <= target.row && j <= target.col; i++, j++)
            if (gameBoard[i][j].isFull)
                return true;
    }
    else {
        for (let i = source.row + 1, j = source.col - 1; i <= target.row && j >= target.col; i++, j--)
            if (gameBoard[i][j].isFull)
                return true;
    }
}

function playSound(soundType) {
    let audio;
    if (soundType === 'correct') {
        audio = new Audio('../music/moving.WAV');
    } else if (soundType === 'lose') {
        audio = new Audio('../music/error.mp3');
    }
    audio.play();
}



function setBold(row, col) {
    const cell = document.querySelector(`.cell_${row}_${col}`);
    cell.style.color = 'black';
    cell.classList.add('blinking');
}

function setUnbold(row, col) {
    const cell = document.querySelector(`.cell_${row}_${col}`);
    cell.classList.remove('blinking');
    cell.style.color = '';
}

function initGame() {
    let victoryMusic = document.getElementById('victoryMusic');
    victoryMusic.pause();
    victoryMusic.currentTime = 0;
    gameBoard = structuredClone(tempGameBoard);
    board.innerHTML = '';
    init();
    isFirstSoliderClick = false;
    isSecondSoliderClick = true;
}

document.getElementById('restartButton').addEventListener('click', initGame);


document.getElementById("all-games-button").addEventListener("click", function () {
    window.location.href = "../html/games.html";
});


function SignOutPlayer() {
    let playerToDelete = prompt("Which player would you like to log out? (player1 or player2)");

    if (playerToDelete === "player1" || playerToDelete === "player2") {
        let storedPlayer = JSON.parse(sessionStorage.getItem(playerToDelete));

        if (storedPlayer) {
            let email = storedPlayer.Email;

            sessionStorage.removeItem(playerToDelete);
            sessionStorage.removeItem(email);

            if (email) {
                localStorage.removeItem(email);
                alert(`${playerToDelete} and the associated user with email ${email} have been deleted!`);
            } else {
                alert("No valid email found for this player.");
            }
        } else {
            alert("Player data not found.");
        }

        window.location.href = "home-page.html";
    } else {
        alert("Invalid player selected. Please choose either 'player1' or 'player2'.");
    }
}