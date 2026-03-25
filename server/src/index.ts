import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import itemsRouter from './routes/items';
import aiRouter from './routes/ai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:80','http://localhost'],
  credentials: true,
}));

app.use(express.json());

// Routes
app.use('/items', itemsRouter);
app.use('/api/ai', aiRouter);

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
