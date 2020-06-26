const generateMarkdown = require("./utils/generateMarkdown")
var inquirer = require("inquirer")
const fs = require("fs")

const questions = [
    {
        message: "Tell me the name of this project?",
        type: "input",
        name: "title"
    },
    {
        message: "What does this project do?",
        type: "input",
        name: "description"
    },
    {
        message: "what kind of installation do you have in there?",
        type: "input",
        name: "installation"
    },
    
    {
        message: "Tell me about the license",
        type: "input",
        name: "license",
    },
    {
        message: "is this app working pretty good?",
        type: "input",
        name: "testing"
    },
    {
        message: "who contiributed to this project?",
        name: "contributing",
        type: "input",
        
        
    },
    {
        message: "what is your Github url?",
        type: "input",
        name: "testing github",
    },
    {
        message: "Do you have anymore questions?",
        type: "list",
        name: "license",
        choices: [
          "MIT",
          "GNU AGPLv3",
          "Apache License 2.0"
        ]
      }
];
function init() {
console.log("init");
inquirer.prompt(questions)
.then(function(data) {
console.log(data)
fs.appendFileSync("MYREADME.md", generateMarkdown(data), function (err) {
    // I dont want to do writeFile because i dont want it to be overwritten
if (err) {
throw err;
}})
})
};
init();
