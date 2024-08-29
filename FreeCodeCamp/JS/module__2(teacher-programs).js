// Функция для вычисления среднего балла по массиву оценок
function getAverage(scores) {
    let sum = 0; // Инициализируем переменную для хранения суммы оценок

    // Проходим по каждому элементу массива оценок
    for (const score of scores) {
        sum += score; // Добавляем текущую оценку к сумме
    }

    // Возвращаем средний балл, деля сумму на количество оценок
    return sum / scores.length;
}

// Функция для определения оценки по баллу
function getGrade(score) {
    if (score === 100) {
        return "A++"; // Если балл равен 100, возвращаем оценку "A++"
    } else if (score >= 90) {
        return "A"; // Если балл от 90 до 99, возвращаем оценку "A"
    } else if (score >= 80) {
        return "B"; // Если балл от 80 до 89, возвращаем оценку "B"
    } else if (score >= 70) {
        return "C"; // Если балл от 70 до 79, возвращаем оценку "C"
    } else if (score >= 60) {
        return "D"; // Если балл от 60 до 69, возвращаем оценку "D"
    } else {
        return "F"; // Если балл ниже 60, возвращаем оценку "F"
    }
}

// Функция для проверки, прошёл ли студент курс
function hasPassingGrade(score) {
    // Проверяем, не является ли оценка "F"
    return getGrade(score) !== "F";
}

// Функция для создания сообщения студенту
function studentMsg(totalScores, studentScore) {
    // Вычисляем средний балл по всем оценкам класса
    let average = getAverage(totalScores);

    // Определяем оценку студента по его баллу
    let grade = getGrade(studentScore);

    // Проверяем, прошёл ли студент курс на основе его оценки
    let passed = hasPassingGrade(studentScore);

    // Создаём сообщение в зависимости от того, прошёл ли студент курс
    let message;
    if (passed) {
        // Если студент прошёл курс, формируем сообщение о том, что он сдал курс
        message = `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
    } else {
        // Если студент не сдал курс, формируем сообщение о том, что он провалил курс
        message = `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
    }

    // Возвращаем сформированное сообщение
    return message;
}

// Пример использования функции с массивом оценок и баллом студента
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
