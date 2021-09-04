
// 1) ПУЗЫРЬКОВАЯ(САМЫЙ БОЛЬШОЙ ЭЛЕМЕНТ ВЗЛЕТАЕТ ВВЕРХ ПО ИДЕКСУ)
// const array = [19, 15, 1, 12, 6, 7];
// console.log(`это начальный массив ${array}`);
// for (let i = array.length - 1; i > 0; i -= 1) {
//     for (let j = 0; j < i; j += 1) {
//         if (array[j] > array[j + 1]) {
//             let seif = array[j];
//             array[j] = array[j + 1];
//             array[j + 1] = seif;
//         }
        
//     }
// }
// console.log(array);


// 2) СОРТИРОВКА РАСЧЕСКОЙ
// const array = [19, 15, 1, 12, 6, 7];
// console.log(`начальный массив ${array}`)
// const l = array.length;
// const factor = 1.247;
// let gapFactor = l / factor;
// while (gapFactor > 1) {
//     let gap = Math.round(gapFactor);
//     for (let i = 0, j = gap; j < l; i += 1, j += 1) {
//         if (array[i] > array[j]) {
//             [array[i], array[j]] = [array[j], array[i]];
//          }
//     } gapFactor = gapFactor / factor;
// }
// console.log(`sortirosanniy ${array}`);


// 3) ПРИМЕР sort(); обязательно прописать функцию sort((a, b) => a - b) для сортировки по возрастанию
// b - a по убыванию
// const numbers = [21, 11, 14, 13, 15, 17];
// // Отсортирует по возрастанию
// console.log('Before sort: ', numbers); // [2, 1, 4, 3, 5]
// console.log('After sort: ', numbers.sort((a, b) => a - b)); // [1, 2, 3, 4, 5]
// console.log(`по убыванию ${numbers.sort((a, b) => b - a)}`)
// console.log(numbers.sort());


