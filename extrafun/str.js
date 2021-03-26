const repeated = str =>
  Object
    .entries(str.toLowerCase()
      .split(/\s/)
      .reduce((acc, el) => {
          acc[el] ? acc[el]++ : acc[el] = 1
          return acc
        },
        {}
      )
    )
    .reduce((acc, el) => acc[1] > el[1] ? acc : el)

const isPalindrome = str => {
  const str1 = str.replace(/\s/g, '').toLowerCase()
  const str2 = str
    .replace(/\s/g, '')
    .toLowerCase()
    .split('')
    .reverse()
    .join('')
  return str1 === str2
}

// ***************************************** Assignations ************************************************* //
Object.assign(String.prototype, {
  repeated() {
    return repeated(this)
  },
  isPalindrome() {
    return isPalindrome(this)
  }
})

module.exports = {
  repeated,
  isPalindrome
}
