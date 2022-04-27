const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

// if port doesn't work run on port, 4005 will be the port instead || means OR
const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})