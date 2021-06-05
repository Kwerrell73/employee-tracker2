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
 ("Cruise Sales", 42000, 2),
 ("Sales Lead", 95000, 1),
 ("HR Admin", 65000, 3),
 ("HR Lead", 88000, 3),
 ("Lead Counsel", 250000, 3);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
 ("Kim", "Higley", 1, NULL),
 ("Jerry", "White", 2, 1),
 ("Melissa", "Morse", 3, 1),
 ("Linda", "Ory", 4, NULL),
 ("Julia", "Browne", 5, 4),
 ("Tim", "Jones", 3, 1),
 ("Chris", "Glassman", 1, NULL),
 ("Juan", "Ramirez", 7, NULL);





