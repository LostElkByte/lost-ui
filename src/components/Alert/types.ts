// 定义可显示的警报类型。
export type AlertType = 'success' | 'warning' | 'danger' | 'info'

// 定义警报组件的属性。
export interface AlertProps {
  /**
   * 警报中显示的内容/消息。
   * 可选，因为某些警报可能不需要文本。
   */
  content?: string

  /**
   * 警报的类型，决定其视觉样式。
   * 必需，指定警报的目的（成功、警告等）。
   */
  type: AlertType

  /**
   * 警报的效果样式，可以是浅色或深色。
   * 可选，供自定义使用。
   */
  effect?: 'light' | 'dark'

  /**
   * 指示用户是否可以关闭警报。
   * 可选，未指定时默认为 false。
   */
  closable?: boolean
}

// 定义警报组件发出的事件。
export interface AlertEmits {
  /**
   * 当警报关闭时触发的事件。
   * 用于处理清理或进一步的操作。
   */
  (e: 'close'): void
}

// 定义警报实例的方法。
export interface AlertInstance {
  /**
   * 隐藏警报的方法。
   * 可用于在需要时程序性地关闭警报。
   */
  hide: () => void
}
