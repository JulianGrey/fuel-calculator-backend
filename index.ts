import dotenv from 'dotenv';
import express from 'express';

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'Fuel Calculator API' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${ PORT }`);
});
