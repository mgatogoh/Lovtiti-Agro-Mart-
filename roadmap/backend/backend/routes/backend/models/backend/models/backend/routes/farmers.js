const express = require('express');
const router = express.Router();
const Farmer = require('../models/Farmer');

// POST a new farmer
router.post('/', async (req, res) => {
  try {
    const newFarmer = new Farmer(req.body);
    await newFarmer.save();
    res.json({ message: 'Farmer registered successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all farmers (optional for admin or dashboard)
router.get('/', async (req, res) => {
  try {
    const farmers = await Farmer.find();
    res.json(farmers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
