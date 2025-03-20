const express = require('express');
const { registerCustomer, loginCustomer } = require('../controllers/customerController');
const router = express.Router();

router.post('/signup', registerCustomer);
router.post('/login', loginCustomer);

module.exports = router;