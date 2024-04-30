<template>
  <div class="app">

    <div class="container">

      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script setup>

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
