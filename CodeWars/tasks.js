//Реализуйте функцию, которая преобразует заданное логическое значение в его строковое представление.

function booleanToString(bool){

    return bool.toString();

    console.log(booleanToString(true));
    console.log(booleanToString(false));
}

//........................................................................

// Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.
//
//     Например:
//
// Учитывая, что [34, 15, 88, 2]ваше решение вернется2
// Учитывая, что [34, -345, -1, 100]ваше решение вернется-345
// Для целей этого ката можно предположить, что предоставленный массив не будет пустым.

function findSmallestInt(arr) {
    // Math.min и оператор расширения, ищет наименьшее число
    let smallest = Math.min(...arr);

    // Возвращаем наименьшее число
    return smallest;
}

console.log(findSmallestInt([34, 15, 88, 2])); // Выведет 2
console.log(findSmallestInt([34, -345, -1, 100])); // Выведет -345

//................................................................................

function greet() {
    return "hello world!";
}
greet()

// .............................................

// Convert boolean values to strings 'Yes' or 'No'.

function boolToWord( bool ){
    if(bool === true) {
        return "Yes";
    } else if (bool === false) {
        return "No"
    }
}

// .........................................................
// Дополните решение так, чтобы оно перевернуло переданную в него строку.

function solution(str){
    return str.split('').reverse().join('');

}
