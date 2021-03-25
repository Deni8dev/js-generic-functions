const _isPrime = number => {
  for (let i = 2; i < number; i++)
    if (number % i === 0)
      return false
  return true
}

const isPrime = number => {
  if (number <= 1)
    return false
  if (number === 2)
    return true
  return _isPrime(number)
}

console.log(isPrime(53))
