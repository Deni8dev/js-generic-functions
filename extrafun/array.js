const flatten = array =>
  array.reduce((acc, el) => acc.concat(el), [])

const max = array =>
  array.reduce((acc, el) => acc > el ? acc : el)

const min = array =>
  array.reduce((acc, el) => acc < el ? acc : el)

const clean = array =>
  array.reduce((acc, el) => {
    if (el) acc.push(el)
    return acc
  }, [])

// ***************************************** Assignations ************************************************* //
Object.assign(Array.prototype, {
  flatten() {
    return flatten(this)
  },
  max() {
    return max(this)
  },
  min() {
    return min(this)
  },
  clean() {
    return clean(this)
  }
})

module.exports = {
  flatten,
  max,
  min,
  clean
}
