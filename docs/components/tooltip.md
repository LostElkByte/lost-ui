---
title: Tooltip 文字提示
description: 常用于展示鼠标 hover 时的提示信息。
---

# Tooltip 文字提示

Tooltip 组件常用于在鼠标悬停或点击时展示提示信息，适合用于提供简短的说明或帮助文本。

## 基础用法

使用 `content` 属性来设置鼠标悬停时的提示内容。

<preview path="../demo/Tooltip/Basic.vue" title="基础用法" description="Tooltip 组件的基础用法"></preview>

## 不同位置

通过 `placement` 属性来设置提示框的位置。`placement` 的格式为 `[方向]-[对齐位置]`，其中四个方向为 `top`、`left`、`right` 和 `bottom`，三种对齐方式为 `start` 和 `end`，默认不设置对齐方式。

<preview path="../demo/Tooltip/Placement.vue" title="不同位置" description="演示 Tooltip 组件的不同位置设置"></preview>

## 触发方式

通过 `trigger` 属性设置触发提示的方式，支持 `hover` 和 `click` 两种方式，默认触发方式为 `hover`。

<preview path="../demo/Tooltip/Click.vue" title="触发方式" description="演示 Tooltip 组件的触发方式"></preview>

## 更多内容的文字提示

对于需要展示多行文本或自定义格式的提示信息，可以使用具名插槽 `slot#content`，替代 `content` 属性。

<preview path="../demo/Tooltip/Custom.vue" title="更多内容的文字提示" description="展示多行文本或格式化内容的 Tooltip 使用方式"></preview>

## 手动触发

设置 `manual` 属性为 `true`，可以手动控制 Tooltip 的显示和隐藏。调用组件实例上的 `show` 和 `hide` 方法即可控制提示框的显隐。

<preview path="../demo/Tooltip/Manual.vue" title="手动触发" description="演示 Tooltip 组件的手动触发功能"></preview>

## API

### Attributes

| 属性名         | 说明                                                 | 类型                                                                                                                                                                 | 默认值 |
| -------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| content        | 提示框展示的内容，可通过 `slot#content` 插槽覆盖     | `string`                                                                                                                                                             | ''     |
| placement      | 提示框位置                                           | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | bottom |
| popper-options | [popper.js](https://popper.js.org/docs/v2/) 参数设置 | `object` 参考 [popper.js](https://popper.js.org/docs/v2/) 文档                                                                                                       | {}     |
| open-delay     | 提示框显示的延迟时间（毫秒）                         | `number`                                                                                                                                                             | 0      |
| close-delay    | 提示框消失的延迟时间（毫秒）                         | `number`                                                                                                                                                             | 200    |
| trigger        | 触发提示框的方式，可选值为 `hover` 或 `click`        | `enum`'hover' \| 'click'`                                                                                                                                            | hover  |
| manual         | 是否开启手动触发模式                                 | `boolean`                                                                                                                                                            | false  |
| transition     | 自定义过渡动画名称                                   | `string`                                                                                                                                                             | ''     |

### Events

| 事件名         | 说明                          | 参数      |
| -------------- | ----------------------------- | --------- |
| visible-change | 当 Tooltip 显示或隐藏时触发   | `boolean` |
| click-outside  | 当点击 Tooltip 外部区域时触发 | `boolean` |

### Slots

| 插槽名  | 说明                    |
| ------- | ----------------------- |
| default | 触发 Tooltip 显示的元素 |
| content | 自定义提示内容          |

### Exposes

| 方法名 | 说明             | 参数                                   |
| ------ | ---------------- | -------------------------------------- |
| show   | 手动显示 Tooltip | `(event?: Event \| undefined) => void` |
| hide   | 手动隐藏 Tooltip | `(event?: Event \| undefined) => void` |
