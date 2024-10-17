<template>
  <div class="basic block">
    <l-button> hello </l-button>
    <l-button type="primary"> Primary </l-button>
    <l-button type="success"> Success </l-button>
    <l-button type="warning"> Warning </l-button>
    <l-button type="danger"> Danger </l-button>
    <l-button type="info"> Info </l-button>
  </div>

  <div class="plain block">
    <l-button plain> hello </l-button>
    <l-button type="primary" plain> Primary </l-button>
    <l-button type="success" plain> Success </l-button>
    <l-button type="warning" plain> Warning </l-button>
    <l-button type="danger" plain> Danger </l-button>
    <l-button type="info" plain> Info </l-button>
  </div>

  <div class="round block">
    <l-button round> hello </l-button>
    <l-button type="primary" round> Primary </l-button>
    <l-button type="success" round> Success </l-button>
    <l-button type="warning" round> Warning </l-button>
    <l-button type="danger" round> Danger </l-button>
    <l-button type="info" round> Info </l-button>
  </div>

  <div class="circle block">
    <l-button circle> <l-icon icon="star" /> </l-button>
    <l-button type="primary" circle> <l-icon icon="star" /> </l-button>
    <l-button type="success" circle> <l-icon icon="star" /> </l-button>
    <l-button type="warning" circle> <l-icon icon="star" /> </l-button>
    <l-button type="danger" circle> <l-icon icon="star" /> </l-button>
    <l-button type="info" circle> <l-icon icon="star" /> </l-button>
  </div>
</template>
<style scoped>
.block {
  margin-bottom: 10px;
  display: flex;
  gap: 8px;
}
</style>
