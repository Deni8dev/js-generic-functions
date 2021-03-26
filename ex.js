require('./extrafun')

const multiply = (a, b) => {
  let result = 0
  const positive = Math.abs(b) === b
  for (let i = 0; i < Math.abs(b); i++) {
    result = positive ? result + a : result - a
  }
  return result
}
console.log(multiply(50, -50))

console.log([4, 1, 5, 1500, 300, -43, 76].max())

console.log([4, 1, 5, 1500, 300, -43, 76].min())

console.log([1, undefined, null, 0, 5, 2].clean())

console.log([[1, 2], [[3, 4]], [1, []]].flatten())

console.log('This is a repeated word test this is a a'.repeated())

console.log('Do geese see God'.isPalindrome())

const myN = 53
console.log(myN.isPrime())
