## vue3 + tampermoneky开发框架

### 起步 & 开发热更新
1. `npm run start`
2. 在tampermonkey面板中新建一个脚本，填入自己的项目地址，保存
```
"use strict";
// ==UserScript==
// @name         test
// @namespace    https://github.com/qianjiachun
// @version      2020.08.09.01
// @author       小淳
// @match			*://www.baidu.com/*
// @require      file://<你的项目地址>\dist\main.js
// ==/UserScript==
```
3. 访问百度，可在右上角看到效果

### 编译
1. `npm run build`
2. 在/dist/目录下找到main.js
3. 在main.js的内容前拼上油猴脚本的配置信息即可发布


### 建议
1. 使用script setup标签编写
2. style lang="scss"
3. 按域划分pages目录，按功能划分packages目录，注意程序解耦而不是业务解耦