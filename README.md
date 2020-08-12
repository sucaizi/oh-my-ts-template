## 初始化项目 ##

    mkdir oh-my-ts-template

## 提交规范配置 ##

### 安装 ###

    npm install -g commitizen
    npm install @commitlint/cli @commitlint/config-conventional conventional-changelog-cli cz-customizable --save-dev
    npm install husky --save-dev

### 配置 ###

    commitizen init cz-conventional-changelog --save --save-exact
    touch .cz-config.js
    touch commitlint.config.js

配置参考:

[Cz工具集使用介绍 - 规范Git提交说明](url:https://juejin.im/post/6844903831893966856)

[commitizen + husky 规范git提交信息](url:https://juejin.im/post/6844904025868271629)

### 添加命令 ###

package.json 添加：

```
"changelog": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md"


"config": {
    "commitizen": {
    "path": "node_modules/cz-customizable"
    }
},
"husky": {
    "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
}
```

### 使用 ###

    git cz
    npm run changelog

## typescript 配置 ###

### 安装 ###

    npm install typescript --save-dev
    npm install gulp gulp-typescript --save-dev
    npm install merge2 rimraf --save-dev

### 配置 ###

    生成编译文件tsconfig.json
    tsc --init

    打包
    touch gulpfile.js

### 添加命令 ##

package.json 添加

```
"build": "rimraf dist types && gulp"
```