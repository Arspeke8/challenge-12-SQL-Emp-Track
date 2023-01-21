-- INSERT INTO movies (movie_name)
-- VALUES ("Lion King"),
--        ("The Godfather"),
--        ("West Side Story"),
--        ("Parasite"),
--        ("The Wizard of Oz");

-- INSERT INTO reviews (movie_id, review)
-- VALUES (1, "Zazu is underrated. Give that hornbill a sequel!"),
--        (2, "I'm gonna make him an offer you can't refuse, watch this movie"),
--        (1, "Scar is the lion everyone loves to hate"),
--        (3, "Ten years of ballet and three years of tap to join a gang in this neighborhood"),
--        (5, "The tin man gave a metallic, hollow performance"),
--        (1, "Hakuna matata"),
--        (5, "Those flying monkeys are nightmare fuel!");
       
INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
       ("Salesperson", 80000, 1),
       ("Lead Engineer", 120000, 2),
       ("Software Engineer", 100000, 2),
       ("Accountant", 125000, 3),
       ("Legal Team Lead", 130000, 4),
       ("Lawyer", 120000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("John", "Doe", 1, NULL),
    ("Jane", "Doe", 2, 1),
    ("Sally", "Rally", 3, NULL),
    ("Mark", "Smith", 4, 3),
    ("Bill", "Jones", 5, NULL),
    ("Jennifer", "Jones", 6, NULL),
    ("Bob", "Smith", 7, 6);

    