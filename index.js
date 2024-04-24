import express, { Router } from 'express';
import dotenv from 'dotenv';
import noteRouter from './routers/noteRouter.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use('/api', noteRouter);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});