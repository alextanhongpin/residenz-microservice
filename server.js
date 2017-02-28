const express = require('express')
const app = express()

const PORT = 3000

app.listen(PORT, () => {
  console.log(`listening to port *:${PORT}. press ctrl + c to cancel.`)
})

// Connect to DB
// mongoose.connect('mongodb://localhost/rx-residenz')
