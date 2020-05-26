const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

/*app.get('/:operator/:num_one/:num_two', (req, res) => {

    let operators = {
        'add': function (a, b) { return a + b },
        'subtract': function (a, b) { return a - b },
        'multiply': function (a, b) { return a * b },
        'divide': function (a, b) { return a / b },
    }

    if (!operators.hasOwnProperty(req.params.operator)) {
        res.status(400).send("Operator wasn't found.");
    } else if (isNaN(req.params.num_one)) {
        res.status(400).send("First input was not a number.");
    } else if (isNaN(req.params.num_two)) {
        res.status(400).send("Second input was not a number.")
    } else {
        let calculated = operators[req.params.operator](parseFloat(req.params.num_one), parseFloat(req.params.num_two)); // let calculated =  add (1, 2) { return 1 + 2 } etc
        res.send(calculated.toString());
    }
})*/

app.get('/:operator/:num_one/:num_two', (req, res) => {

    let calculated;

    if (isNaN(req.params.num_one)) {
        res.status(400).send("First input wasn't a number.");
    } else if (isNaN(req.params.num_two)) {
        res.status(400).send("Second number wasn't a number.")
    } else {
        switch (req.params.operator) {
            case 'add':
                calculated = parseFloat(req.params.num_one) + parseFloat(req.params.num_two);
                res.send(calculated.toString());
                break;
            case 'subtract':
                calculated = parseFloat(req.params.num_one) - parseFloat(req.params.num_two);
                res.send(calculated.toString());
                break;
            case 'divide':
                calculated = parseFloat(req.params.num_one) / parseFloat(req.params.num_two);
                res.send(calculated.toString());
                break;
            case 'multiply':
                calculated = parseFloat(req.params.num_one) * parseFloat(req.params.num_two);
                res.send(calculated.toString());
                break;
            default:
                res.status(400).send(operator)
                res.send("Operator not found");
        }
    }
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))