/*
 * room-service/endpoint.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 1/3/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

const rx = require('rx')
// require('rx-node')

module.exports = function init ({ schema, service, helper, serializer }) {
  const { successJSON, errorJSON } = helper

  let Endpoint = {}

  Endpoint.all = (req, res) => {
    const requestPromise = Promise.resolve(req.query)
    .then(schema.all)

    const responsePromise = requestPromise
    .then(service.all)

    Promise.all([
      requestPromise,
      responsePromise
    ])
    .then(([request, response]) => {
      successJSON(res)({
        meta: {
          page: request.page,
          per_page: request.per_page
        },
        data: response
      })
    })
    .catch(errorJSON(res))
  }

  Endpoint.one = (req, res) => {
    Promise.resolve(req.query)
    .then(schema.one)
    .then(service.one)
    .then(successJSON(res))
    .then(errorJSON(res))
  }

  Endpoint.create = (req, res) => {
    Promise.resolve(req.body)
    .then(schema.create)
    .then(service.create)
    .then(successJSON(res))
    .then(errorJSON(res))
  }

  Endpoint.delete = (req, res) => {
    Promise.resolve(req.params)
    .then(params => ({ _id: params.id }))
    .then(schema.delete)
    .then(service.delete)
    .then(successJSON(res))
    .then(errorJSON(res))
  }

  Endpoint.update = (req, res) => {
    const subscription = rx.Observable.just(req.body)
    .map(params => {
      const _id = params.id
      const payload = {
        name: params.name
      }
      return { _id, payload }
    })
    .flatMap(schema.update)
    .flatMap(service.update)
    .subscribe(successJSON(res), errorJSON(res), () => subscription.dispose())
  }

  return Endpoint
}
