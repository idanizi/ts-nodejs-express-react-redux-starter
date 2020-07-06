import config from './config'
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'

const app = express()
app.use(morgan('short'))
app.use(bodyParser.json())

export async function main() {
    app.listen(config.port, () => {
        console.log('[main]', 'server running on port', config.port)
    })
}

app.get('/api/ping', (req, res) => {
    return res.send('pong!')
})

if (process.env.NODE_ENV === 'production') {
    console.log('[server]', 'static serve of:', config.client_build_path)
    app.use('/*', express.static(config.client_build_path))
}

main()
    .then(console.log)
    .catch(console.error)