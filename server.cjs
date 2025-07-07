const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

// Store offers and answers in memory (use a database for production)
const offers = new Map();
const answers = new Map();

// Enable CORS with dynamic origin checking
app.use(cors({
  origin: (origin, callback) => {
    console.log('Request origin:', origin); // Debug
    const allowedOrigins = [
      'http://192.168.1.19:3000',
      'http://localhost:3000',
      'https://Droopy16a.github.io',
    ];
    if (!origin || allowedOrigins.includes(origin) || origin.includes('.ngrok.io') || origin.includes('.ngrok-free.app')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to store an offer and return an ID
app.post('/store-offer', (req, res) => {
  const offer = req.body.offer;
  const id = Math.random().toString(36).substring(2, 8); // Generate a short random ID
  offers.set(id, offer);
  console.log(`Offer stored for ID ${id}:`, offer); // Debug
  res.json({ id });
});

// Endpoint to retrieve an offer by ID
app.get('/get-offer/:id', (req, res) => {
  const offer = offers.get(req.params.id);
  if (offer) {
    res.json({ offer });
  } else {
    res.status(404).json({ error: 'Offer not found' });
  }
});

// Endpoint to store an answer
app.post('/store-answer/:id', (req, res) => {
  const answer = req.body.answer;
  answers.set(req.params.id, answer);
  console.log(`Answer stored for ID ${req.params.id}:`, answer); // Debug
  res.json({ success: true });
});

// Endpoint for the desktop to poll for the answer
app.get('/get-answer/:id', (req, res) => {
  const answer = answers.get(req.params.id);
  if (answer) {
    res.json({ answer });
    answers.delete(req.params.id); // Clear answer after retrieval
  } else {
    res.json({ answer: null }); // No answer yet
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Backend server running at http://192.168.1.19:${port}`);
});