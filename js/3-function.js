// const add = function () {
//     console.log("hi world");
// }
// add();


// exc 1
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// const fn1 = function (cart) {
//     let total = 0;
//     for (const car of cart) {
//         total += car;
//     }
//     return total;
// }
// console.log(fn1(cart));
// console.log(fn1([1, 2, 3, 4]));
// console.log(fn1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// exercise 2
// const logItem = function (item) {
//     for (let i of item) {
//         console.log(i);
//     }
// }
// logItem([1, 2, 3]);
// logItem(['junior', 'midder', 'senior'])

// exercise 3
// const logins = ['qwerty', 'morty', 'moriarty'];
// const myLogin = "morty";
// let indef = "no"
// const fn2 = function (x) {
//     for (let i of logins) {
//         if (i === x) {
//             indef = "yes"
//             break;
//         }
//     }
    
// }
// fn2(myLogin);
// console.log(indef);


// var2
// const fn2 = function (a, b) {
//     return a.includes(b)
//         ? `пользователь ${b} найден`
//         : `пользователь ${b} не найден`
// }
// console.log(fn2(logins, 'morty15'));
