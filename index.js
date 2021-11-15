// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of this application?",
  },
  {
    type: "input",
    name: "description",
    message: "What description did you use?",
  },
  {
    type: "list",
    name: "licenses",
    message: "Which License does this project use?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3"],
  },
  {
    type: "input",
    name: "test",
    message: "What test command should you run?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github name?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running?",
  },
  {
    type: "list",
    name: "credit",
    message: "Did you have any collaborators on this project?",
    choices: ["yes","no"]
  },
  {
    type: "input",
    name: "colabs",
    message: "What are the names of the other contributors?",
  },
  {
    type: "input",
    name: "colabGit",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get thedevelopment environment running?",
  },
];

// TODO: Create a function to write README file
inquirer.prompt(questions).then((answers) => {
  console.log(answers);
  fs.writeFile(
    path.join(__dirname, "/output/README.md"),
    generateMarkdown(answers),
    "utf8",
    () => {
      console.log("readme successfully created");
    }
  );
});
