import mongoose from 'mongoose';
import app from './app.js';


const PORT = 3000;
const DB_URL = `mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0`;

async function start() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log(`'SERVER START ON PORT: ${PORT}'`));
    } catch (error) {
        console.log(error);
    }
}

start()

