/*
 * common/config.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 1/3/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

const convict = require('convict')

const conf = convict({
  env: {
    doc: 'The application enviroment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'The port to bind',
    format: 'port',
    default: 3000,
    env: 'PORT'
  },
  mongoURI: {
    doc: 'The mongodb connection',
    default: 'mongodb://localhost/rx-residenz',
    env: 'MONGO_URI'
  }
})

conf.validate({ strict: true })

module.exports = conf
