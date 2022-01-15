//command to print hello world using express js

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req , res) =>{
    res.send('Hello World!')
})



app.listen(port , () =>{
    console.log(`Example app is listening at http://localhost:${port}`)
})


