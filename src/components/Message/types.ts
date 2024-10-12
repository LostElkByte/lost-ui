import type { VNode, ComponentInternalInstance } from 'vue'

// 消息组件的属性接口
export interface MessageProps {
  // 消息内容，可以是字符串或 VNode
  message?: string | VNode

  // 消息持续时间，单位为毫秒
  duration?: number

  // 是否显示关闭按钮
  showClose?: boolean

  // 消息类型，支持 'success'、'info'、'warning' 或 'danger'
  type?: 'success' | 'info' | 'warning' | 'danger'

  // 消息销毁时的回调函数
  onDestroy: () => void

  // 消息唯一标识符
  id: string

  // 消息的 z-index，用于控制层叠顺序
  zIndex: number

  // 消息的偏移量，用于调整显示位置
  offset?: number

  // 消息的过渡动画名称
  transitionName?: string
}

// 消息组件的上下文接口
export interface MessageContext {
  // 消息的唯一标识符
  id: string

  // 消息的 VNode 对象
  vnode: VNode

  // 消息组件的实例
  vm: ComponentInternalInstance

  // 消息组件的属性
  props: MessageProps

  // 销毁消息的方法
  destroy: () => void
}

// 创建消息时的属性类型，去除 onDestroy、id 和 zIndex 属性
export type CreateMessageProps = Omit<MessageProps, 'onDestroy' | 'id' | 'zIndex'>
