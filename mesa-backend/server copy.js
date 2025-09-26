// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors({ origin: '*' }));

// Sample data: array of student objects
const students = [
  { name: "Alice", funFacts: ["Loves painting", "Has a cat", "Speaks 3 languages"] },
];
// Route to return the entire array
app.get('/api/students', (req, res) => {
  res.json(students);
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
