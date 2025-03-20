import express from 'express';
import { registerProvider, loginProvider } from '../controllers/providerController.js';

const router = express.Router();

router.post('/signup', registerProvider);
router.post('/login', loginProvider);

export default router;