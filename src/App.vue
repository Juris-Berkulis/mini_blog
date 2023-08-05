<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
<div class="wrapper">
  <RouterView />
</div>
</template>

<style scoped lang="scss">
.wrapper {
  min-height: 100vh;
  width: 100%;
  max-width: 630px;
  margin: 0 auto;
  padding: 30px 15px;
}
</style>
