/*
 * common/database.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 1/3/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const config = require('../common/config.js')

module.exports = function init () {
  mongoose.connect(config.get('mongoURI'))
  return mongoose
}

