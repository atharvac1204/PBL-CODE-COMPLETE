const db = require('../config/db');
const bcrypt = require('bcryptjs');

// Function to create a new user
const createUser = async (email, password, callback) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
        db.query(sql, [email, hashedPassword], callback);
    } catch (error) {
        callback(error, null);
    }
};

// Function to fetch a user by email
const getUserByEmail = (email, callback) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], callback);
};

// Function to fetch a user by ID (optional)
const getUserById = (id, callback) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], callback);
};

module.exports = { createUser, getUserByEmail, getUserById };
