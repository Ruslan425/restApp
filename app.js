import router from './src/Router.js';
import fileUpload from "express-fileupload";
import express from 'express';

const app = express();

app.use(express.json());
app.use(express.static('files'))
app.use(fileUpload({}));
app.use('/api', router);

export default app;