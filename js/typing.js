// js/typing.js

document.addEventListener('DOMContentLoaded', (event) => {
    const phrases = ["Ishika.", "a Student." , " a Developer.",];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBetweenPhrases = 1500; // Delay between end of one phrase and start of another
    const typedTextElement = document.getElementById("typed-text");

    function typePhrase() {
        if (currentCharIndex < phrases[currentPhraseIndex].length) {
            typedTextElement.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(typePhrase, typingSpeed);
        } else {
            setTimeout(erasePhrase, delayBetweenPhrases);
        }
    }

    function erasePhrase() {
        if (currentCharIndex > 0) {
            typedTextElement.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(erasePhrase, erasingSpeed);
        } else {
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setTimeout(typePhrase, typingSpeed);
        }
    }

    // Start typing effect
    setTimeout(typePhrase, 1000); // Delay before starting typing effect
});
