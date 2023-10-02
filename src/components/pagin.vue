<template>
  <section class="pagin-block">
    <div class="pagin-block__pages">
      Showing {{ store.showCars }} out of {{ store.totalCars }}
    </div>
    <div class="pagin-block__pagination">
      <button
        @click="pageDown"
        :disabled="store.current_page == 1"
        class="pagin-block__btn pagin-block__btn-l"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14 16L10 12L14 8"
            stroke="#293148"
            stroke-opacity="0.45"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <span>{{ store.current_page }}</span> of
      <span class="total">{{ store.last_page }}</span>
      <button
        @click="pageUp"
        :disabled="store.current_page == store.last_page"
        class="pagin-block__btn pagin-block__btn-r"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10 16L14 12L10 8"
            stroke="#293148"
            stroke-opacity="0.45"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </section>
</template>
<script setup>
import useStore from "../store";

const store = useStore();

const pageUp = async () => {
  store.current_page++;
  await store.searchCars();
};
const pageDown = async () => {
  store.current_page--;
  await store.searchCars();
};
</script>
<style lang="scss">
.pagin-block {
  display: flex;
  justify-content: space-between;
  margin-top: 36px;

  .pagin-block__pages {
    color: rgba(41, 49, 72, 0.8);
    font-size: 16px;
  }

  .pagin-block__pagination {
    display: flex;
    align-items: center;
    color: rgba(41, 49, 72, 0.8);
    text-align: center;
    font-size: 13px;

    .pagin-block__btn {
      display: flex;
      align-items: center;
      background: none;
    }
    .pagin-block__btn-l {
      margin-right: 18px;
    }
    .pagin-block__btn-r {
      margin-left: 18px;
    }
    span {
      border-radius: 6px;
      border: 1px solid #e4e4e4;
      padding: 5px 6px;
      margin-right: 12px;
    }
    .total {
      color: rgba(41, 49, 72, 0.45);
      margin-right: 0;
      margin-left: 12px;
    }
  }
}
</style>
