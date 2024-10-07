<template>
  <div class="l-collapse-demo">
    <Collapse v-model="openedValue" accordion>
      <Item name="a" title="Title A">
        <h1>headline title</h1>
        <div>this is content a aaa</div>
      </Item>
      <Item name="b" title="Title B">
        <div>this is bbbbb test</div>
      </Item>
      <Item name="c" title="Disabled Title" disabled>
        <div>this is cccc test</div>
      </Item>
    </Collapse>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Collapse from '@/components/Collapse/Collapse.vue'
import Item from '@/components/Collapse/CollapseItem.vue'

const openedValue = ref(['a'])

onMounted(() => {})
</script>

<style scoped>
.l-collapse-demo {
  width: 480px;
}
</style>
