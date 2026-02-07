// 1. Fungsi untuk pilihan acak komputer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// 2. Fungsi untuk memainkan satu ronde
function playRound(playerSelection, computerSelection) {
    // Ubah ke lowercase agar case-insensitive
    const player = playerSelection.toLowerCase();
    const computer = computerSelection;

    if (player === computer) {
        return "tie";
    }

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

// 3. Fungsi utama untuk menjalankan game 5 ronde
function game() {
    let playerScore = 0;
    let computerScore = 0;

    console.log("Selamat Datang di Game Batu-Gunting-Kertas!");

    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt(`Ronde ${i}: Masukkan Rock, Paper, atau Scissors:`);
        
        // Cek jika user menekan 'Cancel'
        if (playerSelection === null) break;

        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        if (result === "player") {
            playerScore++;
            console.log(`Ronde ${i}: Kamu Menang! ${playerSelection} mengalahkan ${computerSelection}`);
        } else if (result === "computer") {
            computerScore++;
            console.log(`Ronde ${i}: Kamu Kalah! ${computerSelection} mengalahkan ${playerSelection}`);
        } else {
            console.log(`Ronde ${i}: Seri! Keduanya memilih ${computerSelection}`);
        }
    }

    // Penentuan pemenang akhir
    console.log("--- HASIL AKHIR ---");
    console.log(`Skor Kamu: ${playerScore} | Skor Komputer: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("Selamat! Kamu memenangkan pertandingan!");
    } else if (playerScore < computerScore) {
        console.log("Yah, kamu kalah. Coba lagi!");
    } else {
        console.log("Hasil akhir adalah SERI!");
    }
}

// Panggil fungsi untuk memulai game
game();