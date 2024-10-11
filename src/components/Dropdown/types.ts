import type { VNode } from 'vue' // 从 Vue 导入 VNode 类型，用于表示虚拟节点
import type { TooltipProps } from '../Tooltip/types' // 导入 TooltipProps 类型，以便扩展

// 定义 DropdownProps 接口，扩展 TooltipProps
export interface DropdownProps extends TooltipProps {
  menuOptions: MenuOption[] // 下拉菜单选项数组
  hideAfterClick?: boolean // 点击后是否隐藏下拉菜单
}

// 定义 MenuOption 接口，表示下拉菜单的每个选项
export interface MenuOption {
  label: string | VNode // 选项标签，可以是字符串或虚拟节点
  key: string | number // 选项的唯一标识符
  disabled?: boolean // 是否禁用该选项
  divided?: boolean // 是否在该选项前添加分隔线
}

// 定义 DropdownEmits 接口，表示组件发出的事件
export interface DropdownEmits {
  (e: 'visible-change', value: boolean): void // 触发可见性变化事件
  (e: 'select', value: MenuOption): void // 触发选中事件，传递选中的菜单选项
}

// 定义 DropdownInstance 接口，表示下拉菜单实例的方法
export interface DropdownInstance {
  show: () => void // 显示下拉菜单的方法
  hide: () => void // 隐藏下拉菜单的方法
}
