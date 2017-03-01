/*
 * server.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 1/3/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

const express = require('express')
const app = express()
require('./common/middleware')(app)
require('./common/database')()

const config = require('./common/config.js')
// Load all configs here
const PORT = config.get('port')

const roomService = require('./room-service/index.js')

app.use('/api/v1/rooms', roomService)

app.listen(PORT, () => {
  console.log(`listening to port *:${PORT}. press ctrl + c to cancel.`)
})

