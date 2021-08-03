// ЗАДАЧА 1
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;


// ЗАДАЧА 2
// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;


// ЗАДАЧА 3
// function Car(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// }


// ЗАДАЧА 4
// function Car({brand, model, price}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }


// ЗАДАЧА 5
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// Car.prototype.getPrice = function() {
// return this.price};
// Car.prototype.changePrice = function(newPrice) {
// return this.price = newPrice}


// ЗАДАЧА 6
// function Storage(items) {
//   this.items = items;
// }
// Storage.prototype.getItems = function() {
//   return this.items};
// Storage.prototype.addItem = function(newItem) {
//   return this.items.push(newItem)};
// Storage.prototype.removeItem = function(item) {
//   const indexItem = this.items.indexOf(item);
//   this.items.splice(indexItem, 1)}

// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// ЗАДАЧА 7
// function StringBuilder(baseValue ) {
//   this.value = baseValue}
// StringBuilder.prototype.getValue = function(){
// return this.value};
// StringBuilder.prototype.padEnd = function(str){
// return this.value += str;}
// StringBuilder.prototype.padStart = function(str){
// return this.value = str + this.value};
// StringBuilder.prototype.padBoth = function(str){
// this.padStart(str);
// this.padEnd(str);}

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='


// ЗАДАЧА 8
// class Car {
// }


// ЗАДАЧА 9
// class Car {
//   constructor({ brand, model, price }){
//   this.brand = brand;
//   this.model = model;
//   this.price = price;}
// }


// ЗАДАЧА 10
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() {
//   return this.price}
//   changePrice(newPrice) {
//   this.price= newPrice}
// }


// ЗАДАЧА 11
// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//   return this.#brand};
//   changeBrand(newBrand) {
//   this.#brand = newBrand}
// }


// ЗАДАЧА 12
// class Storage {
//   #items;
//   constructor(items) {
//         this.#items = items;
//     };
// getItems() {
//   return this.#items;
// };
// addItem(newItem) {
//   this.#items.push(newItem);
// };
// removeItem(item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
// };
// }
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// ЗАДАЧА 13
// class StringBuilder {
//   #value;
//   constructor(baseValue){
//   this.#value = baseValue;}
//   getValue() {
//   return this.#value;
// };
// padEnd(str) {
//   this.#value += str;
// };
// padStart(str) {
//   this.#value = str + this.#value;
// };
// padBoth(str) {
//   this.padStart(str);
//   this.padEnd(str);
// };
// }
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='


// ЗАДАЧА 14
// class Car {
//   #model;
//   #price;
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }
//   get brand() {
//     return this.#brand;
//   }
//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }
//   get model() {
//     return this.#model;
//   }
//   set model(newModel) {
//     this.#model = newModel;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }


// ЗАДАЧА 15
// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;
//   constructor({ price }) {
//     this.#price = price;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     if (newPrice > 50000) {return}
//     return this.#price = newPrice;
//   }  
// }
// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000
// audi.price = 49000;
// console.log(audi.price); // 49000
// audi.price = 51000;
// console.log(audi.price); // 49000


// ЗАДАЧА 16
// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price){
//   if (price > 50000) {return 'Внимание! Цена превышает допустимую.'}
//   else return 'Всё хорошо, цена в порядке.'}
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });
// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.


// модуль 5 задача 17
// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки
// class Admin extends User{
//     static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' }
// }


// модуль 5 задача 18
// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//     };
//     accessLevel;  // объявление публичного класса accessLevel;
// 	constructor({email, accessLevel}){
//     super(email);
//     this.accessLevel = accessLevel};
//   // Пиши код выше этой строки
// }
// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });
// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser


// модуль 5 задача 19
// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//     static AccessLevel = {
//         BASIC: 'basic',
//         SUPERUSER: 'superuser'
//     };
//     accessLevel;
//     blacklistedEmails = [];
//     blacklist(email) {
//         this.blacklistedEmails.push(email)
//     };
//     isBlacklisted(email) {
//   return this.blacklistedEmails.includes(email)};
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
// }
// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });
// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// function Storage(items) {
//     this.items = items
// }
// Storage.prototype.getItems = function () {
//     return this.items;
// };
// Storage.prototype.addItem = function (item) {
//     return this.items.push(item)
// };
// Storage.prototype.removeItem = function (item) {
//     for (let i = 0; i < this.items.length; i += 1) {
//         if (this.items[i] === item) {
//             this.items.splice(i, 1);
//         }
//     }
//  };
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
// class Storage {
//   #items
//   constructor(items) {
//       this.#items = items;
//   }
//   getItems() {
//   return this.#items;
// };

// addItem(newItem) {
//   this.#items.push(newItem);
// };

// removeItem(item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
// };
// }

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz


// function StringBuilder(baseValue) {
// this.value = baseValue}
// StringBuilder.prototype.getValue = function() {
// return this.value};
// StringBuilder.prototype.padEnd = function(str) {
// 	this.value = this.value + str};
// StringBuilder.prototype.padStart = function (str) {
//     this.value = str + this.value;
// };
// StringBuilder.prototype.padBoth = function (str) {
//     this.value = str + this.value + str;
// };


// class StringBuilder {
//     #value;
//     constructor(baseValue){
//         this.#value = baseValue;
//     };
// getValue() {
//   return this.#value;
// };
// padEnd(str) {
//   this.#value += str;
// };
// padStart(str) {
//   this.#value = str + this.#value;
// };
// padBoth(str) {
//   this.padStart(str);
//   this.padEnd(str);
// };
// }
// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='



// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// class Car {
//     static MAX_PRICE = 50000;
//   #price;
//   constructor({ price }) {
//     this.#price = price;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     if (newPrice > 50000) {
//     return}
//     this.#price = newPrice;
//   }
// }
// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000
// audi.price = 49000;
// console.log(audi.price); // 49000
// audi.price = 51000;
// console.log(audi.price); // 49000


// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price) {
//   if (price > 50000) {return `'Внимание! Цена превышает допустимую.'` }
//   return `'Всё хорошо, цена в порядке.'`;
//   }
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });
// console.log(Car.checkPrice(18000));
// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.
// console.log(Car.checkPrice(57000));

