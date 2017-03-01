/*
 * room-service/model.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 1/3/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roomSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  owner_id: {
    type: Schema.Types.ObjectId,
    required: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('Room', roomSchema)
