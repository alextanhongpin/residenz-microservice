/*
 * room-service/service.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 1/3/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

module.exports = function init ({ model }) {
  const Service = {}
  Service.all = ({ query, per_page, page }) => {
    console.log('service.call')
    return model.find({}).skip(per_page * page).limit(per_page)
  }
  Service.one = ({_id}) => model.findOne({ _id })
  Service.create = (params) => new model(params).save()
  Service.delete = (_id) => model.remove({ _id })
  Service.update = (_id, params) => model.findOneAndUpdate({ _id }, { $set: params }, { new: false })
  Service.Room = () => model
  return Service
}
