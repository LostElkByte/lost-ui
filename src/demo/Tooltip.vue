<template>
  <div class="l-tooltip-demo">
    <Tooltip ref="tooltipRef" placement="bottom" trigger="click" :popper-options="options">
      <span>Tooltip</span>
      <template #content>hello</template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import LButton from '@/components/Button/Button.vue'
import type { Options } from '@popperjs/core'

const tooltipRef = ref()

const options: Partial<Options> = { placement: 'bottom', strategy: 'fixed' }

const show = () => {
  tooltipRef.value?.show()
}

const hide = () => {
  tooltipRef.value?.hide()
}
</script>

<style scoped></style>
