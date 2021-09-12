const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const ports = process.env.PORT || 4200;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Acess-Control-Allow-Origin', '*');
    res.setHeader('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Acess-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.listen(ports, () => console.log(`Listening on port ${ports}`));