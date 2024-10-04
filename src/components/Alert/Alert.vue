<template>
  <Transition name="l-alert-fade">
    <div
      class="l-alert"
      v-if="visible"
      :class="{
        [`l-alert__${type}`]: type,
        [`l-alert__${effect}`]: effect
      }"
    >
      <div class="l-alert__content">
        {{ content }}
        <span>
          <slot></slot>
        </span>
      </div>
      <div class="l-alert__close" v-if="closable">
        <Icon @click.stop="visible = false" icon="xmark" />
      </div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { AlertProps, AlertEmits } from './types'

import Icon from '../Icon/Icon.vue'
defineOptions({
  name: 'LAlert'
})

withDefaults(defineProps<AlertProps>(), {
  effect: 'light', // 默认效果为浅色
  closable: true // 默认可关闭
})

// 定义事件发射类型
const emits = defineEmits<AlertEmits>()
// 控制警报的可见性
const visible = ref(true)

/**
 * 隐藏警告框
 *
 * @returns 无返回值
 */
const hideAlert = () => {
  visible.value = false // 设置可见性为 false
  emits('close') // 触发关闭事件
}

// 将隐藏方法暴露给外部
defineExpose({
  hide: () => hideAlert()
})
</script>
