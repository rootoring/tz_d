<template>
  <div class="cars-page">
    <searchPanel />
    <transition-group tag="div" class="cars-page__items" name="fade">
      <card v-for="car of store.cars" :key="car.id" :data="car" />
    </transition-group>
    <pagin />
  </div>
</template>

<script setup>
import searchPanel from "../components/searchPanel.vue";
import card from "../components/card.vue";
import pagin from "../components/pagin.vue";
import useStore from "../store";

const store = useStore();
</script>
<style lang="scss">
.cars-page {
  .cars-page__items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    margin-top: 32px;
    @media (max-width: 1500px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
