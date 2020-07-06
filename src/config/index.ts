import * as dotenv from 'dotenv'
import * as path from 'path'
import * as fs from 'fs'

const rootFolder = path.resolve()

const environments = {
    development: 'development',
    test: 'test',
    production: 'production',
}

function loadEnvironments() {
    for (let NODE_ENV in environments) {

        const filepath = path.join(rootFolder, `.env.${NODE_ENV}`)

        if (process.env.NODE_ENV === NODE_ENV && fs.existsSync(filepath)) {
            console.log('[config]', '[loadEnvironments]', 'loading:', filepath)
            dotenv.config({ path: filepath })
        }
    }

    console.log('[config]', '[loadEnvironments]', 'loading .env')
    dotenv.config()
}

function loadConfig() {

}

loadEnvironments();
const config = loadConfig();

export default config;