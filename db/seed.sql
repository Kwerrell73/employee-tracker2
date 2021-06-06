USE employeeList;

INSERT INTO department (name)
VALUES
 ("Leisure Travel"),
 ("Corporate Travel"),
 ("Cruise Sales"),
 ("HR"),
 ("Legal");


INSERT INTO role (title, salary, department_id)
VALUES
 ("Leisure Sales", 38000.00, 1),
 ("Corporate Sales", 55000, 2),
 ("Cruise Sales", 42000, 3),
 ("Sales Lead", 95000, 1),
 ("HR Admin", 65000, 4),
 ("HR Lead", 88000, 4),
 ("Lead Counsel", 250000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
 ("Kim", "Higley", 4, NULL),
 ("Jerry", "White", 2, 1),
 ("Melissa", "Morse", 2, 1),
 ("Linda", "Ory", 1, 1),
 ("Charles", "Glassman", 1, 1),
 ("Chris", "Love", 1, 1),
 ("Mary", "Sullivan", 3, 1),
 ("Julianne", "Grosse", 3, 1),
 ("Tim", "Jones", 6, NULL),
 ("Julia", "Browne", 5, 9), 
 ("Juan", "Ramirez", 7, NULL);





