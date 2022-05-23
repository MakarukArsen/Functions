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
function getNumberToPow(numberOne, numberTwo){
    let result = numberOne;
    for (let i = 1; i < numberTwo; i++){
        if (numberTwo === 1){
            return result;
        }
        result *= numberOne;
    }
    return result;
}
console.log(`Функція 2: ${getNumberToPow(3, 3)}`);

// 3. Створити функцію, яка форматує ім'я, роблячи першу букву великою.
function GetReName(word){
    word = word.toLowerCase();
    let result = word[0].toUpperCase() + word.slice(1);
    return result;
}
console.log(`Функція 3: ${GetReName("aRSen")}`);

// 4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати
function calcPaymentAfterTaxes(money, taxes){
    const result = money - (money / 100) * taxes;
    return result
}
console.log(`Функція 4: ${calcPaymentAfterTaxes(1000, 19.5)}`);

//  5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
function getRandomNumberInRange(min, max){
    return result = Math.trunc(Math.random() * (++max - min) + min);
}
console.log(`Функція 5: ${getRandomNumberInRange(1, 10)}`);

//  6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові
function countLetter(letter, word){
    word = word.toLowerCase();
    let counter = 0;
    for (let i = 0; i <= word.length; i++){
        if (letter === word[i]){
            counter++
        }
    }
    return counter;
}
console.log(`Функція 6: ${countLetter("а", "АбРАкадабра")}`);

// 7. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
// 8. Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.
function convertMoney(money){
    money = money.toUpperCase();
    const exchangeRate = 25;
    let result;
    if (money.includes("$")){
        result = (parseInt(money) * exchangeRate) + "UAH";
        return result;
    }
    if (money.includes("UAH")){
        result = (parseInt(money) / exchangeRate) + "$";
        return result;
    }
    if (!money.includes("$") || !money.includes("UAH")){
        return "Ми не конвертуєм вашу валюту"
    }

}
console.log(`Функція 7, 8: ${convertMoney("100$")}`);
console.log(`Функція 7, 8: ${convertMoney("1000uah")}`);
console.log(`Функція 7, 8: ${convertMoney("1000EUR")}`);

// 9. Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
function createRandomPassword(length){
    let password = String(Math.trunc(Math.random() * 10));
    if (length === undefined){
        for (let i = 1; i < 8; i++){
            password += Math.trunc(Math.random() * (8 - 1) + 1)
        }
    } else {
        for (let i = 1; i < length; i++){
            password += Math.trunc(Math.random() * (length - 1) + 1)
        }
    }
    return password;

}
console.log(`Функція 9: ${createRandomPassword()}`);
console.log(`Функція 9: ${createRandomPassword(4)}`);

// 11. Створіть функцію, яка видаляє всі букви з речення.
function deleteLetters(letterToRemove, word){
    letterToRemove = letterToRemove.toLowerCase();
    word = word.toLowerCase();
    for (let i = 0; i <= word.length; i++){
        if (letterToRemove === word[i]) {
            word = word.replace(letterToRemove, "");
        }
    }
    return word;
}
console.log(`Функція 11: ${deleteLetters("a", "Amsterdam")}`);