<script setup>
import { createMessage } from '@/components/Message/method'
import LButton from '@/components/Button/Button.vue'
const open = () => {
  createMessage({ message: 'hello world', showClose: true, duration: 0 })
}
</script>
<template>
  <div class="basic block">
    <l-button @click="open"> 可关闭消息 </l-button>
  </div>
</template>
