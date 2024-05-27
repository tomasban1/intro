
const words = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau']

//FOR
for (i = 0; i < 5; i++) {
    const word = words[i]
    console.log(i, word);
}

//FOR-OF
for (const word of words) {
    console.log(word);
}

const students = [
    { name: 'jonas', age: 55 },
    { name: 'maryte', age: 45 },
    { name: 'petras', age: 23 },
]
const student = students[i]//<--?
//for (student of students) {

//}

//WHILE
const words2 = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];
let whileI = 0;
while (i < words2.length) {
    console.log(whileI, words2[whileI]);
    whileI++
}
console.log('----------------');

for (let i = 0; i < words2.length; i++) {
    console.log('for:', i, words2[i]);
}

let whileI2 = 0;
while (true) {                //begalinis ciklas
    console.log(whileI2++);
    if (whileI2 > 10) {//ciklo susrabdymas ties tam tikra riba
        break;
    }
}

const marks = [10, 2, 4, 6, 8];
for (let i = 0; i < marks.length; i++) {
    if (marks === 8) {    //<--- speciali salyga, sustabdyti ciklui radus reikiama dalyka
        break;
    }
}
console.log('------------------');

for (let h = 1; h < 12; h++) {
    for (let m = 0; m < 60; m += 5) {
        console.log(`${h}:${m}`);
        if (m > 13) {
            break;
        }
    }
}
console.clear();

const hackerMarks = [10, 'desimt', -7, 8, 2, 6, 4];
let sum = 0;
for (const mark of hackerMarks) {
    if (typeof mark !== 'number'
        || mark > 10
        || mark < 0
        || mark % 1 !== 0) {
        continue// <--- praskipina pateiktose situacijose reiksmes
    }
    sum += mark

}
console.log(sum / hackerMarks.length);