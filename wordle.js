const words = ['POKER', 'JETON', 'CASINO', 'CHANCE', 'JACKPOT'];
let secretWord = words[Math.floor(Math.random() * words.length)];
let attempts = 6;

function checkGuess() {
    let guess = document.getElementById('guess').value.toUpperCase();
    if (guess.length !== secretWord.length) {
        alert(`Le mot doit avoir ${secretWord.length} lettres.`);
        return;
    }
    
    let result = '';
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secretWord[i]) {
            result += '🟩';
        } else if (secretWord.includes(guess[i])) {
            result += '🟨';
        } else {
            result += '⬜';
        }
    }
    
    document.getElementById('results').innerHTML += `<p>${guess}: ${result}</p>`;
    attempts--;
    
    if (guess === secretWord) {
        alert('Bravo ! Vous avez trouvé le mot !');
    } else if (attempts === 0) {
        alert(`Dommage ! Le mot était ${secretWord}.`);
    }
}