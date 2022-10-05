const readline = require('readline');
const { pairOfValues } = require('./src/pairOfValues.js');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = () => {
    reader.question('Input the list of numbers separated by comma: ', intArray => {
        reader.question('Input the target sum: ', targetSum => {
            reader.close();
            try {
                console.log(pairOfValues(intArray, targetSum));
            } catch (err) {
                console.log("Something bad happened during execution, please check your inputs and try again!")
            }
        });
    });

}

input();