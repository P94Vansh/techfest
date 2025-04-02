const fs = require("node:fs")
const path = require("node:path")

fs.writeFileSync(path.join(path.resolve(), 'secrets.json'), JSON.stringify(process.env));