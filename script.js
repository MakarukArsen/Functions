// 1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. 
function getMaxDigit(number){
    number = String(number);
    let biggestNumber = 0;
    for (let i = 0; i <= number.length; i++){
        if (number[i] > biggestNumber){
            biggestNumber = number[i];
        }
    }
    return biggestNumber;
}
console.log(`Функція 1: ${getMaxDigit(2865)}`);

// 2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **
function getNumberToPow(value, powValue){
    let result = value;
    if (!powValue){
        return 1;
    }
    if (powValue === 1){
        return result;
    } 
    for (let i = 1; i < Math.abs(powValue); i++){
        result *= value;
    }
    if (powValue < 0){
        result = 1 / result;
    }
    return result;
}
console.log(`Функція 2: ${getNumberToPow(3, 3)}`);

// 3. Створити функцію, яка форматує ім'я, роблячи першу букву великою.
function getReName(word){
    word = word.toLowerCase();
    let result = word[0].toUpperCase() + word.slice(1);
    return result;
}
console.log(`Функція 3: ${getReName("aRSen")}`);

// 4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати
const calcPaymentAfterTaxes = (money, taxes) => {
    const result = money - (money / 100) * taxes;
    return result;
}
console.log(`Функція 4: ${calcPaymentAfterTaxes(1000, 19.5)}`);

//  5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
const getRandomNumberInRange = (min, max) => {
    return result = Math.trunc(Math.random() * (++max - min) + min);
}
console.log(`Функція 5: ${getRandomNumberInRange(1, 10)}`);

//  6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові
function countLetter(letter, word){
    letter = letter.toLowerCase();
    word = word.toLowerCase();
    let counter = 0;
    for (let i = 0; i <= word.length; i++){
        if (letter === word[i]){
            counter++;
        }
    }
    return counter;
}
console.log(`Функція 6: ${countLetter("а", "АбРАкадабра")}`);

// 7. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
// 8. Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.
const EXCHANGE_RATE = 25;
const convertMoney = (money) => {
    money = money.toUpperCase();
    let result;
    if(isNaN(parseInt(money))){
        return "Вводьте тільки числа числа";
    }
    if (money.includes("$")){
        result = (parseInt(money) * EXCHANGE_RATE) + "UAH";
        return result;
    }
    if (money.includes("UAH")){
        result = (parseInt(money) / EXCHANGE_RATE) + "$";
        return result;
    }
    if (!money.includes("$") || !money.includes("UAH")){
        return "Ми не конвертуєм вашу валюту";
    }
}
console.log(`Функція 7, 8: ${convertMoney("100$")}`);
console.log(`Функція 7, 8: ${convertMoney("1000uah")}`);
console.log(`Функція 7, 8: ${convertMoney("1000EUR")}`);

// 9. Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
const createRandomPassword = function (length = 8){
    let password = String(Math.trunc(Math.random() * 10));
        for (let i = 1; i < length; i++){
            password += Math.trunc(Math.random() * (length - 1) + 1);
        }
    return password;

}
console.log(`Функція 9: ${createRandomPassword()}`);
console.log(`Функція 9: ${createRandomPassword(5)}`);

// 11. Створіть функцію, яка видаляє всі букви з речення.
const deleteLetters = function (letterToRemove, word){
    letterToRemove = letterToRemove.toLowerCase();
    word = word.toLowerCase().replaceAll(letterToRemove, "");
    return word;
}
console.log(`Функція 11: ${deleteLetters("a", "Amsterdam")}`);

// 12.Створіть функцію, яка перевіряє, чи є слово паліндромом

function isPalyndrom(word){
    word = word.toLowerCase().replaceAll(" ", "");
    let startPosition = 0;
    let endPosition = word.length - 1;
    let counter = 0;
    for(let i = 0; i < word.length; i++){
        if(word.slice(startPosition, ++startPosition) === word.slice(endPosition, ++endPosition)){
            counter++;
        }
        startPosition++;
        endPosition++;
    }
    return (counter === (word.length + 1) / 2);
}
console.log(`Функція 12: ${isPalyndrom("Я несу гусеня")}`);

// 13. Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
function deleteDuplicatedLetters(value){
    value = value.toLowerCase();
    for (let i = 0; i <= value.length; i++){
        let testLetter = value[i];
        let counter = 0;
        for (let j = 0; j <= value.length; j++){
            let secondTestLetter = value[j];
            if (testLetter === secondTestLetter){
                counter++;
            }
        }
        if(counter >= 2){
            value = value.replaceAll(testLetter, "");
            i = 0;
        }
    }
    return value;
}
console.log(`Функція 13: ${deleteDuplicatedLetters("Бісквіт був дуже ніжним")}`);