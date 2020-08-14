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

[Cz工具集使用介绍 - 规范Git提交说明](https://juejin.im/post/6844903831893966856)

[commitizen + husky 规范git提交信息](https://juejin.im/post/6844904025868271629)

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

### 使用 ###

    npm run build

## 代码校验 ##

### 安装 ###

    npm i --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

### 配置 ###

    touch .eslintrc.js

### 添加命令 ###

     "lint": "eslint src"

### 用法 ###

    npm run lint

## 代码格式化 ##

### 安装 ###

    npm i  prettier eslint-config-prettier --save-dev
    npx mrm lint-staged

### 配置 ###

修改.eslintrc.js, 增加

    "prettier",
    "prettier/@typescript-eslint",

修改package.json

    "lint-staged": {
        "*.ts": "npm run lint-strict"
    }

### 添加命令 ###

```
"scripts": {
  "prettier": "prettier src test --write",
  "lint-strict": "eslint src --max-warnings 0"
}

```

### 用法 ###

    npm run prettier
    npm run lint-strict

## 单元测试 ##

### 安装 ###

   npm i jest @types/jest ts-jest eslint-plugin-jest --save-dev

### 配置 ##

    ./node_modules/jest/bin/jest.js --init

### 添加命令 ##

    "test": "jest --bail --coverage"

### 用法 ###

    npm run test


## 文档配置 ##

### 安装 ###

    npm install vuepress vuepress-plugin-cat vuepress-plugin-mathjax vuepress-plugin-typescript --save-dev

### 配置 ###

    mkdir docs

### 添加命令 ###

    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
