#! /usr/bin/env node

// SHABANG

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message : "Enter the first number", type:"number", name:"FirstNumber"},
    {message : "Enter the Second number", type:"number", name:"secondNumber"},
    {message : "Select on of the following operators",
    type:"list",
    name:"operator",
    choices : ["Addition","Subtraction","Multiplication","Division"]
}])

if (answer.operator ==="Addition"){
    console.log(answer.FirstNumber + answer.secondNumber);   
} else if(answer.operator ==="Subtraction"){
    console.log(answer.FirstNumber - answer.secondNumber);
}else if(answer.operator ==="Multiplication"){
    console.log(answer.FirstNumber * answer.secondNumber);
}else if(answer.operator ==="Division"){
    console.log(answer.FirstNumber / answer.secondNumber);
}else {
    console.log("Please enter valid operator")
}


