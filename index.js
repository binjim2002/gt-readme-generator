const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);
const util = require ("util");

function init() {
    console.log("init");
    inquirer.prompt(questions)
    .then(function(data) {
        console.log(data)
        fs.wrinteFilesSync("MYREADME.md", generateMarkdown(data), function (err) {
    if (err) {
    throw err;
    }
        }
}

// array of questions for user
const questions = [
    {

    message: "Tell me the name of this project?",
    type: "input", 
    name: "title",

    },
    {
    message: "What does this project do?",
    input: "input",
    name: "description",

}, 
{
    
    message: "what kind of installation do you have in there? ",
    type: "input",
    name: "installation", 

},
{
    message: "Now give me the name of the instructions that's going to be in here",
    type: "input",
    name: "usage"
},
{
    message: "Tell me about the license.",
    type: "input",
    name: "license",
},
{
    message: "who contiributed to this project.",
    type: "input",
    name: "contributing",
},
{
    message: "is this app working pretty good?",
    type: "input",
    name: "tests",
},
{
    message: "Do you have anymore questions?",
    type: "input",
    name: "questions",
},
{
    message: "what is your Github url?",
    type: "input",
    name: "github",
} 
    
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
