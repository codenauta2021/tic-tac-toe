let item1 = document.getElementById('item-1');
let item2 = document.getElementById('item-2');
let item3 = document.getElementById('item-3');
let item4 = document.getElementById('item-4');
let item5 = document.getElementById('item-5');
let item6 = document.getElementById('item-6');
let item7 = document.getElementById('item-7');
let item8 = document.getElementById('item-8');
let item9 = document.getElementById('item-9');
let textTurn = document.getElementById('turn');
let state = document.getElementById('state');
let btnReset = document.getElementById('reset');

const player1 = 'PLAYER_1';
const player2 = 'PLAYER_2';

item1.addEventListener('click', onClick);
item2.addEventListener('click', onClick);
item3.addEventListener('click', onClick);
item4.addEventListener('click', onClick);
item5.addEventListener('click', onClick);
item6.addEventListener('click', onClick);
item7.addEventListener('click', onClick);
item8.addEventListener('click', onClick);
item9.addEventListener('click', onClick);

let game = [
    null, null, null,
    null, null, null,
    null, null, null
];

let turn = player2;
let endGame = false;

function onClick(event) {
    if (endGame) {
        return;
    }
    const item = event.target;
    const index = parseInt(item.id.substring(5)) - 1;
    if (isClickedItem(index)) {
        return;
    }

    game[index] = turn;
    if (turn == player1) {
        item.innerHTML = 'X';
    } else {
        item.innerHTML = 'O';
    }
    endGame = validateEndGame();
    if (endGame) {
        state.innerHTML = `Win ${turn}`;
    } else {
        endGame = validateDraw();
        if (endGame) {
            state.innerHTML = `Draw`;
        } else {
            changeTurn();
        }
    }
}

function isClickedItem(index) {
    return game[index] == player1 || game[index] == player2;
}

function validateEndGame() {
    return (game[0] == game[1] && game[1] == game[2]) || 
        (game[3] == game[4] && game[4] == game[5]) ||
        (game[6] == game[7] && game[7] == game[8]) ||
        (game[0] == game[3] && game[3] == game[6]) ||
        (game[1] == game[4] && game[4] == game[7]) ||
        (game[2] == game[5] && game[5] == game[8]) ||
        (game[0] == game[4] && game[4] == game[8]) ||
        (game[2] == game[4] && game[4] == game[6]);
}

function validateDraw() {
    return isClickedItem(0) && isClickedItem(1) && isClickedItem(2) &&
            isClickedItem(3) && isClickedItem(4) && isClickedItem(5) &&
            isClickedItem(6) && isClickedItem(7) && isClickedItem(8);
}


function changeTurn() {
    if (turn == player1) {
        turn = player2;
    } else {
        turn = player1;
    }
    textTurn.innerHTML = turn;
}

btnReset.addEventListener('click', startGame)

function startGame() {
    endGame = false;
    turn = null;
    changeTurn();
    game = [
        '0', '1', '2',
        '3', '4', '5',
        '6', '7', '8'
    ];
    item1.innerHTML = '';
    item2.innerHTML = '';
    item3.innerHTML = '';
    item4.innerHTML = '';
    item5.innerHTML = '';
    item6.innerHTML = '';
    item7.innerHTML = '';
    item8.innerHTML = '';
    item9.innerHTML = '';
    state.innerHTML = 'Playing';
}

// Init
startGame();