import express from 'express';
import mongoose from 'mongoose';
import router from './Router.js';
import fileUpload from "express-fileupload";

const PORT = 3000;
const DB_URL = `mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0`;

const app = express();
app.use(express.json());
app.use(express.static('files'))
app.use(fileUpload({}));
app.use('/api', router);

async function start() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log(`'SERVER START ON PORT: ${PORT}'`));
    } catch (error) {
        console.log(error);
    }
}

start()
