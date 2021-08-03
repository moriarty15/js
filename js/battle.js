class Hero {
    constructor({nation, name, armor, damage, health, hpRegen, }) {
        this.nation = nation;
        this.name = name;
        this.armor = armor;
        this.damage = damage;
        this.health = health;
        this.hpRegen = hpRegen;
    }
    attack(damageNumber) {
        return Math.round((Math.random() * ((damageNumber + 10) - damageNumber) + damageNumber));
    }
}
class Dwarf extends Hero{
    constructor({...Nation }) {
        super(Nation);
    }
}
class Elf extends Hero{
    constructor({...Nation }) {
        super(Nation);
    }
}
class Orc extends Hero{
    constructor({...Nation }) {
        super(Nation);
    }
}
const Torin = new Dwarf({
    name: "Torin",
    armor: 40,
    damage: 37,
    health: 110,
    hpRegen: 7,
    nation: "Dwarf",
});
console.log(`новый персонаж ${Torin.name}, из расы ${Torin.nation} имеет: ${Torin.damage} урона, ${Torin.health} здоровья, ${Torin.armor} брони, ${Torin.hpRegen} регенирации здоровья, `);
const Tranduil = new Elf({
    name: "Tranduil",
    armor: 20,
    damage: 25,
    health: 100,
    hpRegen: 10,
    nation: "Elf",
});

// console.log(`новый персонаж ${Tranduil.name}, из расы ${Tranduil.nation} имеет: ${Tranduil.damage} урона, ${Tranduil.health} здоровья, ${Tranduil.armor} брони, ${Tranduil.hpRegen} регенирации здоровья, `);
const Azog = new Orc({
    name: "Azog",
    armor: 10,
    damage: 43,
    health: 150,
    hpRegen: 5,
    nation: "Orc",
});

console.log(`новый персонаж ${Azog.name}, из расы ${Azog.nation} имеет: ${Azog.damage} урона, ${Azog.health} здоровья, ${Azog.armor} брони, ${Azog.hpRegen} регенирации здоровья, `);

// цикл битвы между персонажами
let healthAzog = Azog.health;
// let healthTranduil = Tranduil.health;
let healthTorin = Torin.health;
// битва между Азогом и Торином
while (healthTorin >= 0 & healthAzog >= 0) {
    console.log(`У персонажа ${Azog.name} ${healthAzog} здоровья`);
    let damageTorin = Torin.attack(Torin.damage);
    console.log(`${Torin.name} наносит урон равный ${damageTorin} единиц`);
    let damageProtectAzog = Math.round(damageTorin * (Azog.armor / 100));
    let damageClearAzog = damageTorin - damageProtectAzog;
    console.log(`персонаж ${Azog.name} блокирует ${damageProtectAzog} единиц урона`);
    healthAzog -= damageClearAzog;
    console.log(`У персонажа ${Azog.name} осталось ${healthAzog} здоровья`);
    if (healthAzog <= 0) {
        console.log(`персонаж ${Torin.name} победил`);
        break;
    };

    console.log(`У персонажа ${Torin.name} ${healthTorin} здоровья`);
    let damageAzog = Azog.attack(Azog.damage);
    console.log(`${Azog.name} наносит урон равный ${damageAzog} единиц`);
    let damageProtectTorin = Math.round(damageAzog * (Torin.armor / 100));
    let damageClearTorin = damageAzog - damageProtectTorin;
    console.log(`персонаж ${Torin.name} блокирует ${damageProtectTorin} единиц урона`);
    healthTorin -= damageClearTorin;
    console.log(`У персонажа ${Torin.name} осталось ${healthTorin} здоровья`);
    if (healthTorin <= 0) {
        console.log(`персонаж ${Azog.name} победил`);
        break;
    };
}

