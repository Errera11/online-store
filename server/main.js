require('dotenv').config()
const cors = require('cors');
const express = require('express');
const sequelize = require('./db/db')
const errorMiddleware = require('./middlewares/errorMiddleware')
const router = require('./routes/index')
const fileUpload = require('express-fileupload')

const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload())
app.use('/store', router);
app.use(errorMiddleware);

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