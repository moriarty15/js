// const printMessage = function (message) {
//   console.log(message);
// };

// const higherOrderFunction = function (callback) {
//   const string = 'i am iron man';
//   callback(string);
// };

// higherOrderFunction(printMessage);


// const greet = function () {
//   return `Wellcome to ${this.name}!`;
// };

// const hotel = { name: 'Resort Hotel' };

// console.log(greet.call(hotel)); // "Wellcome to Resort Hotel!"
// console.log(greet.apply(hotel)); // "Wellcome to Resort Hotel!"

// const greet = function (guest, stars) {
//   return `${guest}, welcome to ${stars}-star ${this.name}!`;
// };

// const hotel = { name: 'Resort Hotel' };
// const motel = { name: 'Sunlight Motel' };

// console.log(greet.call(hotel, 'Mango', 5));
// // "Mango, welcome to 5-star Resort Hotel!"

// console.log(greet.call(motel, 'Poly', 4));
// "Poly, welcome to 4-star Sunlight Motel!"


// const greet = function (guest, stars) {
//   return `${guest}, welcome to ${stars}-star ${this.name}!`;
// };

// const hotel = { name: 'Resort Hotel' };
// const motel = { name: 'Sunlight Motel' };

// console.log(greet.apply(hotel, ['Mango', 3]));
// // "Mango, welcome to 5-star Resort Hotel!"

// console.log(greet.apply(motel, ['Poly', 2]));
// // "Poly, welcome to 4-star Sunlight Motel!"


// zadacha функуия возвращает первый и последний элементы в одном массиве
// function getExtremeElements(array) {
//     // Change code below this line
//     const a = [];
//     a.push(array[0], array[array.length - 1]);
//     return a;
// }
// const b = [1, 2, 3, 4, 5,6,7];
// console.log(b);
// console.log(getExtremeElements(b));


// zadacha 2
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     let n = message.split(" ");
// return pricePerWord * (n.length);

//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// zadacha 3  возвращает строку slug
// function slugify(title) {
//   // Change code below this line
//     const t = title.toLowerCase().split(' ').join("-");
//     console.log(t);

//     return t;


//   // Change code above this line
// }
// slugify('Arrays for begginers');


// z4
// function calculateTotal(number) {
//  // Change code below this line
//   let s = 0;
//   for (let i = 0; i <= number; i += 1) {
//   s += i}
// return s;

//   // Change code above this line
// }
// console.log(calculateTotal(10));

// z5 возвращает самое длинное слово в строчке

// function findLongestWord(string) {
//   // Change code below this line
//     let a = string.split(' ');
//     let b = a[0].length;
//     let n = 0;
//     for (let i = 0; i < a.length; i += 1){
//         if (b < a[i].length) { b = a[i].length; n = i; }
//     }
//     return console.log(a[n])

// }
// findLongestWord("Google do a roll");

// z6 находит одинаковые числа в двух массивах

// function getCommonElements(array1, array2) {
//     // Change code below this line
//     const a = [];
//     for (let i = 0; i < array1.length; i += 1) {
//         for (let j = 0; j < array2.length; j += 1) {
//             if (array1[i] === array2[j]) {
//                 a.push(array1[i]);
//             }
//         }
//     }
// 	return console.log(a);
//     // Change code above this line    
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);

// задача 6.1 выполнена с помощью метода includes()
// function getCommonElements(array1, array2) {
//   console.log(array1);
//   console.log(array2);
// const a = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if(array2.includes(array1[i]) === true) {
//       a.push(array1[i]);
//     }
//   }  
// 	return console.log(a);
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);


// пример работы метода includes();

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.includes('Poly')); // true
// console.log(clients.includes('Monkong')); // false
// if (clients.includes('Poly') === true) {console.log(`hello world`)}


// задача: функция возвращает цену указанного продукта

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     let a = NaN;
//     for (const p of products) {

//         if (p.name === productName) {
//             a = p.price;
//         }

//     }
//   // Change code below this line

//   // Change code above this line
//   return console.log(`a: ${a}`);
// }
// getProductPrice("Radar");
// getProductPrice("Droid");
// getProductPrice("Scanner");
// getProductPrice("Droid");
// getProductPrice("Engine");


// задача возвращает массив свойств объекта в зависимости от ключа
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {

//     const a = [];
//     for (const p of products) {
//         if (propName === 'name') {
//             a.push(p.name);
//         } else if (propName === 'price') { a.push(p.price) }
//         else if (propName === 'quantity') { a.push(p.quantity)}


//     }console.log(a);
// }
// getAllPropValues("name");
// getAllPropValues("quantity");
// getAllPropValues("price");
// getAllPropValues("category")


// задача возвращает цену на все товары на складе по названию
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     console.log(products);
//   let total = 0;
//   // Пиши код ниже этой строки
//     for (const p of products) {
//         if (productName === p.name) {
//             total = p.price * p.quantity;
//  }
//     }
// 	return console.log(total);
//   // Пиши код выше этой строки
// }
// calculateTotalPrice("Radar");


// Деструктуризация сложных объектов
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// function multiply(...args) {
//     console.log(args);
//     let total = 0;
//     for (const a of args) {
//         total += a;
//     } // массив всех аргументов
//     console.log(total)
// }
// Change code below this line
// function multiply(...args) {
//   let total = 0;
//   for (const a of args) {
//   total += a;}

//   return total;
//   // Change code above this line
// }


// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// multiply(12, 4, 11, 48)



// function findMatches(array, ...args) {
//     const matches = []; 
//     for (let i = 0; i < args.length; i += 1) {
//         for (let j = 0; j < array.length; j += 1) {
//             if (array[j] === args[i]) {
//                 matches.push(args[i]);
//             }
//         }
//     }
//     return console.log(matches);
// }

// function findMatches(array, ...args) {
//     const matches = []; 
//     for (let i of args) {
//         for (let j of array) {
//             if (j === i) {
//                 matches.push(i);
//             }
//         }
//     }
//     return console.log(matches);
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)



// работа this
// const bookShelf = {
//   books: ["Последнее королевство"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед точкой стоит объект bookShelf,
// // поэтому при вызове метода, this будет хранить ссылку на него.
// bookShelf.getBooks(); // {books: ["Последнее королевство"], getBooks: f}


// работа метода indexOf и splice
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//     updateBook(oldName, newName) {
//       console.log(bookShelf.books)
//     // Change code below this line
// 	const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1);
//     this.books.splice(bookIndex, 0, newName);
	
//         return console.log(bookShelf.books);
//     // Change code above this line
//   },
// }
// bookShelf.updateBook("Haze", "Dungeon chronicles");

// bookShelf.updateBook("The last kingdom", "Dune");




// крутая задача!!!
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Potion ${potionName} is already equipped!`;
//     }

//     this.potions.push(potionName);
//   },
//     removePotion(potionName) {
//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (potionName === this.potions[i].name) {
//                 this.potions.splice(i, 1);
//             }
//         }
//     },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1){
//     if (this.potions[i].name === oldName)
//     {this.potions[i].name = newName}
//     }
//   },
//   // Change code above this line
// };
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')
// console.log(atTheOldToad.getPotions());

// // console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });


// atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.removePotion('Speed potion');


// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));