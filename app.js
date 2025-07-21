
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/request', (req, res) => {
  // Save booking request
  res.send('Booking request received');
});

app.get('/requests', (req, res) => {
  // Return list of requests
  res.json([{ id: 1, status: 'pending' }, { id: 2, status: 'approved' }]);
});

app.post('/approve/:id', (req, res) => {
  // Approve request
  res.send(`Request ${req.params.id} approved`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
