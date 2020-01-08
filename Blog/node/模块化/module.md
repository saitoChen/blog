1. node和es6模块化得划分
```
require: node和es6支持
import/export: es6支持
module.exports/exports: node支持

require时运行时调用，import是编译时调用，因此require理论上可以放在代码任何地方，import只能放在文件开头
```

2. node模块

`node`模块基于CommonJs规范

```
exports = module.export = {}
```



3. es6模块

`export`和`export default`区别：
```
同一模块中，export和import可以有多个，export default只能有一个
通过export导出时，引入要加{}，export default不需要
export可以导出表达式，export default不行
```