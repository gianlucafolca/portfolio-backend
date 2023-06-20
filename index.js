const express = require('express');

// qui stiamo inizializzando il framework Express
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Node.js server');
});

// qui facciamo partire il nostro server
const server = app.listen(process.env.PORT || 8000, () => {
    console.log(`Hacker news server started on port: ${server.address().port}`);
});