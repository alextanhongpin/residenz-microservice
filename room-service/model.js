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
  },
  currency: {
    type: String,
    default: '$',
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  available: {
    type: Boolean,
    default: false
  },
  visible: {
    type: Boolean,
    default: false
  },
  geo_enable: {
    type: Boolean,
    default: false
  },
  description: {
    type: String
  },
  rating: {
    type: Number
  },
  like_count: {
    type: Number
  },
  location: {
    address_line_1: String,
    address_line_2: String,
    city: String,
    postal_code: String,
    country: String,
    address_full: String,
    iso_code: String,
    latitude: Number,
    longitude: Number
  },
  loc: {
    type: {
      type: String,
      enum: 'Point',
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      default: [0, 0]
    }
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

roomSchema.index({
  title: 'text',
  loc: '2dsphere'
})


module.exports = mongoose.model('Room', roomSchema)
