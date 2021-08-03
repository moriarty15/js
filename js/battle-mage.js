class Mage {
    constructor({name}) {
        this.name = name;
        this.health = 150;
    }
    spell() {
        return Math.round(Math.random() * 30 + 40);
    }
}
class Rubick extends Mage {
    constructor(name) {
        super(name);
    }
}
class Invok extends Mage {
    constructor(name) {
        super(name);
    }
}
const Grand_Magus = new Rubick({ name: "Grand_Magus"} );
const Karl = new Invok({ name: "Karl" });

console.table(`новый маг ${Grand_Magus.name} имеет ${Grand_Magus.health} здоровья`);
console.table(`новый маг ${Karl.name} имеет ${Karl.health} здоровья`);

let healthGrand_Magus = Grand_Magus.health;
let healthKarl = Karl.health;
while (healthGrand_Magus >= 0 & healthKarl >= 0) {
    let attack1 = Karl.spell();
    console.log(`hero ${Karl.name} cast in ${attack1} damage`);
    healthGrand_Magus -= attack1;
    console.log(`Hero ${Grand_Magus.name} have ${healthGrand_Magus} health`);
    if (healthGrand_Magus <= 0) { console.log(`${Karl.name} victory!`); break};

    let attack2 = Grand_Magus.spell() + 20;
    console.log(`hero ${Grand_Magus.name} cast in ${attack2} damage`);
    healthKarl -= attack2;
    console.log(`Hero ${Karl.name} have ${healthKarl} health`);
    if (healthKarl <= 0) { console.log(`${Grand_Magus.name} victory!`); break; }
}