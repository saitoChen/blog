## css选择器优先级
!important id class 标签选择器 属性值选择器  伪类选择器  通配符选择器 继承选择
!important比内联的优先级高

## 属性选择器

```
a[title]{
  color: red;
}
```

## 部分属性选择器
```
<p class = "name  text">
p[class~='name'] {
  color: red;
}
```

## 兄弟选择器

```
+ 用来选择当前标签后面的一个同级元素
~ 用来选择当前标签后面所有同级元素
```