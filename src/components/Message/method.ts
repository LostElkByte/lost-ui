import { render, h, shallowReactive } from 'vue'
import type { CreateMessageProps, MessageContext } from './types'
import MessageConstructor from './Message.vue'
import useZIndex from '@/hooks/useZIndex'

// 用于生成唯一 ID 的种子
let seed = 1
// 存储所有消息实例的数组，使用 shallowReactive 以保持响应性
const instances: MessageContext[] = shallowReactive([])

/**
 * 创建一个消息提示组件实例
 *
 * @param props 消息提示组件的属性对象
 * @returns 返回消息提示组件实例对象
 */
export const createMessage = (props: CreateMessageProps) => {
  const { nextZIndex } = useZIndex() // 获取下一个 Z-Index
  const id = `message_${seed++}` // 生成唯一 ID
  const container = document.createElement('div') // 创建一个 div 作为消息的容器

  // 销毁消息
  const destroy = () => {
    const idx = instances.findIndex(({ id: _id }) => _id === id) // 找到消息实例的索引
    if (idx === -1) return // 如果找不到，直接返回
    instances.splice(idx, 1) // 从实例数组中移除该实例
    render(null, container) // 渲染 null，卸载组件
  }

  // 手动销毁消息
  const manualDestroy = () => {
    const instance = instances.find(({ id: _id }) => _id === id) // 查找当前实例
    // 如果实例存在，隐藏消息
    if (instance) {
      instance.vm.exposed!.visible.value = false // 隐藏消息
    }
  }

  // 构造新的props对象
  const newProps = {
    ...props,
    id, // 添加唯一 ID
    zIndex: nextZIndex(), // 设置 Z-Index
    onDestroy: destroy // 注册销毁回调
  }

  // 创建并渲染虚拟节点
  const vnode = h(MessageConstructor, newProps)
  render(vnode, container)

  // 将消息的 DOM 添加到文档中
  document.body.appendChild(container.firstElementChild!)
  const vm = vnode.component! // 获取组件实例
  const instance = {
    id, // 存储 ID
    vnode, // 存储虚拟节点
    vm, // 存储组件实例
    props: newProps, // 存储消息的属性
    destroy: manualDestroy // 注册手动销毁方法
  }

  instances.push(instance) // 将实例添加到数组中
  return instance // 返回消息实例
}

/**
 * 获取最后一个消息实例
 * @returns 最后一个消息实例
 */
export const getLastInstance = () => instances.at(-1)

/**
 * 获取指定实例的上一个实例的底部偏移量
 *
 * @param id 指定实例的ID
 * @returns 上一个实例的底部偏移量，如果没有上一个实例，则返回0
 */
export const getLastBottomOffset = (id: string) => {
  const idx = instances.findIndex(({ id: _id }) => _id === id) // 查找当前实例索引

  if (idx <= 0) {
    return 0 // 如果没有上一个实例，返回 0
  }
  const prev = instances[idx - 1] // 获取上一个实例

  return prev.vm.exposed!.bottomOffset.value // 返回上一个实例的底部偏移量
}

/**
 * 关闭所有消息实例
 */
export const closeAll = () => {
  instances.forEach((instance) => {
    instance.destroy() // 调用每个实例的销毁方法
  })
}
