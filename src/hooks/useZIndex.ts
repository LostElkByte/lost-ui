import { computed, ref } from 'vue'

const zIndex = ref(0)
/**
 * 用于管理组件的z-index值的自定义Hook。
 *
 * @param initialValue 初始的z-index值，默认为2000
 * @returns 包含当前z-index值（currentZIndex），获取下一个z-index值的函数（nextZIndex）和初始z-index值（initialZIndex）的对象
 */
const useZIndex = (initialValue = 2000) => {
  // 创建一个响应式引用，初始值为 initialValue
  const initialZIndex = ref(initialValue)

  // 创建一个计算属性，返回 zIndex.value 和 initialZIndex.value 的和
  const currentZIndex = computed(() => zIndex.value + initialZIndex.value)

  // 定义一个方法，用于增加 zIndex 的值并返回当前的 currentZIndex
  const nextZIndex = () => {
    // 增加 zIndex 的值
    zIndex.value++
    // 返回当前的 currentZIndex 值
    return currentZIndex.value
  }

  // 返回一个对象，包含 currentZIndex, nextZIndex, initialZIndex
  return {
    currentZIndex, // 当前的 zIndex 值（由 zIndex.value 和 initialZIndex.value 相加得到）
    nextZIndex, // 增加 zIndex 并返回新的当前 zIndex 值的方法
    initialZIndex // 初始的 zIndex 值
  }
}

export default useZIndex
