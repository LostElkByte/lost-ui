<script setup>
import LButton from '@/components/Button/Button.vue'
</script>
<template>
  <div class="size block">
    <l-button size="large"> Large </l-button>
    <l-button type="primary"> default </l-button>
    <l-button type="success" size="small"> Small </l-button>
  </div>
</template>

<style scoped>
.block {
  margin-bottom: 10px;
  display: flex;
  gap: 8px;
}
</style>
