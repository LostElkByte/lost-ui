import type { Placement, Options } from '@popperjs/core'

// TooltipProps 定义了 Tooltip 组件的属性
export interface TooltipProps {
  // Tooltip 的内容，可以是文本或 HTML
  content?: string

  // Tooltip 的触发方式，可以是 'hover' 或 'click'
  trigger?: 'hover' | 'click'

  // Tooltip 的位置，使用 Popper.js 定义的 Placement 类型
  placement?: Placement

  // 是否手动控制 Tooltip 的显示状态，默认为 false
  manual?: boolean

  // Popper.js 的配置选项，允许部分覆盖默认设置
  popperOptions?: Partial<Options>

  // Tooltip 的过渡效果，可以指定 CSS 类名
  transition?: string

  // 打开 Tooltip 的延迟时间，单位为毫秒
  openDelay?: number

  // 关闭 Tooltip 的延迟时间，单位为毫秒
  closeDelay?: number
}

// TooltipEmits 定义了 Tooltip 组件发出的事件
export interface TooltipEmits {
  // 当 Tooltip 的可见性发生变化时触发，传递新的可见性状态
  (e: 'visible-change', value: boolean): void

  // 当用户点击 Tooltip 之外的区域时触发，传递 true
  (e: 'click-outside', value: boolean): void
}

// TooltipInstance 定义了 Tooltip 实例的方法
export interface TooltipInstance {
  // 显示 Tooltip 的方法
  show: () => void

  // 隐藏 Tooltip 的方法
  hide: () => void
}
