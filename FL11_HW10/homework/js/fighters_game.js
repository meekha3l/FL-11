function Fighter(data) {
    let fighter = data;
    let wins = 0;
    let losses = 0;
    this.getName = () => fighter.name,
    this.getDamage = () => fighter.damage,
    this.getAgility = () => fighter.agility,
    this.getHealth = () => fighter.hp,
    this.attack = function(opponent) {
        let kick = parseInt( Math.random()*101 );
        if (kick > opponent.getAgility()) {
            opponent.dealDamage(this.getDamage());
            console.log(`${this.getName()} make ${this.getDamage()} damage to ${opponent.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    },
    this.dealDamage = function(damage) {
        fighter.hp -= damage;
        if (fighter.hp < 0) {
            fighter.hp = 0;
        } 
    },
    this.heal = function(hp) {
        fighter.hp += hp;
        if (fighter.hp > 100) {
            fighter.hp = 100;
        } 
    },
    this.addWin = function() {
        wins++;
    },
    this.addLose = function() {
        losses++;
    },
    this.logCombatHistory = () => console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`);
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