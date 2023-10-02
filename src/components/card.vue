<template>
  <div class="card">
    <img
      class="card__img"
      :src="props.data?.photo?.url"
      :alt="props.data.vehicle_name"
    />
    <p class="card__title">{{ props.data.vehicle_name || "CAR" }}</p>
    <p class="card__subtitle">{{ props.data.vin }}</p>
    <div class="card__footer">
      <div
        class="card__count"
        :class="props.data.id < 30 ? '' : 'card__count-success'"
      >
        <svg
          v-show="props.data.id >= 30"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M13.3333 4L5.99999 11.3333L2.66666 8"
            stroke="#7FC75E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        {{ props.data.id }}/30
      </div>
      <div class="card__time">{{ props.data.uploads }} days left</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: { type: Object, required: true },
});
</script>
<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #f3f6f8;
  padding: 23px;

  .card__img {
    width: 100%;
    height: 165px;
    object-fit: cover;
    border-radius: 8px;
  }

  .card__title {
    padding: 12px 0;
    color: #293148;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
  }
  .card__subtitle {
    color: rgba(41, 49, 72, 0.6);
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
  }

  .card__footer {
    display: flex;
    justify-content: space-between;
    border-top: #e4e4e4 2px solid;
    padding-top: 18px;
    margin-top: 18px;

    .card__count {
      display: flex;
      align-items: center;
      gap: 8px;
      border-radius: 6px;
      background: #ededed;
      padding: 4px 14px;
      color: rgba(41, 49, 72, 0.8);
      text-align: center;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px;
    }
    .card__count-success {
      background: #e4f5dd;
    }
    .card__time {
      color: rgba(41, 49, 72, 0.6);
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px;
    }
  }
}
</style>
