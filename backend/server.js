import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import detailsRoute from './routes/detailsRoute.js';

const result = dotenv.config();

if (result.error) {
  throw result.error
}

connectDB();

const app = express();

app.use(express.json());

app.use('/api/details', detailsRoute);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.info(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)