const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/add/:num_one/:num_two', (req, res) => {
    let sum = parseFloat(req.params.num_one) + parseFloat(req.params.num_two);
    res.send(sum.toString());
})

app.get('/subtract/:num_one/:num_two', (req, res) => {
    let sum = parseFloat(req.params.num_one) - parseFloat(req.params.num_two);
    res.send(sum.toString());
})

app.get('/multiply/:num_one/:num_two', (req, res) => {
    let sum = parseFloat(req.params.num_one) * parseFloat(req.params.num_two);
    res.send(sum.toString());
})

app.get('/divide/:num_one/:num_two', (req, res) => {
    let sum = parseFloat(req.params.num_one) / parseFloat(req.params.num_two);
    res.send(sum.toString());
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))