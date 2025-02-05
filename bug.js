const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing error handling for missing or invalid user data
  console.log('Creating user:', user);
  res.status(201).send();
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});