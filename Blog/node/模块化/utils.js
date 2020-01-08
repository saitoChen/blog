let a = 'test'

console.log(module.exports)
console.log(exports)

exports.a = 200

console.log(module.exports)
console.log(exports)

exports = '指向其它内存区'

console.log(module.exports)
console.log(exports)
