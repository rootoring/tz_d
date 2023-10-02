<template>
  <header class="header-block">
    <div class="header-block__sectoins">
      <div class="header-block__section">
        <h1 class="header-block__title">{{ currentPath }}</h1>
        <span class="header-block__car-counts">{{ store.totalCars }}</span>
      </div>
      <div class="header-block__section">
        <span class="header-block__add-btn">
          <svg
            class="header-block__add-btn-ico"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5C11 4.44772 11.4477 4 12 4Z"
              fill="#E86E84"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
              fill="#E86E84"
            />
          </svg>
        </span>
        <div class="header-block__user">
          <img class="header-block__avatar" src="avatar.png" alt="avatar" />
          <p class="header-block__user-name">John Doe</p>
        </div>
        <select class="header-block__country select__block">
          <option v-for="n of country" :key="n" :value="n">{{ n }}</option>
        </select>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import useStore from "../store";

const country = ["US", "RU", "UK"];
const store = useStore();
const routes = useRoute();

onMounted(async () => {
  await store.searchCars();
});
const currentPath = computed(() => {
  return routes.name;
});
</script>

<style lang="scss">
.header-block {
  padding: 30px;
  border-bottom: #e4e4e4 1px solid;
  .header-block__sectoins {
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }

    .header-block__section {
      display: flex;
      align-items: center;

      .header-block__title {
        color: #293148;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 38px;
        margin-right: 18px;
      }

      .header-block__car-counts {
        padding: 4px 14px;
        border-radius: 6px;
        background: #f3f6f8;
      }

      .header-block__add-btn {
        border-radius: 6px;
        border: 1px solid #e86e84;
        padding: 9px;
      }

      .header-block__user {
        display: flex;
        align-items: center;
        gap: 14px;
        margin: 0 32px 0 40px;
        .header-block__avatar {
          width: 46px;
          height: 46px;
        }
        .header-block__user-name {
          color: #293148;
          font-size: 15px;
          font-style: normal;
          font-weight: 500;
          line-height: 22px; /* 146.667% */
        }
      }
    }
  }
}
</style>
