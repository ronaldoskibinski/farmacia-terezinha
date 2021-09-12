const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const authController = require('../controllers/auth');

router.post(
    '/signup',
    [
        body('name').trim().not().isEmpty(),
        body('phone').trim().not().isEmpty(),
        body('address').trim().not().isEmpty(),
        body('email').isEmail().withMessage('Por Favor insira um Email valido.')
        .costum(async(email) => {
            const user = await User.find(email);
            if(user[0].length > 0) {
                return Promise.reject('O Email ja está sendo utilizado.')
            }
        })
        .normalizeEmail(), 
        body('password').trim().isLength({ min: 7 })
    ], authController.signup
);

module.exports = router;