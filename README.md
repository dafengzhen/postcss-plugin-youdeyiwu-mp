# postcss-plugin-youdeyiwu-mp

postcss-plugin-youdeyiwu-mp 尤得一物-小程序插件

使用 postcss 处理微信小程序样式相关问题，例如替换 tailwind css 根样式的 * 通配符

```css
*, :before, :after {
    /* Input example */
}
```

```css
page, :before, :after {
    /* Output example */
}
```

# 1. 相关

尤得一物-小程序 [youdeyiwu-mp](https://github.com/dafengzhen/youdeyiwu-mp)

# 2. 安装

- npm

```bash
npm install -D @youdeyiwu/postcss-plugin-mp
```

- yarn

```bash
yarn add -D @youdeyiwu/postcss-plugin-mp
```

# 3. 使用

- 编辑 postcss.config.js 文件添加插件

```diff
+ const youdeyiwuMp = require('@youdeyiwu/postcss-plugin-mp');

module.exports = {
    plugins: [
        // tailwindcss ...
+       youdeyiwuMp({
+         rootSelectorReplace: [{ find: '*,', replace: 'page,' }],
+       }),
        // ...
    ],
};
```

# 4. 配置

- rootSelectorReplace 可选。查询选择器并替换内容

```typescript
rootSelectorReplace: {
    find: string;
    replace: string;
}
[];
```

# 5. 其它

注意构建需要安装前置依赖

```bash
yarn add -D postcss
```

# 6. License

[MIT](https://opensource.org/licenses/MIT)

