<script setup>
import { createMessage } from '@/components/Message/method'
import LButton from '@/components/Button/Button.vue'
const open = (type) => {
  createMessage({ message: 'hello world', type })
}
</script>
<template>
  <div class="basic block">
    <l-button @click="open('success')" style="margin-right: 8px"> Success </l-button>
    <l-button @click="open('info')" style="margin-right: 8px"> Info </l-button>
    <l-button @click="open('warning')" style="margin-right: 8px"> warning </l-button>
    <l-button @click="open('danger')"> Danger </l-button>
  </div>
</template>
