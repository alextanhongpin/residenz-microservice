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

const Endpoint = require('../room-service/endpoint.js')
const Model = require('../room-service/model.js')
const Service = require('../room-service/service.js')
const Schema = require('../room-service/schema.js')
const Helper = require('../helper/transport.js')
const Serializer = require('../room-service/serializer.js')

const endpoint = Endpoint({
  service: Service({ model: Model }),
  schema: Schema,
  helper: Helper,
  serializer: Serializer
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
