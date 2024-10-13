---
title: Collapse 折叠面板
description: 通过折叠面板收纳内容区域
---

# Collapse 折叠面板

折叠面板用于对内容区域的收纳与展开，可以实现手风琴效果，也可以同时展开多个面板。

## 基础用法

折叠面板默认可以同时展开多个面板，彼此之间互不影响。

<preview path="../demo/Collapse/Basic.vue" title="基础用法" description="Collapse 组件的基础用法"></preview>

## 手风琴模式

通过设置 `accordion` 属性为 `true`，可以将折叠面板设置为手风琴模式，此时每次只能展开一个面板。

<preview path="../demo/Collapse/Accordion.vue" title="手风琴效果" description="Collapse 组件的手风琴效果用法"></preview>

## Collapse 属性

| 属性                  | 说明               | 类型                                        | 可选值 | 默认值 |
| --------------------- | ------------------ | ------------------------------------------- | ------ | ------ |
| model-value / v-model | 当前激活的面板     | string（手风琴模式）/ array（非手风琴模式） | —      | —      |
| accordion             | 是否启用手风琴模式 | boolean                                     | —      | false  |

## Collapse 事件

| 事件名 | 说明                   | 回调参数                                                   |
| ------ | ---------------------- | ---------------------------------------------------------- |
| change | 激活面板发生变化时触发 | (activeNames: array（非手风琴模式）/ string（手风琴模式）) |

## Collapse 插槽

| 名称 | 说明           | 子标签        |
| ---- | -------------- | ------------- |
| —    | 自定义默认内容 | Collapse Item |

## Collapse Item 属性

| 属性     | 说明           | 类型          | 可选值 | 默认值 |
| -------- | -------------- | ------------- | ------ | ------ |
| name     | 面板的唯一标识 | string/number | —      | —      |
| title    | 面板的标题     | string        | —      | —      |
| disabled | 是否禁用该面板 | boolean       | —      | —      |

## Collapse Item 插槽

| 名称  | 说明             |
| ----- | ---------------- |
| —     | 折叠面板内容     |
| title | 折叠面板标题内容 |
