/*
 * room-service/service.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 1/3/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

module.exports = function init ({ Model }) {
  const Service = {}
  Service.all = () => Model.find()
  Service.one = (_id) => Model.find({ _id })
  Service.create = (params) => new Model(params).save()
  Service.delete = (_id) => Model.remove({ _id })
  Service.update = (_id, params) => Model.findOneAndUpdate({ _id }, { $set: params }, { new: false })
  Service.Room = () => Model
  return Service
}
