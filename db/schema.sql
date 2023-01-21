-- DROP DATABASE IF EXISTS movies_db;
-- CREATE DATABASE movies_db;

-- USE movies_db;

-- CREATE TABLE movies (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   movie_name VARCHAR(100) NOT NULL
-- );

-- CREATE TABLE reviews (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     movie_id INT,
--     review TEXT NOT NULL,
--     FOREIGN KEY (movie_id)
--     REFERENCES movies(id)
--     ON DELETE SET NULL
-- );

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);
