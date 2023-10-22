<template>
  <div class="home-page">
    <transition-group tag="div" class="home-page__items" name="fade">
      <card v-for="car of store.showCards" :key="car.id" :data="car" />
    </transition-group>
    <button
      v-show="store.showCards.length !== store.allCards.length"
      class="home-page__btn"
      @click="store.loadCards(store.showCards.length)"
    >
      Показать еще
    </button>
  </div>
</template>

<script setup>
import card from "../components/card.vue";
import useStore from "../store";
import { onMounted } from "vue";

const store = useStore();
onMounted(async () => await store.fetchCards());
</script>
<style lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  .home-page__items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 40px;
    justify-content: center;
    @media (max-width: 1250px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 950px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .home-page__btn {
    border-radius: 4px;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 3px 18px;
    margin: 40px;
    align-self: flex-end;
    transition: 0.1s ease-in-out;

    &:active {
      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
