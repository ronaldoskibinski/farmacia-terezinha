const db = require('../util/database');

// USER QUERIES

module.exports = class User {
    constructor(name, phone, email, adress, password) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = adress;
        this.password = password;
    }    

    static find(email) {
        return db.execute(
            'SELECT * FROM user WHERE email= ?', [email]
        );
    }

    static save(user) {
        return db.execute(
            'INSERT INTO user (name, phone, email, adress, password) VALUES (?, ?, ?, ?, ?)', 
            [user.name, user.phone, user.email, user.address, user.password]
        );
    }
};

