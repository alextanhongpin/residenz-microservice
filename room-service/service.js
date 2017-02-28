
module.exports = function init ({ Model }) {
  const Service = {}
  Service.all = () => Model.find()
  Service.one = (_id) => Model.find({ _id })
  Service.create = (params) => new Model(params).save()
  Service.delete = (_id) => Model.remove({ _id })
  Service.update = (_id, params) => Model.findOneAndUpdate({ _id }, { $set: params }, { new: false })
  return Service
}
