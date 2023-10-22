<template>
  <div class="container">
    <headerBlock />
    <main>
      <router-view />
    </main>
  </div>
</template>
<script setup>
import headerBlock from "./components/headerBlock.vue";
</script>
<style lang="scss">
.container {
  max-width: 1440px;
  margin: 0 auto;
  main {
    padding: 0 20px;
  }
}
</style>
