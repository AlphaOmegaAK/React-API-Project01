const express = require('express');
const cors = require('cors');
const app = express();

//  ----- Config -----
require('dotenv').config();
const routes = require('./routes');

app.use(cors({
    origin: ['http: localhost: 3000'],
    methods: "GET, POST, PUT, DELETE",
    // Precaution for browser issues
    optionSuccessStatus: 200,
}));

//  ----- MiddleWare -----
app, use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} ${new.Date().toLocaleTimeString()}`);
})

//  -----Base Route  -----
app.use('/', routes.base);
// ---- Auth Routes -----
// ----- User Routes -----
// ----- Post Routes -----

// PORT + Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`));