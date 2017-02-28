
const rx = require('rx')
require('rx-node')

const Room = require('../model/room.js')

// One possible implemenatation
function all (req, res) {
  const subscription = rx.Observable.just({name: 'car', 'age': 1})
  .flatMap(validateAll)
  .flatMap(allService)
  .map((d) => d.name)
  .subscribe(
    (data) => successJSON(res),
    (err) => errorJSON(res),
    () => {
      subscription.dispose()
    }
  )
}

function one (req, res) {
  return oneService(req.body)
  .toPromise()
  .then(() => {
    res.status(200).json({})
  })
  .catch(err => console.log)
}

function validateAll (data) {
  // Carry out validation for the rooms schema here
}

function allService (request) {
  return Room.find(request)
}
function oneService({ id }) {
  return Rx.Observable.of({ id })
  .flatMap(callService)
}

function successJSON (res) {
  return (data) => res.status(200).json(data)
}

function errorJSON (res) {
  return (err) => res.status(400).json(err)
}

module.exports = { all }
