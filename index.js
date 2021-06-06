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
    deleteEmployee: "Delete Employee",
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
            promptList.deleteEmployee,
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

                case promptList.addEmployee:
                    deleteEmployee();
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
    db.query("SELECT Role.*, Department.name FROM role LEFT JOIN department ON department.id = role.department_id", function (err, res) {
        if (err) throw err;
        console.table(res);
        prompt();
    }
    )
}

//add function for viewAllDepartments
function viewAllDepartments() {
    const query = `SELECT department.name AS department, role.title, employee.id, employee.first_name, employee.last_name
    FROM employee
    LEFT JOIN role ON (role.id = employee.role_id)
    LEFT JOIN department ON (department.id = role.department_id)
    ORDER BY department.name;`;
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        console.log('VIEW EMPLOYEE BY DEPARTMENT\n');

        prompt();
    });
}



//add function for viewAllEmployees
function viewAllEmployees() {
    const query = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    LEFT JOIN employee manager on manager.id = employee.manager_id
    INNER JOIN role ON (role.id = employee.role_id)
    INNER JOIN department ON (department.id = role.department_id)
    ORDER BY employee.id;`;
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        console.log('VIEW ALL EMPLOYEES\n');

        prompt();
    });
}


//addEmployee function
function addEmployee() {

    console.log("Add a new employee.\n");
    inquirer
        .prompt([
            {
                type: "input",
                message: "First Name?",
                name: "first_name",
            },
            {
                type: "input",
                message: "Last Name?",
                name: "last_name"
            },
            {
                type: "list",
                message: "Please type the employee's role?",
                name: "role_id",
                choices: [1, 2, 3, 4, 5, 6, 7]
            },
            {
                type: "input",
                message: "Who is their manager?",
                name: "manager_id"
            }
        ])
        .then(function (res) {
            const query = db.query(
                "INSERT INTO employee SET ?",
                res,
                function (err, res) {
                    if (err) throw err;
                    console.log("Employee added!\n");

                    prompt();
                }
            );
        })
}

//addDepartment
function addDepartment() {

    console.log("Add a new department.\n");
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please provide the Department name.",
                name: "department_name",
            }

        ])
        .then(function (res) {
            const query = db.query(
                "INSERT INTO department SET ?",
                {
                    name: res.department_name
                },
                function (err, res) {
                    db.query("SELECT * FROM department", function (err, res) {
                        console.table(res);
                        prompt();
                    })
                }
            );
        })
}



//addRole
function addRole() {
    let department = [];
    db.query("SELECT * FROM department",
        function (err, res) {
            if (err) throw err;
            for (let i = 0; i < res.length; i++) {
                res[i].first_name + " " + res[i].last_name
                department.push({ name: res[i].name, value: res[i].id });
            }
            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "title",
                        message: "Please type the role you would like to add?"
                    },
                    {
                        type: "input",
                        name: "salary",
                        message: "Please provide the salary for this role?"
                    },
                    {
                        type: "list",
                        name: "department",
                        message: "Please provide the department?",
                        choices: department
                    }
                ])
                .then(function (res) {
                    console.log(res);
                    const query = db.query(
                        "Add to role SET ?",
                        {
                            title: res.title,
                            salary: res.salary,
                            department_id: res.department_id
                        },
                        function (err, res) {
                            if (err) throw err;
                            
                            prompt();
                        }
                    )
                })
        })
}




//Update Role - 
function updateRole() {
    db.query("SELECT first_name, last_name, id FROM employee",
        function (err, res) {
         
            let employees = res.map(employee => ({ name: employee.first_name + " " + employee.last_name, value: employee.id }))

            inquirer
                .prompt([
                    {
                        type: "list",
                        name: "employeeName",
                        message: "Please select the employee's role you would like to update.",
                        choices: employees
                    },
                    {
                        type: "input",
                        name: "role",
                        message: "Please provide this employees new role."
                    }
                ])
                .then(function (res) {
                  db.query(`UPDATE employee SET role_id = ${res.role} WHERE id = ${res.employeeName}`,
                        function (err, res) {
                            console.log(res);
                           
                            prompt()
                        }
                    );
                })
        }
    )
}







prompt();