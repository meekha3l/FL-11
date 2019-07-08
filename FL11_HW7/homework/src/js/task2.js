let playGame;
let userPrize = 0;
let possiblePrize = 100;
let attempts = 3;
let maxRandomNum = 9;
const NUMBER_OF_ATTEMPTS = 3;
const DIV_BY_HALF = 2

do {
    playGame = confirm('Do you want to play a game?');
    let randomNum = parseInt( Math.random()*maxRandomNum );
    
    if (playGame) {

        for (let i = 1; i <= NUMBER_OF_ATTEMPTS; i++) {

            let entNum = +prompt('Choose a roulette pocket number from 0 to ' + String(maxRandomNum-1) 
                                    + '\nAttempts left: ' + String(attempts) 
                                    + '\nTotal prize: ' + String(userPrize) + '$'
                                    + '\nPossible prize on current attempt: ' + String(possiblePrize) + '$');

            if (entNum === randomNum) {
                userPrize += possiblePrize;
                possiblePrize += possiblePrize;
                attempts = 3;
                maxRandomNum += 4;
                console.log(possiblePrize);
                alert('Congratulation, you won! Your prize is: '+ String(userPrize) +'$');
                break;
            } else if (i === NUMBER_OF_ATTEMPTS) {
                userPrize = 0;
                possiblePrize = 100;
                attempts = 3;
                maxRandomNum = 9;
                alert('Thank you for your participation. Your prize is: '+ String(userPrize) +'$');
            } else {
                possiblePrize = possiblePrize / DIV_BY_HALF;
                attempts--;
            }
        }

    } else {
        alert('You did not become a billionaire, but can.');
    }

} while (playGame);