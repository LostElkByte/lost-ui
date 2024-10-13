---
title: Message 消息提示
description: 常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。
---

# Message 消息提示

常用于主动操作后的反馈提示。

## 基础用法

从顶部出现，3 秒后自动消失。 注册了一个 `createMessage` 方法用于调用。 Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。

<preview path="../demo/Message/Basic.vue" title="基础用法" description="Message 组件的基础用法"></preview>

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。设置 `type` 字段可以定义不同的状态，默认为info。

<preview path="../demo/Message/Type.vue" title="不同状态" description="Message 组件的不同状态"></preview>

## 可关闭的消息提示

可以添加关闭按钮。

默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 `showClose` 设置为 true ，Message 拥有可控的 `duration`， 默认的关闭时间为 3000 毫秒，当把这个属性的值设置为0便表示该消息不会被自动关闭。

<preview path="../demo/Message/Close.vue" title="可关闭的消息提示" description="Message 组件的可关闭的消息提示"></preview>

## 手动关闭所有实例

可以调用 message 模块提供了一个 `closeAll()` 手动关闭所有实例。

<preview path="../demo/Message/CloseAll.vue" title="手动关闭所有实例" description="Message 组件的手动关闭所有实例"></preview>

# API

## Message 配置项

使用 `createMessage` 创建信息，它接受一个Object，以下是 Object 中的属性列表。

| 属性名    | 说明                                         | 类型                                          | 默认值 |
| --------- | -------------------------------------------- | --------------------------------------------- | ------ |
| message   | 消息文字                                     | `'string' \| 'vNode'`                         |        |
| type      | 消息类型                                     | `'success' \| 'warning' \|'info' \| 'danger'` | `info` |
| showClose | 是否显示关闭按钮                             | `boolean`                                     | false  |
| duration  | 显示时间，单位为毫秒。 设为 0 则不会自动关闭 | `number`                                      | 3000   |

## Message 方法

调用 `createMessage` 会返回当前 Message 的实例。 如果需要手动关闭实例，可以调用它的 close 方法。

| 属性名 | 说明               | 类型         |
| ------ | ------------------ | ------------ |
| close  | 关闭当前的 Message | `() => void` |

## 全局方法

调用 message 模块提供了的一个 `closeAll()` 方法可以手动关闭所有实例。

| 属性名   | 说明                   | 类型         |
| -------- | ---------------------- | ------------ |
| closeAll | 关闭当前所有的 Message | `() => void` |
