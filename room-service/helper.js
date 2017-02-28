const successJSON = (res) => (data) => res.status(200).json(data)
const errorJSON = (res) => (err) => res.status(err.code).json(err.error)

module.exports = { successJSON, errorJSON }
