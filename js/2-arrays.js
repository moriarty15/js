// const mas = [];
// for (let i = 0; i < 20; i += 1) {
//     console.log(`number index ${i}`)
// }

// const len = ['first', 'second', 'third', 'fourth'];
// for (let i = 0; i < len.length; i += 1){
//     console.log(len[i]);
// }

// const str = '123456';
// for (const index of str) {
//     if (index == 5) { break };
//     console.log(index);
// }

// const matrix = [];
// for (i = 0; i < 3; i += 1) { 
//         matrix[i] = i;
//         console.log(matrix[i]);
//     }

// zadacha 1
// let sum = 0;
// const cart = [54, 28, 105, 78, 92, 17, 120];
// variant 1
// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);
//     sum += cart[i];
// }

// variant 2
// for (let car of cart) {
//     sum += car;
// }
// console.log(`total = ${sum}`);


// zadacha 2
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let sum = 0;
// variant 1
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 !== 0) { continue; }
//     { sum += numbers[i]; }
// }
// console.log(`sum = ${sum}`);

// variant 2
// for (let number of numbers) {
//     if (number % 2 !== 0) { continue; }
//     sum += number;
// }
// console.log(`sum = ${sum}`)


// zadacha 3
// var 1
// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aaaa'];
// const loginToFind = 'poly1scute';
// let n = 0;
// for (let i = 0; i < logins.length; i += 1) {
//     // console.table(logins[i]);
//     if (logins[i] !== loginToFind) { continue; }
//     else { n += 1; console.log('yes') }
// }
// if (n === 0) {console.log('no')}


// var 2
// for (let login of logins) {
//     console.log(login)
//     if (login !== loginToFind) { continue; }
//     else { n += 1; console.log('y'); break;}
// }
// if (n === 0) { console.log('n') };


// var 3
// let a = logins.includes('poly1scute')
// if (a === true) {console.log('y1')} else {console.log('n2')} 

// train includes
// const a = [];
// for (let i = 0; i < 11; i += 1) {
//     a[i] = i;
//     console.log(a[i]);
// }
// let b = a.includes(11);
// if (b === true) { console.log('yyy') } else (console.log('nnn'));


// zadacha 4
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let min = numbers[0];
// for (let number of numbers) {
//     console.log(number);
//     if (number < min) { min = number };
// }
// console.log(`minimalnoe chislo = ${min}`);


// function checkForSpam(message) {
//     let result;
//     message.toLowerCase;
//   // Change code below this line
//     const mes = message.toLowerCase();
//     result = mes.includes('spam') ||
//         mes.includes('sale');
//   // Change code above this line
//   return result;}

// console.log(checkForSpam('Amazing SalE, only tonight!'));

// let a = 'Amazing SalE, only tonight!';
// console.log(a);
// const b = a.toLowerCase();
// console.log(b);

// zddacha 5
// var1
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';
// console.log(friends);
// for (const friend of friends) {
//   string += friend + ",";
// }
// string = string.slice(0, string.length - 1)

// var2
// const string = friends.join(',')
// console.log(string);

// proverka .join
// const a = [];
// let b = 0;
// for (let i = 0; i <= 10; i += 1) {
//   a[i] = i;
// }
// b = a.join(",");
// console.log(a);
// console.log(b);


// zadacha 6
// const string = 'JavaScript';
// console.log(string);
// const letters = string.split('');
// let invertedString = '';

// for (const letter of letters) {
//   // var 1
//   //   if (letter === letter.toLowerCase()) {
//   //     invertedString += letter.toUpperCase();
//   //   } else {invertedString += letter.toLowerCase();}
//   // }

//   // var 2
//   invertedString += letter === letter.toLowerCase()
//     ? letter.toUpperCase()
//     : letter.toLowerCase();
// }
// console.log(invertedString);


// zadacha 7
// const title = 'Top 10 benefits of React framework';
// // const titleNormalized = title.toLowerCase();
// // console.log(titleNormalized);
// // const words = titleNormalized.split(" ");
// // console.log(words);
// // const slug = words.join('--');
// // console.log(slug);
// const slug1 = title.toLowerCase().split(" ").join('---');
// console.log(slug1);


// const strings = title.split('');
// let invertedString = '';
// console.log(strings);
// for (const string of strings) {
//   string === string.toUpperCase()
//     ? invertedString += string.toLowerCase()
//     : invertedString += string;
// }
// console.log(invertedString);


// zadacha 8
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;
// const numbers = array1.concat(array2);
// console.log(numbers);
// for (const number of numbers) {
//   total += number;
// }
// console.log(total);


// var 1
// let sum1 = 0;
// let sum2 = 0;
// for (let ar of array1) {
//   sum1 += ar;
// }
// for (let ar of array2) {
//   sum2 += ar;
// }
// console.log(sum1 + sum2);


// zadacha 9
// deleted
// const cards = ['card 1', 'card 2', 'card 3', 'card 4', 'card 5'];
// console.table(cards);
// const index = cards.indexOf('card 3');
// console.log(index);
// cards.splice(index, 1);
// console.table(cards);

// to add
// cards.splice(1, 0, "eye of tiger");
// console.table(cards);

// update
// cards.splice(1, 1, "cheetah");
// console.table(cards);