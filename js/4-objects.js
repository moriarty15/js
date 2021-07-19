// const myFamily = {
//     name: 'Vladimir',
//     age: 28,

// }
// console.log(myFamily);

// const inputName = 'color';
// const inputValue = 'tomato';

// const c = {
//     [inputName]: inputValue,
//     add(a, b) {
//         return a + b;
// }
// }

// console.log(c.add(55, 5));

// c.rating = 4000;

// console.log(c);

// function mk(a, b) {
//     return a - b;
// }
// console.log(mk(15, 6));


// const myOe = {
//     name: 'Vladimir',
//     family: 'Palamov',
//     age: 28,

// }
// let q = Object.keys(myOe);
// let w = Object.values(myOe);
// console.log(myOe);
// console.log(q);
// for (const key of q) {
//     console.log(key);
//     console.log(myOe[key])
// }
// console.log(w);


const friends = [
    { name: 'Ciren', online: true },
    { name: 'Vany', online: false },
    { name: 'Denis', online: false},
    { name: 'Danc', online: true}
]
console.table(friends);

function find(allFriends, friendFind) {
    for (const friend of allFriends) {
        if (friend.name === friendFind) {
            return `да есть такой друг по имени ${friendFind}`;
        }
        return `такого друга ${friendFind} нету`
    }
}
console.log(find(friends, 'Ciren'));

function arrayName(aa) {
    const names = [];
    for (const friend of aa) {
        console.log(friend.name);
        names.push(friend.name) ;
    }
    
    console.log(names);
}
arrayName(friends);