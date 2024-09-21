import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

/**
 * IconProps 接口定义了图标组件可以接收的所有属性。
 */
export interface IconProps {
  /**
   * 是否为图标添加边框。
   * @default false
   */
  border?: boolean

  /**
   * 图标是否固定宽度。启用后，图标宽度保持一致，以便图标在不同大小的文字行中对齐。
   * @default false
   */
  fixedWidth?: boolean

  /**
   * 翻转图标的方向。
   * 可以是水平翻转、垂直翻转或同时翻转。
   */
  flip?: 'horizontal' | 'vertical' | 'both'

  /**
   * 要显示的图标。可以是对象、数组（表示图标前缀和名称）、字符串或 `IconDefinition` 类型的图标定义。
   */
  icon: object | Array<string> | string | IconDefinition

  /**
   * 为图标添加蒙版，可以通过对象、数组或字符串指定。
   */
  mask?: object | Array<string> | string

  /**
   * 是否将图标显示为项目符号列表项。
   * @default false
   */
  listItem?: boolean

  /**
   * 将图标向左或向右拉动，使其相对于文本对齐。
   */
  pull?: 'right' | 'left'

  /**
   * 图标是否以脉冲动画形式旋转。
   * @default false
   */
  pulse?: boolean

  /**
   * 图标旋转角度。可以是 90、180、270 度，支持数值和字符串形式。
   */
  rotation?: 90 | 180 | 270 | '90' | '180' | '270'

  /**
   * 交换图标的透明度顺序，使不透明部分变为透明，透明部分变为不透明。
   * @default false
   */
  swapOpacity?: boolean

  /**
   * 图标的尺寸。可以选择不同的尺寸级别，范围从 '2xs' 到 '10x'。
   */
  size?:
    | '2xs'
    | 'xs'
    | 'sm'
    | 'lg'
    | 'xl'
    | '2xl'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x'

  /**
   * 图标是否旋转。
   * @default false
   */
  spin?: boolean

  /**
   * 对图标进行变换。可以通过对象或字符串指定旋转、缩放、平移等效果。
   */
  transform?: object | string

  /**
   * 将图标作为 `symbol` 元素使用，或者为其指定一个 `id`。
   */
  symbol?: boolean | string

  /**
   * 图标的标题文本，用于辅助技术（如屏幕阅读器）。
   */
  title?: string

  /**
   * 图标是否使用反色。通常用于在深色背景上显示白色图标。
   * @default false
   */
  inverse?: boolean

  /**
   * 图标是否有跳跃动画。
   * @default false
   */
  bounce?: boolean

  /**
   * 图标是否有晃动动画。
   * @default false
   */
  shake?: boolean

  /**
   * 图标是否有心跳动画。
   * @default false
   */
  beat?: boolean

  /**
   * 图标是否有淡入淡出动画。
   * @default false
   */
  fade?: boolean

  /**
   * 图标是否同时具有心跳和淡入淡出动画。
   * @default false
   */
  beatFade?: boolean

  /**
   * 图标是否以脉冲动画形式旋转，旋转的速度慢于默认的 `spin`。
   * @default false
   */
  spinPulse?: boolean

  /**
   * 图标是否反向旋转。
   * @default false
   */
  spinReverse?: boolean

  /**
   * 图标的类型，用于设置图标的主题样式。
   * 可选值有：'primary'、'success'、'warning'、'danger'、'info'。
   */
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'

  /**
   * 图标的颜色。可以使用 CSS 颜色值，如十六进制、RGB 或颜色名称。
   */
  color?: string
}
