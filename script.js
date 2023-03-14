class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;

    }

    attack() {
        return this.power;
    }

    defend(damage) {
        this.damage = damage;
        this.life -= this.damage;
        return this.life;
    }

}

class Maya extends Warrior {
    constructor (life, power) {
        super(life, power)
    }

    drinkColacao () {
        this.power += 10;
    }



}

class Aztec extends Warrior {
    constructor (life, power) {
        super(life, power)
    }

    drinkNesquik () {
        this.life += 10;
    }

    

}

//Azteca bebe nesquik

const Azteca1 = new Aztec (100,10);
Azteca1.drinkNesquik();
// console.log(Azteca1);

//Maya bebe Cola Cao
const Maya1 = new Maya (100,10);
Maya1.drinkColacao();
// console.log(Maya1);

// Maya ataca a azteca. Azteca defiende.
Azteca1.defend(Maya1.attack())
console.log(Azteca1);

// Azteca ataca a maya. Maya defiende.
Maya1.defend(Azteca1.attack());
console.log(Maya1);


