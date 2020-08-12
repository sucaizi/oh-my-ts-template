## 初始化项目 ##

mkdir oh-my-ts-template

## 提交设置 ##

### 安装 ###
npm i @commitlint/cli @commitlint/config-conventional conventional-changelog-cli cz-customizable husky -D

### 配置 ###

touch .cz-config.js
touch commitlint.config.js

配置参考：

### 添加命令 ###

package.json 添加：

```
"log": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md"


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