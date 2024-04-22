import inquirer from 'inquirer';
const currency = {
    USD: 1, //Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.75,
    PKR: 280,
};
let user_answer = await inquirer.prompt([{
        name: 'from',
        message: 'Enter From Currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: 'Enter to Currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: 'Enter From Amount',
        type: 'number',
    }]);
// let fromAmount = user_answer.from 
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // USD Base Currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
