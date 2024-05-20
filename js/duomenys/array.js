/*
Array - masyvas, sarasas, listas, matrica
*/

const empty = [];
console.log(empty);

const marks = [10, 5, 8, 2, 1];
console.log(marks);

const mark1 = 10;
const mark2 = 5;
const mark3 = 8;
const mark4 = 2;
const mark5 = 1;

const sum = mark1 + mark2 + mark3 + mark4 + mark5
const count = 5
const average1 = sum / count
console.log(average1);
console.clear()


//               0  1, 2, 3, 4, 5...........
const marks2 = [10, 5, 8, 2, 1];
console.log(marks2);

const sum2 = marks2[0] + marks2[1] + marks2[2] + marks2[3];
const count2 = marks2.length;
const average2 = sum2 / count2;

console.log('Suma', sum2);
console.log('Kiekis', count2);
console.log('Vidurkis', average2);
console.log(marks2[0]);
console.log(marks2[1]);
console.log(marks2[2]);
console.log(marks2[3]);
console.clear();

let sum3 = 0;
let index = 0; 
sum3 = sum3 + marks2[index++]
sum3 = sum3 + marks2[index++]
sum3 = sum3 + marks2[index++]
sum3 = sum3 + marks2[index++]


console.log(sum3);
console.clear();


function marksAverage(marks){
    if(student.length === 0){
    return 'Vidurkis: nera pazymiu';
    }
    let sum = 0; 
    //???
        return 'Vidurkis ' + sum / marks.length;
}
    
    
        
    

const student = [];
console.log(marksAverage(student));
student.push(10);
console.log(marksAverage(student));
console.log(student);

student.push(2);
console.log(marksAverage(student));
console.log(student);

student.push(5);
console.log(marksAverage(student));
console.log(student);