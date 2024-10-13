<script setup>
import LTooltip from '@/components/Tooltip/Tooltip.vue'
import LButton from '@/components/Button/Button.vue'
</script>
<template>
  <div class="basic block">
    <l-tooltip trigger="click">
      <l-button> 复杂 HTML 结构的Tooltip </l-button>
      <template #content>
        <h3>this is the title</h3>
        <p>this is the content</p>
      </template>
    </l-tooltip>
  </div>
</template>
