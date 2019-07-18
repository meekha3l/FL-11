function Fighter(data) {
    this.fighter = data,
    this.wins = 0,
    this.losses = 0,
    this.getName = () => this.fighter.name,
    this.getDamage = () => this.fighter.damage,
    this.getAgility = () => this.fighter.agility,
    this.getHealth = () => this.fighter.hp,
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
        this.fighter.hp -= damage;
        if (this.fighter.hp < 0) {
            this.fighter.hp = 0;
        } 
    },
    this.heal = function(hp) {
        this.fighter.hp += hp;
        if (this.fighter.hp > 100) {
            this.fighter.hp = 100;
        } 
    },
    this.addWin = function(win) {
        this.wins += win;
    },
    this.addLose = function(lose) {
        this.losses += lose;
    },
    this.logCombatHistory = () => console.log(`Name: ${this.getName()}, Wins: ${this.wins}, Losses: ${this.losses}`);
    console.log(this);
}

function battle(firstFighter, secondFighter) {
    let fight = true;
    if (firstFighter.getHealth() > 0 && secondFighter.getHealth() > 0) {
        while(fight) {
            firstFighter.getHealth() && fight > 0 ? firstFighter.attack(secondFighter) : fight = false;
            secondFighter.getHealth() && fight > 0 ? secondFighter.attack(firstFighter) : fight = false;
        }
        if (firstFighter.getHealth() > 0) {
            firstFighter.addWin(1);
            secondFighter.addLose(1);
            console.log(`${firstFighter.getName()} win!`);
        } else {
            secondFighter.addWin(1);
            firstFighter.addLose(1);
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