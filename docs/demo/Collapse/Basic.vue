<script setup>
import { ref } from 'vue'
const openedValue = ref(['a'])
</script>

<template>
  <div class="basic block">
    <l-collapse v-model="openedValue">
      <l-collapse-item name="a" title="Title A">
        <div>This is content for section A.</div>
      </l-collapse-item>
      <l-collapse-item name="b" title="Title B">
        <div>This is content for section B.</div>
      </l-collapse-item>
      <l-collapse-item name="c" title="Disabled Title" disabled>
        <div>This section is disabled.</div>
      </l-collapse-item>
    </l-collapse>
  </div>
</template>
