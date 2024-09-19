<template>
  <div
    class="l-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <div
      class="l-collapse-item__header"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive
      }"
      :id="`item-header-${name}`"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
      <!-- <Icon icon="angle-right" class="header-angle" /> -->
    </div>
    <Transition name="slide" v-on="transitionEvents">
      <div class="l-collapse-item__wrapper" v-show="isActive">
        <div class="l-collapse-item__content" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { inject, computed } from 'vue'
import type { CollapseItemProps } from './types.ts'
import { collapseContextKey } from './types.ts'
defineOptions({
  name: 'LCollapseItem'
})

const props = defineProps<CollapseItemProps>()

const collapseContext = inject(collapseContextKey)

const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name) ?? false)

/**
 * 处理点击事件
 *
 * @returns 无返回值
 */
const handleClick = () => {
  if (props.disabled) return
  collapseContext?.handleItemClick(props.name)
}

const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  /**
   * 处理进入前的状态，设置元素初始高度和溢出样式。
   * @param el 需要进行过渡的元素
   */
  beforeEnter: (el) => {
    el.style.height = '0px' // 设置高度为 0px，使元素不可见
    el.style.overflow = 'hidden' // 隐藏溢出内容
  },

  /**
   * 处理进入过程中的状态，设置元素高度以适应内容。
   * @param el 需要进行过渡的元素
   */
  enter: (el) => {
    el.style.height = `${el.scrollHeight}px` // 设置高度为元素内容的实际高度
  },

  /**
   * 处理进入后的状态，重置元素的高度和溢出样式。
   * @param el 需要进行过渡的元素
   */
  afterEnter: (el) => {
    el.style.height = '' // 清除高度样式，恢复默认
    el.style.overflow = '' // 清除溢出样式
  },

  /**
   * 处理离开前的状态，设置元素的初始高度和溢出样式。
   * @param el 需要进行过渡的元素
   */
  beforeLeave: (el) => {
    el.style.height = `${el.scrollHeight}px` // 设置高度为元素内容的实际高度
    el.style.overflow = 'hidden' // 隐藏溢出内容
  },

  /**
   * 处理离开过程中的状态，将元素高度设置为 0px。
   * @param el 需要进行过渡的元素
   */
  leave: (el) => {
    el.style.height = '0px' // 将高度设置为 0px，使元素不可见
  },

  /**
   * 处理离开后的状态，重置元素的高度和溢出样式。
   * @param el 需要进行过渡的元素
   */
  afterLeave: (el) => {
    el.style.height = '' // 清除高度样式，恢复默认
    el.style.overflow = '' // 清除溢出样式
  }
}
</script>

<style></style>
