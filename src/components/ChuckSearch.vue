<template>
  <div class="chuck-search">
    <div class="chuck-search__controls">
      <input
        class="chuck-search__control"
        type="search "
        v-model="search"
        placeholder="Some value"
        ref="searchRef"
      />
    </div>
    <div class="chuck-search__found">Found jokes: {{ chuckStore.cards.length }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
const emit = defineEmits(['onSearch'])
import { useChuckStore } from '@/stores/chuck'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const search = ref((route.query.search as string) ?? '')
const searchRef = ref<null | HTMLElement>(null)

const chuckStore = useChuckStore()
watch(search, (val) => {
  router.push({ query: { search: val } })
  emit('onSearch', val)
})

onMounted(() => {
  if (searchRef.value) {
    searchRef.value.focus()
  }
  emit('onSearch', search.value)
})
</script>

<style scoped lang="scss">
.chuck-search {
  max-width: 626px;
  width: 100%;
  margin: 0 auto;
  &__control {
    color: $dark-color;
    font-size: 20px;
    line-height: 1.3;
    width: 100%;
    margin: 0 auto;
    background-color: $white-color;
    box-shadow: 0px 7px 25px 0px rgba(100, 100, 111, 0.2);
    padding: 17px 20px;
    border: 1px solid transparent;
    transition: border-color 0.2s linear;
    &:focus {
      border-color: $purple-color;
    }
    &::placeholder {
      color: $purple-color;
    }
  }

  &__found {
    font-size: 16px;
    line-height: 1.4;
    padding-top: 20px;
    padding-left: 30px;
  }
}
</style>
