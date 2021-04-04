
// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');
// const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require('./Develop/utils/generateMarkdown');
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
    console.log("running getUserInformation function");

    return inquirer.prompt(questions).then(function (answers) {
        // console.log("answers: ", answers);
        userInput = answers;
        console.log("userInput: ", userInput);
    })
}

// TODO: Create a function to write README file
function writeToFile(data) {
    var dataString = generateMarkdown(data);
    fs.writeFile(dataString, function (err) {
        if (err) throw err;
        console.log('Your README File has been created! You will find it in the folder where you ran the start command.');
    });
}

// CREATE NEW README FILE WITH USERDATA. GRABS DATA FROM USERDATA OBJ, INSERTS DATA INTO STRING WITH MD HEADINGS, STRINGIFIES THAT, AND WRITES IT ALL TO NEW README.===============================================================
// function writeFile(userData) {
//     var userDataStr = generateMarkdown(userData);
//     fs.writeFile('README.md', userDataStr, function (err) {
//         if (err) throw err;
//         console.log('Your README File has been created! You will find it in the folder where you ran the start command.');
//     });
// };

// fs.writeFile(file, data[, options], callback)

function writeFile2(data) {
    var dataString = generateMarkdown(data)
    fs.writeFile("newREADME.md", dataString, function (err) {
        if (err) throw err;
        console.log('SUCCESS!');
    })
}
// function init () {
//     getUserInformation();
// }

// TODO: Create a function to initialize app
async function init() {
    await getUserInformation();
     writeFile2(userInput);
}

// Function call to initialize app
init()