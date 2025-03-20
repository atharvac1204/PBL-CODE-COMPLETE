import db from '../config/db.js';

const createProviderTable = () => {
  const sql = `CREATE TABLE IF NOT EXISTS providers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address TEXT NOT NULL,
    serviceType VARCHAR(100) NOT NULL,
    experience INT NOT NULL,
    description TEXT NOT NULL,
    idProof VARCHAR(100) NOT NULL,
    certification VARCHAR(100),
    password VARCHAR(255) NOT NULL
  )`;

  db.query(sql, (err) => {
    if (err) console.error('Error creating provider table:', err);
  });
};

export default createProviderTable;
