// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

// Sample data: array of student objects
const students = [
  { name: "Alice", funFacts: ["Loves painting", "Has a cat", "Speaks 3 languages"] },
  { name: "Bob", funFacts: ["Plays guitar", "Enjoys hiking", "Collects stamps"] },
  { name: "Charlie", funFacts: ["Chess champion", "Enjoys cooking", "Plays soccer"] },
  { name: "Diana", funFacts: ["Loves reading", "Has a dog", "Knows karate"] },
  { name: "Ethan", funFacts: ["Enjoys coding", "Plays piano", "Likes cycling"] },
  { name: "Fiona", funFacts: ["Likes photography", "Speaks French", "Gardens"] },
  { name: "George", funFacts: ["Swims competitively", "Plays violin", "Enjoys gaming"] },
  { name: "Hannah", funFacts: ["Writes poetry", "Loves sushi", "Has a hamster"] },
  { name: "Ian", funFacts: ["Plays basketball", "Enjoys travel", "Speaks Spanish"] },
  { name: "Julia", funFacts: ["Loves yoga", "Likes coffee", "Has a parrot"] },
  { name: "Kevin", funFacts: ["Enjoys skateboarding", "Plays drums", "Collects coins"] },
  { name: "Laura", funFacts: ["Loves baking", "Speaks Italian", "Enjoys painting"] },
  { name: "Michael", funFacts: ["Plays tennis", "Likes photography", "Has a lizard"] },
  { name: "Nina", funFacts: ["Enjoys running", "Loves movies", "Speaks German"] },
  { name: "Oscar", funFacts: ["Plays football", "Likes chess", "Has a cat"] },
  { name: "Paula", funFacts: ["Enjoys singing", "Likes hiking", "Loves tea"] },
  { name: "Quentin", funFacts: ["Plays piano", "Enjoys coding", "Collects postcards"] },
  { name: "Rachel", funFacts: ["Loves knitting", "Speaks Japanese", "Has a dog"] },
  { name: "Sam", funFacts: ["Plays guitar", "Likes swimming", "Enjoys reading"] },
  { name: "Tina", funFacts: ["Enjoys photography", "Loves baking", "Has a rabbit"] },
];
// Route to return the entire array
app.get('/api/students', (req, res) => {
  res.json(students);
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
