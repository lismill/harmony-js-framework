# harmony-js-framework

harmony-js-framework

## 文件组织

### 文件分类

- .hml 结尾的 HML 模板文件，描述当前页面的文件布局结构。
- .css 结尾的 CSS 样式文件，描述页面样式。
- .js 结尾的 JS 文件，处理页面间的交互。

### 文件夹作用

- app.js 文件用于全局 JavaScript 逻辑和应用生命周期管理。
- pages 目录用于存放所有组件页面。
- common 目录用于存放公共资源文件，比如：媒体资源，自定义组件和 JS 文件。
- resources 目录用于存放资源配置文件，比如：多分辨率加载等配置文件。
- share 目录用于配置多个实例共享的资源内容，比如：share 中的图片和 JSON 文件可被 default1 和 default2 实例共享。
