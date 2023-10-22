<template>
  <div class="card">
    <img class="card__img" src="avatar.svg" :alt="props.data.title" />
    <p class="card__title">{{ props.data.title }}</p>
    <p class="card__subtitle">{{ props.data.description }}</p>
    <div class="card__footer">
      <div class="card__price">{{ props.data.price }}₽</div>
      <button class="card__cart" @click="store.addToCart(props.data)">
        <img src="cart.svg" />
      </button>
    </div>
  </div>
</template>

<script setup>
import useStore from "../store";
const store = useStore();
const props = defineProps({
  data: { type: Object, required: true },
});
</script>
<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #fff;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.2);
  padding-bottom: 80px;
  position: relative;
  width: 280px;

  .card__img {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }

  .card__title {
    padding: 20px 20px 10px 20px;
    color: #293148;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
  }
  .card__subtitle {
    padding: 0 20px;
    color: #333;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.5;
    height: 100px;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .card__footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    position: absolute;
    bottom: 0;

    .card__price {
      text-transform: uppercase;
      color: #333;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px; /* 144.444% */
    }
    .card__cart {
      background: none;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: scale(1.2);
      }
      &:active {
        transform: scale(0.8);
      }
    }
  }
}
</style>
