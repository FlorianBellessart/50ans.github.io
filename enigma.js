const enigmas = [
    {
        question: "Quel est le nom du jeu de cartes où le but est d'obtenir 21 points ?",
        options: ["Poker", "Blackjack", "Baccarat", "Roulette"],
        answer: "Blackjack"
    },
    {
        question: "Quelle est la couleur traditionnelle du tapis de jeu dans un casino ?",
        options: ["Rouge", "Bleu", "Vert", "Noir"],
        answer: "Vert"
    },
    {
        question: "Quel symbole est souvent associé à la chance dans les casinos ?",
        options: ["Étoile", "Trèfle à quatre feuilles", "Fer à cheval", "Dé"],
        answer: "Trèfle à quatre feuilles"
    }
];

function displayEnigmas() {
    const enigmasContainer = document.getElementById('enigmas');
    enigmas.forEach((enigma, index) => {
        const enigmaHtml = `
            <div class="enigma">
                <h3>${enigma.question}</h3>
                <form onsubmit="checkAnswer(event, ${index})">
                    ${enigma.options.map(option => `
                        <input type="radio" name="answer${index}" value="${option}"> ${option}<br>
                    `).join('')}
                    <button type="submit">Répondre</button>
                </form>
            </div>
        `;
        enigmasContainer.innerHTML += enigmaHtml;
    });
}

function checkAnswer(event, index) {
    event.preventDefault();
    const selectedAnswer = document.querySelector(`input[name="answer${index}"]:checked`).value;
    if (selectedAnswer === enigmas[index].answer) {
        alert('Bonne réponse !');
    } else {
        alert(`Dommage, la bonne réponse était : ${enigmas[index].answer}`);
    }
}

displayEnigmas();