const express = require('express')
const app = express();
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/raquel', (req, res) => {
    res.send('OLAAA')
})

app.get('/soma/:a/:b', (req, res) => {

    var a = parseInt(req.params.a, 10);
    var b = parseInt(req.params.b, 10);

    var resultado = a + b;


    res.send('resultado ' + resultado);
})