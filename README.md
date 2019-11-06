# Zebra UI- 一个 Vue UI 组件 
[![Build Status](https://www.travis-ci.org/118396/gulu-vue.svg?branch=master)](https://www.travis-ci.org/118396/gulu-vue)

## 介绍
这是我在学习Vue过程中做的一个UI框架，后续会不断的更新迭代原有的代码及组件
- 该框架参考了element、antDesign的UI界面及API设计
- 适应PC端和移动端
- 使用了VuePress搭建UI框架官网
- 目前UI组件：Icon、Button、Tabs、Input、Grid、Layout、Toast、Popover、Slides、Collapse、Cascader、Nav、Pager、Validate、Table、Uploader
- 使用vue-test-utils写单元测试，由于时间有限后期会慢慢完成所有组件的单元测试代码
- 使用了Travis CI 持续集成

## 开始使用

1. 添加 css 样式,使用本框架前,请在 css 中开启 border-box

```
*,*::before,*::after{box-sizing: border-box;}
```
IE 8 及以上浏览器都支持

还需要设置默认颜色等变量（后续会改为sass 变量)

```
html {
  --button-height: 32px;
  --font-size: 13.7px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
```
IE 15 及以上浏览器都支持此样式

2. 安装 zebra-ui
```
npm install zebra-ui
```

3. 引入 Zebra UI
```
import { Button } from "zebra-ui";
import 'zebra-ui/dist/gulu.css'

export default {
  name: "app",
  components: {
    "g-button": Button,
  }
};
```
4.使用组件
```
<g-buttton>欢迎使用组件<g-button>
```

## 联系方式
- 官网：[点击此处跳转](hhttps://118396.github.io/gulu-vue/)
- Github: [点击此处跳转](https://github.com/118396)
- 电子邮箱: hxhlmw@126.com