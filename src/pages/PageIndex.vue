<template>
  <div class="index-page">
    <div class="index-page__search">
      <ChuckSearch @on-search="debouncedTest" />
    </div>
    <div class="span" v-if="isLoading">Lodaing...</div>
    <div class="index-page__cards" v-else-if="!isLoading && chuckStore.cards.length">
      <ChuckCard
        class="index-page__card"
        v-for="(item, idx) in chuckStore.cards"
        :key="item.id"
        :item="item"
        :class="{ [`index-page__card--${idx + 1}`]: true }"
      />
    </div>
    <span v-else> Пусто.. </span>
  </div>
</template>

<script setup lang="ts">
import ChuckCard from '@/components/ChuckCard.vue'
import ChuckSearch from '@/components/ChuckSearch.vue'
import { useChuckStore } from '@/stores/chuck'
import debounce from 'lodash/debounce'

import { onMounted, ref } from 'vue'
const chuckStore = useChuckStore()

const isLoading = ref(false)
onMounted(async () => {
  chuckStore.getCards()
})

const test = async (val: string) => {
  if (val.length >= 3) {
    try {
      isLoading.value = true
      await chuckStore.getCards(val)
    } finally {
      isLoading.value = false
    }
  }
}
const debouncedTest = debounce(test, 300)
</script>

<style scoped lang="scss">
.index-page {
  max-width: 1596px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  &__cards {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  &__card {
    width: calc((100% / 3) - 20px);
    flex-grow: 1;

    &--1,
    &--2 {
      width: calc((100% / 2) - 20px);
    }

    @media screen and (max-width: $xl) {
      width: calc((100% / 2) - 20px);
    }
    @media screen and (max-width: $md) {
      width: 100%;
    }
  }

  &__search {
    margin-bottom: 60px;
    @media screen and (max-width: $sm) {
      margin-bottom: 30px;
    }
  }
}
</style>
