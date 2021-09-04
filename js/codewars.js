// exc 1
// function disemvowel(str) {
//   let strCreate = str.toLowerCase();
//   let strNew = '';
//     for (let i = 0; i < strCreate.length; i += 1) {
//       if (strCreate[i] === 'e' || strCreate[i] === 'u' || strCreate[i] === 'i' || strCreate[i] === 'o' || strCreate[i] === 'a' || strCreate[i] === 'o') {
//         continue;
//       }
//       strNew += str[i];
//     }
//   return strNew;
// }
// console.log(disemvowel('EehiMySuperStauperoOrgool'));
// console.log(disemvowel("This website is for losers LOL!"));
// console.log(disemvowel("What are you, a communist?"))

// // codewars 
// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }
// // text console
// console.log('hi');
// ПРИМЕРЫ REPLACE()
// var re = /яблоки/gi;
// var str = 'Яблоки круглые и яблоки сочные.';
// console.log(str);
// var newstr = str.replace(re, 'апельсины');
// console.log(newstr); // апельсины круглые и апельсины сочные.

// // Ночь перед Рождеством, Xmas - сокращение для Christmas
// var str = 'Twas the night before Xmas...';
// console.log(str);
// var newstr = str.replace(/xmas/i, 'Christmas');
// console.log(newstr); // Twas the night before Christmas...

// var re = /([А-ЯЁа-яё]+)\s([А-ЯЁа-яё]+)/;
// var str = 'Джон Смит';
// console.log(str);
// var newstr = str.replace(re, '$2, $1');
// console.log(newstr); // Смит, Джон


// exc 2 НАЙДИ УНИКАЛЬНОЕ ЧИСЛО, Т.Е. ОДНО НЕЧЁТНОЕ СРЕДИ МАССИВА ЧЁТНЫХ, ИЛИ НАОБОРОТ И ВЕРНИ ЕГО ИНДЕКСА + 1
// function iqTest(numbers){
//   // ...
//   var a=[];
//   var e =[];
//   var o =[]
//     a = numbers.split(" ");
//   for(var i=0;i<a.length;i++)
//   {
//   if(a[i]%2==0){ e.push(i)}
//   else
//   o.push(i);
//   }
//   if(e.length>1)
//   return o[0]+1;

//   return e[0]+1;
// }
// console.log((iqTest("2 4 7 8 10")));
// console.log(iqTest("1 2 2"));
// console.log(iqTest("0 1 2 0"));
// console.log(iqTest("4 2 2 2 0"))

// var a = "1,21,3,40";

// var b = a.split(',').map(function(item) {
//     return parseInt(item, 10);
// });
// console.log(a);
// console.log(b)

// exc 3 ЕСЛИ В ПЕРЕДАВАЕМОЙ СТРОКЕ ЕСТЬ ВСЕ БУКВЫ ЛАТИНСКОГО АЛФФАВИТА, ТО ВЫВЕДИ TRUE, ИНАЧЕ FALSE
// function isPangram(string) {
//     const s = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split('').every(function (x) {
//         return s.indexOf(x) !== -1;
//     })
// }
// console.log(isPangram("The quick brown fox jumps over the lazy dog."));
// console.log("abcdefghijklmnopqrstuvwxyz");
// console.log("abcdefghijklmnopqrstuvwxyz".split(''));


// ПОНИМАНИЕ РАБОТЫ АЛГОРИТМА ПО СОЗДАНИЮ МАССИВА УНИКАЛЬНЫХ ЭЛЕМЕНТОВ
// const a = [1, 2, 1, 3, 4, 4, 5, 6,6,6];
// console.log(a)
// const b = new Set(a);
// console.log(b)
// const c = a.filter((e, i, ar) => {
//     console.log('это число',e);
//     console.log('это индекс офф элемента массива', ar.indexOf(e));
//     console.log('это индекса текущей иттерации',i); return ar.indexOf(e) === i;
// });
// console.log(c)


// let sum = 0;

// while ((input = prompt("enter number"))) {
//   if (input == "") {
//     sum += 0;
//   }
//   int = parseInt(input);
//   if (int > 0) {
//     sum += int;
//   }
// }

// alert("Sum = " + sum);

// function arrayDiff(a, b) {
//   let count = 0;
//   let array = [];
//   for (let i = 0; i < a.length; i += 1){
//     for (let j = 0; j < b.length; j += 1) {
//       if (a[i] === b[j])
//       {
//         count += 1;
//       }
//     } if (count === 0) {
//         array.push(a[i])
//     }
//     count = 0;
//   } 
//   return array;
// }
// console.log(arrayDiff([1, 2, 3], [1, 2]))
// console.log(arrayDiff([1, 8, 2], []))
// console.log(arrayDiff([3, 4], [3]))
// console.log(arrayDiff([], [4, 5]));
// console.log(arrayDiff([1,2,2], [2]))

// function array_diff(a, b) {
//   return a.filter(e => !b.includes(e));
// }

// console.log(array_diff([1, 2, 3], [1, 2]))
// console.log(array_diff([1, 8, 2], []))
// console.log(array_diff([3, 4], [3]))
// console.log(array_diff([], [4, 5]));
// console.log(array_diff([1,2,2], [2]))


// /////////////////////////////////////////////////////VAR 1   БИЛЕТЫ НА МАРВЕЛ
// function tickets(peopleInLine) {
//     // console.log(peopleInLine)
//     const priceTicket = 25;
//     let quarterBilet = 0;
//     let half = 0;
//     let hundred = 0
//     let change = 0;
//     for (let i = 0; i < peopleInLine.length; i += 1) {
//         if (peopleInLine[i] === 25) {
//             change += peopleInLine[i];
//             quarterBilet += 1;
//             // console.log('сдача',change)
//             // console.log('купюр по 25 долларов',quarterBilet)
//             continue;
//         }
//         if (peopleInLine[i] === 50) {
//             if ((change - (peopleInLine[i] - priceTicket)) >= 0 && quarterBilet !== 0) {
//                 change += priceTicket;
//                 quarterBilet -= 1;
//                 half += 1;
//                 // console.log('сдача',change)
//                 // console.log('купюр по 50 долларов',half)
//                 continue;
//             } else return 'NO'
//         }
//         if (peopleInLine[i] === 100) {
//             if ((change - (peopleInLine[i] - priceTicket)) >= 0)
//             {
//                 if (half !== 0 && quarterBilet !== 0) {
//                     half -= 1;
//                     quarterBilet -= 1;
//                     hundred += 1;
//                     change += priceTicket;
//                 }
//                 else if (quarterBilet >= 3) {
//                     quarterBilet -= 3;
//                     hundred += 1;
//                     change += priceTicket;
//                 }
//                 else return 'NO'
//             } else return 'NO'
//             // console.log('сдача',change)
//             // console.log('купюр по 100 долларов',hundred)
//             continue;
//         }    
//     }
//     return 'YES'
// }
// ////////////////////////////////////VAR 2
// function Clerk(name) {
//   this.name = name;

//   this.money = {
//     25 : 0,
//     50 : 0,
//     100: 0 
//   };

//   this.sell = function(element, index, array) {
//     this.money[element]++;

//     switch (element) {
//       case 25:
//         return true;
//       case 50:
//         this.money[25]--;
//         break;
//       case 100:
//         this.money[50] ? this.money[50]-- : this.money[25] -= 2;
//         this.money[25]--;
//         break;
//     }
//     return this.money[25] >= 0;
//   };
// }

// function tickets(peopleInLine){
//   var vasya = new Clerk("Vasya");
//   return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
// }

// console.log(tickets([25, 25, 50]));
// console.log(tickets([25, 100]))
// console.log(tickets([25, 25, 50, 50, 100]))
// console.log(tickets([25,25,50,50]))
// console.log(tickets([25,25,25,25,50,100,50]))

// задача по поиску 
// function high(x) {
//     const original = x.split(' ');
//     const array = "abcdefghijklmnopqrstuvwxyz".split('');
//     let count = 0;
//     const car = []; //сюда записывается значение слова в числе
//     const bar = []; //в переменной хранятся числа для каждой буквы алфавита
//     array.forEach((e, i) => {bar.push(i + 1)})
//     for (let i = 0; i < original.length; i += 1) {
//         let varibles = original[i]
//         for (let j = 0; j < varibles.length; j += 1) {
//             array.find((e, k, a) => {
//                 varibles[j] === e ? count += bar[k] : count;
//             })
//         } car.push(count)
//         count = 0;
//     }
//     let max = car[0];
//     let maxIndex = 0;
//     car.forEach((e, i, a) => {
//         if (e > max) {
//             max = e;
//             maxIndex = i;
//         }
//     })
//     return original[maxIndex];
// }
// console.log(high('b aa'))


// function findUniq(arr) {
//     if (arr[0] === arr[1]) {
//         for (let i = 1; i < arr.length; i += 1) {
//             if (arr[i] !== arr[0]) {
//                 return arr[i]
//             }
//         }
//     } else if (arr[0] === arr[2]) { return arr[1] }
//     else {return arr[0]}
// }

// function findUniq(arr) {
//   arr.sort((a,b)=>a-b);
//   return arr[0]==arr[1]?arr.pop():arr[0]
// }
// console.log(findUniq([1, 1, 2]));
// console.log(findUniq([ 3, 10, 3, 3, 3 ]))
// console.log(findUniq([1, 1, 1, 2, 1, 1]))
// console.log(findUniq([ 0, 1, 0 ]))


// function validBraces(braces) {
//     if (braces.length % 2 !== 0) { return false }
//     for (let i = 0, j; i < braces.length; i += 1) {

//     }
//   return console.log(braces.length)
// }
// validBraces( "()" )

console.log('hi world')