const readLine = require('readline');

const stdio = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


let number = 0;
stdio.question(`Please enter a number
`, (answer) => {
    console.log(`You entered ${answer}`);
    number = Number(answer)  + 70;
    console.log(`The result of ${answer} + 70 is ${number}`);
    stdio.close();
});
