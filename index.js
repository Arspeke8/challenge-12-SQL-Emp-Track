const inquirer = require('inquirer');
const cTable = require('console.table');
const connect = require('./db/connection.js');

let currentRole = [];
let currentEmployee = [];

function init() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
        }
    ])
    .then((answers) => {
        switch(answers.action) {
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployeeRole();
                break;
            case 'Exit':
                connect.pool.end();
                break;
        }
    })
}

function viewDepartments() {
    connect.promisePool.query(`SELECT * FROM department`)
    .then(([rows, fields]) => {
        console.table(rows);
        init();
    })
}

function viewRoles() {
    connect.promisePool.query(`SELECT * FROM role`)
    .then(([rows, fields]) => {
        console.table(rows);
        init();
    })
}

function viewEmployees() {
    connect.promisePool.query(`SELECT * FROM employee`)
    .then(([rows, fields]) => {
        console.table(rows);
        init();
    })
}

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'What is the name of the department you would like to add?'
        }
    ])
    .then((answers) => {
        connect.promisePool.query(`INSERT INTO department (name) VALUES ('${answers.department}')`)
        .then(([rows, fields]) => {
            console.table(rows);
            init();
        })
    })
}

function addRole() {
    connect.promisePool.query(`SELECT * FROM department`)
    .then(([rows, fields]) => {
        rows.forEach((department) => {
            currentRole.push(department.name);
        })
    })
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the role you would like to add?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the role you would like to add?'
        },
        {
            type: 'list',
            name: 'department',
            message: 'What is the department of the role you would like to add?',
            choices: currentRole
        }
    ])
    .then((answers) => {
        connect.promisePool.query(`INSERT INTO role (title, salary, department_id) VALUES ('${answers.title}', '${answers.salary}', (SELECT id FROM department WHERE name = '${answers.department}'))`)
        .then(([rows, fields]) => {
            console.table(rows);
            init();
        })
    })
}

function addEmployee() {
    connect.promisePool.query(`SELECT * FROM role`)
    .then(([rows, fields]) => {
        rows.forEach((role) => {
            currentEmployee.push(role.title);
        })
    })
    inquirer.prompt([
        {
            type: 'input',
            name: 'first',
            message: 'What is the first name of the employee you would like to add?'
        },
        {
            type: 'input',
            name: 'last',
            message: 'What is the last name of the employee you would like to add?'
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of the employee you would like to add?',
            choices: currentEmployee
        }
    ])
    .then((answers) => {
        connect.promisePool.query(`INSERT INTO employee (first_name, last_name, role_id) VALUES ('${answers.first}', '${answers.last}', (SELECT id FROM role WHERE title = '${answers.role}'))`)
        .then(([rows, fields]) => {
            console.table(rows);
            init();
        })
    })
}

function updateEmployeeRole() {
    connect.promisePool.query(`SELECT * FROM employee`)
    .then(([rows, fields]) => {
        rows.forEach((employee) => {
            currentEmployee.push(employee.first_name);
        })
    })
    inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            message: 'Which employee would you like to update?',
            choices: currentEmployee
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the new role of the employee?',
            choices: currentRole
        }
    ])
    .then((answers) => {
        connect.promisePool.query(`UPDATE employee SET role_id = (SELECT id FROM role WHERE title = '${answers.role}') WHERE first_name = '${answers.employee}'`)
        .then(([rows, fields]) => {
            console.table(rows);
            init();
        })
    })
}

init();


