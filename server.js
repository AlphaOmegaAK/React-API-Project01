const express = require('express');

const app = express();

//  ----- Config -----
require('dotenv').config();
const routes = require('./routes');

app.use('/', routes.base);

// PORT + Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`));