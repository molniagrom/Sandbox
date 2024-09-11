// Вам будет предоставлен массив a и значение x. Все, что вам нужно сделать, это проверить, содержит ли предоставленный массив значение.
//
// Массив может содержать числа или строки. X может быть любым из них.
//
// Верните true, если массив содержит значение, false если нет.

// function check(a, x) {
//     return a.includes(x);
// }

// ........................................................................

// Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке. Все пробелы в строке должны быть сохранены.

// Примеры
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
    // Шаг 1: Разбиваем строку на слова по пробелам
    // const words = str.split(" ");

    // Шаг 2: Переворачиваем каждое слово
    // const reversedWords = words.map(word => word.split("").reverse().join(""));

    // Шаг 3: Соединяем перевёрнутые слова обратно в строку с пробелами
    // return reversedWords.join(" ");
// }

// ..............................................................................................

// Напишите функцию ИМТ, которая вычисляет индекс массы тела (ИМТ = вес / рост 2).
//
// Если ИМТ <= 18,5 вернуть "Недостаточный вес"
//
// если ИМТ <= 25,0 вернуть "Нормально"
//
// если ИМТ <= 30,0 вернуть "Избыточный вес"
//
// если ИМТ > 30, вернуть «Ожирение»

// function bmi(weight, height) {
//     const bmiValue = weight / (height ** 2);
//
//     if (bmiValue <= 18.5) {
//         return "Underweight";
//     } else if(bmiValue <= 25.0) {
//         return "Normal"
//     } else if(bmiValue <= 30.0) {
//         return "Overweight"
//     } else if(bmiValue > 30) {
//         return "Obese"
//     }
//
// }
// ясм
// .............................................................................................

// АЛЬТЕРНАТИВНЫЙ РЕГИСТР <=> АЛЬТЕРНАТИВНЫЙ РЕГИСТР
// Определите String.prototype.toAlternatingCase(или аналогичную функцию/метод, например, to_alternating_case / toAlternatingCase/ ToAlternatingCase​​на выбранном вами языке; подробности см. в исходном решении ) так, чтобы каждая строчная буква стала заглавной, а каждая заглавная буква стала строчной. Например:
//
// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// Как обычно, ваша функция/метод должны быть чистыми, т.е. они не должны изменять исходную строку.

// // Добавляем метод toAlternatingCase к объекту String
// String.prototype.toAlternatingCase = function () {
//     // 'this' в данном контексте указывает на строку, с которой мы работаем
//     // Например, если мы вызовем "hello world".toAlternatingCase(),
//     // 'this' будет равно строке "hello world".
//
//     // split('') разбивает строку на массив символов.
//     // Например, "hello" превратится в ["h", "e", "l", "l", "o"].
//     return this.split('').map(char => {
//
//         // Проверяем, является ли символ заглавной буквой
//         if (char === char.toUpperCase()) {
//             // Если символ заглавный, превращаем его в строчный и возвращаем
//             return char.toLowerCase();
//         } else {
//             // Иначе (если символ строчный), превращаем его в заглавный и возвращаем
//             return char.toUpperCase();
//         }
//
//     }).join(''); // join('') соединяет массив символов обратно в строку
// };

// ....................................................................................................................................




