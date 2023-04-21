require('dotenv').config()
const cors = require('cors');
const express = require('express');
const sequelize = require('./db/db')

const models = require('./db/models/models')
const router = require('./routes/index')

const app = express();
app.use(express.json());
app.use(cors());
app.use('/store', router);

const start = () => {
    try {
        sequelize.authenticate()
        sequelize.sync()
        const PORT = process.env.PORT;
        app.listen(PORT, () => console.log('Started with ' + PORT));
    } catch(e) {
        console.log(e);
    }
}

start()