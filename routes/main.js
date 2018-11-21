const db = require('../config/mysql')();

module.exports = function (app) {
    app.get('/', (req, res, next) => {
        db.query('SELECT * FROM foo', (err, result) => {
            if (err) return next(`${err} at db.query (${__filename}:5:9)`);
            res.render('page', { title: 'Hello, World!', content: result });
        });
    });
};
