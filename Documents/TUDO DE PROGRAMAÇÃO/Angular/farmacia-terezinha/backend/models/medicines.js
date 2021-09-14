
const db = require('../util/database');

// USER QUERIES
class Medicines {
    static getm() {
        let sql = 'SELECT cod, name, qtdmg, lab, val, img FROM medicines';
        return db.execute(sql);
    }
}

module.exports = Medicines;