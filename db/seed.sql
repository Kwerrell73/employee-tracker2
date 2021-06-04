USE employeeList;

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES
 ("Kim", "Higley", 1, 3),
 ("Jerry", "White", 2, 1),
 ("Melissa", "Morse", 3, null),
 ("Linda", "Ory", 4, 3),
 ("Julia", "Browne", 5, null),
 ("Tim", "Jones", 4, 7),
 ("Chris", "Glassman", 1, 2),
 ("Juan", "Ramirez", 2, null),

INSERT INTO department (name)
VALUES
 ("Leisure Travel"),
 ("Corporate Travel"),
 ("Cruise Sales"),
 ("HR"),
 ("Legal"),

INSERT INTO roles (title, salary, department_id)
VALUES
 ("Leisure Sales", 38000, 1),
 ("Corporate Sales", 55000, 2),
 ("Cruise Sales", 42000, 2),
 ("Sales Lead", 95000, 1),
 ("HR Admin", 65000, 3),
 ("HR Lead", 88000, 3),
 ("Lead Counsel", 250000, 3),



