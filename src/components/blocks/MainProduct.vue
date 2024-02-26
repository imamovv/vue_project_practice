<template>
    <div class="main">
        <CardProduct :title="good.title"
        :description="good.description" :price="good.price" :imageSource="good.imageSource" :id="good.id" :line="'cardProduct'" @clickProduct="addOrDeleteProducts" :isInBasket="isInBasket"/>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import CardProduct from '@/components/elements/CardProduct.vue'

export default {
  name: 'MainProduct',
  components: {
    CardProduct
  },
  props: {
  },
  setup () {
    const store = useStore()
    const route = useRoute()
    const good = store.getters.getProduct(parseInt(route.params.id))
    const isInBasket = computed(() => {
      return store.getters.getIsProductInBasket(good.id)
    })
    const addOrDeleteProducts = () => {
      console.log(isInBasket.value)
      if (isInBasket.value) {
        store.commit('deleteGoodFromBasket', good.id)
      } else {
        store.commit('addGoodInBasket', good.id)
      }
    }
    return {
      good,
      isInBasket,
      addOrDeleteProducts
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 35px;
}
</style>
