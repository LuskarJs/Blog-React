const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname,  'build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, () => {
    console.log(
        `O Servidor Está Rodando na Porta ${port} No Endereço 'http://localhost:${port}'
    `);
})