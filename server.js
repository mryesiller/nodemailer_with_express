const dotenv= require('dotenv').config({path:'.env'})
const app = require('./app')


app.listen(process.env.PORT,()=>{
    console.log(`Server runing on port ${process.env.PORT}`)
})