const express = require('express')
const app = express()
const http = require('http').createServer(app)
require('./SocketService')(http)
const SERVER_PORT = process.env.SERVER_PORT

class App {
    start() {
        app.get('/health', (req, res) => {
            res.send({
                status: 'UP'
            })
        })
        
        app.use(express.static('public'))
        console.log(SERVER_PORT)
        const port = SERVER_PORT || 3000
        http.listen(port, () => {
            console.log(`server up at port: http://localhost:${port}`)
        })
    }
}

module.exports = () => {
    return new App()
}