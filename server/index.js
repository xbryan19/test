const express = require('express')
const port = 5000
const helmet = require('helmet')
 
const app = express()
app.use(helmet())
 
app.use('/logincontroller',require('./controllers/logincontroller.js'))
 
app.listen(port,function(){
    console.log('listening to port ' + port);
})

