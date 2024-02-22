const express = requires('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Olá turma")
})

app.listen(port, () => {
    console.log('Variavel' + port)
    console.log(`Listen on ${port}`)
})