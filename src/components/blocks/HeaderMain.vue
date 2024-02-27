<template>
  <div class="header">
    <h1 class="header__title">наша продукция</h1>
    <div class="header__cart">
      <div class="header__text">
        <span>{{ basketCount.length }} товара</span>
        <span>на сумму {{ basketCount.reduce((a, b) => a + b.price, 0) }} ₽</span>
      </div>
      <router-link to="/basket">
        <ButtonComponent fontawesomeIcon='fa-solid fa-regular fa-basket-shopping fa-3xs' isBasketMain iconShow />
      </router-link>
      <ButtonComponent @click="unloginUser" isBasketFooter textShow buttonText="Выйти"/>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'
import ButtonComponent from '../ui/Button.vue'
export default {
  name: 'HeaderMainComponent',
  components: {
    ButtonComponent
  },
  props: {
  },
  setup () {
    const store = useStore()
    const router = useRouter()

    const basketCount = computed(() => {
      return store.getters.getBasketProducts
    })
    const unloginUser = () => {
      store.commit('unloginUser')
      router.push('/auth')
    }

    return {
      unloginUser,
      basketCount
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.header__title {
  color: #FFF;
  font-family: Montserrat;
  font-size: 31px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.header__text {
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

.header__cart {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
