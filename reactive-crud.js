const rx = require('rx')
const rxnode = require('rx-node')

// GET /users
const list = new oStream()
list.data
.setVars({
  httpResponse: get(1),
  next: get(2)
})
.then(find({}))
.then(populate('addresses'))
.then(execute)
.done(toJSONResponse)
.catch(callErrorHandler)

// POST /users
newUsers.data
.setVars({
  httpResponse: get(1),
  next: get(2)
})
.then(get(0))
.then(get('body'))
.then(models.users.create.bind(models.users))
.done(toJSONResponse)
.catch(callErrorHandler)

// POST /users/:id/addresses
const newAddress = new oStream()
newAddress.data
.setVars({
  httpResponse: get(1),
  userId(args) {
    return args[0].params.id
  }
})
.then(get(0))
.then(get('body'))
.then(models.addresses.create.bind(models.addresses))
.then((address, done) => {
  models.users.findByIdAndUpdate(this.customVars.userId, {
    $push: {
      addresses: address.id
    }
  }, {
    new: true
  }, done)
})
.then((usr, done) => {
  models.user.populate(usr, {
    path: 'addresses'
  }, done)
})
.done(toJSONResponse)
.catch(callErrorHandler)

const find = function (where, done) {
  return function () {
    return models.user.find(where, done)
  }
}

const populate = function (what) {
  return function (query) {
    return query.populate(what)
  }
}

const execute =  function (query, done) {
  return query.exec(done)
}

const findById = function (id) {
  return models.user.findById(id)
}
const findByIdAndUpate = function  (params, done) {
  return models.users.findByIdAndUpate(params[0], params[1], { new: true }, done)
}

const findByIdAndDelete = function (id, done) {
  return models.users.findByIdAndRemove(id, done)
}

const toJSONResponse = function (data) {
  return this.customVars.httpResponse.json(data)
}
const callErrorHandler = function (err) {
  return this.customVars.next(err)
}
