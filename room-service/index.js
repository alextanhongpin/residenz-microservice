const router = require('express').Router()
const _ = require('lodash')

const Endpoint = require('./endpoint.js')
const Model = require('./model.js')
const Service = require('./service.js')
const Schema = require('./schema.js')
const Helper = require('./helper.js')

const endpoint = Endpoint({
  service: Service({ repo: Model })
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
  },
  '/:id/addresses': {
    get: endpoint.addressesAll
  }
}

_.each(mapping, (actions, url) => {
  _.each(actions, (callback, method) => {
    router[method](url, callback.bind(callback))
  })
})

module.exports = router
