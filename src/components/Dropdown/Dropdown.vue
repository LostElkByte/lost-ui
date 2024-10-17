<template>
  <div class="l-dropdown">
    <Tooltip
      :trigger="trigger"
      :placement="placement"
      :popper-options="popperOptions"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      :manual="manual"
      @visible-change="visibleChange"
      ref="tooltipRef"
    >
      <!-- 默认插槽，允许外部自定义触发元素 -->
      <slot></slot>
      <!-- 内容插槽 -->
      <template #content>
        <ul class="l-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <!-- 分隔符，如果选项是分隔项 -->
            <li v-if="item.divided" role="separator" class="divided-placeholder" />
            <li
              class="l-dropdown__item"
              @click="itemClick(item)"
              :class="{ 'is-disabled': item.disabled, 'is-divided': item.divided }"
              :id="`dropdown-item-${item.key}`"
            >
              <!-- 渲染下拉项的内容，支持 VNode -->
              <RenderVnode :vNode="item.label" />
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Tooltip from '../Tooltip/Tooltip.vue'
import RenderVnode from '../Common/RenderVnode'
import type { DropdownProps, DropdownInstance, DropdownEmits, MenuOption } from './types'
import type { TooltipInstance } from '../Tooltip/types'
defineOptions({
  name: 'LDropdown'
})
const props = withDefaults(defineProps<DropdownProps>(), { hideAfterClick: true })
const emits = defineEmits<DropdownEmits>()
const tooltipRef = ref<TooltipInstance | null>(null)
/**
 * 处理tooltip可见性变化事件
 *
 * @param e 可见性状态，true 表示可见，false 表示不可见
 */
const visibleChange = (e: boolean) => {
  emits('visible-change', e)
}
/**
 * 处理菜单项点击事件
 *
 * @param e 菜单项对象
 * @returns 无返回值
 */
const itemClick = (e: MenuOption) => {
  // 如果菜单项被禁用，则直接返回
  if (e.disabled) {
    // 如果菜单项被禁用，则直接返回
    return
  }

  // 触发 select 事件，并将菜单项 e 作为参数传递
  emits('select', e)

  // 如果属性 hideAfterClick 为 true，则隐藏下拉框
  if (props.hideAfterClick) {
    // 隐藏下拉框
    tooltipRef.value?.hide()
  }
}
defineExpose<DropdownInstance>({
  show: () => tooltipRef.value?.show(), // 显示下拉菜单
  hide: () => tooltipRef.value?.hide() // 隐藏下拉菜单
})
</script>
