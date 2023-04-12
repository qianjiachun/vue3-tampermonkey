## vue3 + tampermoneky开发框架
> 基于vue3 + webpack的tampermonkey开发脚手架

### Vite版本
如果你在找Vite版本的脚手架，[请看这里](https://github.com/qianjiachun/vue3-tampermonkey-vite)
### 起步 & 开发热更新
1. `npm install`
2. `npm run dev`
3. 在tampermonkey面板中新建一个脚本，将`./dist/main.user.dev.js`的内容复制进去保存
4. 访问[百度](https://www.baidu.com)，可在右上角看到效果
- 修改代码后，会进行热更新，你只需要刷新页面即可

### 编译
1. 修改`./src/header.js`
2. `npm run build`
3. 将`./dist/main.user.js`的内容发布即可


### 建议
1. 使用script setup标签编写
2. style lang="scss"
3. 按域划分pages目录，按功能划分packages目录，注意程序解耦而不是业务解耦
