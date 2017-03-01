const Joi = require('joi')
const rx = require('rx')

function validate (data) {
  const schema = Joi.object().keys({
    name: Joi.string().required()
  })
  return rx.Observable.fromNodeCallback(Joi.validate)(data, schema)
}

rx.Observable.just({ name: '' })
.flatMap(validate)
.subscribe(
  function onNext (data) {
    console.log('onNext', data)
  },
  function onError (error) {
    if (error.isJoi) {
      console.log('joi error')
      console.log('onError', error.details)
    }
  },
  function completed () {
    console.log('onCompleted')
  }
)
