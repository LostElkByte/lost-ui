<script setup>
import LButton from '@/components/Button/Button.vue'
</script>
<template>
  <div class="disabled block">
    <l-button disabled> hello </l-button>
    <l-button type="primary" disabled> Primary </l-button>
    <l-button type="success" disabled> Success </l-button>
    <l-button type="warning" disabled> Warning </l-button>
    <l-button type="danger" disabled> Danger </l-button>
    <l-button type="info" disabled> Info </l-button>
  </div>

  <div class="disabled-plain block">
    <l-button plain disabled> hello </l-button>
    <l-button type="primary" plain disabled> Primary </l-button>
    <l-button type="success" plain disabled> Success </l-button>
    <l-button type="warning" plain disabled> Warning </l-button>
    <l-button type="danger" plain disabled> Danger </l-button>
    <l-button type="info" plain disabled> Info </l-button>
  </div>
</template>
