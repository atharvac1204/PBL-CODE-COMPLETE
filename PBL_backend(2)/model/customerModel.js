const db = require('../config/db');
const bcrypt = require('bcryptjs');

const createCustomer = async (name, email, phone, password, address) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO customers (name, email, phone, password, address) VALUES (?, ?, ?, ?, ?)',
      [name, email, phone, hashedPassword, address],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

const findCustomerByEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM customers WHERE email = ?', [email], (err, result) => {
      if (err) reject(err);
      else resolve(result[0]);
    });
  });
};

module.exports = { createCustomer, findCustomerByEmail };
