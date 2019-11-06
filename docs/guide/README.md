## 介绍

Zebra UI是一个不太一样的 UI 框架。

本 UI 框架是一个「面向源码阅读者」的框架。如果对你有帮助，请不要吝惜你的 star。

也就是说，制作这个框架的目的就是让前端小伙伴一起学习轮子的制作思路。所有代码都追求可读性。

- 该框架参考了element、antDesign的UI界面及API设计
- 适应PC端和移动端
- 使用vue-test-utils写单元测试，由于时间有限后期会慢慢完成所有组件的单元测试代码
- 使用了Travis CI 持续集成

如果你对代码有疑问，欢迎[提issue](https://github.com/118396/gulu-vue/issues)，我会回答你的疑问。

也欢迎一起来造轮子

注意：本 UI 框架的代码尚已完工，但是主要目的在于供学习参考，因此不保证代码健全性，请不要在生产环境中使用本 UI 框架。

## 使用的技术
- Vue.js技术栈，包括但不限于：指令及自定义指令、计算属性、class动态绑定、条件渲染、列表渲染、事件监听处理、组件注册、props及校验、插槽、动画过渡、过滤器、多种组件通信方式等
- 设计模式：单向数据流、测试驱动开发、发布订阅模式、API正交（props）、可测试代码（在标签加入特殊的属性，方便测试的时候可以找到）
- 单元测试、覆盖率、持续集成
- 测试库：Chai、Karma、Sinon、Vue-test-utils、Travis CI

## 有哪些轮子

* 简单轮子：按钮（Button）、输入框（Input）、网格（Grid）、布局(Layout)、提示（Toast）、标签页（Tabs）、弹出层（Popover）、折叠面板（Collapse）、图标（Icon）
* 进阶轮子：级联选择（Cascader）、轮播（Slides）、导航（Nav）、分页(Pager)、表单验证（Validate）、图片上传（Uploader）、表格（Table）

## 项目特点

1. 使用 Travis CI 进行持续集成
2. 有丰富的单元测试，项目完成时，期望测试覆盖率超过 90%
3. 自说明的代码，即使没有注释，你也能看懂
4. 初期我使用 parcel 构建方便新人上手，后期改为 Vue Cli 3 以实现更多功能

##  视觉稿

本 UI 框架借鉴了一些成熟 UI 框架（如 Framework7、Element UI 和 Ant Design）的外观，[视觉稿](https://www.yuque.com/u29422/gulu/artboards/22283)。


## 联系方式

- 电子邮箱: hxhlmw@126.com
