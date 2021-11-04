const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath =path.join(OUTPUT_DIR, "index.html");

const teamMembers = [];
const choiceArr = [];

function teamMenu() {
    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager name?",
                validate: answer => {
                    if (answer !== ""){
                        return true;
                    }
                    return "Please enter the manager name!"
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's ID number?",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Enter a positive number"
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email?",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return "Please enter a valid email address!";
                    }
                },
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What the manager's office number?",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a positive number!";
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        });
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Who would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "None"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer": addEngineer();
                break;
                case "Intern": addIntern();
                break;
                default: makeTeam();
            }
        });
    }
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerId",
                message: "What is the Engineer's ID?",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        if (choiceArr.includes(answer)) {
                            return "Unavailable: Please choose another ID!"
                        }else {
                            return true;
                        }
                    }
                    return "Please enter a positive number!";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email",
                validate: answer => {
                    const pass =answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a vaild email address";
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineer's Github username",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Pleas enter a Github Username";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            choiceArr.push(answers.engineerId);
            createTeam();
        });
    }
}
