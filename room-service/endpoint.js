
const rx = require('rx')
require('rx-node')

module.exports = function init ({ schema, service, helper }) {
  const { successJSON, errorJSON } = helper

  let Endpoint = {}

  Endpoint.all = (req, res) => {
    const subscription = rx.Observable.just({name: 'car', 'age': 1})
    .flatMap(schema.validateAll)
    .flatMap(service.all)
    .map((d) => d.name)
    .subscribe(successJSON(res), errorJSON(res))

    subscription.dispose()
  }

  Endpoint.one = (req, res) => {}

  return Endpoint
}
