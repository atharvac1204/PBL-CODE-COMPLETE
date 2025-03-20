import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../config/db.js';

// *** Provider Signup
export const registerProvider = async (req, res) => {
  const { name, email, phone, address, serviceType, experience, description, idProof, certification, password } = req.body;

  // Check if provider exists
  db.query('SELECT * FROM providers WHERE email = ?', [email], async (err, results) => {
    if (results.length > 0) {
      return res.status(400).json({ message: 'Provider already exists' });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = 'INSERT INTO providers (name, email, phone, address, serviceType, experience, description, idProof, certification, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [name, email, phone, address, serviceType, experience, description, idProof, certification, hashedPassword], (err) => {
      if (err) return res.status(500).json({ error: 'Error saving provider' });

      res.status(201).json({ message: 'Provider registered successfully' });
    });
  });
};

//*** Provider Login
export const loginProvider = (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM providers WHERE email = ?', [email], async (err, results) => {
    if (results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });

    const provider = results[0];

    // Compare Password
    const isMatch = await bcrypt.compare(password, provider.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    // Generate JWT
    const token = jwt.sign({ id: provider.id, email: provider.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, provider });
  });
};
