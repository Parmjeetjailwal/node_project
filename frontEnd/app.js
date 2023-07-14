const express = require('express')
const bodyParser = require('body-parser');
const routes = require('./routes')
var cors = require('cors')

const app = express();

app.use(cors())



app.set("view engine", 'ejs')

app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', routes)


app.listen(5000, ()=>console.log('Server is listening on port 5000'))    