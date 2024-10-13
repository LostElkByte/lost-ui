<script setup>
import LTooltip from '@/components/Tooltip/Tooltip.vue'
import LButton from '@/components/Button/Button.vue'
</script>
<template>
  <div class="basic block">
    <l-tooltip content="hello tooltip" trigger="click">
      <l-button> 点击激活 Tooltip </l-button>
    </l-tooltip>
  </div>
</template>
