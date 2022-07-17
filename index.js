const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const host = 'localhost' || '0.0.0.0';
const port = 5000 || 5001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
    // res.json({msg: 'Hello world, Welcome to the Node!'});
});

app.listen(port, host, () => {
    console.log(`Server listening on port ${port}`);
});