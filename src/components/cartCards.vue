<template>
  <div class="cart-card">
    <img src="avatar.svg" alt="avatar" />
    <div class="cart-card__content">
      <p class="cart-card__title">{{ props.data.title }}</p>
      <p class="cart-card__subtitle">{{ props.data.description }}</p>
      <div class="cart-card__content-price card__price">
        {{ props.data.price }}₽
      </div>
    </div>
    <button
      class="cart-card__del-btn"
      @click="store.removeFromCart(props.index)"
    >
      <img src="close.svg" alt="" />
    </button>
  </div>
</template>
<script setup>
import useStore from "../store";
const store = useStore();
const props = defineProps({
  data: { type: Object, required: true },
  index: { type: Number, required: true },
});
</script>
<style scoped lang="scss">
.cart-card {
  max-width: 500px;
  display: flex;
  position: relative;
  height: 200px;

  .cart-card__del-btn {
    position: absolute;
    right: 5px;
    top: 5px;
    background: none;
  }
  .cart-card__content {
    border-radius: 0;
    padding: 20px;
    position: relative;

    .cart-card__title {
      color: #333;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .cart-card__subtitle {
      color: #333;
      font-size: 14px;
      font-weight: 400;
      line-height: 26px;
      opacity: 0.5;
      height: 100px;
      overflow-y: auto;
      -ms-overflow-style: none; /* IE и Edge */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .cart-card__content-price {
      position: absolute;
      bottom: 0;
      padding-bottom: 20px;
    }
  }
}
</style>
