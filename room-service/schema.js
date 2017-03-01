/*
 * room-service/schema.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 1/3/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

const Joi = require('joi')

const allSchema = Joi.object().keys({
  query: Joi.string()
})

const oneSchema = Joi.object().keys({
  _id: Joi.string().required()
})

const createSchema = Joi.object().keys({
  _id: Joi.string()
})

const updateSchema = Joi.object().keys({
  _id: Joi.string().required(),
  payload: Joi.object().keys({
    name: Joi.string()
  })
})

const deleteSchema = Joi.object().keys({
  _id: Joi.string().required()
})

module.exports = {
  all (data) {
    return Joi.validate(data, allSchema)
  },
  one (data) {
    return Joi.validate(data, oneSchema)
  },
  create (data) {
    return Joi.validate(data, createSchema)
  },
  update (data) {
    return Joi.validate(data, updateSchema)
  },
  delete (data) {
    return Joi.validate(data, deleteSchema)
  }
}

