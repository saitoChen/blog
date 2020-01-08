// 累加

let arr = [1,2,3,4,5]

let sum = arr.reduce((prev, cur, index) => {
  console.log(prev, cur, index)
  return prev + cur
}, 0)

console.log(`sum=> ${sum}`)

// 求字符串中出现字母出现得次数

var string = 'abcdaabc';

let obj = string.split('').reduce((prev, cur) => {
  prev[cur] ? prev[cur]++ : prev[cur] = 1
  return prev
}, {})

console.log(obj)


