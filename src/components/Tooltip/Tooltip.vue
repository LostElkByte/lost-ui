<template>
  <div class="l-tooltip" ref="popperContainerNode" v-on="outerEvents">
    <div class="l-tooltip__trigger" ref="triggerNode" v-on="events">
      <!-- 触发 tooltip 的元素的插槽 -->
      <slot></slot>
    </div>
    <Transition :name="transition">
      <div v-if="isOpen" class="l-tooltip__popper" ref="popperNode">
        <slot name="content">
          <!-- 默认显示的 tooltip 内容，如果没有提供插槽 -->
          {{ content }}
        </slot>
        <!-- tooltip 的箭头元素 -->
        <div id="arrow" data-popper-arrow></div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import useClickOutside from '@/hooks/useClickOutside'
import { createPopper, type Instance } from '@popperjs/core'
import { debounce } from 'lodash-es'
import { computed, onUnmounted, reactive, ref, watch } from 'vue'
import type { TooltipEmits, TooltipInstance, TooltipProps } from './types'

// 定义组件的 props，并设置默认值
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'top', // tooltip 的位置，默认为顶部
  trigger: 'hover', // 触发方式，默认为鼠标悬停
  transition: 'fade', // 显示和隐藏的过渡效果，默认为淡入淡出
  openDelay: 0, // 打开 tooltip 的延迟时间，单位为毫秒，默认为 0
  closeDelay: 0 // 关闭 tooltip 的延迟时间，单位为毫秒，默认为 0
})

// 定义触发的事件
const emits = defineEmits<TooltipEmits>()

// 管理 tooltip 可见性状态，初始值为 false（未打开）
const isOpen = ref(false)
// 引用 tooltip 的 DOM 元素
const popperNode = ref<HTMLElement>()
// 引用触发 tooltip 的 DOM 元素
const triggerNode = ref<HTMLElement>()
// 引用 tooltip 容器的 DOM 元素
const popperContainerNode = ref<HTMLElement>()
// 存储 popper 实例，用于后续操作，初始为 null
let popperInstance: null | Instance = null

// 控制 tooltip 的显示状态，如鼠标进入和点击等
let events: Record<string, any> = reactive({})

// 处理 tooltip 的隐藏逻辑，如鼠标离开触发的关闭操作
let outerEvents: Record<string, any> = reactive({})

// 动态生成 tooltip 的 popper 配置选项
const popperOptions = computed(() => {
  return {
    placement: props.placement, // 设置 tooltip 的位置，来自 props
    modifiers: [
      {
        name: 'offset', // 使用 offset 修饰符来调整 tooltip 的位置
        options: {
          offset: [0, 9] // 设置 tooltip 在 Y 轴上的偏移量为 9 像素，X 轴偏移量为 0
        }
      }
    ],
    ...props.popperOptions // 合并用户传入的额外 popper 选项，以便支持自定义配置
  }
})

/**
 * 打开 tooltip
 */
const open = () => {
  isOpen.value = true
  emits('visible-change', true)
}

/**
 * 关闭 tooltip
 */
const close = () => {
  isOpen.value = false
  emits('visible-change', false)
}

// 防抖函数，控制打开和关闭的延迟
const openDebounce = debounce(open, props.openDelay)
const closeDebounce = debounce(close, props.closeDelay)

/**
 * 防抖打开 tooltip
 */
const openFinal = () => {
  closeDebounce.cancel() // 取消关闭的事件
  openDebounce() // 执行打开的防抖函数
}

/**
 * 防抖关闭 tooltip
 */
const closeFinal = () => {
  openDebounce.cancel() // 取消打开的事件
  closeDebounce() // 执行关闭的防抖函数
}

/**
 * click 切换 tooltip 的显示状态
 */
const togglePopper = () => {
  if (isOpen.value) {
    closeFinal() // 如果已打开，则关闭
  } else {
    openFinal() // 如果未打开，则打开
  }
}

// 使用自定义钩子处理点击外部区域的事件
useClickOutside(popperContainerNode, () => {
  // 检查触发方式是否为点击、tooltip 是否处于打开状态且未手动控制
  if (props.trigger === 'click' && isOpen.value && !props.manual) {
    closeFinal() // 如果满足条件，调用 closeFinal 函数关闭 tooltip
  }
})

/**
 * 根据触发方式设置相应的事件
 */
const attachEvents = () => {
  // 如果触发方式为悬停
  if (props.trigger === 'hover') {
    events['mouseenter'] = openFinal // 鼠标进入时调用 openFinal 函数打开 tooltip
    outerEvents['mouseleave'] = closeFinal // 鼠标离开时调用 closeFinal 函数关闭 tooltip
  }
  // 如果触发方式为点击
  else if (props.trigger === 'click') {
    events['click'] = togglePopper // 点击时调用 togglePopper 函数切换 tooltip 的显示状态
  }
}

// 如果未设置手动控制（manual 为 false），则附加事件处理函数
if (!props.manual) {
  attachEvents() // 调用 attachEvents 函数，自动绑定事件以控制 tooltip 的显示和隐藏
}

watch(
  () => props.manual,
  (isManual) => {
    if (isManual) {
      events = {} // 如果启用了手动控制，清空内部事件
      outerEvents = {} // 清空外部事件，以避免自动关闭 tooltip
    } else {
      attachEvents() // 否则，重新附加事件处理函数以自动控制 tooltip 的显示和隐藏
    }
  }
)

watch(
  () => props.trigger,
  (newTrigger, oldTrigger) => {
    // 如果新旧触发方式不一致
    if (newTrigger !== oldTrigger) {
      events = {} // 清空内部事件，以避免冲突
      outerEvents = {} // 清空外部事件，以避免冲突
      attachEvents() // 重新附加事件处理函数，以根据新的触发方式进行控制
    }
  }
)

// 观察 isOpen 状态，创建或销毁 popper 实例
watch(
  isOpen,
  (newVal) => {
    // 如果 tooltip 未打开，则直接返回，不进行后续处理
    if (!newVal) {
      return
    }
    // 当 tooltip 打开且触发节点和 popper 节点都存在时
    if (triggerNode.value && popperNode.value) {
      // 创建 popper 实例以定位 tooltip
      popperInstance = createPopper(triggerNode.value, popperNode.value, popperOptions.value)
    } else {
      // 如果条件不满足，销毁现有的 popper 实例
      popperInstance?.destroy()
    }
  },
  { flush: 'post' }
)

// 组件卸载时，销毁 popper 实例
onUnmounted(() => {
  popperInstance?.destroy()
})

// 定义暴露给外部的方法
defineExpose<TooltipInstance>({
  show: openFinal,
  hide: closeFinal
})
</script>
