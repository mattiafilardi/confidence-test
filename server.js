const express = require("express")
const cors = require("cors")
const fetch = require("node-fetch")
const app = express()
const port = 5000

app.use(express.json());
app.use(cors())

app.post("/locations", (req, res) => {
    fetch('https://dev-api.confidence.org/v2/confidence/locations', {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: { 'Content-Type': 'application/json', 'Username': 'amitphatak$r5labs.com' }
    })
        .then(res => res.json())
        .then(json => res.send(json));
})

app.listen(port, () => {
    console.log(`App listening at port: ${port}`)
})