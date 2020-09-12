const express = require('express');

const app = express();

//  ----- Config -----
require('dotenv').config();

app.get('/', (req, res) => {
    res.send("<h1>This is a Test...</h1>")
})

// PORT + Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`));