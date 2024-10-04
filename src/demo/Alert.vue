<template>
  <div class="l-alert-demo">
    <Alert type="success" :closable="false">this is the alert</Alert>
    <Alert type="warning">this is the alert</Alert>
    <Alert type="info">this is the alert</Alert>
    <Alert type="danger">this is the alert</Alert>
    <Alert type="success" effect="dark">this is the alert</Alert>
    <Alert type="warning" effect="dark">this is the alert</Alert>
    <Alert type="info" effect="dark">this is the alert</Alert>
    <Alert type="danger" effect="dark">this is the alert</Alert>
  </div>
</template>

<script setup lang="ts">
import Alert from '@/components/Alert/Alert.vue'
</script>

<style scoped></style>
