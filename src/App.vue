<template>
  <div>
    <ButtonDemo></ButtonDemo>
    <CollapseDemo></CollapseDemo>
    <fontAwesomeIcon :icon="['fas', 'download']" />
  </div>
</template>

<script setup lang="ts">
import ButtonDemo from '@/demo/Button.vue'
import CollapseDemo from '@/demo/Collapse.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<style scoped></style>
