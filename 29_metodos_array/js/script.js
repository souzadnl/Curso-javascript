var arr = [1, 2, 3, 4, 5];

console.log(arr.length)

arr.push(6)
console.log(arr)

// pop
arr.pop()

console.log(arr)

// unshift

arr.unshift(0);
console.log(arr)

// acessar o ultimo elemento

console.log(arr[arr.length - 2])

// isArray

console.log(Array.isArray(arr))

// splice

arr.splice(2, 0, 999)
console.log(arr)

// join

console.log(arr.join("-"))

// reverse

console.log(arr.reverse())