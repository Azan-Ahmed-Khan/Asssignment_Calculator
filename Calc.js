import { add } from "./add.js";
import { subs } from "./subs.js";
import { multi } from "./multi.js";
import { div } from "./Div.js";
import { perc } from "./Perc.js";
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        message: "Enter Your First Value",
        type: "number",
        name: "firstValue",
    },
    {
        message: "Select the Arthmetic Operator",
        type: "list",
        choices: ["+", "-", "/", "*", "%"],
        name: "operator",
    },
    {
        message: "Enter Your Second Value",
        type: "number",
        name: "secondValue",
    }
]);
if (answer.operator == "+") {
    let result1 = add(answer.firstValue, answer.secondValue);
    console.log(result1);
}
else if (answer.operator == "-") {
    let result2 = subs(answer.firstValue, answer.secondValue);
    console.log(result2);
}
else if (answer.operator == "*") {
    let result3 = multi(answer.firstValue, answer.secondValue);
    console.log(result3);
}
else if (answer.operator == "/") {
    let result4 = div(answer.firstValue, answer.secondValue);
    console.log(result4);
}
else if (answer.operator == "%") {
    let result5 = perc(answer.firstValue, answer.secondValue);
    console.log(result5);
}
