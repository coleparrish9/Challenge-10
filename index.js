const fs = require('fs');
const inquirer = require('inquirer');
const { Svg } = require('./lib/shapes');

const questions = [{
    type: 'list',
    message: 'What should the shape of your logo be?',
    name: 'shape',
    choices: ['circle','triangle','square']
},{
    type: 'input',
    message: 'What should the background color be?',
    name: 'bgColor'
},{
    type: 'input',
    message: 'What letters should the logo display? (Please enter up to 3 characters)',
    name: 'text'
},{
    type: 'input',
    message: 'What should the text color be?',
    name: 'textColor'
}];

function writeToFile(fileName, data) {
    fs.writeFileSync("./assets/"+fileName, data)
    console.log("Generated logo.svg");
}

function init() {
    inquirer.prompt(questions)
    .then(({ shape,bgColor,text,textColor }) => {
        const logo = new Svg(text,textColor,shape,bgColor).render();

        writeToFile("logo.svg",logo);
});

}

init();