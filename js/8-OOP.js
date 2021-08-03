// работа конструктора по созданию объектов
// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
// };

// const hotel = new Hotel('Resort Hotel', 5, 100);
// console.log(hotel);
// // Hotel {name: "Resort Hotel", stars: 5, capacity: 100}

// const motel = new Hotel('Sunlight Motel', 4, 300);
// console.log(motel);
// Hotel {name: "Sunlight Motel", stars: 4, capacity: 300}




// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz MyHeroAcademy
// class Hero {
//     constructor(name, xp) {
//         this.name = name;
//         this.xp = xp;
//     }
// }
// const Bakugo = new Hero("Bakugo", 50);
// console.log(Bakugo);

// const Midoriy = new Hero("Midoriy", 40);
// console.log(Midoriy);

// const Todoroky = new Hero("Todoroky", 60);
// console.log(Todoroky);


// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz Hero Sword and Mage
// class Hero {
//     constructor({name, xp}) {
//         this.name = name;
//         this.xp = xp;
//     }
//     gainXP(add) {
//         this.xp += add;
//         console.log(`${this.name} убивает крипа и получает ${add} опыта`);
//     }
//     attack() {
//         console.log(`${this.name} атакует крипа ${this.weapon}`)
//     }
// }

// class Warrior extends Hero {
//     constructor({ weapon, ...rectName }) {        
//         super(rectName);
//         this.weapon = weapon;
//     }
// }

// class Berserc extends Warrior {
//     constructor({ roar, ...rectInfo }) {        
//         super(rectInfo);
//         this.roar = roar;        
//     }
//     toom() {
//         console.log(`${this.name} использует ${this.roar} и наносит 30 урона`);
//     }
    
// }
// const Tooliy = new Warrior({ name: "Tooliy", xp: 100, weapon: "sword" });
// console.log(Tooliy);
// const Wilkas = new Berserc({name: "Wilkas", xp: 80, weapon: "sword", roar: "roar"});
// console.log(Wilkas);
// const Dowakin = new Berserc({name: "Morty", xp: 0, weapon: "sword", roar: "roar"});
// console.log(Dowakin);
// const Ulfric = new Warrior({ name: "Ulfric", xp: 100, weapon: "axe" });
// console.log(Ulfric);
// console.log(Dowakin.name);
// Dowakin.toom();
// Dowakin.attack();
// Dowakin.gainXP(50);

// console.log(Wilkas.name);
// Wilkas.attack();
// Wilkas.gainXP(20);

// console.log(Tooliy.name);
// Tooliy.attack();
// Tooliy.gainXP(50);

// console.log(Ulfric.name)
// Ulfric.attack();
// Ulfric.attack();
// Ulfric.attack();
// Ulfric.gainXP(150);
// console.log(`Ульфрик имеет ${Ulfric.xp} опыта`);


// class WarriorPeople{
//     constructor({ name, xp }) {
//         this.name = name;
//         this.xp = xp;
//     }
//     getXP(number) {
//         this.xp += number;
//     }
//     attack(damage) {
//         console.log(`${this.name} использует ${this.weapon} и наносит ${damage} урона`);
//     }
// }
// class Archers extends WarriorPeople{
//     constructor({ weapon, ...lastInfo }) {
//         super(lastInfo);
//         this.weapon = weapon;
//     }
// }
// const Chingis = new Archers({name:"Chingis", xp:30, weapon:"archer"});
// console.log(Chingis);
// const Timur = new Archers({ name: "Timus", xp: 100, weapon: "archer" });
// console.log(Timur);
// Timur.attack(20);