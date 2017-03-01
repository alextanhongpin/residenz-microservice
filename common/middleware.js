/*
 * common/middleware.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 1/3/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

const bodyParser = require('body-parser')

module.exports = function init (app) {
  // Body parser
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
}
