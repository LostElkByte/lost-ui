<template>
  <Transition :name="transitionName" @after-leave="destroyComponent" @enter="updateHeight">
    <div
      class="l-message"
      v-show="visible"
      :class="{
        [`l-message--${type}`]: type,
        'is-close': showClose
      }"
      role="alert"
      ref="messageRef"
      :style="cssStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="l-message__content">
        <slot>
          <RenderVnode :vNode="message" v-if="message"></RenderVnode>
        </slot>
      </div>
      <div class="l-message__close" v-if="showClose">
        <Icon @click.stop="() => (visible = false)" icon="xmark"></Icon>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import Icon from '../Icon/Icon.vue'
import RenderVnode from '../Common/RenderVnode'
import { getLastBottomOffset } from './method'
import useEventListener from '@/hooks/useEventListener'
import type { MessageProps } from './types'

// 定义消息组件的 props，并设置默认值
const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info', // 消息类型（如 info、warning、error）
  duration: 3000, // 消息可见的持续时间（单位：毫秒）
  offset: 20, // 距离上一个消息的偏移量
  transitionName: 'fade-up' // 进入/离开时的 CSS 过渡类
})

// 可响应的状态，表示消息的可见性
const visible = ref(false)
// 消息元素的引用
const messageRef = ref<HTMLElement>()
// 可响应的状态，表示消息的高度
const height = ref(0)

// 计算上一个消息实例的最底部的偏移量
const lastOffset = computed(() => getLastBottomOffset(props.id))
// 计算当前消息的顶部偏移量
const topOffset = computed(() => {
  return lastOffset.value + props.offset
})
// 计算当前消息的底部偏移量，基于其高度
const bottomOffset = computed(() => height.value + topOffset.value)
// 计算消息的 CSS 样式以确定位置
const cssStyle = computed(() => ({
  top: topOffset.value + 'px',
  zIndex: props.zIndex // 控制消息的堆叠顺序
}))

let timer: any

/**
 * 开始计时器，设置消息的可见性
 */
const startTimer = () => {
  if (props.duration > 0) {
    timer = setTimeout(() => {
      visible.value = false // 在持续时间结束后隐藏消息
    }, props.duration)
  }
}

/**
 * 清除计时器以防止消息消失
 */
const clearTimer = () => {
  clearTimeout(timer)
}

// 组件挂载时执行
onMounted(async () => {
  visible.value = true // 设置消息为可见
  startTimer() // 启动计时器
})

// 处理键盘事件，按下 Esc 键时隐藏消息
const keydown = (e: Event) => {
  const event = e as KeyboardEvent
  if (event.code === 'Escape') {
    visible.value = false // 隐藏消息
  }
}
useEventListener(document, 'keydown', keydown) // 监听键盘事件

/**
 * 消息组件销毁时调用的回调函数
 */
const destroyComponent = () => {
  props.onDestroy() // 调用传入的销毁回调
}

/**
 * 更新消息的高度
 */
const updateHeight = () => {
  height.value = messageRef.value!.getBoundingClientRect().height // 获取消息元素的高度
}

// 暴露 bottomOffset 和 visible 给外部
defineExpose({
  bottomOffset,
  visible
})
</script>

<style></style>
