const homeAdd1 = document.getElementById('home-add1');
const homeAdd2 = document.getElementById('home-add2');
const homeAdd3 = document.getElementById('home-add3');
const homeScore = document.getElementById('home-team-score');
const homeWinning = document.getElementById('home');
let homeCurrentScore = 0;

const guestAdd1 = document.getElementById('guest-add1');
const guestAdd2 = document.getElementById('guest-add2');
const guestAdd3 = document.getElementById('guest-add3');
const guestScore = document.getElementById('guest-team-score');
const guestWinning = document.getElementById('away');
let guestCurrentScore = 0;

const newGame = document.getElementById('new-game-btn');

homeAdd1.addEventListener('click', function() {
    homeCurrentScore++
    homeScore.textContent = homeCurrentScore;
    whoIsWinning()
})

homeAdd2.addEventListener('click', function() {
    homeCurrentScore += 2; 
    homeScore.textContent = homeCurrentScore;
    whoIsWinning()
})

homeAdd3.addEventListener('click', function() {
    homeCurrentScore += 3; 
    homeScore.textContent = homeCurrentScore;
    whoIsWinning()
})

guestAdd1.addEventListener('click', function() {
    guestCurrentScore++
    guestScore.textContent = guestCurrentScore;
    whoIsWinning()
})

guestAdd2.addEventListener('click', function() {
    guestCurrentScore += 2; 
    guestScore.textContent = guestCurrentScore;
    whoIsWinning()
})

guestAdd3.addEventListener('click', function() {
    guestCurrentScore += 3; 
    guestScore.textContent = guestCurrentScore;
    whoIsWinning()
})


newGame.addEventListener('click', function() {
    homeCurrentScore = 0;
    guestCurrentScore = 0;
    guestScore.textContent = 0;
    homeScore.textContent = 0;
    whoIsWinning()
})


function whoIsWinning() {
    if (homeCurrentScore > guestCurrentScore) {
    homeScore.style.color = 'yellow'
    guestScore.style.color = 'red'

} else if (guestCurrentScore > homeCurrentScore){
    guestScore.style.color = 'yellow'
    homeScore.style.color = 'red'

} else {
    guestScore.style.color = 'red'
    homeScore.style.color = 'red'
}
}


