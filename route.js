const rx = require('rx')
const rxnode = require('rx-node')

// const subscription = rx.Observable.just({ name: 'hello' })
// .map((d) => {
//   d.name = d.name.toUpperCase()
//   return d
// })
// .subscribe((d) => {
//   console.log(d.subscribe(console.log))
// })

// subscription.dispose()

// function validateSchema() {
//   // throw new Error('Invalid schema')
//   return { 'hello': 'world' }
// }
// const source = rx.Observable.create((observer) => {
//   const request = validateSchema({})
//   observer.onNext(request)
//   observer.onCompleted()
// })


// const request = rx.Observable.just(validateSchema())
// const subscription = source.subscribe((x) => {
//   console.log('success', x)
// }, (err) => {
//   console.log('error', err)
// }, () => {
//   console.log('Completed')
// })

// subscription.dispose()

// const source1 = rx.Observable
// .just({ name: 'source1', car: 23 })
// .map(d => `Source 1: ${d.name}`)
// .delay(1000)

// const source2 = rx.Observable
// .just({ name: 'source2' })
// .map(d => `Source 2: ${d.name}`)

// source1.concat(source2).subscribe((d) => {
//   console.log(d)
// })
function validateSchema(data) {
  console.log('validate schema', data)
  return Promise.resolve(data)
}

function callService (data) {
  console.log('callService', data)
  return Promise.resolve(data)
}
// rx.Observable.just({name: 'car', 'age': 1})
// .flatMap(validateSchema)
// .flatMap(callService)
// .map((d) => d.name)
// .subscribe(
//   (d) => console.log,
//   (err) => console.log,
//   () => console.log('Completed')
// )

rx.Observable.fromArray([ {name: 'car', age: 1}, {name: 'car', age: 4} ])
.filter(d => d.age > 2)
.subscribe((d) => {
  console.log(d)
})

const paper = (name) => (greet) => greet + ' ' + name
console.log(paper('asdasd')('totlead ada'))
