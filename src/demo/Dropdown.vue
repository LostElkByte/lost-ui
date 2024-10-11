<template>
  <div class="l-Dropdown-demo">
    <Dropdown
      ref="dropdownRef"
      placement="bottom"
      trigger="click"
      :popper-options="options"
      :menuOptions="menuOptions"
    >
      <span>Dropdown11</span>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import { h, ref } from 'vue'
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import type { Options } from '@popperjs/core'
import type { MenuOption } from '@/components/Dropdown/types'

const tooltipRef = ref()

const options: Partial<Options> = { placement: 'bottom', strategy: 'fixed' }

const menuOptions: MenuOption[] = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
]

const show = () => {
  tooltipRef.value?.show()
}

const hide = () => {
  tooltipRef.value?.hide()
}
</script>

<style scoped></style>
