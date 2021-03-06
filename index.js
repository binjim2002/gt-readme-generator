var inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");


class program {
    constructor(){
        
        this.ask(questions, this.writeTofile);
    }
    async ask(questions,cb){
        cb(await inquirer.prompt(questions))
    }
    writeTofile(data){
        fs.appendFileSync("MYREADME.md", generateMarkdown(data), function (err) {
            // I dont want to do writeFile because i dont want it to be overwritten
            if (err) {
              throw err;
            }
          });
    }
}

const questions = [
  {
    message: "Tell me the name of this project?",
    type: "input",
    name: "title",
  },
  {
    message: "Can you describe this project?",
    type: "input",
    name: "description",
  },
  {
    message: "what kind of installation structure do you have in there?",
    type: "input",
    name: "installation",
  },

  {
    message: "What is the usage instruction of you project ",
    type: "input",
    name: "usage",
  },
  {
    message: "How to get involved in this project?",
    type: "input",
    name: "contributing",
  },
  {
    message: "How does this app work?",
    name: "tests",
    type: "input",
  },
  {
    message: "How can I answer you question?",
    name: "questions",
    type: "input",
  },
  {
    message: "what is your Github url?",
    type: "input",
    name: "testing github",
  },
  {
    message: "Which license did you use?",
    type: "list",
    name: "license",
    choices: ["MIT", "GNU-AGPLv3", "Apache-2.0"],
  },
];

new program();