//command to print hello world using express js

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req , res) =>{
    res.send('Hello World!')
})

app.post('/',function(req , res){
    res.send('Got a post request')
})


app.put('/',function(req , res){
    res.send('Got a put request')
})

app.delete('/',function(res ,res){
    res.end('Got a Delete request at /user')
})




app.listen(port , () =>{
    console.log(`Example app is listening at http://localhost:${port}`)
})



