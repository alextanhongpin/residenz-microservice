const JSONApiSerializer = require('jsonapi-serializer').Serializer


const RoomsSerializer = new JSONApiSerializer('rooms', {
  nullIfMissing: true,
  attributes: ['title', 'amount'],
  dataLinks: {
    self (data) {
      return `/api/v1/rooms/${data.id}`
    }
  },
  owner: {
    ref: 'id',
    attributes: ['name']
  },
  meta ({ count, total }) {
    return {
      count,
      total
    }
  }
})

module.exports = RoomsSerializer
