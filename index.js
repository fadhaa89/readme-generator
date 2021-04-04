
// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
// const MARKDOWN = require("./utils/generateMarkdown");
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// TODO: Create an array of questions for user input
const questions = [
    {  
    type: "input",
    name: "Title",
    message: "What is your project's name?",  
    },

    {
        type: "input",
        name: "Email",
        message: "What is your email address?",
    },

    {
        type: "input",
        name: "Description",
        message: "write a brief description of your project",
    },

    {
        type: "input",
        name: "Acknowledgements",
        message: "Any acknowledgements to include? "
    },

    {
        type: "input",
        name: "Installation",
        message: "any Installation instructions ?",  
     },

     {
        type: "input",
        name: "Usage",
        message: "What is this App designed to do ?",
    },

    {
        type: "input",
        name: "Repo",
        message: "What is your Repo link ?",
    },

    {
        type: "input",
        name: "Githubname",
        message: "What is your Github name ?",
    },

    {
        type: "input",
        name: "Githublink",
        message: "What is your Github link ?",
    },

];

let userInput = {};

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
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// function init () {
//     getUserInformation();
// }

// TODO: Create a function to initialize app
async function init() {
    await getUserInformation();
    // writeFile(userData);
    // writeFile();
}

// Function call to initialize app
init()