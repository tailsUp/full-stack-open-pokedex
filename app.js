const express = require('express')
const app = express()

// get the port from env variable
//const PORT = process.env.PORT || 5000;
const PORT = process.env.PORT || 3003

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

app.get('/version', (req, res) => {
  res.send('1')
})

/*app.get('/health', (req, res) => {
  res.send('ok')
})*/

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  //if (true) throw('error...  ')
  res.send('ok')
})