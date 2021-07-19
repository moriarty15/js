// задача 3
let n = 3;
let z;
let total = 0;
for (let i = 0; i <= n; i += 1){
    z = Math.round(Math.random() * (1000 - 500) + 500);
    console.log(z);
    total = total + z;
}
console.log(total);

// задача 2
// let totalSpend;
// let payment;
// let discount = 0;
// totalSpend = Number(prompt('общие затраты'));
// payment = Number(prompt('текущая затрата'));

// if (totalSpend < 100) {
//     console.log('У вас ещё нет партнёрской скидки');
// }
// else if (totalSpend >= 100 && totalSpend < 1000) {
//     console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount =discount+2}%`);
// }
// else if (totalSpend >= 1000 && totalSpend < 5000) {
//     console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount =discount+5}%`);
// }
// else {
//     console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount =discount+10}%`);
// }
// console.log(`skidka sostavlyet ${payment/100*discount}`);
// console.log(`summa so skidkoy sostavot ${payment - (payment / 100 * discount)}`);


// задача 1
// let balance;
// let payment;
// balance = prompt('your balance?');
// balance = Number(balance);
// console.log(`your balance = ${balance}`);
// payment = Number(payment);
// payment = prompt('sum buy');
// console.log(`sum buy = ${payment}`);

// console.log(`общая стоимость заказа ${payment} кредитов, проверяем кол-во доступных на счету `);

// if (balance >= payment) {
//     balance = balance - payment;
//     console.log(`на счету осталось ${balance} кредитов`);
// } else {
//     console.log(`на счету недостаточно средств для выполнения операции`);
// }

// через тернарный оператор
// balance >= payment ?  balance = balance - payment : console.log('nedostatochno');

// console.log('Операция завершена');


// const b = 1;
// const c = 10;
// let d;
// let a;
// a = 1;
// console.log("numbre b =", b);
// console.log("number a =", a);
// console.log('number c =', c);

// for (let i = 0; i < c+20; i += 1){
//     console.log(i);
// }

// alert ('hello to train')

// console.log(typeof (d));
// do {
//     d = prompt('your password')
// } while (d.length < 8);
// console.log(`your password: ${d}`)

// while (c > a) {    
//     a = a + 1;
// }
// console.log("number a chaged", a);
// const b = 66;
// let a;
// a = 1 + 1;
// console.log(a);
// console.log(a + b);
// console.log("hello world");
// console.log(Number(true));
// console.log(Number(false));
// console.log(typeof (b));
// console.log(b > a ? "b>a" : "b<a");


// if (b > a) {
//     console.log(`number b > number a`);
// }
// else if (b < a) { console.log(`number b < number a`); }
// else {console.log('number b = number a')}


// switch (c) {
//     case b:
//         console.log('b=c');
//         break;
//     case a:
//         console.log("a=c");
//         break;
//     default:
//         console.log('number c not = a and b')
// }






