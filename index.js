const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('FlySmart API is running 🚀');
});

app.get('/status', (req, res) => {
  res.json({ status: 'ok', message: 'FlySmart API Live' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
