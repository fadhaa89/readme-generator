// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// const MARKDOWN = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
      
    type: "input",
    name: "title",
    message: "What is your project's name?",  
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];
const userInput = {};

function getUserInformation() {
    return inquirer.prompt(questions).then(function (answers) {
        console.log("answers: ", answers);
        userInput = answers;
        // userData.title = userInput.title,
        // userData.introText = userInput.introText,
        // userData.instructions = userInput.instructions,
        // userData.demo = userInput.demo,
        // userData.githubPage = userInput.githubPage,
        // userData.githubRepo = userInput.githubRepo,
        // userData.name = userInput.name,
        // userData.location = userInput.location,
        // userData.bio = userInput.bio,
        // userData.linkedIn = userInput.linkedIn,
        // userData.contact = userInput.contact,
        // userData.images = userInput.images,
        // userData.shoutOuts = userInput.shoutOuts
        // dd installation, license, tests, questions
        console.log("userInput: ", userInput);
    })
};
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    getUserInformation()
}

// Function call to initialize app
init();