import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import providerRoutes from './routes/providerRoutes.js';
import createProviderTable from './models/Provider.js';
import db from './config/db.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

createProviderTable(); // Ensure table exists

app.use('/api/providers', providerRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
