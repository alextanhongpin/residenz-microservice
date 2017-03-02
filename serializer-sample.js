const JSONAPISerializer = require('jsonapi-serializer').Serializer

const UserSerializer = new JSONAPISerializer('users', {
  nullIfMissing: true,
  attributes: ['firstName', 'lastName', 'author'],
  dataLinks: {
    self: function (data) {
      console.log('links', data)
      return `/users/${data.id}`
    }
  },
  author: {
    ref: 'id',
    // included: false,
    dataLinks: {
      self: function (data) {
        return `/users/${data.id}/authors`
      }
    },
    attributes: ['name']
  },
  meta: function (extraOptions) { // An object or a function that describes top level meta.
    return {
      count: extraOptions.count,
      total: extraOptions.total
    }
  }
  // topLevelLinks: {
  //   self: '/users'
  // }
})

module.exports = UserSerializer


var users = [{
  id: 1,
  firstName: 'Sandro',
  lastName: 'Munda',
  password: 'secret',
  tag: 'hello',
  author: {
    id: 11,
    name: 'John Doe'
  }
}, {
  id: 2,
  firstName: 'John',
  lastName: 'Doe',
  password: 'ultrasecret',
  tag: 'me',
  author: 'Paperpa'
}]

const jsonapi = serializer.serialize(users, { count: 10 })