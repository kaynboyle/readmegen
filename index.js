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
    choices: ["yes","no"],
  },
  {
    type: "input",
    name: "colabs",
    message: "What are the names of the other contributors?(Press Enter to skip)",
  },
  {
    type: "input",
    name: "colabGit",
    message: "What are the git hub user names of the other contributors?(Press Enter to skip)",
  },
  {
    type: "input",
    name: "test",
    message: "Describe in detail the test environment to run on your project.",
  },
  {
    type: "input",
    name: "tutorials",
    message: "If you followed tutorials, include links to those here as well. If you did not, enter 'no'",
  },
  {
    type: "list",
    name: "thirdpartyYN",
    message: "Did you use any third-party assets that require attribution?",
    choices: ["yes", "no"],
  },
  {
    type: "input",
    name: "thirdpartyNames",
    message: "What are the names of the other contributors?(Press Enter to skip)",
  },
  {
    type: "input",
    name: "thirdpartyLinks",
    message: "Enter the links to the web-presences of the contributors.(Press Enter to skip)",
  },
  {
    type: "input",
    name: "usageDetails",
    message: "Provide instructions and examples for use."
  },
  {
    type: "input",
    name: "usage",
    message: "If you have an image or screenshot to include with your usage explanation, please enter the file name. If not enter 'no'.",
  },
  {
    type: "input",
    name: 'contributing',
    message: "If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so (Press Enter to skip)",
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
