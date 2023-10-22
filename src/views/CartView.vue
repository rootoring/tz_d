<template>
  <transition-group tag="div" name="fade" class="cart-page">
    <cartCard
      v-for="(card, index) of store.cart"
      :key="card.title"
      :data="card"
      :index="index"
    />
  </transition-group>
</template>

<script setup>
import useStore from "../store";
import cartCard from "../components/cartCards.vue";
const store = useStore();
</script>
<style lang="scss">
.cart-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
