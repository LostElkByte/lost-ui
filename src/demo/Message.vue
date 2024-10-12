<template>
  <div class="l-message-demo"></div>
</template>

<script setup lang="ts">
import { createMessage } from '@/components/Message/method'
import { onMounted } from 'vue'
onMounted(() => {
  const instance = createMessage({
    message: 'hello world',
    duration: 0,
    showClose: true
  })
  createMessage({
    message: 'hello world one',
    duration: 0,
    showClose: true,
    type: 'danger'
  })
  createMessage({
    message: 'hello world two',
    duration: 0,
    showClose: true,
    type: 'success'
  })

  setTimeout(() => {
    instance.destroy()
  }, 2000)
})
</script>

<style scoped></style>
