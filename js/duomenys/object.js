/*
objektai
*/

const empty = {}
console.log(empty);

const studentName = 'Jonas';
const studentAge = '55';
const studentIsMaried = true;

const student2Name = 'Maryte';
const student2Age = '48';
const student2IsMaried = false;

const stud1 = ['Jonas', 55, true];
const stud2 = ['Maryte', 48, false];

const student1 = {
    name: 'Jonas',
    age: 55,
    isMaried: true,
}
console.log(student1);
console.log(student1.name);
console.log(student1.age);
console.log(student1.isMaried);


const student2 = {
    isMaried: false,
    name: 'Maryte',
    age: 48
}
console.log(student2.age);
console.log(student2.name);
console.log(student2.isMaried);
console.log('--------------');

const students = [
    { name: 'jonas', age: 55, isMaried: true },
    { name: 'maryte', age: 48, isMaried: false },
]
console.log(students[0].name);
console.log(students[0].age)
console.log(students[0].isMaried);

function prisistatymas(stud) {
    const status = stud.isMaried === true ? 'esu' : 'nesu'
    return `Labas, as ${stud.name}, man yra ${stud.age} metai ir as ${status} vedes`
}
for (i = 0; i < students.length; i++) {
    console.log(prisistatymas(students[i]));
}



