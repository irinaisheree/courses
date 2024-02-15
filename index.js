const express = require('express')
const app = express()
const expressConfig = require('./config/expressConfig')
const routes = require('./routes')
const handlebarsConfig = require('./config/handlebarsConfig')

const mongoose = require('mongoose')

expressConfig(app)
handlebarsConfig(app)

app.use('/', routes)


mongoose.connect(`mongodb://127.0.0.1:27017/course-book`).then(()=>{ console.log(`DB connected`) // /{{dbname}}

app.listen(3000, () => 
    console.log(`Server is listening on port 3000...`))

}).catch(err => console.log(`Cannot connect to DB`))