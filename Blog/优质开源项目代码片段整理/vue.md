1. `require context`的应用：

在vuex中，我们经常使用modules来处理多个模块的状态，于是在store的入口文件中我们会大量引入各个modules的js文件，通过webpack的`require context`方法可以帮助我们快速便捷的引入
```
const modulesFiles = require.context("./modules", true, /\.js$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

export default new Vuex.Store({
  modules
});
```