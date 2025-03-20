const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.getUserByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    if (results.length === 0) return res.status(401).json({ message: 'Invalid email or password' });

    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ message: 'Error checking password' });
      if (!isMatch) return res.status(401).json({ message: 'Invalid email or password' });

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    });
  });
};


exports.register = (req, res) => {
    const { email, password } = req.body;

    // Check if user already exists
    User.getUserByEmail(email, (err, results) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        if (results.length > 0) return res.status(400).json({ message: 'Email already in use' });

        // Create new user
        User.createUser(email, password, (err, result) => {
            if (err) return res.status(500).json({ message: 'Error creating user' });
            res.status(201).json({ message: 'User registered successfully' });
        });
    });
};