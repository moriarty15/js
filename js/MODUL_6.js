// ОБРАЗЕЦ РАБОТЫ ЦИКЛА forEach
// const numbers = [5, 10, 15, 20, 25];
// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });


// ЗАДАЧА 1
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach(Item =>
// totalPrice += Item)
//   return totalPrice;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
// console.log(calculateTotalPrice([12, 85, 37, 4]));   //138
// console.log(calculateTotalPrice([164, 48, 291]));   //503


// ЗАДАЧА 2
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//   numbers.forEach(function(number, index) {
//   if (value < number) {filteredNumbers.push(number)}})
//     return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));


// ЗАДАЧА 3
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//   	firstArray.forEach(function(a) {
//       if (secondArray.includes(a)) {commonElements.push(a)}})
//     return commonElements;
//   }
// console.log(getCommonElements([1, 2, 3], [2, 4]));  // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))  //[1, 2]


// ЗАДАЧА 4 стрелочные функции
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// }
// console.log(calculateTotalPrice(5, 100))


// ЗАДАЧА 5
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// console.log(calculateTotalPrice(3, 400));


// ЗАДАЧА 6 (задача 1) через стрелочную функцию
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;
//   orderedItems.forEach(item => {totalPrice += item});
//   return totalPrice
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))


// ЗАДАЧА 7
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
//     numbers.forEach(number => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
//     return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3))


// ЗАДАЧА 8
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
//     firstArray.forEach(element => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
//     return commonElements;
//   }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))


// ЗАДАЧА 9
// const changeEven = (numbers, value) => {
//     const newNumber = [];
//     numbers.forEach(number => {
//       if (number % 2 === 0) {
//         newNumber.push(number + value);
//       } else (newNumber.push(number))
//     })
//   return newNumber;
//   }
// console.log(changeEven([1, 2, 3, 4, 5], 10));


// ЗАДАЧА 10
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// const planetsLengths = planets.map(planet => planet.length);


// ЗАДАЧА 11 map()
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 }
// ];

// const names = students.map(student => student.name);
// console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон'] ОБРАЗЕЦ MAP()


// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
// const titles = books.map(book => book.title);
//   console.log(titles)


// ЗАДАЧА 12  flatMap() разглаживает массив на одну вложенность вниз
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
// const genres = books.flatMap(book => book.genres);
// console.log(genres);


// ЗАДАЧА 13
// const getUserNames = users => {
//   const names = [];
//   users.map(user => names.push(user.name));
//   return names;
//   };

const list = [{
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
]
// console.log(getUserNames(list);


// ЗАДАЧА 14
// const getUserEmails = users => {
//    const email = [];
//   users.map(user => email.push(user.email))
// return email;
//   };



// ЗАДАЧА 15  filter(callback)
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// const evenNumbers = numbers.filter(number => number % 2 == 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(numbers);
// console.log(evenNumbers);
// console.log(oddNumbers);


// ЗАДАЧА 16
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];

//   const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) === index);
// console.log(allGenres);
// console.log(uniqueGenres);


// ЗАДАЧА 17
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author == AUTHOR);


// ЗАДАЧА 18
// const getUsersWithEyeColor = (users, color) => {
//  const eyes = users.filter(eye => eye.eyeColor == color);
//  return eyes;
// };


// ЗАДАЧА 19
// const getUsersWithAge = (users, minAge, maxAge) => {
// const ageUser = users.filter(userAge => userAge.age > minAge && userAge.age < maxAge);
//  return ageUser;
// };
// console.log(getUsersWithAge(list, 18, 36))


// ЗАДАЧА 20
// const getUsersWithFriend = (users, friendName) =>users.filter(uf => uf.friends.includes(friendName));
// console.log(getUsersWithFriend(list, 'Briana Decker'));


// ЗАДАЧА 21 удаление одинаковых элементом массива
// Вариант 1
// const getFriends = (users) => {
//   const a = users.flatMap(f1 => f1.friends);
//   console.log(a);
//   const b = a.filter((item, pos) => a.indexOf(item) === pos);
//   return b;
// }
// console.log(getFriends(list));

// вариант 2 через set();
// const getFriends = (users) => {
//   const a = users.flatMap(u => u.friends);
//   const b = [...new Set(a)];
//   return b;
// };

// вариант 3 через reduce
// const getFriends = (users) => {
//   const a = users.flatMap(f1 => f1.friends);
//   // console.log(a);
//   const b = a.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
//   return b;
// }
// console.log(getFriends(list));

// пример работы Set() создаёт новый массив только с уникальными элементами,
// далее через оператор spread т.е. (...) преобразуем полученный объект уникальных элементов в массив
// const a = [1, 11, 12, 15, 3, 15, 16, 12];
// console.log('исходный массив', a);
// const b = new Set(a);
// console.log('объект с уникальными элементами', b);
// const c = [...b];
// console.log('массив уникальных элементов сделанный через спрэд', c);
// const d = c.sort((a, b) => a - b);
// console.log('отсортированный массив',d);


// ЗАДАЧА 22
// const getActiveUsers = (users) => users.filter(f => f.isActive);
// console.log(getActiveUsers(list));


// ЗАДАЧА 23
// const getInactiveUsers = (users) => users.filter(f => !f.isActive);
// console.log(getActiveUsers(list));


// ЗАДАЧА 24 find();
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки
// const bookWithTitle = books.find(f => f.title === BOOK_TITLE);
// const bookByAuthor = books.find(a => a.author === AUTHOR);
// console.log(bookWithTitle, bookByAuthor);


// ЗАДАЧА 25
// const getUserWithEmail = (users, email) => users.find(e => e.email === email);

// ЗАДАЧА 26
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки
// const eachElementInFirstIsEven = firstArray.every(n => n % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(n => n % 2 !== 0);
// const eachElementInSecondIsEven = secondArray.every(n => n % 2 === 0);;
// const eachElementInSecondIsOdd = secondArray.every(n => n % 2 !== 0);
// const eachElementInThirdIsEven = thirdArray.every(n => n % 2 === 0);;
// const eachElementInThirdIsOdd = thirdArray.every(n => n % 2 !== 0);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

// ЗАДАЧА 27
// const isEveryUserActive = (users) => users.every(a => a.isActive);

// ЗАДАЧА 28
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some(n => n % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(n => n % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(n => n % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(n => n % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(n => n % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(n => n % 2 !== 0);

// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd); //f
// console.log(anyElementInSecondIsEven); //f
// console.log(anyElementInSecondIsOdd);
// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsOdd);


// ЗАДАЧА 29
// const isAnyUserActive = users => users.some(a => a.isActive);

// ЗАДАЧА 30
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// const totalPlayTime = playtimes.reduce((ac, number) => ac + number, 0);
// console.log(totalPlayTime);
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);

// ЗАДАЧА 31
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((ac, p) => ac + p.playtime / p.gamesPlayed, 0);
// console.log(totalAveragePlaytimePerGame);

// ЗАДАЧА 32
// const calculateTotalBalance = users => users.reduce((ac, b) => ac + b.balance, 0);

// ЗАДАЧА 33
// const getTotalFriendCount = users => users.reduce((ac, f) => ac + f.friends.length, 0);
// console.log(getTotalFriendCount(list));

// ЗАДАЧА 34
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();

// ЗАДАЧА 35
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// ЗАДАЧА 36
// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
//   const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// ЗАДАЧА 37

// ОБРАЗЕЦ zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
// ];

// const inAscendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score);
// console.table(inAscendingScoreOrder);
// const inDescendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.table(inDescendingScoreOrder);
// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.table(inDescendingScoreOrder);
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
// console.table(sortedByAuthorName);
// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));
// console.table(sortedByReversedAuthorName);
// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// console.table(sortedByAscendingRating);
// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// console.table(sortedByDescentingRating);


// ЗАДАЧА 38
// const sortByAscendingBalance = users => {
//    const c = [...users].sort((a, b) => a.balance - b.balance);
//   return c;
// };


// ЗАДАЧА 39
// const sortByDescendingFriendCount = users => {
//   const c = [...users].sort((a, b) => b.friends.length - a.friends.length);
//   return c;
// };

// ЗАДАЧА 40
// const sortByName = users => [...users].sort((a, b) => a.name.localeCompare(b.name));
// console.table(sortByName(list));


// ЗАДАЧА 41
// ОБРАЗЕЦ ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
// const students = [
//   { name: 'Манго', score: 83, courses: ['математика', 'физика'] },
//   { name: 'Поли', score: 59, courses: ['информатика', 'математика'] },
//   { name: 'Аякс', score: 37, courses: ['физика', 'биология'] },
//   { name: 'Киви', score: 94, courses: ['литература', 'информатика'] },
// ];
// //  разглаженные! уникальные!! отсортированные! элементы массива
// const uniqueSortedCourses = students
//   .flatMap((student) => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));
// console.table(uniqueSortedCourses); 
// ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// const names = [...books].filter(a => a.rating > MIN_BOOK_RATING).map(a => a.author).sort((a, b) => a.localeCompare(b));
// console.table(names);

// ЗАДАЧА 42
// const getNamesSortedByFriendCount = users => [...users].sort((a, b) => a.friends.length - b.friends.length).map(a => a.name);
// console.log(getNamesSortedByFriendCount(list));

// ЗАДАЧА 43
// const getSortedFriends = users =>
//   [...users]
//     .flatMap(a => a.friends)
//     .filter((p, i, a) => a.indexOf(p) === i)
//     .sort((a, b) => a.localeCompare(b));

// ЗАДАЧА 44
// const getTotalBalanceByGender = (users, gender) => users
//   .filter(a => a.gender === gender)
//   .reduce((ac, s) => ac + s.balance, 0);
// console.table(getTotalBalanceByGender(list, 'male'));