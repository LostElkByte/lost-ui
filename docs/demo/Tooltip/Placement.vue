<script setup>
import LTooltip from '@/components/Tooltip/Tooltip.vue'
import LButton from '@/components/Button/Button.vue'
</script>
<template>
  <div class="basic block">
    <l-tooltip content="hello tooltip" placement="top-start">
      <l-button> top-start </l-button>
    </l-tooltip>

    <l-tooltip content="hello tooltip" placement="bottom-start">
      <l-button> bottom-start </l-button>
    </l-tooltip>

    <l-tooltip content="hello tooltip" placement="left-start">
      <l-button> left-start </l-button>
    </l-tooltip>

    <l-tooltip content="hello tooltip" placement="right-start">
      <l-button> right-start </l-button>
    </l-tooltip>
  </div>
</template>
<style scoped>
.l-button {
  margin-right: 8px;
}
</style>
