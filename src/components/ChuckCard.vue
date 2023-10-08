<template>
  <a class="chuck-card" :href="item.url">
    <div class="chuck-card__value">
      {{ item.value }}
    </div>
    <div class="chuck-card__footer">
      <div class="chuck-card__id">
        {{ item.id }}
      </div>
      <div class="chuck-card__date">
        {{ item.getDate(item.created_at) }}
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { ChuckModel } from '@/models/chuck'

interface Props {
  item: ChuckModel
}
const props = defineProps<Props>()
</script>

<style scoped lang="scss">
.chuck-card {
  background: $white-color;
  box-shadow: 0px 7px 25px 0px rgba(100, 100, 111, 0.2);
  padding: 40px 40px 25px 40px;
  display: flex;
  flex-direction: column;
  &__value {
    flex-grow: 1;
    font-size: 20px;
    line-height: 1.5;
    color: $dark-color;
    @media screen and (max-width: $sm) {
      font-size: 16px;
    }
  }

  &__footer {
    padding-top: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $gray-color;
    font-size: 14px;
    line-height: 1.5;
    gap: 10px;
  }
}
</style>
