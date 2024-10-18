<script setup>
import { createMessage } from '@lostelk/lost-ui'

const open = () => {
  createMessage({ message: 'hello world', showClose: true, duration: 0 })
}
</script>
<template>
  <div class="basic block">
    <l-button @click="open"> 可关闭消息 </l-button>
  </div>
</template>
