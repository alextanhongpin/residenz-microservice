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


// Create

// Entity.createPost = function(req, res, next) {


//   // console.log('Schema', schema)
//   const obj = {
//     user_id: req.user && req.user.id,
//     title: req.body.title,
//     cost: req.body.cost,
//     location: req.body.location,
//     loc: {
//       type: 'Point',
//       coordinates: [req.body.location && req.body.location.longitude, req.body.location && req.body.location.latitude]
//     },
//     photos: req.body.photos,
//     additional_info: req.body.additional_info,
//     visible: req.body.visible
//   }
//   // var valid = ajv.validate(schema, obj)
//   // console.log(valid, ajv)
//   return obj;
// }

// Entity.getPostsNearby = function (req, res) {
//   return {
//     distance_in_m: parseInt(req.query.distance_in_m, 10),
//     lat: parseFloat(req.query.lat, 10),
//     lon: parseFloat(req.query.lon, 10)
//   }
// }