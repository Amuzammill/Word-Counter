// importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";

// Dispaly a colorerfull Welcome message
console.log(chalk.bold.cyanBright("n\t\t Code with Muzammil - word counter"));
console.log("=".repeat(60));

// prompt the user  to enter a sentence
let answer = await inquirer.prompt([
    {
    name: "sentence",
    type: "input",
    message: "enter a sentence",

    
}
   
]);

let words =  answer.sentence.trim().split("");

console.log("=".repeat(60));
console.log(chalk.bold("- sentence words:"));
console.log(words);
console.log(chalk.bold(`\n -word count : ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));