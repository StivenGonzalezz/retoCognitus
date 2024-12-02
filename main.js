const form = document.getElementById('feedbackForm');
const feedbackMessage = document.getElementById('feedbackMessage');
let cont = 0
    
form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        feedback: document.getElementById('text').value
    };

    localStorage.setItem(cont,data)
    console.log(localStorage.getItem(cont));
    cont++
    feedbackMessage.style.display = 'block';
    feedbackForm.reset();
    setTimeout(() => {
        feedbackMessage.style.display = 'none';
    }, 5000);
});

const statsButton = document.getElementById('viewStatsButton');
const statsCounter = document.getElementById('statsCounter');

let clickCount = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;

statsCounter.textContent = `Views: ${clickCount}`;

statsButton.addEventListener('click', () => {
    clickCount++;
    statsCounter.textContent = `Views: ${clickCount}`;

    localStorage.setItem('clickCount', clickCount);
});