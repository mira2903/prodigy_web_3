
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameIsOver = false;

function handleMove(cellIndex) {
    if (!gameIsOver && gameBoard[cellIndex] === '') {
        gameBoard[cellIndex] = currentPlayer;
        
        if (checkForWin(currentPlayer)) {
            
            console.log(currentPlayer + ' wins!');
            gameIsOver = true;
        } else if (checkForTie()) {
            
            console.log('It\'s a tie!');
            gameIsOver = true;
        } else {
           
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
        
        updateUI();
    }
}


function checkForWin(player) {
    
}

function checkForTie() {
    
}


function updateUI() {
   
}


document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', () => {
        handleMove(cell.dataset.index);
    });
});


