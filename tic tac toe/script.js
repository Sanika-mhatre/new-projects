document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const statusText = document.querySelector(".status");
    const resetButton = document.querySelector(".reset");
    let currentPlayer = "X";
    let board = ["", "", "", "", "", "", "", "", ""];
    let running = true;

    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            const index = cell.getAttribute("data-index");
            if (board[index] !== "" || !running) return;

            board[index] = currentPlayer;
            cell.textContent = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            statusText.textContent = `Player ${currentPlayer}'s turn`;
        });
    });

    function checkWinner() {
        for (const condition of winConditions) {
            const [a, b, c] = condition;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                statusText.textContent = `Player ${board[a]} Wins!`;
                running = false;
                return;
            }
        }

        if (!board.includes("")) {
            statusText.textContent = "It's a Tie!";
            running = false;
        }
    }

    resetButton.addEventListener("click", () => {
        board.fill("");
        cells.forEach(cell => cell.textContent = "");
        currentPlayer = "X";
        statusText.textContent = `Player ${currentPlayer}'s turn`;
        running = true;
    });
});
