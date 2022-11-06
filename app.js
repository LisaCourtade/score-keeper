const player1= {
    display: document.querySelector('#p1display'),
    button: document.querySelector('#p1button'),
    score: 0
}

const player2= {
    display: document.querySelector('#p2display'),
    button: document.querySelector('#p2button'),
    score: 0
}

const players = [player1, player2];
const resetButton = document.querySelector('#reset');
const playtoSelect = document.querySelector('#playTo');

let isGameover = false;
let winningScore = parseInt(playtoSelect.value);

function keepScore(player, oponent) {
    if (!isGameover) {
        player.score = player.score +1;
        if (player.score == winningScore) {
            isGameover = true;
            player.display.classList.add('text-success');
            oponent.display.classList.add('text-danger');
            player.button.disabled = true;
            oponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}

player1.button.addEventListener('click', () => {
    keepScore(player1, player2);
})

player2.button.addEventListener('click', () => {
    keepScore(player2, player1);
    
})

playtoSelect.addEventListener('change', () => {
    winningScore = parseInt(playtoSelect.value);
    reset();
})

resetButton.addEventListener('click', reset);

function reset() {
    isGameover = false;
    for (let player of players) {
        player.score = 0;
        player.display.innerText = player.score;
        player.display.classList.remove('text-success', 'text-danger');
        player.button.disabled = false;
    }
    
}