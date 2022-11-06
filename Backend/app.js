const { join } = require('path');

const express = require('express');

const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const router = require('./router');

mongoose.connect(process.env.DB_URL)
  .then(() => console.log('DB connection successfully!'))
  .catch((err) => console.log('DBconnection filled', err));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'FrontEnd', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'FrontEnd', 'build', 'index.html'));
  });
}
app.use('/api/v1', router);

module.exports = app;
