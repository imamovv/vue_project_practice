<template>
  <div class="main">
    <CardProductComponent v-for="( cartData, index ) in prodCartData" v-bind:key="index" :title="cartData.title"
      :description="cartData.description" :price="cartData.price" :imageSource="cartData.imageSource" @clickMain = "addToBasket(cartData.id)" />
  </div>
</template>

<script>
// import { ref } from 'vue'
import { computed } from 'vue'
import CardProductComponent from '../elements/CardProduct.vue'
import { useStore } from 'vuex'

export default {
  name: 'MainComponent',
  components: {
    CardProductComponent
  },
  data () {
  },
  props: {
  },
  setup () {
    const store = useStore()

    const prodCartData = computed(() => {
      return store.getters.getGoods
    })

    const addToBasket = (goodId) => {
      store.commit('addGoodInBasket', goodId)
    }
    return {
      prodCartData,
      addToBasket
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding-top: 170px;
  display: grid;
  grid-template-columns: repeat(4, 312px);
  justify-content: center;
  grid-column-gap: 20px;
  grid-row-gap: 35px;
}
</style>
