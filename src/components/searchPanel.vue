<template>
  <section class="search-section">
    <div class="search-section__search search">
      <input
        class="search__txt"
        v-model="search"
        type="text"
        placeholder="Search VIN"
      />
      <svg
        class="search__ico"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C12.95 18 14.6819 17.2298 15.9483 15.9512C16.1356 15.7621 16.3905 15.6555 16.6566 15.6549C16.9228 15.6543 17.1781 15.7598 17.3662 15.9481L21.7074 20.2932C22.0978 20.6839 22.0975 21.3171 21.7068 21.7074C21.3161 22.0978 20.6829 22.0975 20.2926 21.7068L16.6222 18.0331C15.0815 19.2744 13.1344 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 12.2053 19.7625 13.3576 19.3309 14.4109C19.1215 14.9219 18.5374 15.1664 18.0264 14.957C17.5153 14.7476 17.2708 14.1635 17.4803 13.6525C17.815 12.8357 18 11.9407 18 11C18 7.13401 14.866 4 11 4Z"
          fill="#293148"
          fill-opacity="0.45"
        />
      </svg>
    </div>
    <div class="search-section__select select">
      <p class="select__title">Select vehicles per page:</p>
      <select class="select__block" v-model="perPage">
        <option v-for="n of 12" :key="n" :value="n">{{ n }}</option>
      </select>
    </div>
    <button class="search-section__btn btn">
      <svg
        class="btn__ico"
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
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
          fill="white"
        />
      </svg>
      Add Vechicle
    </button>
  </section>
</template>
<script setup>
import { ref, watch } from "vue";
import useStore from "../store";
let perPage = ref(9);
let search = ref("");
const store = useStore();

watch(search, async (newValue) => {
  store.search = newValue;
  await store.searchCars();
});

watch(perPage, async (newValue) => {
  store.perPage = newValue;
  await store.searchCars();
});
</script>
<style lang="scss">
.search-section {
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 36px;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 26px;
  }
  .search-section__search {
    margin-right: 36px;
  }

  .search-section__btn {
    position: absolute;
    right: 0;
    @media (max-width: 1000px) {
      position: static;
    }
  }
}
</style>
