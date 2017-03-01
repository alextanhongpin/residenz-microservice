/*
 * room-service/index.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 1/3/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

const router = require('express').Router()
const _ = require('lodash')

const Endpoint = require('./endpoint.js')
const Model = require('./model.js')
const Service = require('./service.js')
const Schema = require('./schema.js')
const Helper = require('./helper/transport.js')

const endpoint = Endpoint({
  service: Service({ repo: Model }),
  schema: Schema,
  helper: Helper
})

const mapping = {
  '/': {
    get: endpoint.all,
    post: endpoint.create
  },
  '/:id': {
    get: endpoint.one,
    put: endpoint.update,
    delete: endpoint.delete
  }
  // '/:id/addresses': {
  //   get: endpoint.addressesAll
  // }
}

_.each(mapping, (actions, url) => {
  _.each(actions, (callback, method) => {
    router[method](url, callback)
  })
})

module.exports = router
