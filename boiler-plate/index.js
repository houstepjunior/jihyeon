const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jhkim:asdf7868@boilerplate.atgwn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false
}).then(()=> console.log('mongodb connected'))
.catch(err=>console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})