---
title: Alert 提示
description: 用于页面中展示重要的提示信息。
---

# Alert 提示

用于页面中展示重要的提示信息。Alert 组件可以根据不同类型、主题和是否可关闭的需求进行定制。

## 基础用法

通过设置 `type` 属性来指定提示类型，支持四种类型：`success`、`warning`、`danger`、`info`。默认类型为 `info`。

<preview path="../demo/Alert/Basic.vue" title="基础用法" description="展示 Alert 组件的基础使用方法"></preview>

## 主题

Alert 组件支持两种主题：`light` 和 `dark`。通过 `effect` 属性控制主题风格，默认值为 `light`。

<preview path="../demo/Alert/Theme.vue" title="主题切换" description="演示 Alert 组件的不同主题风格"></preview>

## 不可关闭

通过设置 `closable` 属性控制 Alert 组件是否可关闭。该属性接受一个布尔值，默认为 `false`，表示不可关闭。

<preview path="../demo/Alert/Close.vue" title="不可关闭" description="展示不可关闭的 Alert 组件"></preview>

## Alert Attributes

| 属性名   | 说明       | 类型                                        | 默认值 |
| -------- | ---------- | ------------------------------------------- | ------ |
| type     | Alert 类型 | `'success'\| 'warning'\| 'danger'\| 'info'` | info   |
| effect   | 主题样式   | `'light'\| 'dark'`                          | light  |
| closable | 是否可关闭 | `boolean`                                   | false  |
