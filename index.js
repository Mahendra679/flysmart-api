const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (_, res) => res.json({ ok: true }));

// Currency list
const currencies = [
  { code: 'USD', name: 'US Dollar', rate: 1.00 },
  { code: 'EUR', name: 'Euro', rate: 0.92 },
  { code: 'INR', name: 'Indian Rupee', rate: 83.1 },
];
app.get('/currencies', (_, res) => res.json(currencies));

// Flight list (sample)
app.get('/flights', (req, res) => {
  res.json([
    { from: 'SFO', to: 'JFK', price: 199, currency: 'USD' },
    { from: 'DEL', to: 'BOM', price: 50, currency: 'USD' }
  ]);
});

// Root
app.get('/', (_, res) => res.send('FlySmart API is running 🚀'));

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
