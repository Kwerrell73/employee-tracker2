const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require('mysql2');




const promptList = {
    viewAllDepartments: "View All Departments",
    viewAllRoles: "View All Roles",
    viewAllEmployees: "View All Employees",
    addDepartment: "Add a Department",
    addRole: "Add a Role",
    addEmployee: "Add An Employee",
    updateRole: "Update Employee Role",

    exit: "Exit"
};

//mysql connection

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3301,
    user: 'root',
    password: '1967Morgan!',
    database: 'employees'
});

connection.connect(err => {
    if (err) throw err;
    prompt();
});


// Prompt the user to select from list

function prompt() {
    inquirer.prompt({
		
			type: 'list',
			name: 'action',
			message: 'Please select your choice below.',
            choices: [
                promptList.viewAllRoles,          
                promptList.viewAllDepartments,
                promptList.viewAllEmployees,
                promptList.addDepartment,
                promptList.addRole,
                promptList.addEmployee,
                promptList.updateRole,
                promptList.exit
            ]

		})
        .then(results => {
            console.log('results', results);
            switch (results.action) {
                case promptList.viewAllRoles:
                    viewAllRoles();
                    break;

                case promptList.viewAllDepartments:
                    viewAllDepartments();
                    break;

                case promptList.viewAllEmployees:
                    viewAllEmployees();
                    break;

                    
                case promptList.addDepartment:
                    addDepartment();
                    break;

                    
                case promptList.addRole:
                    addRole();
                    break;


                case promptList.addEmployee:
                    addEmployee();
                    break;

                case promptList.updateRole:
                    remove('role');
                    break;

               
                case promptList.exit:
                    connection.end();
                    break;
            }
        });
}

//add function for viewAllRoles
function viewAllRoles() {}

//add function for viewAllEmployees
function viewAllDepartments() {}

//add function for viewAllEmployees
function viewAllEmployees() {}

//addEmployee function
async function addEmployee() {}
const name = await inquirer.prompt(empName());
//addDepartment
async function addDepartment() {}
//addRole
async function addRole() {}
//addEmployee
async function addEmployee() {}

//Update Role - 
async function updateRole() {}

//input for employee name
function empName() {
    return ([
        {
            name: "first",
            type: "input",
            message: "Enter the first name: "
        },
        {
            name: "last",
            type: "input",
            message: "Enter the last name: "
        }
    ]);
}

		
