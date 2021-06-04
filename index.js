const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require('mysql2');
const db = require('./db/connection');




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
                    updateRole();
                    break;

               
                case promptList.exit:
                    connection.end();
                    break;
            }
        });
}

//add function for viewAllRoles
function viewAllRoles() {






}

//add function for viewAllEmployees
function viewAllDepartments() {}

//add function for viewAllEmployees
function viewAllEmployees() { 
    const query = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    LEFT JOIN employee manager on manager.id = employee.manager_id
    INNER JOIN roles ON (roles.id = employee.roles_id)
    INNER JOIN department ON (department.id = roles.department_id)
    ORDER BY employee.id;`;
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);        
        console.log('\n');
        console.log('VIEW ALL EMPLOYEES\n');

        prompt();
    });
}


//addEmployee function
async function addEmployee() {
const name = await inquirer.prompt(empName());
}
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
            message: "Please enter the employees first name: "
        },
        {
            name: "last",
            type: "input",
            message: "Please enter the employees last name: "
        }
    ]);
}

		
