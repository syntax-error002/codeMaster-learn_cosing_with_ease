// Add this shuffle function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Modify your existing code where questions are loaded/initialized
function initQuiz() {
    // ... existing code ...
    
    // Shuffle the questions array
    questions = shuffleArray([...questions]);
    
    // ... rest of initialization code ...
}
