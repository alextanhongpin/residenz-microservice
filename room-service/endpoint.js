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

module.exports = function init ({ schema, service, helper }) {
  const { successJSON, errorJSON } = helper

  let Endpoint = {}

  Endpoint.all = (req, res) => {
    const subscription = rx.Observable.just(req.query)
    .map((params) => ({ query: params.query }))
    .flatMap(schema.all)
    .flatMap((valid) => {
      if (valid.error) {
        
      }
      return valid.value
    })
    .flatMap(service.all)
    .subscribe(successJSON(res), errorJSON(res), () => subscription.dispose())
  }

  Endpoint.one = (req, res) => {
    const subscription = rx.Observable.just(req.query)
    .map(params => ({ _id: params.id }))
    .flatMap(schema.one)
    .flatMap((v) => v.value)
    .flatMap(service.one)
    .subscribe(successJSON(res), errorJSON(res), () => subscription.dispose())
  }

  Endpoint.create = (req, res) => {
    const subscription = rx.Observable.just(req.body)
    .map(params => ({ name: params.name }))
    .flatMap(schema.create)
    .flatMap((v) => v.value)
    .flatMap(service.one)
    .subscribe(successJSON(res), errorJSON(res), () => subscription.dispose())
  }

  Endpoint.delete = (req, res) => {
    const subscription = rx.Observable.just(req.params)
    .map(params => ({ _id: params.id }))
    .flatMap(schema.delete)
    .flatMap((v) => v.value)
    .flatMap(service.delete)
    .subscribe(successJSON(res), errorJSON(res), () => subscription.dispose())
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
    .flatMap((v) => v.value)
    .flatMap(service.update)
    .subscribe(successJSON(res), errorJSON(res), () => subscription.dispose())
  }

  return Endpoint
}
