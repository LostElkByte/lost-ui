<template>
  <div>
    <ButtonDemo></ButtonDemo>
    <CollapseDemo></CollapseDemo>
    <Alert></Alert>
    <FontAwesomeIcon :icon="['fas', 'download']" />
    <Tooltip></Tooltip>
    <Dropdown></Dropdown>
  </div>
</template>

<script setup lang="ts">
import ButtonDemo from '@/demo/Button.vue'
import CollapseDemo from '@/demo/Collapse.vue'
import Alert from '@/demo/Alert.vue'
import Tooltip from '@/demo/Tooltip.vue'
import Dropdown from '@/demo/Dropdown.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<style scoped></style>
