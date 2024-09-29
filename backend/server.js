// backend - server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./user');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});
