/*
spread operatorius
*/
// Kompleksiniai kintamieji naudojasi t pacia atmintimi
const a = [1, 2, 3];
const b = a

a[0] = 44;
b[2] = 777;
console.log(a);
console.log(b);
// primityvus kintamieji naudoja skirtinga atminti
let c = 5;
let d = c;
c = 10
console.log(c, d);
console.clear();

//Spread operatorius
const e = [1, 2, 3];
const f = [...e];//<--- masyvo e kopija
e[0] = 111;
console.log(e, f);// <----[222, 2, 3] [1, 2, 3]

const g = [0, ...e, 4];
console.log(g);

const h = [...e, ...e, ...e];
console.log(h);
console.clear();
//...spread object

const obj1 = { name: 'Jonas', age: 44 };
const obj2 = obj1;
obj1.name = 'Maryte';
obj2.age = 69;
console.log(obj1);
console.log(obj2);

const obj3 = { brand: 'Audi', model: 80 };
const obj4 = { ...obj3 };
obj3.brand = 'volvo'
console.log(obj3);
console.log(obj4);
console.clear();

const person = {
    name: 'Petras',
    age: 77
};
const adress = {
    city: 'Miestas',
    street: 'Gatve',
    number: 45,
};
const fullPersonDetails = {
    ...person,
    ...adress,
    id: 44548484,
    name: 'Ona',
    name: 'petras',//<--- vyksta override, laimi paskutine irasyta reiksme
};
console.log(fullPersonDetails);
console.log(fullPersonDetails.city);
console.log(fullPersonDetails.id);
console.log(fullPersonDetails.name);

const str = 'abc';
const arr = [
    'a',  //0
    'b',  //1
    'c', //2
];
const obj = {
    0: 'a',
    1: 'b',
    2: 'c'
};
console.log(str[1], arr[1], obj[1]);

const k = [1, 2, 3];
const l = { name: 'Ona', age: 65 };
const p = { ...k, ...l };
console.log(p);