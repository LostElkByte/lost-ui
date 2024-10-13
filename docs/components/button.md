---
title: Button 按钮
description: Button 组件的详细文档及用法示例
---

# Button 按钮

按钮用于触发一个即时操作。可以自定义样式、图标、大小及状态等，以满足不同的操作需求。

## 基础用法

通过 `type`、`plain`、`round` 和 `circle` 属性来定义不同风格的按钮。

<preview path="../demo/Button/Basic.vue" title="基础用法" description="展示不同类型的按钮"></preview>

## 禁用状态

使用 `disabled` 属性可以让按钮处于不可点击状态，适用于需要禁止用户操作的场景。

<preview path="../demo/Button/Disabled.vue" title="禁用状态" description="展示按钮被禁用的状态"></preview>

## 图标按钮

通过 `icon` 属性为按钮添加图标。图标可以增强用户体验，方便传达操作意义。图标使用请参考 [FontAwesome 图标库](https://fontawesome.com/icons)。

<preview path="../demo/Button/Icon.vue" title="图标按钮" description="展示带有图标的按钮"></preview>

## 加载状态

通过设置 `loading` 属性为 `true` 来显示加载状态的按钮，适用于后台操作执行中的状态反馈。

<preview path="../demo/Button/Loading.vue" title="加载状态" description="展示加载状态下的按钮"></preview>

## 按钮尺寸

使用 `size` 属性可以调整按钮的大小，支持 `small`、`default`、`large` 三种尺寸，适应不同场景的需求。

<preview path="../demo/Button/Size.vue" title="不同大小" description="展示不同大小的按钮"></preview>

### Button 属性

| 属性名称      | 描述                          | 类型                                                        | 默认值    |
| ------------- | ----------------------------- | ----------------------------------------------------------- | --------- |
| `size`        | 按钮尺寸                      | `'large' \| 'default' \| 'small'`                           | `default` |
| `type`        | 按钮类型                      | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —         |
| `plain`       | 是否为朴素按钮                | `boolean`                                                   | `false`   |
| `round`       | 是否为圆角按钮                | `boolean`                                                   | `false`   |
| `circle`      | 是否为圆形按钮                | `boolean`                                                   | `false`   |
| `loading`     | 是否显示加载状态              | `boolean`                                                   | `false`   |
| `disabled`    | 是否禁用按钮                  | `boolean`                                                   | `false`   |
| `icon`        | 按钮图标                      | `string`                                                    | —         |
| `autofocus`   | 同原生按钮的 `autofocus` 属性 | `boolean`                                                   | `false`   |
| `native-type` | 同原生按钮的 `type` 属性      | `'button' \| 'submit' \| 'reset'`                           | `button`  |
