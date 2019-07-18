function Fighter(data) {
    let fighter = data;
    let wins = 0;
    let losses = 0;
    const MAX_PROP = 100;

    let getName = () => fighter.name;
    let getDamage = () => fighter.damage;
    let getAgility = () => fighter.agility;
    let getHealth = () => fighter.hp;
    let addWin = () => wins++;
    let addLose = () => losses++;

    function attack(opponent) {
        let kick = parseInt( Math.random()*MAX_PROP );
        if (kick > opponent.getAgility()) {
            opponent.dealDamage(getDamage());
            console.log(`${getName()} make ${getDamage()} damage to ${opponent.getName()}`);
        } else {
            console.log(`${getName()} attack missed`);
        }
    }
    
    function dealDamage(damage) {
        fighter.hp -= damage;
        if (fighter.hp < 0) {
            fighter.hp = 0;
        } 
    }

    function heal(hp) {
        fighter.hp += hp;
        if (fighter.hp > MAX_PROP) {
            fighter.hp = MAX_PROP;
        } 
    }

    return {
        getName: getName,
        getDamage: getDamage,
        getAgility: getAgility,
        getHealth: getHealth,
        addWin: addWin,
        addLose: addLose,
        dealDamage: dealDamage,
        attack: attack,
        heal: heal,
        logCombatHistory: () => console.log(`Name: ${getName()}, Wins: ${wins}, Losses: ${losses}`)
    }
}

function battle(firstFighter, secondFighter) {
    let fight = true;
    if (firstFighter.getHealth() > 0 && secondFighter.getHealth() > 0) {
        while(fight) {
            firstFighter.getHealth() && fight > 0 ? firstFighter.attack(secondFighter) : fight = false;
            secondFighter.getHealth() && fight > 0 ? secondFighter.attack(firstFighter) : fight = false;
        }
        if (firstFighter.getHealth() > 0) {
            firstFighter.addWin();
            secondFighter.addLose();
            console.log(`${firstFighter.getName()} win!`);
        } else {
            secondFighter.addWin();
            firstFighter.addLose();
            console.log(`${secondFighter.getName()} win!`);
        }
    } else {
        let fighterName = '';
        firstFighter.getHealth() === 0 ? fighterName = firstFighter.getName() : fighterName = secondFighter.getName();
        console.log(`${fighterName} is dead and cant't fight.`);
    }
}

const myFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const myFighter2 = new Fighter({name: 'Jack', damage: 10, hp: 100, agility: 55});