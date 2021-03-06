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

const page = Joi.number().integer().min(1).default(1, 'The current page')
const perPage = Joi.number().integer().min(12).max(150).default(15, 'The number of items per page')

const allSchema = Joi.object().keys({
  query: Joi.string(),
  page: page,
  per_page: perPage
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
  all: (data) => Joi.validate(data, allSchema),
  one: (data) => Joi.validate(data, oneSchema),
  create: (data) => Joi.validate(data, createSchema),
  update: (data) => Joi.validate(data, updateSchema),
  delete: (data) => Joi.validate(data, deleteSchema)
}

