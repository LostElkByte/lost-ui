<template>
  <div class="l-button-demo">
    <Button type="primary" plain ref="buttonRef">Test Button</Button>
    <Button plain>Test Button</Button>
    <Button round>Test Button</Button>
    <Button circle>TB</Button>
    <Button disabled>Test Button</Button>
    <Button type="primary">Test Button</Button>
    <Button type="success">Test Button</Button>
    <Button type="info">Test Button</Button>
    <Button type="warning">Test Button</Button>
    <Button type="danger">Test Button</Button>
    <Button type="primary" plain>Test Button</Button>
    <Button type="success" plain>Test Button</Button>
    <Button type="info" plain>Test Button</Button>
    <Button type="warning" plain>Test Button</Button>
    <Button type="danger" plain>Test Button</Button>
    <Button size="small" loading>Loading</Button>
    <Button size="small" icon="arrow-up">Icon</Button><br />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Button from '@/components/Button/Button.vue'
import type { ButtonInstance } from '@/components/Button/types'
const buttonRef = ref<ButtonInstance | null>(null)
onMounted(() => {
  if (buttonRef.value) {
    console.log('buttonRef', buttonRef.value.ref)
  }
})
</script>

<style scoped>
.l-button-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
