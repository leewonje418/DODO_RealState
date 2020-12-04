import express from 'express';
import cors from 'cors';
import api from './api'
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, '../public')));
app.use("/api", api);
export default app;
