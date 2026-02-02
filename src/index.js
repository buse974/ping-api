import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/ping', (req, res) => {
  const timestamp = Date.now();
  res.json({
    pong: true,
    timestamp,
    message: 'pong'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
