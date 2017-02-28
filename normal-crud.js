// GET /users
router.get('/', (req, res, next) => {
  models.user.find({})
  .populate('addresses')
  .then(res.json.bind(res))
  .catch(next)
})

// POST /users
router.post('/', (req, res, next) => {
  models.users.create(req.body)
  .then(usr => res.json(usr))
  .catch(next)
})

// POST /users/:id/addresses
router.post('/:id/addresses', (req, res, next) => {
  const addressPromise = models.addresses.create(req.body)
  const userPromise = addressPromise.then((address) => {
    return models.user.findById(req.params.id)
  })

  Promise.all([addressPromise, userPromise], ([address, user]) => {
    user.addresses.push(address._id)
    return user.save()
  }).then((user) => {
    return res.json(user)
  }).catch(next)
})