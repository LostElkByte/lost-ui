import { onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'

// useClickOutside 是一个组合式函数，用于检测点击事件是否发生在指定元素外部
const useClickOutside = (
  elementRef: Ref<undefined | HTMLElement>, // 目标元素的引用
  callback: (e: MouseEvent) => void // 当点击事件发生在元素外部时调用的回调函数
) => {
  // 定义处理点击事件的函数
  const handler = (e: MouseEvent) => {
    // 检查元素引用是否存在且事件目标存在
    if (elementRef.value && e.target) {
      // 如果事件目标不在指定元素内，则调用回调函数
      if (!elementRef.value.contains(e.target as HTMLElement)) {
        callback(e) // 调用传入的回调函数
      }
    }
  }

  // 组件挂载后添加事件监听器
  onMounted(() => {
    document.addEventListener('click', handler)
  })

  // 组件卸载时移除事件监听器，以防内存泄漏
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
}

export default useClickOutside
