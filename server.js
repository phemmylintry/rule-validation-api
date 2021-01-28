const express = require('express')

const port = process.env.PORT || 1337
const app = express()

app.get('/', hello)

app.listen(port, () => console.log(`Server is listening on port ${port}`))

function hello (req, res) {
    res.json({
        text : 'hi',
    })
}