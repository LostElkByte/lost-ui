import type { Ref, InjectionKey } from 'vue'

// NameType 类型定义为字符串或数字，用于折叠面板的标识
export type NameType = string | number

// CollapseProps 接口定义折叠面板组件的属性
export interface CollapseProps {
  accordion?: boolean // 是否开启手风琴模式，默认是关闭
}

// CollapseItemProps 接口定义折叠面板项的属性
export interface CollapseItemProps {
  name: NameType // 当前折叠面板项的标识
  title?: string // 折叠面板项的标题，可选
  disabled?: boolean // 是否禁用当前项，可选，默认不禁用
}

// CollapseContext 接口定义折叠面板的上下文，便于在子组件中共享状态
export interface CollapseContext {
  activeNames: Ref<NameType[]> // 存储当前激活的折叠面板项的标识
  handleItemClick: (name: NameType) => void // 处理折叠面板项点击事件的方法
}

// CollapseEmits 接口定义折叠面板组件发出的事件
export interface CollapseEmits {
  (e: 'change', values: NameType[]): void // 当折叠面板项改变时触发的事件
}

// 定义用于提供折叠面板上下文的唯一 key，便于组件树中的跨层级通信
export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')
