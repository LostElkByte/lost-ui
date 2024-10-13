<script setup>
import { createMessage, closeAll } from '@/components/Message/method'
import LButton from '@/components/Button/Button.vue'
const open = () => {
  createMessage({ message: 'hello world1', duration: 0 })
  createMessage({ message: 'hello world2', duration: 0 })
  createMessage({ message: 'hello world3', duration: 0 })
}
const close = () => {
  closeAll()
}
</script>
<template>
  <div class="basic block">
    <l-button @click="open" style="margin-right: 8px"> 创建三条消息 </l-button>
    <l-button @click="close"> 全部关闭 </l-button>
  </div>
</template>
