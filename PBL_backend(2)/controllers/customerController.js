const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { createCustomer, findCustomerByEmail } = require('../models/customerModel');

const registerCustomer = async (req, res) => {
  const { name, email, phone, password, address } = req.body;

  try {
    const existingUser = await findCustomerByEmail(email);
    if (existingUser) return res.status(400).json({ message: 'Email already in use' });

    await createCustomer(name, email, phone, password, address);
    res.status(201).json({ message: 'Customer registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const loginCustomer = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await findCustomerByEmail(email);
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, userId: user.id, name: user.name });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { registerCustomer, loginCustomer };
