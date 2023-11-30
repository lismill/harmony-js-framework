# harmony-js-framework

[开发文档地址](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V3/ui-js-overview-0000001428061548-V3)

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

### 文件访问规则

- 引用代码文件，推荐使用相对路径，比如：../common/utils.js。
- 引用资源文件，推荐使用绝对路径。比如：/common/xxx.png。
- 公共代码文件和资源文件推荐放在 common 下，通过以上两条规则进行访问。
- CSS 样式文件中通过 url()函数创建<url>数据类型，如：url(/common/xxx.png)。

## 组件介绍

| 组件类型 | 主要组件                                                                                                                                                                                                                                |
| :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 容器组件 | badge、dialog、div、form、list、list-item、list-item-group、panel、popup、refresh、stack、stepper、stepper-item、swiper、tabs、tab-bar、tab-content                                                                                     |
| 基础组件 | button、chart、divider、image、image-animator、input、label、marquee、menu、option、picker、picker-view、piece、progress、qrcode、rating、richtext、search、select、slider、span、switch、text、textarea、toolbar、toolbar-item、toggle |
| 媒体组件 | video                                                                                                                                                                                                                                   |
| 画布组件 | canvas                                                                                                                                                                                                                                  |
| 栅格组件 | grid-container、grid-row、grid-col                                                                                                                                                                                                      |
| svg 组件 | svg、rect、circle、ellipse、path、line、polyline、polygon、text、tspan、textPath、animate、animateMotion、animateTransform                                                                                                              |

## 手势事件

| 名称        | 介绍                                   |
| :---------- | :------------------------------------- |
| touchstart  | 手指触摸动作开始。                     |
| touchmove   | 手指触摸后移动。                       |
| touchcancel | 手指触摸动作被打断，如来电提醒、弹窗。 |
| touchend    | 手指触摸动作结束。                     |
| click       | 用户快速轻敲屏幕。                     |
| longpress   | 用户在相同位置长时间保持与屏幕接触。   |

## 路由跳转

```js
import router from "@ohos.router";
export default {
  launch() {
    router.push({
      url: "pages/detail/detail",
    });
    // router.back();
  },
};
```

## 常用组件

[常用组件](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V3/ui-js-components-text-0000001427584688-V3)

## 自定义组件

```js
// l-card.js
export default {
  props: {
    title: {
      default: "title",
    },
    showObject: {},
  },
  data() {
    return {
      showObj: this.showObject,
    };
  },
  childClicked() {
    this.$emit("eventType1", { text: "收到子组件参数" });
    this.showObj = !this.showObj;
  },
};

// xxx.hml
<element name='l-card' src='../../common/component/l-card.hml'></element>
<div class="container">
  <text>父组件：{{text}}</text>
  <l-card title="自定义组件" show-object="{{isShow}}" @event-type1="textClicked"></l-card>
</div>

// xxx.js
export default {
  data: {
    text: '开始',
    isShow: false,
  },
  textClicked (e) {
    this.text = e.detail.text;
  },
}
```

## 配置 typescript 支持

```bash
# 1. 安装依赖
npx tsc --init

# 2. 初始化配置文件 tsconfig.json
npm install typescript @types/node --save-dev

# 3. 配置编译目录 tsconfig.json
"include": [
  "pages/**/*.ts",
  "common/**/*.ts",
],

# 4. 配置编译命令 package.json
"scripts": {
  "tsc": "tsc -W"
},
```

## 配置编辑器格式

```json
// .editorconfig
root = true

[*]
charset = utf-8
max_line_length = 120
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false

```
