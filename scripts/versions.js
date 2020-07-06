const fs = require('fs')
const path = require('path')
const client_npm_package = require('../client/package.json')
const root_npm_package = require('../package.json')

console.info('[versions]', 'Syncing versions', root_npm_package.version)

client_npm_package.version = root_npm_package.version

fs.writeFileSync(path.join(__dirname, '../client/package.json'), JSON.stringify(client_npm_package, null, 2))