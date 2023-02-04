const express = require('express');
const app = express();

app.get('/resgister', (req,res) => {
    res.json('test okay');
});

app.listen(4000);