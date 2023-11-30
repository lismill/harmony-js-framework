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
import router from '@ohos.router'
export default {
  launch() {
    router.push({
      url: 'pages/detail/detail',
    })
    // router.back();
  },
}
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

## 配置 Eslint + Prettier 代码规范和自动格式化

### 安装 Prettier

`npm install --save-dev prettier`
`.prettierrc`

```
{
  "tabWidth": 2,
  "printWidth": 120,
  "semi": true,
  "singleQuote": false,
  "trailingComma": "all",
  "bracketSpacing": false
}
```

### 安装 ESLint

#### 安装和配置

`npm install --save-dev eslint`

`npx eslint --init`

`.eslintrc.js`

```
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "standard-with-typescript",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
```

#### VSCode 工作区配置

`.vscode/settings.json`

```
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

#### VSCode 默认格式化方式

`右键 => 格式化文档的方式 => Prettier`

#### 解决 Prettier 和 ESLint 的冲突

`npm install --save-dev eslint-plugin-prettier` // 将 Prettier 的规则设置到 ESLint 的规则中。
`npm install --save-dev eslint-config-prettier` // 关闭 ESLint 中与 Prettier 中会发生冲突的规则。

## 常用插件 dayjs

`npm install dayjs --save`

```js
import dayjs = require('dayjs')
console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
```

## 配置提交代码前进行 eslint 校验

### 安装依赖

`npm install -D husky`

### 启用 Git hooks

`npx husky install`

`package.json`

```
scripts: {
  // ...
  "lint": "eslint \"{pages,common}/**/*.js\"",
  "prepare": "husky install"
}
```

### pre-commit

```
npx husky add .husky/pre-commit ""
```

### 修改内容

`.husky/pre-commit`

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint
```

## 配置提交代码前对提交信息进行校验

### 安装

`npm install @commitlint/cli @commitlint/config-conventional --save-dev`

### 配置

`commitlint.config.js`

```
module.exports = {
  extends: ["@commitlint/config-conventional"],
};
```

`.husky/commit-msg`

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit $1
```

### 提交信息规范

```
git commit -m 'feat: 新增功能'
git commit -m 'fix: bug 修复'
git commit -m 'perf: 性能优化'
git commit -m 'docs: 文档更新'
git commit -m 'docs: 文档更新'
git commit -m 'style: 样式'
git commit -m 'test: 测试'
// ...
```

### 报错信息

```
⧗   input: 测试commitlint
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
```

## 配置询问式 commit 信息

### 安装

`npm install commitizen cz-conventional-changelog --save-dev`

### 配置

`package.json`

```
// ...
"scripts": {
  // ...
  "commit": "git cz"
},
"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
}
```

### 使用

`npm run commit`

```
$ npm run commit

> vite-vue-ts@0.0.0 commit E:\vite\vite-vue-ts
> git add . && git cz

cz-cli@4.2.4, cz-conventional-changelog@3.3.0

? Select the type of change that you're committing: feat:     A new feature
? What is the scope of this change (e.g. component or file name): (press enter to skip)
? Write a short, imperative tense description of the change (max 94 chars):
 (13) 询问式 commit 信息
? Provide a longer description of the change: (press enter to skip)

? Are there any breaking changes? No
? Does this change affect any open issues? No

> vite-vue-ts@0.0.0 lint E:\vite\vite-vue-ts
> eslint "src/**/*.{js,ts,jsx,vue}"

[master 7af568d] feat: 询问式 commit 信息
 3 files changed, 766 insertions(+), 86 deletions(-)
```
