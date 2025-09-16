const express = require('express');
const mongoose = require('mongoose');
const farmersRoute = require('./routes/farmers');
const productsRoute = require('./routes/products');

const app = express();
app.use(express.json());

// Replace this with your actual MongoDB Atlas connection string
mongoose.connect('mongodb+srv://your-username:your-password@cluster.mongodb.net/farm2market', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/farmers', farmersRoute);
app.use('/api/products', productsRoute);

app.listen(3000, () => {
  console.log('Farm2Market backend running on port 3000');
});
