const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = 8080;

app.use(cors());
//app.use(bodyParser.json());


app.get('/api/test', (req, res) => {
    console.log('get /api/test/ called')
    const result = { test: 'This is but a mere test of connecting backend api to react front end' }
    res.status(200).json(result);
})

app.listen(PORT, () => {console.log(`listening on port ${PORT}`)});