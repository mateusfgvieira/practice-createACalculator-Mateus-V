/*
Instructions
Scenario: You are building a calculator for an online math game. The
calculator must include functionality to perform the following:
    ● Absolute Value Calculation: Given any number, return its absolute
        value.
    ● Power Calculation: Calculate and return the value of a base raised to
        a specific power.
    ● Square Root Finder: Calculate the square root of a number.
    ● Maximum and Minimum Finder: From a given set of numbers,
        determine the largest and smallest values.
    ● Random Number Generator: Generate a random integer within a
        specified range.
    ● Custom Rounding: Round a number to a specified number of decimal
        places.
Step-by-Step Tasks:
    1. Write a function for each operation listed above using the Math
        module.
    2. Test each function with sample inputs to ensure it works as intended.
    3. Combine the individual functions into a single "calculator" program
        where the user can select an operation and input the required values.
    4. Test the calculator by performing the following:
        ● Find the absolute value of -45.67.
        ● Raise 5 to the power of 3.
        ● Calculate the square root of 144.
        ● Determine the largest and smallest values from [3, 78, -12,
            0.5, 27].
        ● Generate a random number between 1 and 50.
        ● Round 23.67891 to 2 decimal places.
*/

const input = require('readline-sync');

function calculateAbsValue(num){
    return Math.abs(num);
}

function calculatePower(base, power){
    return Math.pow(base, power);
}

function calculateSqRoot(num){
    return Math.sqrt(num);
}

function calculateMin(numArray){
    return numArray.reduce((n1, n2) => Math.min(n1, n2));
}
//let testingArray = [123, 23, 2, 412, -50];
//console.log(calculateMin(testingArray));

function calculateMax(numArray){
    return numArray.reduce((n1, n2) => Math.max(n1,n2));
}

function generateRandomInt(min, max){
    return Math.floor(Math.random() * (max-min + 1) + min);
}

// testing generateRandomInt function:
// let values = [];
// for (let i=0; i<40; i++){
//     values.push(generateRandomInt(5,10));
// }
// console.log(values);

function roundToDecimal(num, decimalPlaces){
    let valueForRounding = Math.pow(10, decimalPlaces);
    return Math.round(num * valueForRounding) / valueForRounding;
}

function collectNumbers(){
    let numArray = [];
    let nextValue = input.question(`Please input your numbers. When finished, input 'done'. `);
    while (nextValue.toLowerCase() !== 'done') {
        numArray.push(Number(nextValue));
        nextValue = input.question(`Please input your numbers. When finished, input 'done'. `);
    }
    return numArray;
}

//testing roundToDecimal function:
// console.log(roundToDecimal(4.369705, 4));

function runCalculator(){
    let chosenOperation = input.question(`Welcome to the calculator program. Please choose from the following options:
    - absolute value (abs)
    - power (pwr)
    - square root (sqrt)
    - minimum (min)
    - maximum (max)
    - random integer (randint)
    - custom rounding (round)
    `).toLowerCase();

    if (chosenOperation === 'abs' || chosenOperation === 'absolute value') {
        let inputNumber = input.questionFloat(`You have selected absolute value.
Please enter a number for computation: `);
        console.log(`The absolute value of ${inputNumber} is ${calculateAbsValue(inputNumber)}`);
    } else if (chosenOperation === 'pwr' || chosenOperation === 'power') {
        let inputBase = input.questionFloat(`You have selected the power operation.
Please enter a base number: `);
        let inputPower = input.questionFloat(`Please enter a power: `);
        console.log(`${inputBase} to the ${inputPower} is ${calculatePower(inputBase, inputPower)}`);
    } else if (chosenOperation === 'square root' || chosenOperation === 'sqrt') {
        let inputNumber = input.questionFloat(`You have selected square root.
Please enter a number for computation: `);
        console.log(`The square root of ${inputNumber} is  ${calculateSqRoot(inputNumber)}`);
    } else if (chosenOperation === 'minimum' || chosenOperation === 'min'){
        console.log('You have selected minimum.');
        let inputNumbers = collectNumbers();
        console.log(`The minimum value of ${inputNumbers} is ${calculateMin(inputNumbers)}`);
    } else if (chosenOperation === 'maximum' || chosenOperation === 'max'){
        console.log('You have selected maximum.');
        let inputNumbers = collectNumbers();
        console.log(`The maximum value of ${inputNumbers} is ${calculateMax(inputNumbers)}`);
    } else if (chosenOperation === 'random integer' || chosenOperation === 'randint'){
        console.log('You have selected random integer.');
        let minValue = input.questionInt('Please enter a lower bound: ');
        let maxValue = input.questionInt('Please enter an upper bound: ');
        console.log(`Random integer generated: ${generateRandomInt(minValue, maxValue)}`);
    } else if (chosenOperation === 'custom rounding' || chosenOperation === 'round'){
        console.log('You have selected custom rounding.');
        valueToRound = input.questionFloat('Please enter a value to round: ');
        decimalPlace = input.questionInt('To what decimal place would you like to round? ');
        console.log(`${valueToRound} rounded to ${decimalPlace} decimal places is ${roundToDecimal(valueToRound, decimalPlace)}`);
    } else {
        console.log('Error. Not a valid calculator operation.');
    }
}

function main(){
    runCalculator();
}

main();