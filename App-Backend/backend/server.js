const express = require('express')
const mysql = require('mysql')
const app = express()

app.use(express.json())

const conn = mysql.createConnection({
    'host':process.env.DBHOST,
    'user':'',
    'password':'',
    'database':''
})

conn.connect((err)=>{
    if(err) throw err,

    console.log('DB connected')
})

app.listen(process.env.PORT,() => {
    console.log(`Backend service is running on  ${process.env.PORT}`)
})