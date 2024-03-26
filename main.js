#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 20000;
let myPin = 1357;
let userpin = await inquirer.prompt([
    {
        name: "pincode",
        type: "number",
        message: "Kindly, Enter your Pin Code:",
    }
]);
if (userpin.pincode == myPin) {
    console.log(chalk.greenBright("Correct pincode!"));
    let userMethod = await inquirer.prompt([
        {
            name: "usermethod",
            type: "list",
            message: "Kindly, Enter your method:",
            choices: ["Withdraw", "Current Balance", "Fast Cash"],
        }
    ]);
    if (userMethod.usermethod === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Kindly, Enter your Amount:",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.red("Unsufficent Balance"));
        }
        else {
            myBalance -= amountAns.amount;
            console.log(chalk.greenBright(`your remaining amount is: ${myBalance}.`));
        }
    }
    else if (userMethod.usermethod === "Current Balance") {
        console.log(chalk.greenBright(`your Current balance is: ${myBalance}.`));
    }
    else if (userMethod.usermethod === "Fast Cash") {
        let fastamount = await inquirer.prompt([
            {
                name: "fast",
                type: "list",
                message: "Select your fast cash amount:",
                choices: [500, 1000, 1500, 2000],
            }
        ]);
        myBalance -= fastamount.fast;
        console.log(chalk.greenBright(`your remaining amount is: ${myBalance}`));
    }
}
else {
    console.log(chalk.redBright("Wrong Pincode!!"));
}
;
