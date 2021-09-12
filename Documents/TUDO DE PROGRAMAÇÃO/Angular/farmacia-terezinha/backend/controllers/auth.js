const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');

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
} 