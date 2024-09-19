<template>
  <div class="l-collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, provide, defineModel, watchEffect } from 'vue'
import type { NameType, CollapseProps, CollapseEmits } from './types.ts'
import { collapseContextKey } from './types.ts'

defineOptions({
  name: 'LCollapse'
})

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = defineModel<NameType[]>('modelValue', { required: true })

// 监听 activeNames 变化，处理 accordion 模式的警告
watchEffect(() => {
  if (props.accordion && activeNames.value.length > 1) {
    console.warn('LCollapse: `accordion` only supports one child item.')
  }
})

/**
 * 处理 accordion 模式下的点击逻辑
 * @param item 点击的项名称
 */
const handleAccordionClick = (item: NameType) => {
  activeNames.value = activeNames.value[0] === item ? [] : [item]
}

/**
 * 处理非 accordion 模式下的点击逻辑
 * @param item 点击的项名称
 */
const handleMultipleClick = (item: NameType) => {
  const index = activeNames.value.indexOf(item)
  if (index > -1) {
    activeNames.value = [
      ...activeNames.value.slice(0, index),
      ...activeNames.value.slice(index + 1)
    ]
  } else {
    activeNames.value = [...activeNames.value, item]
  }
}

/**
 * 处理项点击事件，根据模式选择处理函数
 * @param item 点击的项名称
 */
const handleItemClick = (item: NameType) => {
  if (props.accordion) {
    handleAccordionClick(item)
  } else {
    handleMultipleClick(item)
  }

  emits('change', activeNames.value)
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>
