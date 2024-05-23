//Destrukturizavimas

const a = [10, 8, 2, 6, 7];
const first = a[0];
const second = a[1];
const rest = a.slice(2);

console.log(first);
console.log(second);
console.log(rest);

const dict = ['labas', 'rytas', 'Lietuva', 'kas', 'tau'];
const [word1, word2, ...restOfDict] = dict;
console.log(word1);
console.log(word2);
console.log(restOfDict);
console.clear();

function giveMeTwoNumbers() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    return [a, b]
}

const rez = giveMeTwoNumbers();
const [n1, n2] = rez
console.log(rez, n1 + n2);

const [n3, n4] = giveMeTwoNumbers();
console.log(n3 + n4);

const person = {
    name: 'Ona',
    age: 55,
    color: 'blue',
    isMarried: false,
}

const { age, name, ...restDetails } = person // objekto destrukturizavimas
console.log(age);
console.log(name);
console.log(restDetails);

function food() {
    const list = [
        { title: 'Cepelinai', count: 2 },
        { title: 'saltibarsciai', count: 10 },
        { title: 'svogunu laiskai', count: 5 },
    ]
    return list[Math.floor(Math.random() * list.length)]
}

const { title, count } = food();
const sentance1 = `Valgysi ${title}, kiekis: ${count}`;
console.log(sentance1);


//const f2 = food();  <--- norint prasukti antra karta, negalima naudotu tu paciu title ir count
//const title2 = f2.title;
//const count2 = f2.count
//const sentance2 = `Valgysi ${title2}, kiekis: ${count2}`;
//console.log(sentance2);


