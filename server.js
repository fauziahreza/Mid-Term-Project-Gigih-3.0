import express from 'express';
import routes from './src/routes/routes.js';
import connectDB from './src/config/db.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

const app = express();

const PORT = process.env.PORT || 3000;

dotenv.config();
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use('/', routes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server berhasil di running http://localhost:${PORT}`);
});