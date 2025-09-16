// backend/server.js

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const farmersRoute = require('./routes/farmers');
const productsRoute = require('./routes/products');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas!');
})
.catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});

app.use('/api/farmers', farmersRoute);
app.use('/api/products', productsRoute);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
