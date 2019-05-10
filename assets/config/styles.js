const path = require('path')
const fs = require('fs')


const cssFile = path.join(__dirname, '..', 'tailwind', 'tailwind.css')
const cssFileContent = fs.readFileSync(cssFile, 'utf8')

fs.writeFileSync(cssFile, cssFileContent, 'utf8')
