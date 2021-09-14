const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Medicines = require('../models/medicines');
const { response } = require('express');

// CONTROLLER FOR ERRORS AND VALIDATIONS

// ASYNC FUNCTION FOR SIGNUP
exports.signup = async (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) return

    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const address = req.body.address;
    const password = req.body.password;

    try {
        const hashedPassword = await bcrypt.hash(password, 12);

        const userData = {
            name: name,
            phone: phone,
            email: email,
            address: address,
            password: hashedPassword
        }

        const result = await User.save(userData);

        res.status(201).json({ message: 'Usuario Registrado!' });

    } catch(err) {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}; 

// ASYNC FUNCTION FOR LOGIN
exports.login = async (req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;

    try {

        const user = await User.find(email);

        if(user[0].length !== 1) {
            const error = new Error('Este email não está cadastrado.');
            error.statusCode = 401;
            throw error;
        }

        const storedUser = user[0][0];

        const isEqual = await bcrypt.compare(password, storedUser.password);

        if(!isEqual) {
            const error = new Error('Senha invalida.');
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign({
                email: storedUser.email,
                userId: storedUser.id 
            },
            'secretfortoken',
            { expiresIn: '1h' }
        );

        res.status(200).json({ token: token, userId: storedUser.userId });


    } catch(err) {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }    
}

// ASYNC FOR GET MEDICINES
exports.getm = async (req, res, next) => {

    try {

        const [medicines, _] = await Medicines.getm();

        res.status(200).json({medicines});

    } catch (error) {

        console.log(error);
        next(error);
        
    }

}

