---
outline: deep
---

# 安装使用

## 版本

Lost UI目前还处于开发内测中。

## 安装

### 使用包管理器

我们建议您使用包管理器（如 NPM、Yarn 或 pnpm）安装 Lost UI，然后您就可以使用打包工具，例如 Vite 或 webpack。

```shell
# 选择一个你喜欢的包管理器

# NPM

$ npm install @lostelk/lost-ui --save

# Yarn

$ yarn add @lostelk/lost-ui

# pnpm

$ pnpm install @lostelk/lost-ui
```

### 浏览器直接引入

直接通过浏览器的 HTML 标签导入 Lost UI，然后就可以使用全局变量 LostUI 了。

```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="https://unpkg.com/@lostelk/lost-ui/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="https://unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="https://unpkg.com/@lostelk/lost-ui"></script>
</head>
```

## 使用

本节将介绍如何在项目中使用 Lost UI。

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```ts
// main.ts
import { createApp } from 'vue'
import LostUI from '@lostelk/lost-ui'
import '@lostelk/lost-ui/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(LostUI)
app.mount('#app')
```

```vue
<template>
  <l-button>我是 LButton</l-button>
</template>
```

### 按需导入

您需要手动导入要使用的组件。

```ts
// main.ts
import { createApp } from 'vue'
import '@lostelk/lost-ui/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')
```

```vue
<template>
  <l-button>我是 LButton</l-button>
</template>
<script>
import { LButton } from '@lostelk/lost-ui'
</script>
```
