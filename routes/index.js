const express = require('express')
const router = express.Router()
const { handler } = require('../index')

router.get('*', (_, res) => {
    return res.sendStatus(404)
})

router.get('/ping', (req, res) => {
    res.send("ping")
})

router.post('/', async (req, res) => {
    console.log("REQUEST POST", req.body)

    const response = await handler(req)
    if(!response) { return res.sendStatus(404) }

    res.send(JSON.parse(response.body))
})

module.exports = router
