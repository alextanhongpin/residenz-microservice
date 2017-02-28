const collection = require('./controller/room.js')
const router = require('express').Router()
const _ = require('lodash')

const mapping = {
  '/': {
    get: collection.all,
    post: collection.create
  },
  '/:id': {
    get: collection.one,
    put: collection.update,
    delete: collection.delete
  },
  '/:id/addresses': {
    get: collection.addressesAll
  }
}

_.each(mapping, (actions, url) => {
  _.each(actions, (handler, method) => {
    router[method](url, handler)
  })
})

module.exports = router
