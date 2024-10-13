---
title: Dropdown 下拉菜单
description: 将动作或菜单折叠到下拉菜单中。
---

# Dropdown 下拉菜单

Dropdown 组件用于将动作或菜单折叠到下拉菜单中，提供简洁的用户操作界面。

## 基础用法

将鼠标悬停在下拉菜单上以展开更多操作。

<preview path="../demo/Dropdown/Basic.vue" title="基础用法" description="Dropdown 组件的基础用法"></preview>

## 触发方式

可以配置下拉菜单的触发方式，支持点击激活或悬停激活。通过将 `trigger` 属性设置为 `click`，可以实现点击激活，默认值为 `hover`。

<preview path="../demo/Dropdown/Click.vue" title="触发方式" description="演示 Dropdown 组件的触发方式"></preview>

## 手动打开与关闭

设置 `manual` 属性为 `true`，可以手动控制下拉菜单的显示与隐藏。通过组件实例上的 `show` 和 `hide` 方法即可实现手动控制。

<preview path="../demo/Dropdown/Manual.vue" title="手动打开与关闭" description="演示 Dropdown 组件的手动控制功能"></preview>

## API

### Attributes

| 属性名         | 说明                                                 | 类型                                                                                                                                                                 | 默认值 |
| -------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| menuOptions    | 菜单选项                                             | `MenuOption[]`                                                                                                                                                       | []     |
| placement      | 菜单位置                                             | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | bottom |
| popper-options | [popper.js](https://popper.js.org/docs/v2/) 参数设置 | `object` 参考 [popper.js](https://popper.js.org/docs/v2/) 文档                                                                                                       | {}     |
| open-delay     | 下拉菜单显示的延迟时间（毫秒）                       | `number`                                                                                                                                                             | 0      |
| close-delay    | 下拉菜单消失的延迟时间（毫秒）                       | `number`                                                                                                                                                             | 200    |
| trigger        | 触发方式                                             | `'hover' \| 'click'`                                                                                                                                                 | hover  |
| manual         | 是否开启手动触发模式                                 | `boolean`                                                                                                                                                            | false  |
| transition     | 自定义过渡动画名称                                   | `string`                                                                                                                                                             | ''     |
| hideAfterClick | 点击选项后是否自动隐藏菜单                           | `boolean`                                                                                                                                                            | true   |

### MenuOption

| 属性名   | 说明               | 类型                   | 默认值 |
| -------- | ------------------ | ---------------------- | ------ |
| label    | 菜单展示标签       | `'string' \| 'vNode'`  |        |
| key      | 菜单选项的唯一标识 | `'string' \| 'number'` |        |
| disabled | 是否禁用选项       | `boolean`              | false  |
| divided  | 是否显示分隔符     | `boolean`              | false  |

### Events

| 事件名         | 说明                         | 类型         |
| -------------- | ---------------------------- | ------------ |
| visible-change | 当下拉菜单的显示或隐藏时触发 | `boolean`    |
| select         | 当选择某个菜单选项时触发     | `MenuOption` |

### Exposes

| 方法名 | 说明             | 类型                                   |
| ------ | ---------------- | -------------------------------------- |
| show   | 手动显示下拉菜单 | `(event?: Event \| undefined) => void` |
| hide   | 手动隐藏下拉菜单 | `(event?: Event \| undefined) => void` |
