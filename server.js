const express = require('express')

const port = process.env.PORT || 1337
const app = express()

app.get('/', details)

app.listen(port, () => console.log(`Server is listening on port ${port}`))


function details (req, res) {
    res.json({
        "message": "My Rule-Validation API",
        "status": "success",
        "data": {
            "name": "Oluwafemi Adenuga",
            "github": "@phemmylintry",
            "email": "stephenadenuga0@gmail.com",
            "mobile": "07062257651",
            "twitter": "@realfemiadenuga"
        }
    })
}



