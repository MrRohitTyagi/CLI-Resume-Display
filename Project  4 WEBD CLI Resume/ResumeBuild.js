const inquirer = require("inquirer");

const cp = require('child_process')


function displayList(){
       inquirer
       .prompt([
         {
           type: "list",
           name: "selection",
           choices: ["About", "Skills", "Academics", "Projects"],
         },
       ])
       .then(function (answer) {
         if (answer.selection == "About") {
           console.log(`I am $Rohit Tyagi I have completed class 12th from Shri gulab rai montessori school Bareily. 
           i have completed Bachelor's of computer applications from Invertis university Bareilly. 
           i am currently polishing my skills in Data structures and lerning full stack development`);
           displayNext()
         } else if (answer.selection == "Skills") {
           console.log("JavaScript , Java , React , React Native , Golang , Android");
           displayNext()
         } else if (answer.selection == "Academics") {
           cp.execSync('start chrome https://drive.google.com/file/d/1jv0736ZxEW6iv94WZFyapuPlKFOTWoLy/view?usp=sharing')
           displayNext()
         } else if (answer.selection == "Projects") {
           cp.execSync('start chrome https://github.com/MrRohitTyagi')
           displayNext()
         }
       });
}


displayList()


function displayNext(){
       inquirer
       .prompt([
         {
           type: "list",
           name: "selection",
           choices: ["Go Back" , 'Exit'],
         },
       ])
       .then(function (answer) {
         if (answer.selection == "Go Back") {
            displayList()
         } else if (answer.selection == "Exit") {
             console.log('Resume Closed')
         } 
       });
}



  