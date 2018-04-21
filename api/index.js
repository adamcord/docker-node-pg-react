//Load express module with `require` directive
const express = require('express')
const routes = require('./src/routes')
const app = express()

//Define request response in root URL (/)
app.use(routes)

//Launch listening server on port 8081
app.listen(8000, function () {
  console.log('app listening on port 8000!')
})