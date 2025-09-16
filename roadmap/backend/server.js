// backend/server.js

require('dotenv').config(); // ✅ Load environment variables

const express = require('express');
const mongoose = require('mongoose');

const farmersRoute = require('./routes/farmers');
const productsRoute = require('./routes/products');

const app = express();
app.use(express.json());

// ✅ Use MongoDB URI from .env file
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});

app.use('/api/farmers', farmersRoute);
app.use('/api/products', productsRoute);

app.listen(3000, () => {
  console.log('Farm2Market backend running on port 3000');
});
