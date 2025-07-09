const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/dealership', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// ✅ Define Dealer Schema & Model
const DealerSchema = new mongoose.Schema({
  id: Number,
  name: String,
  state: String,
  reviews: [String],
});
const Dealer = mongoose.model('Dealer', DealerSchema);

// ✅ Endpoints

// Get all dealers
app.get('/dealers', async (req, res) => {
  const dealers = await Dealer.find();
  res.json(dealers);
});

// Get one dealer's details
app.get('/dealer/:id', async (req, res) => {
  const dealer = await Dealer.findOne({ id: req.params.id });
  res.json(dealer);
});

// Get reviews for a dealer
app.get('/dealer/:id/reviews', async (req, res) => {
  const dealer = await Dealer.findOne({ id: req.params.id });
  res.json({ reviews: dealer.reviews });
});

// Get dealers by state
app.get('/dealers/state/:state', async (req, res) => {
  const dealers = await Dealer.find({ state: req.params.state });
  res.json(dealers);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

