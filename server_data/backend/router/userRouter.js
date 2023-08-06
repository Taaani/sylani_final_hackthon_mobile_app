const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getme } = require('../controller/userController');

router.post('/', registerUser);
router.post('/login', loginUser);

router.get('/me', getme);


module.exports = router;