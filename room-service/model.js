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
