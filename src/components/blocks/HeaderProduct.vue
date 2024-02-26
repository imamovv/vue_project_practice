<template>
    <div class="product">
        <div class="product__header">
            <router-link to="/">
                <ButtonComponent fontawesomeIcon='fa-solid fa-arrow-left fa-2xs' isBasketCard iconShow />
            </router-link>
            <h1 class="product__header-info"></h1>
            <div class="product__cart">
            <div class="product__text">
                <span>{{ basketCount.length }} товара</span>
                <span>на сумму {{ basketCount.reduce((a, b) => a + b.price, 0) }} ₽</span>
            </div>
            <router-link to="/basket">
                <ButtonComponent fontawesomeIcon='fa-solid fa-regular fa-basket-shopping fa-3xs' isBasketMain iconShow />
            </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import ButtonComponent from '../ui/Button.vue'
import { computed } from 'vue'
// import { ref } from 'vue'

export default {
  name: 'HeaderProduct',
  components: {
    ButtonComponent
  },
  props: {
  },
  setup () {
    const store = useStore()
    const basketCount = computed(() => {
      return store.getters.getBasketProducts
    })

    return {
      basketCount
    }
  },
  methods: {
    signup () {
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.product__header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: calc(50vh - 200%);
    flex-wrap: wrap;
}

.product__header-info {
    color: #FFF;
    font-family: Montserrat;
    font-size: 31px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
}
.product__text {
  color: #FFF;
  text-align: right;
  font-family: Montserrat;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}

.product__cart {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
