// add below your existing routes
app.get('/rates', (req, res) => {
  res.json({
    base: 'USD',
    rates: { INR: 83.1, EUR: 0.92, GBP: 0.78, AED: 3.67 },
    updatedAt: new Date().toISOString()
  });
});

app.get('/flights', (req, res) => {
  // demo data
  res.json([
    { from: 'BOM', to: 'DXB', priceUSD: 320, airline: 'FlySmart Air', depart: '2025-08-12T10:30:00Z' },
    { from: 'DEL', to: 'LHR', priceUSD: 610, airline: 'SkyJet',     depart: '2025-08-13T03:15:00Z' }
  ]);
});
