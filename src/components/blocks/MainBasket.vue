<template>
  <div class="main">
    <CardProductComponent v-for="( cartData, index ) in prodCartData" v-bind:key="index" :title="cartData.title"
      :description="cartData.description" :price="cartData.price" :imageSource="cartData.imageSource" :line="true"
      @clickBasket="removeFromBasket(index)" />
  </div>
</template>

<script>
// import { ref } from 'vue'
import { computed } from 'vue'
import CardProductComponent from '../elements/CardProduct.vue'
import { useStore } from 'vuex'
export default {
  name: 'MainBasketComponent',
  components: {
    CardProductComponent
  },
  props: {
  },
  data () {
  },
  setup () {
    const store = useStore()

    const prodCartData = computed(() => {
      return store.getters.getBasketGoods
    })

    const removeFromBasket = (goodIndex) => {
      console.log('Удалено из корзины', goodIndex)
      store.commit('removeGoodFromBasket', goodIndex)
    }
    return {
      prodCartData,
      removeFromBasket
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 35px;
}
</style>
