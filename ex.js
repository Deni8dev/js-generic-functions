const multiply = (a, b) => {
   let result = 0
   const positive = Math.abs(b) === b
   for (let i = 0; i < Math.abs(b); i++) {
      result = positive ? result + a : result - a
   }
   return result
}
console.log(multiply(50, -50))

const max = array =>
   array.reduce((acc, el) => acc > el ? acc : el)
console.log(max([4, 1, 5, 1500, 300, -43, 76]))

const clean = array =>
   array.reduce((acc, el) => {
      if (el)
         acc.push(el)
      return acc
   }, [])
console.log(clean([1, undefined, null, 0, 5, 2]))

const flatten = array =>
   array.reduce((acc, el) => acc.concat(el), [])
console.log(flatten([[1, 2], [[3, 4]], [1, []]]))

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
console.log(repeated('This is a repeated word test this is a a'))

const isPalindrome = str =>
   str.replace(/\s/g, '')
      .toLowerCase()
   === str
      .replace(/\s/g, '')
      .toLowerCase()
      .split('')
      .reverse()
      .join('')
console.log(isPalindrome('Do geese see God'))
