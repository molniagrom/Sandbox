// Выбираем элементы из DOM по их идентификаторам
const textInput = document.getElementById('text-input'); // Получаем элемент ввода текста
const checkBtn = document.getElementById('check-btn'); // Получаем кнопку проверки
const resultDiv = document.getElementById('result'); // Получаем элемент для отображения результата

// Функция для проверки, является ли строка палиндромом
function isPalindrome(str) {
  // Убираем все неалфавитные символы и приводим строку к нижнему регистру
  const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');  
  // Переворачиваем очищенную строку
  const reversedStr = cleanedStr.split('').reverse().join('');  
  // Сравниваем очищенную строку с перевернутой строкой
  return cleanedStr === reversedStr; 
}

// Добавляем обработчик события для кнопки
checkBtn.addEventListener('click', () => {
  // Получаем текст из поля ввода и убираем лишние пробелы
  const inputText = textInput.value.trim(); 

  // Проверяем, пустое ли поле ввода
  if (inputText === "") {
    alert("Please input a value"); // Если пустое, выводим предупреждение
  } else {
    // Проверяем, является ли введенный текст палиндромом
    const isInputPalindrome = isPalindrome(inputText); 
    // Отображаем результат в элементе результата
    resultDiv.textContent = isInputPalindrome
      ? `${inputText} is a palindrome` // Если палиндром, выводим соответствующее сообщение
      : `${inputText} is not a palindrome`; // Если не палиндром, выводим другое сообщение
  }
});
