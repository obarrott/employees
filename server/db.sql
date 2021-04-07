CREATE TABLE employee_list (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(254),
    street_number VARCHAR(50),
    street_name VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    postal_code VARCHAR(16),
    date_of_birth VARCHAR(50),
    phone_number VARCHAR(50),
    cell_number VARCHAR(50),
    picture_large VARCHAR(2083),
    picture_thumbnail VARCHAR(2083)
);



INSERT INTO employee_list (first_name, last_name, email, street_number, street_name, city, state, country, postal_code) VALUES ('Owen', 'Barrott', 'obarrott@gmail.com', '1309', '460 S', 'Provo', 'UT', 'USA', '84606');