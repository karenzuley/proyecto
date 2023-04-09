//crear servidor express
const express = require('express')
const app = express()

//simular dos usuarios de bases de datos
const usuarios = [
    {
        correo: "123@gmail.com",
        contraseña: "123"
    },
    {
        correo: "456@gmail.com",
        contraseña: "456"
    }
];

// respond with "hello world" when a GET request is made to the homepage
app.get('/hola', (req, res) => {
    res.send('ok')
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})