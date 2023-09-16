const express = require('express');
const pool = require('./config/db');

const app = express();

app.use(express.json());

app.get('/users', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query('SELECT * FROM users');

        connection.release();
        res.json(rows);

    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
});


module.exports = app;