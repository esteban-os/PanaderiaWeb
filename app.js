const express = require('express')
const app = express()
const port = process.env.PORT || 3000

//configuracion
app.use(express.static('public'));


//servidor
app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})

