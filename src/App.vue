<template>
  <div class="app">
    <asidePanel />
    <div class="container">
      <headerBlock />
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script setup>
import asidePanel from "./components/asidePanel.vue";
import headerBlock from "./components/headerBlock.vue";
</script>
<style lang="scss">
.app {
  display: flex;

  .container {
    width: 90%;

    main {
      padding: 30px;
    }
  }
}
</style>
