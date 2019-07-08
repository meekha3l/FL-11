let playGame;

const USER_PRIZE_DEF = 0;
const PRIZE_DEF = 100;
const ATTEMPTS_DEF = 3;
const MAX_RAND_NUM_DEF = 9;

let userPrize = USER_PRIZE_DEF;
let possiblePrize = PRIZE_DEF;
let attempts = ATTEMPTS_DEF;
let maxRandomNum = MAX_RAND_NUM_DEF;

const DIV_BY_HALF = 2
const RAND_NUM_RANGE = 4;
let prizeTmp = PRIZE_DEF;

let eng = {
    play: 'Do you want to play a game?',
    again: 'Do you want to play a game again?',
    continue: 'Do you want to continue to play a game?',
    chooseNum: 'Choose a roulette pocket number from 0 to ',
    prize: 'Your prize is: ',
    attempts: 'Attempts left: ',
    totalPrize: 'Total prize: ',
    possiblePrize: 'Possible prize on current attempt: ',
    congrats: 'Congratulation, you won! ',
    failed: 'Thank you for your participation. ',
    canceled: 'You did not become a billionaire, but can.'
}

let playGameText = eng.play;

do {
    playGame = confirm(playGameText);
    let randomNum = parseInt( Math.random()*maxRandomNum );

    if (userPrize !== 0) {
        prizeTmp += prizeTmp;
        possiblePrize = prizeTmp;
    } else {
        prizeTmp = PRIZE_DEF;
    }

    if (playGame) {

        for (let i = 1; i <= ATTEMPTS_DEF; i++) {

            let entNum = +prompt(eng.chooseNum + String(maxRandomNum-1) 
                                    + '\n' + eng.attempts + String(attempts) 
                                    + '\n' + eng.totalPrize + String(userPrize) + '$'
                                    + '\n' + eng.possiblePrize + String(possiblePrize) + '$');

            if (entNum === randomNum) {
                userPrize += possiblePrize;
                attempts = ATTEMPTS_DEF;
                maxRandomNum += RAND_NUM_RANGE;
                playGameText = eng.continue;
                alert(eng.congrats + eng.prize + String(userPrize) +'$');
                break;
            } else if (i === ATTEMPTS_DEF) {
                userPrize = USER_PRIZE_DEF;
                possiblePrize = PRIZE_DEF;
                attempts = ATTEMPTS_DEF;
                maxRandomNum = MAX_RAND_NUM_DEF;
                alert(eng.failed + eng.prize + String(userPrize) +'$');
            } else {
                possiblePrize = possiblePrize / DIV_BY_HALF;
                attempts--;
                playGameText = eng.again;
            }
        }

    } else {
        alert(eng.canceled);
    }

} while (playGame);