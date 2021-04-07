require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const db = require('./db');

app.use(cors());
app.use(express.json())

//Get all employees
app.get('/api/v1/employees', async (req, res) => {
    try {
        const results = await db.query('SELECT * FROM employee_list');

        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                employees: results.rows,
            },
        });
    } catch (error) {
        console.log(error);
    }
});

//Get an employee
app.get('/api/v1/employees/:id', async (req, res) => {
    try {
        const results = await db.query('SELECT * FROM employee_list WHERE id = $1', [req.params.id]);

        res.status(200).json({
            status: 'success',
            data: {
                employee: results.rows[0],
            },
        });

    } catch (error) {
        console.log(error);
    }
});

//Insert an Employee
app.post('/api/v1/employees', async (req, res) => {

    console.log(req.body);

    try {
        const results = await db.query(
            `INSERT INTO employee_list ( 
                first_name,
                last_name, 
                email, 
                street_number, 
                street_name, 
                city, 
                state, 
                country, 
                postal_code,
                date_of_birth,
                phone_number,
                cell_number,
                picture_large,
                picture_thumbnail
                )
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING*`,
                [req.body.first_name,
                req.body.last_name,
                req.body.email,
                req.body.street_number,
                req.body.street_name,
                req.body.city,
                req.body.state,
                req.body.country,
                req.body.postal_code,
                req.body.date_of_birth,
                req.body.phone_number,
                req.body.cell_number,
                req.body.picture_large,
                req.body.picture_thumbnail
            ]
        );
        res.status(201).json({
            status: "success",
            results: results.rows.length,
            data: {
                employee: results.rows[0],
            },
        });
    } catch (error) {
        console.log(error);
    }
});

//Clear Database
app.delete("/api/v1/employees/:id", async (req, res) => {
    try {
        const results = db.query("DELETE FROM employee_list;")
        res.status(204).json({
            status: 'success',
        });
    } catch (error) {
        console.log(error);
    } 
});

const port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});