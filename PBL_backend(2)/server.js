const express = require('express');
const cors = require('cors');
require('dotenv').config();
const customerRoutes = require('./routes/customerRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/customer', customerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));