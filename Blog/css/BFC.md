## 创建BFC

* 根元素
* 浮动（float不为none）
* 绝对定位元素（absolute和fixed）
* 行内快（inline-block）
* 表格单元格（display: table-cell）
* overflow (不为visible)
* flex

最常见的是overflow，float，absolute

## BFC的作用

* BFC内部的元素与外部的元素相互隔离[深入](https://juejin.im/post/59b73d5bf265da064618731d)
* BFC导致外边距折叠，再创建BFC可解决
* BFC来包含浮动
* BFC来防止文字环绕