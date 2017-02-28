const assert = require('assert')

assert.equal('food', 'food')
const Model = {}
class Service {
  constructor(props) {
    super(props)
    this.model = props.model
  }
  create (param) {
    const Model = this.model
    const model = new Model()
    model.name = 'somethiing'
    return model.save()
  }
  update (id, param) {
    return this.model.findOne({ _id: id }, {
      $set: param
    })
  }
  delete (_id) {
    this.model.delete({ _id })
  }
  one (_id) {
    this.model.findOne({ _id })
  }
  all () {

  }
}

const service = new Service(model)

class Handler {
  create (service) => (req, res) => {
    const request = req.params
  }
}

route.get('/', Handler.create(service))
Handler.update(Service, Model)