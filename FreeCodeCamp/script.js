let profession = "teacher";
let age;
console.log(age);
console.log(profession);

//.......................................

let character = 'Hello';
let count = 8;

//..........................................

let count = 8;
console.log(count + 1);

//...........................................

let count = 8;
let rows = [];

// ..............................................

let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);

// .......................................................

let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
let cities = ["London", "New York", "Mumbai"]
console.log(cities);
cities[2] = "Mexico City";
console.log(cities);

//.......................................

let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
let popped = rows.pop();
console.log(popped);
console.log(rows);

//......................................

// Помните, что в предыдущем цикле вы использовали оператор сложения +, чтобы увеличить значение i на 1. Аналогичным образом можно поступить со строковым значением, добавив новую строку к существующей. Например, hello = hello + " World"; добавит строку "World" к существующей строке, хранящейся в переменной hello. Это называется конкатенацией. В цикле for...of используйте оператор сложения для конкатенации значения строки в значение результата.

const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    rows.push(i);
}

let result = ""

for (const row of rows) {
    result = result + row;
}

console.log(result);

//.................................................
// Step 69
const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(rowNumber) + " ".repeat(rowCount - rowNumber);
}

for (let i = 0; i < count; i = i + 1) {
    rows.push(padRow(i + 1, count));
}

let result = ""

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);

// .................................................................................

// К сожалению, теперь основание пирамиды исчезло. Это связано с тем, что вы создали еще одну ошибку off-by-one. Ваш первоначальный цикл выполнялся для значений i от 0 до 7, потому что count равен 8, а ваше условие требует, чтобы i был меньше count. Теперь ваш цикл выполняется для значений i от 1 до 7. Ваш цикл нужно обновить, чтобы он выполнялся и при значении i равном 8. Если посмотреть на вашу логику, это означает, что цикл должен выполняться, когда i меньше или равно count. Для этого можно использовать оператор less than or equal to <=. Обновите условие цикла, чтобы он выполнялся, пока i меньше или равно count.

const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}

let result = ""

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);
